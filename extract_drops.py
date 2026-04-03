import pandas as pd
import os
import re
import json

excel_file = "Cobblemon Drops 1.7.3.xlsx"
assets_items = "assets/items"
assets_mc = "assets/minecraft_items"
pokemon_data_js = "js/pokemon_data.js"

df = pd.read_excel(excel_file)

available_images = set()

def scan_dir(dir_path):
    if os.path.exists(dir_path):
        for f in os.listdir(dir_path):
            if f.endswith('.png'):
                available_images.add(f[:-4].lower())

scan_dir(assets_items)
scan_dir(assets_mc)

# Algunos aliases para evitar falsos faltantes
aliases = {
    "raw_cod": "cod",
    "raw_beef": "beef",
    "raw_chicken": "chicken",
    "raw_porkchop": "porkchop",
    "raw_salmon": "salmon",
    "raw_mutton": "mutton",
    "slimeball": "slime_ball",
    "raw_rabbit": "rabbit",
    "honey_comb": "honeycomb",
    "up-grade": "upgrade"
}

missing_items = set()

def normalize_item_name(name):
    normalized = name.strip().lower().replace(" ", "_").replace("’", "").replace("'", "")
    if normalized in aliases:
        normalized = aliases[normalized]
    return normalized

pokemon_to_drops = {}

for index, row in df.iterrows():
    poke_name = str(row.get('Pokémon', '')).strip().lower()
    if not poke_name or poke_name == 'nan':
        continue
    
    drops_str = str(row.get('Drops', ''))
    parsed_drops = []
    
    if drops_str and drops_str.lower() != 'nan' and drops_str.strip() != '-':
        drops_list = drops_str.split(',')
        for drop_raw in drops_list:
            drop_raw = drop_raw.strip()
            if not drop_raw: continue
            
            match = re.match(r'^(.+?)\s+((?:\d+(?:-\d+)?%?)|(?:\d+\.?\d*%))$', drop_raw)
            if match:
                item_name = match.group(1).strip()
                chance_or_qty = match.group(2).strip()
            else:
                item_name = drop_raw
                chance_or_qty = ""
                
            item_id = normalize_item_name(item_name)
            
            if item_id not in available_images:
                missing_items.add((item_name, item_id))
                
            parsed_drops.append({
                "id": item_id,
                "name": item_name,
                "text": chance_or_qty
            })
            
    pokemon_to_drops[poke_name] = parsed_drops

# Update pokemon_data.js
with open(pokemon_data_js, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'const POKEMON_DB = (\[.*?\]);', content, re.DOTALL)
if match:
    try:
        pokemon_db = json.loads(match.group(1))
        updated_count = 0
        for poke in pokemon_db:
            poke_id = poke.get('id', poke.get('name', '')).lower()
            if poke_id in pokemon_to_drops:
                poke['drops'] = pokemon_to_drops[poke_id]
                updated_count += 1
                
        nuevo_json = json.dumps(pokemon_db, indent=2, ensure_ascii=False)
        nuevo_content = content[:match.start()] + f"const POKEMON_DB = {nuevo_json};" + content[match.end():]
        
        with open(pokemon_data_js, 'w', encoding='utf-8') as f:
            f.write(nuevo_content)
        print(f"Modificados {updated_count} Pokemones con drops.")
    except Exception as e:
        print("Error en JSON", e)

# Save the final missing list
with open("missing_drops.json", "w", encoding="utf-8") as f:
    json.dump([item[0] for item in sorted(list(missing_items))], f, indent=2, ensure_ascii=False)

print(f"Items verdaderamente faltantes: {len(missing_items)}")
