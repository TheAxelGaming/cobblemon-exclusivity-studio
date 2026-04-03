import os
import subprocess
import json
import re

BASE_URL_ITEM = "https://assets.mcasset.cloud/1.21.1/assets/minecraft/textures/item/"
BASE_URL_BLOCK = "https://assets.mcasset.cloud/1.21.1/assets/minecraft/textures/block/"
TARGET_DIR = "assets/minecraft_items"

if not os.path.exists(TARGET_DIR):
    os.makedirs(TARGET_DIR)

with open("missing_drops.json", "r", encoding="utf-8") as f:
    items = json.load(f)

def normalize_name(name):
    normalized = name.strip().lower().replace(" ", "_").replace("’", "").replace("'", "")
    # Remove things like "1-3" or "25%" or " or egg" at the end of custom entries
    normalized = re.sub(r'_\d+(-\d+)?%?.*$', '', normalized)
    return normalized

def download_image(name):
    # Map special block names
    clean_id = normalize_name(name)
    
    mapping = {
        "acacia_log": "acacia_log",
        "dark_oak_sapling": "dark_oak_sapling",
        "dead_bush": "dead_bush",
        "blue_ice": "blue_ice",
        # Wool blocks are blocks
        "blue_wool": "blue_wool",
        "brown_wool": "brown_wool",
        "light_blue_wool": "light_blue_wool",
        "white_wool": "white_wool",
        "bone_block": "bone_block",
        "cactus": "cactus",
        "calcite": "calcite",
        "coarse_dirt": "coarse_dirt",
        "dirt": "dirt",
        "gravel": "gravel",
        "jack_olantern": "jack_o_lantern",
        "lily_pad": "lily_pad",
        "mud": "mud",
        "oak_log": "oak_log",
        "oak_sapling": "oak_sapling",
        "ochre_froglight": "ochre_froglight_side",
        "pearlescent_froglight": "pearlescent_froglight_side",
        "verdant_froglight": "verdant_froglight_side",
        "poppy": "poppy",
        "red_mushroom": "red_mushroom",
        "brown_mushroom": "brown_mushroom",
        "rose": "poppy", # Rose is poppy in new minecraft versions
        "sand": "sand",
        "stone": "stone",
        "sunflower": "sunflower_front", # block
        "terracotta": "terracotta",
        "vine": "vine",
        "wither_rose": "wither_rose",
        # Items
        "dragons_breath": "dragon_breath",
        "eye_of_ender": "ender_eye",
        "glow_ink_sac": "glow_ink_sac", # custom names like glow_ink_sac_1-3 are stripped to glow_ink_sac
        "gold_helmet": "golden_helmet",
        "never-melt_ice": "packed_ice", # proxy for pixelmon nevermelt ice if missing? or skip.
        "prismarine_crystal": "prismarine_crystals",
        "rabbits_foot": "rabbit_foot",
        "sacred_ash": "gunpowder", # skip/proxy
        "stick": "stick",
        "stone_axe": "stone_axe",
        "wheat_seeds": "wheat_seeds",
        "bamboo": "bamboo",
        "lucky_egg": "egg" # proxy
    }
    
    file_id = mapping.get(clean_id, clean_id)
    
    save_path = os.path.join(TARGET_DIR, f"{clean_id}.png") # Save it with exact clean_id so scripts find it!
    
    if os.path.exists(save_path):
        return True
        
    url_item = BASE_URL_ITEM + file_id + ".png"
    result = subprocess.run(["curl", "-s", "-f", "-L", url_item, "-o", save_path])
    if result.returncode == 0:
        print(f"✓ {name} (item)")
        return True
        
    url_block = BASE_URL_BLOCK + file_id + ".png"
    result = subprocess.run(["curl", "-s", "-f", "-L", url_block, "-o", save_path])
    if result.returncode == 0:
        print(f"✓ {name} (block)")
        return True
        
    # block without .png maybe? No.
    print(f"❌ {name} -> attempted {file_id}.png")
    return False

success = 0
for item in items:
    if download_image(item):
        success += 1

print(f"\\nDescargados: {success}/{len(items)}")
