import os
import subprocess

# Nueva fuente de texturas Minecraft 1.21.1 (mcasset.cloud)
BASE_URL_ITEM = "https://assets.mcasset.cloud/1.21.1/assets/minecraft/textures/item/"
BASE_URL_BLOCK = "https://assets.mcasset.cloud/1.21.1/assets/minecraft/textures/block/"

# Directorio objetivo
TARGET_DIR = "assets/minecraft_items"

# Catálogo extendido y clasificado para 1.21.1
items = {
    "Combat": [
        "netherite_sword", "diamond_sword", "iron_sword", "golden_sword", "stone_sword", "wooden_sword",
        "netherite_axe", "diamond_axe", "mace", "bow", "crossbow_standby", "trident", "shield_base",
        "netherite_helmet", "netherite_chestplate", "netherite_leggings", "netherite_boots",
        "diamond_helmet", "diamond_chestplate", "diamond_leggings", "diamond_boots",
        "turtle_helmet", "elytra", "arrow"
    ],
    "Tools": [
        "netherite_pickaxe", "netherite_shovel", "netherite_hoe",
        "diamond_pickaxe", "diamond_shovel", "diamond_hoe",
        "iron_pickaxe", "iron_shovel", "iron_hoe",
        "spyglass", "fishing_rod", "shears", "flint_and_steel", "brush",
        "recovery_compass", "compass", "clock"
    ],
    "Materials": [
        "diamond", "emerald", "netherite_ingot", "netherite_scrap", "gold_ingot", "iron_ingot",
        "copper_ingot", "raw_iron", "raw_gold", "raw_copper", "coal", "charcoal", "redstone",
        "lapis_lazuli", "amethyst_shard", "quartz", "nether_star", "echo_shard", "prismarine_shard",
        "prismarine_crystals", "nautilus_shell", "heart_of_the_sea", "blaze_rod", "ghast_tear",
        "ender_pearl", "eye_of_ender", "scute", "brick", "nether_brick", "trial_key", "ominous_trial_key"
    ],
    "Food": [
        "apple", "golden_apple", "enchanted_golden_apple", "beef", "cooked_beef", "porkchop", 
        "cooked_porkchop", "chicken", "cooked_chicken", "mutton", "cooked_mutton", "salmon", 
        "cooked_salmon", "cod", "cooked_cod", "bread", "cookie", "cake", "pumpkin_pie", 
        "golden_carrot", "carrot", "potato", "baked_potato", "honey_bottle", "chorus_fruit",
        "sweet_berries", "glow_berries", "mushroom_stew", "rabbit_stew"
    ],
    "Blocks": [
        "diamond_block", "netherite_block", "gold_block", "emerald_block", "iron_block", "copper_block",
        "beacon", "shulker_box_uncolored", "ender_chest_front", "obsidian", "crying_obsidian",
        "glowstone", "sea_lantern", "sponge", "tnt", "crafter_top", "trial_spawner_top"
    ],
    "Utility": [
        "totem_of_undying", "experience_bottle", "saddle", "name_tag", "lead", "bundle",
        "firework_rocket", "ender_eye", "book", "enchanted_book", "writable_book"
    ]
}

def download_image(name):
    # Ajustes de nombres para mcasset.cloud (1.21.1)
    mapping = {
        "mace": "mace",
        "bundle": "bundle",
        "trial_key": "trial_key",
        "ominous_trial_key": "ominous_trial_key",
        "shulker_box_uncolored": "shulker_box",
        "ender_chest_front": "ender_chest"
    }
    
    internal_name = mapping.get(name, name)
    filename = f"{internal_name}.png"
    save_path = os.path.join(TARGET_DIR, f"{name}.png")

    # Intentar como ITEM
    url_item = BASE_URL_ITEM + filename
    result = subprocess.run(["curl", "-s", "-f", "-L", url_item, "-o", save_path])
    
    if result.returncode == 0:
        print(f"✓ Item: {name}")
        return True
    else:
        # Intentar como BLOCK
        url_block = BASE_URL_BLOCK + filename
        result = subprocess.run(["curl", "-s", "-f", "-L", url_block, "-o", save_path])
        if result.returncode == 0:
            print(f"✓ Bloque: {name}")
            return True
        else:
            # Caso especial para nombres que terminan en _block pero son bloques
            if not filename.endswith("_block.png") and not name in mapping:
                url_block_alt = BASE_URL_BLOCK + name + ".png"
                result = subprocess.run(["curl", "-s", "-f", "-L", url_block_alt, "-o", save_path])
                if result.returncode == 0:
                    print(f"✓ Bloque (alt): {name}")
                    return True
            
            print(f"❌ Falló: {name}")
            return False

def main():
    if not os.path.exists(TARGET_DIR):
        os.makedirs(TARGET_DIR, exist_ok=True)
    
    print(f"Iniciando descarga 1.21.1 en {TARGET_DIR}...")

    total = 0
    for category, item_list in items.items():
        print(f"\nCategoría: {category}")
        for item in item_list:
            if download_image(item):
                total += 1

    print(f"\n¡Listo! {total} imágenes de la 1.21.1 guardadas en: {TARGET_DIR}")

if __name__ == "__main__":
    main()
