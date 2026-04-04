"""
extract_spawn_data.py
Extrae los datos de spawn (level, weight, biomas, context, bucket) de cada Pokémon
del .jar de Cobblemon y genera un JS con la estructura de datos para inyectar en POKEMON_DB.
"""
import zipfile
import json
import os
import re

JAR_PATH = "Cobblemon-fabric-1.7.3+1.21.1.jar"
OUTPUT_PATH = "js/pokemon_spawn_data.js"
SPAWN_PREFIX = "data/cobblemon/spawn_pool_world/"

spawn_map = {}  # id -> lista de spawns normalizados

def normalize_id(filename):
    """Convierte '0001_bulbasaur.json' -> 'bulbasaur'"""
    name = os.path.basename(filename).replace(".json", "")
    # Quitar el prefijo numérico
    name = re.sub(r'^\d+_', '', name)
    return name

print(f"Abriendo {JAR_PATH}...")
with zipfile.ZipFile(JAR_PATH, 'r') as jar:
    spawn_files = [f for f in jar.namelist() if f.startswith(SPAWN_PREFIX) and f.endswith('.json')]
    print(f"Encontrados {len(spawn_files)} archivos de spawn...")
    
    for filepath in sorted(spawn_files):
        pkmn_id = normalize_id(filepath)
        
        try:
            with jar.open(filepath) as f:
                data = json.load(f)
        except Exception as e:
            print(f"  Error leyendo {filepath}: {e}")
            continue
        
        spawns = data.get("spawns", [])
        if not spawns:
            continue
        
        # Tomamos el primer spawn válido de tipo "pokemon" como el spawn principal
        main_spawns = []
        for spawn in spawns:
            if spawn.get("type") != "pokemon":
                continue
            
            condition = spawn.get("condition", {})
            biomes = condition.get("biomes", [])
            
            entry = {
                "id": spawn.get("id", f"{pkmn_id}-1"),
                "level": spawn.get("level", "1-60"),
                "weight": spawn.get("weight", 1.0),
                "context": spawn.get("context", "grounded"),
                "bucket": spawn.get("bucket", "common"),
                "presets": spawn.get("presets", ["natural", "wild"]),
                "biomes": biomes,
                "condition": condition
            }
            main_spawns.append(entry)
        
        if main_spawns:
            spawn_map[pkmn_id] = main_spawns

print(f"Extraídos datos de {len(spawn_map)} Pokémon.")

# Generar JS
lines = []
lines.append("/**")
lines.append(" * pokemon_spawn_data.js — Datos de spawn por defecto extraídos del .jar de Cobblemon 1.7.3")
lines.append(" * Generado automáticamente por extract_spawn_data.py")
lines.append(" * Estructura: POKEMON_SPAWN_DATA[pokemonId] = [ { level, weight, context, bucket, biomes, ... } ]")
lines.append(" */")
lines.append("")
lines.append("const POKEMON_SPAWN_DATA = " + json.dumps(spawn_map, indent=2, ensure_ascii=False) + ";")
lines.append("")

output = "\n".join(lines)
with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
    f.write(output)

print(f"✅ Datos escritos en {OUTPUT_PATH} ({os.path.getsize(OUTPUT_PATH):,} bytes)")
