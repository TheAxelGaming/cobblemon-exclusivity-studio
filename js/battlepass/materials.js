// Categories for the material selector
// source: "base" = Cobblemon base mod, otherwise name of the addon
const BATTLEPASS_MATERIALS = {
  "pokeballs": {
    items: [
      "COBBLEMON_POKE_BALL", "COBBLEMON_GREAT_BALL", "COBBLEMON_ULTRA_BALL", "COBBLEMON_MASTER_BALL",
      "COBBLEMON_DIVE_BALL", "COBBLEMON_DUSK_BALL", "COBBLEMON_FAST_BALL", "COBBLEMON_FRIEND_BALL",
      "COBBLEMON_HEAL_BALL", "COBBLEMON_HEAVY_BALL", "COBBLEMON_LEVEL_BALL", "COBBLEMON_LOVE_BALL",
      "COBBLEMON_LURE_BALL", "COBBLEMON_LUXURY_BALL", "COBBLEMON_MOON_BALL", "COBBLEMON_NEST_BALL",
      "COBBLEMON_NET_BALL", "COBBLEMON_PREMIER_BALL", "COBBLEMON_QUICK_BALL", "COBBLEMON_REPEAT_BALL",
      "COBBLEMON_SAFARI_BALL", "COBBLEMON_SPORT_BALL", "COBBLEMON_TIMER_BALL"
    ],
    source: "base"
  },
  "medicine": {
    items: [
      "COBBLEMON_POTION", "COBBLEMON_SUPER_POTION", "COBBLEMON_HYPER_POTION", "COBBLEMON_MAX_POTION",
      "COBBLEMON_FULL_RESTORE", "COBBLEMON_ANTIDOTE", "COBBLEMON_AWAKENING", "COBBLEMON_BURN_HEAL",
      "COBBLEMON_ICE_HEAL", "COBBLEMON_PARALYZE_HEAL", "COBBLEMON_FULL_HEAL", "COBBLEMON_ETHER",
      "COBBLEMON_MAX_ETHER", "COBBLEMON_ELIXIR", "COBBLEMON_MAX_ELIXIR", "COBBLEMON_REVIVE",
      "COBBLEMON_MAX_REVIVE", "COBBLEMON_HEAL_POWDER", "COBBLEMON_ENERGY_ROOT", "COBBLEMON_REVIVAL_HERB"
    ],
    source: "base"
  },
  "exp_items": {
    items: [
      "COBBLEMON_RARE_CANDY", "COBBLEMON_EXP_CANDY_XS", "COBBLEMON_EXP_CANDY_S", 
      "COBBLEMON_EXP_CANDY_M", "COBBLEMON_EXP_CANDY_L", "COBBLEMON_EXP_CANDY_XL"
    ],
    source: "base"
  },
  "vitamins": {
    items: [
      "COBBLEMON_HP_UP", "COBBLEMON_PROTEIN", "COBBLEMON_IRON", "COBBLEMON_CALCIUM",
      "COBBLEMON_ZINC", "COBBLEMON_CARBOS", "COBBLEMON_PP_UP", "COBBLEMON_PP_MAX"
    ],
    source: "base"
  },
  "battle_items": {
    items: [
      "COBBLEMON_X_ATTACK", "COBBLEMON_X_DEFENSE", "COBBLEMON_X_SP_ATK", "COBBLEMON_X_SP_DEF",
      "COBBLEMON_X_SPEED", "COBBLEMON_X_ACCURACY", "COBBLEMON_DIRE_HIT", "COBBLEMON_GUARD_SPEC"
    ],
    source: "base"
  },
  "competitive": {
    items: [
      "COBBLEMON_LEFTOVERS", "COBBLEMON_ROCKY_HELMET", "COBBLEMON_LIFE_ORB", "COBBLEMON_FOCUS_SASH",
      "COBBLEMON_ASSAULT_VEST", "COBBLEMON_CHOICE_BAND", "COBBLEMON_CHOICE_SPECS", "COBBLEMON_CHOICE_SCARF",
      "COBBLEMON_EVIOLITE", "COBBLEMON_AIR_BALLOON", "COBBLEMON_WEAKNESS_POLICY", "COBBLEMON_HEAVY_DUTY_BOOTS",
      "COBBLEMON_EXPERT_BELT", "COBBLEMON_SCOPE_LENS", "COBBLEMON_ABILITY_CAPSULE", "COBBLEMON_ABILITY_PATCH"
    ],
    source: "base"
  },
  "mints": {
    items: [
      "COBBLEMON_ADAMANT_MINT", "COBBLEMON_MODEST_MINT", "COBBLEMON_JOLLY_MINT", "COBBLEMON_TIMID_MINT",
      "COBBLEMON_BOLD_MINT", "COBBLEMON_CALM_MINT", "COBBLEMON_IMPISH_MINT", "COBBLEMON_CAREFUL_MINT",
      "COBBLEMON_HASTY_MINT", "COBBLEMON_NAIVE_MINT", "COBBLEMON_BRAVE_MINT", "COBBLEMON_QUIET_MINT",
      "COBBLEMON_RELAXED_MINT", "COBBLEMON_SASSY_MINT", "COBBLEMON_NAUGHTY_MINT", "COBBLEMON_LAX_MINT",
      "COBBLEMON_MILD_MINT", "COBBLEMON_RASH_MINT", "COBBLEMON_GENTLE_MINT", "COBBLEMON_LONELY_MINT",
      "COBBLEMON_SERIOUS_MINT"
    ],
    source: "base"
  },
  "bottle_caps": {
    items: [
      "COBBLEMON_SILVER_BOTTLE_CAP", "COBBLEMON_GOLD_BOTTLE_CAP"
    ],
    source: "Cobblemon Unimplemented Items"
  },
  "evolution_items": {
    items: [
      "COBBLEMON_FIRE_STONE", "COBBLEMON_WATER_STONE", "COBBLEMON_THUNDER_STONE", "COBBLEMON_LEAF_STONE",
      "COBBLEMON_MOON_STONE", "COBBLEMON_SUN_STONE", "COBBLEMON_DAWN_STONE", "COBBLEMON_DUSK_STONE",
      "COBBLEMON_SHINY_STONE", "COBBLEMON_ICE_STONE", "COBBLEMON_KINGS_ROCK", "COBBLEMON_METAL_COAT",
      "COBBLEMON_DRAGON_SCALE", "COBBLEMON_UPGRADE", "COBBLEMON_DUBIOUS_DISC", "COBBLEMON_RAZOR_CLAW",
      "COBBLEMON_RAZOR_FANG", "COBBLEMON_PRISM_SCALE", "COBBLEMON_ELECTIRIZER", "COBBLEMON_MAGMARIZER",
      "COBBLEMON_PROTECTOR", "COBBLEMON_OVAL_STONE", "COBBLEMON_REAPER_CLOTH", "COBBLEMON_LINK_CABLE",
      "COBBLEMON_WHIPPED_DREAM", "COBBLEMON_SACHET", "COBBLEMON_CRACKED_POT", "COBBLEMON_CHIPPED_POT",
      "COBBLEMON_SWEET_APPLE", "COBBLEMON_TART_APPLE", "COBBLEMON_EVERSTONE"
    ],
    source: "base"
  },
  "breeding": {
    items: [
      "COBBLEMON_DESTINY_KNOT", "COBBLEMON_LUCK_INCENSE", "COBBLEMON_SEA_INCENSE",
      "COBBLEMON_LAX_INCENSE", "COBBLEMON_FULL_INCENSE", "COBBLEMON_ROSE_INCENSE",
      "COBBLEMON_PURE_INCENSE", "COBBLEMON_ROCK_INCENSE", "COBBLEMON_ODD_INCENSE",
      "COBBLEMON_WAVE_INCENSE"
    ],
    source: "base"
  },
  "held_items": {
    items: [
      "COBBLEMON_EXP_SHARE", "COBBLEMON_LUCKY_EGG", "COBBLEMON_BLACK_BELT", "COBBLEMON_BLACK_GLASSES",
      "COBBLEMON_CHARCOAL", "COBBLEMON_DRAGON_FANG", "COBBLEMON_FOCUS_BAND", "COBBLEMON_HARD_STONE",
      "COBBLEMON_LIGHT_CLAY", "COBBLEMON_MAGNET", "COBBLEMON_MENTAL_HERB", "COBBLEMON_MIRACLE_SEED",
      "COBBLEMON_MYSTIC_WATER", "COBBLEMON_NEVER_MELT_ICE", "COBBLEMON_POISON_BARB", "COBBLEMON_POWER_HERB",
      "COBBLEMON_QUICK_CLAW", "COBBLEMON_SHARP_BEAK", "COBBLEMON_SILK_SCARF", "COBBLEMON_SILVER_POWDER",
      "COBBLEMON_SOFT_SAND", "COBBLEMON_SPELL_TAG", "COBBLEMON_TWISTED_SPOON", "COBBLEMON_WHITE_HERB"
    ],
    source: "base"
  },
  "berries": {
    items: [
      "COBBLEMON_ORAN_BERRY", "COBBLEMON_SITRUS_BERRY", "COBBLEMON_LUM_BERRY", "COBBLEMON_LEPPA_BERRY",
      "COBBLEMON_CHERI_BERRY", "COBBLEMON_CHESTO_BERRY", "COBBLEMON_PECHA_BERRY", "COBBLEMON_RAWST_BERRY",
      "COBBLEMON_ASPEAR_BERRY", "COBBLEMON_PERSIM_BERRY", "COBBLEMON_RAZZ_BERRY", "COBBLEMON_BLUK_BERRY",
      "COBBLEMON_NANAB_BERRY", "COBBLEMON_WEPEAR_BERRY", "COBBLEMON_PINAP_BERRY",
      "COBBLEMON_ENIGMA_BERRY", "COBBLEMON_LANSAT_BERRY", "COBBLEMON_STARF_BERRY"
    ],
    source: "base"
  },
  "rare_items": {
    items: [
      "COBBLEMON_SHINY_CHARM", "COBBLEMON_KEY_STONE", "COBBLEMON_REPEL",
      "COBBLEMON_ESCAPE_ROPE", "COBBLEMON_POKE_EGG"
    ],
    source: "Cobblemon Unimplemented Items"
  },
  "utility": {
    items: [
      "COBBLEMON_HEALER", "COBBLEMON_POKEDEX", "COBBLEMON_POKE_ROD",
      "COBBLEMON_POKE_BAIT", "COBBLEMON_POKE_SNACK", "COBBLEMON_BERRY_JUICE"
    ],
    source: "base"
  },
  "pokeballs_special": {
    items: [
      "COBBLEMON_AZURE_BALL", "COBBLEMON_BEAST_BALL", "COBBLEMON_CHERISH_BALL", "COBBLEMON_CITRINE_BALL",
      "COBBLEMON_DREAM_BALL", "COBBLEMON_PARK_BALL", "COBBLEMON_ROSEATE_BALL", "COBBLEMON_SLATE_BALL",
      "COBBLEMON_VERDANT_BALL"
    ],
    source: "base"
  },
  "gems": {
    items: [
      "COBBLEMON_BUG_GEM", "COBBLEMON_DARK_GEM", "COBBLEMON_DRAGON_GEM", "COBBLEMON_ELECTRIC_GEM",
      "COBBLEMON_FAIRY_GEM", "COBBLEMON_FIGHTING_GEM", "COBBLEMON_FIRE_GEM", "COBBLEMON_FLYING_GEM",
      "COBBLEMON_GHOST_GEM", "COBBLEMON_GRASS_GEM", "COBBLEMON_GROUND_GEM", "COBBLEMON_ICE_GEM",
      "COBBLEMON_NORMAL_GEM", "COBBLEMON_POISON_GEM", "COBBLEMON_PSYCHIC_GEM", "COBBLEMON_ROCK_GEM",
      "COBBLEMON_STEEL_GEM", "COBBLEMON_WATER_GEM"
    ],
    source: "base"
  },
  "fossils": {
    items: [
      "COBBLEMON_ARMOR_FOSSIL", "COBBLEMON_CLAW_FOSSIL", "COBBLEMON_COVER_FOSSIL", "COBBLEMON_DOME_FOSSIL",
      "COBBLEMON_HELIX_FOSSIL", "COBBLEMON_JAW_FOSSIL", "COBBLEMON_OLD_AMBER_FOSSIL", "COBBLEMON_PLUME_FOSSIL",
      "COBBLEMON_ROOT_FOSSIL", "COBBLEMON_SAIL_FOSSIL", "COBBLEMON_SKULL_FOSSIL",
      "COBBLEMON_FOSSILIZED_BIRD", "COBBLEMON_FOSSILIZED_DINO", "COBBLEMON_FOSSILIZED_DRAKE", "COBBLEMON_FOSSILIZED_FISH"
    ],
    source: "base"
  },
  "tumblestones": {
    items: [
      "COBBLEMON_TUMBLESTONE", "COBBLEMON_BLACK_TUMBLESTONE", "COBBLEMON_SKY_TUMBLESTONE"
    ],
    source: "base"
  },
  "berries_advanced": {
    items: [
      "COBBLEMON_AGUAV_BERRY", "COBBLEMON_APICOT_BERRY", "COBBLEMON_BABIRI_BERRY", "COBBLEMON_BELUE_BERRY",
      "COBBLEMON_CANDIED_BERRY", "COBBLEMON_CHARTI_BERRY", "COBBLEMON_CHILAN_BERRY", "COBBLEMON_CHOPLE_BERRY",
      "COBBLEMON_COBA_BERRY", "COBBLEMON_COLBUR_BERRY", "COBBLEMON_CORNN_BERRY", "COBBLEMON_CUSTAP_BERRY",
      "COBBLEMON_DURIN_BERRY", "COBBLEMON_EGGANT_BERRY", "COBBLEMON_FIGY_BERRY", "COBBLEMON_GANLON_BERRY",
      "COBBLEMON_GREPA_BERRY", "COBBLEMON_HABAN_BERRY", "COBBLEMON_HONDEW_BERRY", "COBBLEMON_HOPO_BERRY",
      "COBBLEMON_IAPAPA_BERRY", "COBBLEMON_JABOCA_BERRY", "COBBLEMON_KASIB_BERRY", "COBBLEMON_KEBIA_BERRY",
      "COBBLEMON_KEE_BERRY", "COBBLEMON_KELPSY_BERRY", "COBBLEMON_LIECHI_BERRY", "COBBLEMON_MAGO_BERRY",
      "COBBLEMON_MAGOST_BERRY", "COBBLEMON_MARANGA_BERRY", "COBBLEMON_MICLE_BERRY", "COBBLEMON_NOMEL_BERRY",
      "COBBLEMON_OCCA_BERRY", "COBBLEMON_PAMTRE_BERRY", "COBBLEMON_PASSHO_BERRY", "COBBLEMON_PAYAPA_BERRY",
      "COBBLEMON_PETAYA_BERRY", "COBBLEMON_POMEG_BERRY", "COBBLEMON_QUALOT_BERRY", "COBBLEMON_RABUTA_BERRY",
      "COBBLEMON_RINDO_BERRY", "COBBLEMON_ROSELEI_BERRY", "COBBLEMON_ROSELI_BERRY", "COBBLEMON_ROWAP_BERRY",
      "COBBLEMON_SALAC_BERRY", "COBBLEMON_SHUCA_BERRY", "COBBLEMON_SPELON_BERRY", "COBBLEMON_TAMATO_BERRY",
      "COBBLEMON_TANGA_BERRY", "COBBLEMON_TOUGA_BERRY", "COBBLEMON_WACAN_BERRY", "COBBLEMON_WATMEL_BERRY",
      "COBBLEMON_WIKI_BERRY", "COBBLEMON_YACHE_BERRY"
    ],
    source: "base"
  },
  "sweets_mochi": {
    items: [
      "COBBLEMON_BERRY_SWEET", "COBBLEMON_CLOVER_SWEET", "COBBLEMON_FLOWER_SWEET", "COBBLEMON_LOVE_SWEET",
      "COBBLEMON_STAR_SWEET", "COBBLEMON_STRAWBERRY_SWEET", "COBBLEMON_SWEET_HEART",
      "COBBLEMON_CLEVER_MOCHI", "COBBLEMON_FRESH_START_MOCHI", "COBBLEMON_GENIUS_MOCHI",
      "COBBLEMON_HEALTH_MOCHI", "COBBLEMON_MUSCLE_MOCHI", "COBBLEMON_POTATO_MOCHI",
      "COBBLEMON_RESIST_MOCHI", "COBBLEMON_SWIFT_MOCHI"
    ],
    source: "base"
  },
  "candy_misc": {
    items: [
      "COBBLEMON_BRITTLE_CANDY", "COBBLEMON_COURAGE_CANDY", "COBBLEMON_COWARD_CANDY",
      "COBBLEMON_HEALTH_CANDY", "COBBLEMON_MIGHTY_CANDY", "COBBLEMON_NUMB_CANDY",
      "COBBLEMON_QUICK_CANDY", "COBBLEMON_RAGE_CANDY_BAR", "COBBLEMON_SICKLY_CANDY",
      "COBBLEMON_SLOW_CANDY", "COBBLEMON_SMART_CANDY", "COBBLEMON_TOUGH_CANDY", "COBBLEMON_WEAK_CANDY"
    ],
    source: "base"
  },
  "ev_training": {
    items: [
      "COBBLEMON_POWER_ANKLET", "COBBLEMON_POWER_BAND", "COBBLEMON_POWER_BELT",
      "COBBLEMON_POWER_BRACER", "COBBLEMON_POWER_LENS", "COBBLEMON_POWER_WEIGHT",
      "COBBLEMON_CLEVER_FEATHER", "COBBLEMON_GENIUS_FEATHER", "COBBLEMON_HEALTH_FEATHER",
      "COBBLEMON_MUSCLE_FEATHER", "COBBLEMON_RESIST_FEATHER", "COBBLEMON_SWIFT_FEATHER"
    ],
    source: "base"
  },
  "medicine_extra": {
    items: [
      "COBBLEMON_REMEDY", "COBBLEMON_FINE_REMEDY", "COBBLEMON_SUPERB_REMEDY",
      "COBBLEMON_MOOMOO_MILK", "COBBLEMON_LAVA_COOKIE", "COBBLEMON_OLD_GATEAU",
      "COBBLEMON_CASTELIACONE", "COBBLEMON_LUMIOSE_GALETTE", "COBBLEMON_SHALOUR_SABLE",
      "COBBLEMON_BIG_MALASADA", "COBBLEMON_PEWTER_CRUNCHIES", "COBBLEMON_JUBILIFE_MUFFIN",
      "COBBLEMON_PEP_UP_FLOWER", "COBBLEMON_MEDICINAL_BREW", "COBBLEMON_MEDICINAL_LEEK"
    ],
    source: "base"
  },
  "fishing_rods": {
    items: [
      "COBBLEMON_POKE_ROD_CAST", "COBBLEMON_GREAT_ROD", "COBBLEMON_GREAT_ROD_CAST",
      "COBBLEMON_ULTRA_ROD", "COBBLEMON_ULTRA_ROD_CAST", "COBBLEMON_MASTER_ROD", "COBBLEMON_MASTER_ROD_CAST",
      "COBBLEMON_AZURE_ROD", "COBBLEMON_AZURE_ROD_CAST", "COBBLEMON_BEAST_ROD", "COBBLEMON_BEAST_ROD_CAST",
      "COBBLEMON_CHERISH_ROD", "COBBLEMON_CHERISH_ROD_CAST", "COBBLEMON_CITRINE_ROD", "COBBLEMON_CITRINE_ROD_CAST",
      "COBBLEMON_DIVE_ROD", "COBBLEMON_DIVE_ROD_CAST", "COBBLEMON_DREAM_ROD", "COBBLEMON_DREAM_ROD_CAST",
      "COBBLEMON_DUSK_ROD", "COBBLEMON_DUSK_ROD_CAST", "COBBLEMON_FAST_ROD", "COBBLEMON_FAST_ROD_CAST",
      "COBBLEMON_FRIEND_ROD", "COBBLEMON_FRIEND_ROD_CAST", "COBBLEMON_HEAL_ROD", "COBBLEMON_HEAL_ROD_CAST",
      "COBBLEMON_HEAVY_ROD", "COBBLEMON_HEAVY_ROD_CAST", "COBBLEMON_LEVEL_ROD", "COBBLEMON_LEVEL_ROD_CAST",
      "COBBLEMON_LOVE_ROD", "COBBLEMON_LOVE_ROD_CAST", "COBBLEMON_LURE_ROD", "COBBLEMON_LURE_ROD_CAST",
      "COBBLEMON_LUXURY_ROD", "COBBLEMON_LUXURY_ROD_CAST", "COBBLEMON_MOON_ROD", "COBBLEMON_MOON_ROD_CAST",
      "COBBLEMON_NEST_ROD", "COBBLEMON_NEST_ROD_CAST", "COBBLEMON_NET_ROD", "COBBLEMON_NET_ROD_CAST",
      "COBBLEMON_PARK_ROD", "COBBLEMON_PARK_ROD_CAST", "COBBLEMON_PREMIER_ROD", "COBBLEMON_PREMIER_ROD_CAST",
      "COBBLEMON_QUICK_ROD", "COBBLEMON_QUICK_ROD_CAST", "COBBLEMON_REPEAT_ROD", "COBBLEMON_REPEAT_ROD_CAST",
      "COBBLEMON_ROSEATE_ROD", "COBBLEMON_ROSEATE_ROD_CAST", "COBBLEMON_SAFARI_ROD", "COBBLEMON_SAFARI_ROD_CAST",
      "COBBLEMON_SLATE_ROD", "COBBLEMON_SLATE_ROD_CAST", "COBBLEMON_SPORT_ROD", "COBBLEMON_SPORT_ROD_CAST",
      "COBBLEMON_TIMER_ROD", "COBBLEMON_TIMER_ROD_CAST", "COBBLEMON_VERDANT_ROD", "COBBLEMON_VERDANT_ROD_CAST"
    ],
    source: "base"
  },
  "food_ponigiri": {
    items: [
      "COBBLEMON_PONIGIRI_BASE", "COBBLEMON_PONIGIRI_FILLING", "COBBLEMON_PONIGIRI_BEEF",
      "COBBLEMON_PONIGIRI_BEETROOT", "COBBLEMON_PONIGIRI_BROWN_MUSHROOM", "COBBLEMON_PONIGIRI_CARROT",
      "COBBLEMON_PONIGIRI_CHICKEN", "COBBLEMON_PONIGIRI_COD", "COBBLEMON_PONIGIRI_EGG",
      "COBBLEMON_PONIGIRI_GOLDEN_CARROT", "COBBLEMON_PONIGIRI_KELP", "COBBLEMON_PONIGIRI_LEEK",
      "COBBLEMON_PONIGIRI_MUTTON", "COBBLEMON_PONIGIRI_PORKCHOP", "COBBLEMON_PONIGIRI_POTATO",
      "COBBLEMON_PONIGIRI_PUMPKIN", "COBBLEMON_PONIGIRI_RABBIT", "COBBLEMON_PONIGIRI_RED_MUSHROOM",
      "COBBLEMON_PONIGIRI_SALMON", "COBBLEMON_PONIGIRI_TASTY_TAIL", "COBBLEMON_PONIGIRI_VIVICHOKE",
      "COBBLEMON_PONIGIRI_POISONOUS", "COBBLEMON_PONIGIRI_ROTTEN"
    ],
    source: "base"
  },
  "food_other": {
    items: [
      "COBBLEMON_CANDIED_APPLE", "COBBLEMON_HEARTY_GRAINS", "COBBLEMON_LEEK_AND_POTATO_STEW",
      "COBBLEMON_OPEN_FACED_SANDWICH", "COBBLEMON_ROASTED_LEEK", "COBBLEMON_SMOKED_TAIL_CURRY",
      "COBBLEMON_TASTY_TAIL", "COBBLEMON_VIVICHOKE", "COBBLEMON_VIVICHOKE_DIP", "COBBLEMON_VIVICHOKE_SEEDS"
    ],
    source: "base"
  },
  "poke_puffs": {
    items: [
      "COBBLEMON_POKE_PUFF_BASE_BITTER", "COBBLEMON_POKE_PUFF_BASE_DRY", "COBBLEMON_POKE_PUFF_BASE_MILD",
      "COBBLEMON_POKE_PUFF_BASE_PLAIN", "COBBLEMON_POKE_PUFF_BASE_SOUR", "COBBLEMON_POKE_PUFF_BASE_SPICY",
      "COBBLEMON_POKE_PUFF_BASE_SWEET"
    ],
    source: "base"
  },
  "aprijuice": {
    items: [
      "COBBLEMON_APRIJUICE_BLACK", "COBBLEMON_APRIJUICE_BLUE", "COBBLEMON_APRIJUICE_GREEN",
      "COBBLEMON_APRIJUICE_PINK", "COBBLEMON_APRIJUICE_RED", "COBBLEMON_APRIJUICE_WHITE",
      "COBBLEMON_APRIJUICE_YELLOW"
    ],
    source: "base"
  },
  "apricorns": {
    items: [
      "COBBLEMON_BLACK_APRICORN", "COBBLEMON_BLACK_APRICORN_SEED", "COBBLEMON_BLUE_APRICORN", "COBBLEMON_BLUE_APRICORN_SEED",
      "COBBLEMON_GREEN_APRICORN", "COBBLEMON_GREEN_APRICORN_SEED", "COBBLEMON_PINK_APRICORN", "COBBLEMON_PINK_APRICORN_SEED",
      "COBBLEMON_RED_APRICORN", "COBBLEMON_RED_APRICORN_SEED", "COBBLEMON_WHITE_APRICORN", "COBBLEMON_WHITE_APRICORN_SEED",
      "COBBLEMON_YELLOW_APRICORN", "COBBLEMON_YELLOW_APRICORN_SEED"
    ],
    source: "base"
  },
  "apricorn_crafts": {
    items: [
      "COBBLEMON_APRICORN_BOAT", "COBBLEMON_APRICORN_CHEST_BOAT", "COBBLEMON_APRICORN_DOOR",
      "COBBLEMON_APRICORN_HANGING_SIGN", "COBBLEMON_APRICORN_SIGN",
      "COBBLEMON_SACCHARINE_BOAT", "COBBLEMON_SACCHARINE_CHEST_BOAT", "COBBLEMON_SACCHARINE_DOOR",
      "COBBLEMON_SACCHARINE_HANGING_SIGN", "COBBLEMON_SACCHARINE_SIGN"
    ],
    source: "base"
  },
  "mulch": {
    items: [
      "COBBLEMON_MULCH_BASE", "COBBLEMON_COARSE_MULCH", "COBBLEMON_GROWTH_MULCH", "COBBLEMON_HUMID_MULCH",
      "COBBLEMON_LOAMY_MULCH", "COBBLEMON_PEAT_MULCH", "COBBLEMON_RICH_MULCH", "COBBLEMON_SANDY_MULCH",
      "COBBLEMON_SURPRISE_MULCH"
    ],
    source: "base"
  },
  "mint_materials": {
    items: [
      "COBBLEMON_BLUE_MINT_LEAF", "COBBLEMON_BLUE_MINT_SEEDS", "COBBLEMON_CYAN_MINT_LEAF", "COBBLEMON_CYAN_MINT_SEEDS",
      "COBBLEMON_GREEN_MINT_LEAF", "COBBLEMON_GREEN_MINT_SEEDS", "COBBLEMON_PINK_MINT_LEAF", "COBBLEMON_PINK_MINT_SEEDS",
      "COBBLEMON_RED_MINT_LEAF", "COBBLEMON_RED_MINT_SEEDS", "COBBLEMON_WHITE_MINT_LEAF", "COBBLEMON_WHITE_MINT_SEEDS"
    ],
    source: "base"
  },
  "cooking_pots": {
    items: [
      "COBBLEMON_CAMPFIRE_POT_BLACK", "COBBLEMON_CAMPFIRE_POT_BLACK_OPEN",
      "COBBLEMON_CAMPFIRE_POT_BLUE", "COBBLEMON_CAMPFIRE_POT_BLUE_OPEN",
      "COBBLEMON_CAMPFIRE_POT_GREEN", "COBBLEMON_CAMPFIRE_POT_GREEN_OPEN",
      "COBBLEMON_CAMPFIRE_POT_PINK", "COBBLEMON_CAMPFIRE_POT_PINK_OPEN",
      "COBBLEMON_CAMPFIRE_POT_RED", "COBBLEMON_CAMPFIRE_POT_RED_OPEN",
      "COBBLEMON_CAMPFIRE_POT_WHITE", "COBBLEMON_CAMPFIRE_POT_WHITE_OPEN",
      "COBBLEMON_CAMPFIRE_POT_YELLOW", "COBBLEMON_CAMPFIRE_POT_YELLOW_OPEN"
    ],
    source: "base"
  },
  "competitive_extra": {
    items: [
      "COBBLEMON_FLAME_ORB", "COBBLEMON_TOXIC_ORB", "COBBLEMON_LIGHT_BALL", "COBBLEMON_IRON_BALL",
      "COBBLEMON_FLOAT_STONE", "COBBLEMON_SMOKE_BALL", "COBBLEMON_SOOTHE_BELL", "COBBLEMON_AMULET_COIN",
      "COBBLEMON_SHELL_BELL", "COBBLEMON_LOADED_DICE", "COBBLEMON_PUNCHING_GLOVE",
      "COBBLEMON_COVERT_CLOAK", "COBBLEMON_CLEAR_AMULET", "COBBLEMON_MIRROR_HERB",
      "COBBLEMON_BIG_ROOT", "COBBLEMON_BINDING_BAND", "COBBLEMON_GRIP_CLAW",
      "COBBLEMON_WIDE_LENS", "COBBLEMON_ZOOM_LENS", "COBBLEMON_WISE_GLASSES",
      "COBBLEMON_MUSCLE_BAND", "COBBLEMON_SAFETY_GOGGLES", "COBBLEMON_PROTECTIVE_PADS",
      "COBBLEMON_TERRAIN_EXTENDER", "COBBLEMON_EJECT_BUTTON", "COBBLEMON_EJECT_PACK",
      "COBBLEMON_BLUNDER_POLICY", "COBBLEMON_ROOM_SERVICE", "COBBLEMON_THROAT_SPRAY",
      "COBBLEMON_HEAVY_DUTY_BOOTS", "COBBLEMON_UTILITY_UMBRELLA"
    ],
    source: "base"
  },
  "held_extra": {
    items: [
      "COBBLEMON_ABILITY_SHIELD", "COBBLEMON_ABSORB_BULB", "COBBLEMON_BLACK_SLUDGE",
      "COBBLEMON_BRIGHT_POWDER", "COBBLEMON_CELL_BATTERY", "COBBLEMON_CLEANSE_TAG",
      "COBBLEMON_DAMP_ROCK", "COBBLEMON_DEEP_SEA_SCALE", "COBBLEMON_DEEP_SEA_TOOTH",
      "COBBLEMON_ELECTRIC_SEED", "COBBLEMON_FAIRY_FEATHER", "COBBLEMON_GRASSY_SEED",
      "COBBLEMON_HEAT_ROCK", "COBBLEMON_ICY_ROCK", "COBBLEMON_LAGGING_TAIL",
      "COBBLEMON_LUMINOUS_MOSS", "COBBLEMON_METAL_POWDER", "COBBLEMON_METRONOME",
      "COBBLEMON_MISTY_SEED", "COBBLEMON_PSYCHIC_SEED", "COBBLEMON_QUICK_POWDER",
      "COBBLEMON_RED_CARD", "COBBLEMON_RING_TARGET", "COBBLEMON_SMOOTH_ROCK",
      "COBBLEMON_SHED_SHELL", "COBBLEMON_STICKY_BARB", "COBBLEMON_BLACK_AUGURITE",
      "COBBLEMON_CHARCOAL_STICK"
    ],
    source: "base"
  },
  "evolution_extra": {
    items: [
      "COBBLEMON_AUSPICIOUS_ARMOR", "COBBLEMON_MALICIOUS_ARMOR", "COBBLEMON_SYRUPY_APPLE",
      "COBBLEMON_METAL_ALLOY", "COBBLEMON_PEAT_BLOCK", "COBBLEMON_GALARICA_CUFF",
      "COBBLEMON_GALARICA_NUTS", "COBBLEMON_GALARICA_WREATH", "COBBLEMON_MASTERPIECE_TEACUP",
      "COBBLEMON_UNREMARKABLE_TEACUP", "COBBLEMON_SCROLL_OF_DARKNESS", "COBBLEMON_SCROLL_OF_WATERS"
    ],
    source: "base"
  },
  "pokedex_variants": {
    items: [
      "COBBLEMON_POKEDEX_BLACK", "COBBLEMON_POKEDEX_BLUE", "COBBLEMON_POKEDEX_GREEN",
      "COBBLEMON_POKEDEX_PINK", "COBBLEMON_POKEDEX_RED", "COBBLEMON_POKEDEX_WHITE",
      "COBBLEMON_POKEDEX_YELLOW"
    ],
    source: "base"
  },
  "sherds_templates": {
    items: [
      "COBBLEMON_BYGONE_SHERD", "COBBLEMON_CAPTURE_SHERD", "COBBLEMON_DOME_SHERD",
      "COBBLEMON_HELIX_SHERD", "COBBLEMON_NOSTALGIC_SHERD", "COBBLEMON_SUSPICIOUS_SHERD",
      "COBBLEMON_AUTOMATON_ARMOR_TRIM_SMITHING_TEMPLATE", "COBBLEMON_POKEROD_SMITHING_TEMPLATE"
    ],
    source: "base"
  },
  "misc_held": {
    items: [
      "COBBLEMON_RELIC_COIN", "COBBLEMON_RELIC_COIN_POUCH", "COBBLEMON_SCATTER_BANG",
      "COBBLEMON_SHELL_HELMET", "COBBLEMON_STICKY_GLOB", "COBBLEMON_BOBBER_HOOK",
      "COBBLEMON_SINISTER_TEA_MASTERPIECE_BASE", "COBBLEMON_SINISTER_TEA_UNREMARKABLE_BASE",
      "COBBLEMON_BUGWORT", "COBBLEMON_NPC_EDITOR"
    ],
    source: "base"
  },
  "cobblemon_cosmetic": {
    items: [
      "COBBLEMON_COBBLEMON_LOGO", "COBBLEMON_COBBLEMON_LOGO_BLUE", "COBBLEMON_COBBLEMON_LOGO_GREEN",
      "COBBLEMON_COBBLEMON_LOGO_PURPLE", "COBBLEMON_COBBLEMON_LOGO_YELLOW", "COBBLEMON_SHINY_ICON"
    ],
    source: "base"
  }
};

// Modal Logic
let bpSelectorCallback = null;
let activeMaterialTab = 'cobblemon';
let bpSearchTerm = '';

function renderMaterialSelectorModal() {
    let modal = document.getElementById('bp-material-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'bp-material-modal';
        modal.className = 'bp-modal-overlay';
        modal.innerHTML = `
            <div class="bp-modal-content">
                <div class="bp-modal-header">
                    <div style="display:flex; flex-direction:column; gap:8px; width:100%;">
                        <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
                            <h3>Seleccionar Recompensa</h3>
                            <button onclick="closeMaterialSelector()">✕</button>
                        </div>
                        <div class="bp-search-container">
                            <input type="text" id="bp-item-search" placeholder="Buscar ítem por nombre..." autocomplete="off">
                            <span class="bp-search-icon">🔍</span>
                        </div>
                    </div>
                </div>
                <div class="bp-modal-tabs">
                    <button id="tab-material-cobblemon" class="bp-tab-btn active" onclick="switchMaterialTab('cobblemon')">Cobblemon</button>
                    <button id="tab-material-minecraft" class="bp-tab-btn" onclick="switchMaterialTab('minecraft')">Minecraft</button>
                    <button id="tab-material-otros" class="bp-tab-btn" onclick="switchMaterialTab('otros')">Otros</button>
                </div>
                <div class="bp-modal-body" id="bp-modal-items"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add search listener
        const searchInput = modal.querySelector('#bp-item-search');
        searchInput.addEventListener('input', (e) => {
            bpSearchTerm = e.target.value.toLowerCase();
            renderActiveTabItems();
        });
    }
}

window.switchMaterialTab = function(tabId) {
    activeMaterialTab = tabId;
    // Update UI
    document.querySelectorAll('.bp-tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-material-${tabId}`).classList.add('active');
    
    renderActiveTabItems();
};

function renderActiveTabItems(currentValue) {
    let html = '';
    const getVisual = window.getSlotVisualHtml || ((m) => `<div class="gui-slot-icon">📦</div>`);
    const container = document.getElementById('bp-modal-items');
    
    if (activeMaterialTab === 'cobblemon') {
        for (const [category, catData] of Object.entries(BATTLEPASS_MATERIALS)) {
            const catItems = catData.items || catData;
            const source = catData.source || 'base';
            const filteredItems = catItems.filter(itemId => 
                itemId.toLowerCase().replace('cobblemon_', '').includes(bpSearchTerm)
            );
            
            if (filteredItems.length > 0) {
                const addonBadge = source !== 'base' 
                    ? `<span style="font-size:9px; background:#FF9800; color:#000; padding:1px 5px; border-radius:3px; margin-left:6px; font-weight:400; vertical-align:middle;">ADDON: ${source}</span>` 
                    : `<span style="font-size:9px; background:#4CAF50; color:#fff; padding:1px 5px; border-radius:3px; margin-left:6px; font-weight:400; vertical-align:middle;">Cobblemon</span>`;
                html += `<h4 class="bp-cat-title">${category.toUpperCase()} ${addonBadge}</h4>`;
                html += `<div class="bp-item-grid">`;
                for (const itemId of filteredItems) {
                    const visualHtml = getVisual(itemId);
                    const activeClass = itemId === currentValue ? 'active' : '';
                    html += `
                        <div class="bp-grid-item ${activeClass}" onclick="selectMaterial('${itemId}')">
                            <div class="bp-grid-icon">${visualHtml}</div>
                            <div class="bp-grid-name">${itemId.replace('COBBLEMON_', '')}</div>
                        </div>
                    `;
                }
                html += `</div>`;
            }
        }
    } else if (activeMaterialTab === 'minecraft') {
        const filteredMinecraft = MINECRAFT_ITEMS.filter(item => 
            item.name.toLowerCase().includes(bpSearchTerm) || 
            item.id.toLowerCase().includes(bpSearchTerm)
        );
        
        const grouped = {};
        filteredMinecraft.forEach(item => {
            if (!grouped[item.cat]) grouped[item.cat] = [];
            grouped[item.cat].push(item);
        });

        const catOrder = ['Combat', 'Tools', 'Materials', 'Food', 'Blocks', 'Utility', 'Other'];
        const sortedCats = Object.keys(grouped).sort((a, b) => {
            const indexA = catOrder.indexOf(a);
            const indexB = catOrder.indexOf(b);
            if (indexA === -1 && indexB === -1) return a.localeCompare(b);
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
        });

        for (const cat of sortedCats) {
            html += `<h4 class="bp-cat-title">${cat.toUpperCase()}</h4>`;
            html += `<div class="bp-item-grid">`;
            grouped[cat].forEach(item => {
                const visualHtml = getVisual(item.id);
                const activeClass = item.id === currentValue ? 'active' : '';
                html += `
                    <div class="bp-grid-item ${activeClass}" onclick="selectMaterial('${item.id}')">
                        <div class="bp-grid-icon">${visualHtml}</div>
                        <div class="bp-grid-name">${item.name}</div>
                    </div>
                `;
            });
            html += `</div>`;
        }
    } else if (activeMaterialTab === 'otros') {
        const filteredOtros = OTHER_ITEMS.filter(item => 
            item.name.toLowerCase().includes(bpSearchTerm) || 
            item.id.toLowerCase().includes(bpSearchTerm)
        );
        
        if (filteredOtros.length > 0) {
            html += `<div class="bp-item-grid" style="padding-top:10px;">`;
            filteredOtros.forEach(item => {
                const visualHtml = getVisual(item.id);
                const activeClass = item.id === currentValue ? 'active' : '';
                html += `
                    <div class="bp-grid-item ${activeClass}" onclick="selectMaterial('${item.id}')">
                        <div class="bp-grid-icon">${visualHtml}</div>
                        <div class="bp-grid-name">${item.name}</div>
                    </div>
                `;
            });
            html += `</div>`;
        }
    }

    if (html === '' && bpSearchTerm !== '') {
        html = `
            <div style="text-align:center; padding: 40px 20px; color: #6B7FA3;">
                <div style="font-size: 32px; margin-bottom: 10px;">🔍</div>
                <div style="font-size: 14px;">No se encontraron resultados para "${bpSearchTerm}"</div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

window.openMaterialSelector = function(currentValue, callback) {
    bpSelectorCallback = callback;
    renderMaterialSelectorModal();
    
    // Reset search when opening
    bpSearchTerm = '';
    const searchInput = document.getElementById('bp-item-search');
    if (searchInput) searchInput.value = '';
    
    // Default to cobblemon unless currentValue suggests otherwise
    if (currentValue && currentValue.startsWith('minecraft:')) activeMaterialTab = 'minecraft';
    else if (currentValue && (currentValue.includes('points') || currentValue.includes('vault'))) activeMaterialTab = 'otros';
    else activeMaterialTab = 'cobblemon';
    
    switchMaterialTab(activeMaterialTab);
    renderActiveTabItems(currentValue);
    
    document.getElementById('bp-material-modal').style.display = 'flex';
};

window.closeMaterialSelector = function() {
    document.getElementById('bp-material-modal').style.display = 'none';
};

window.selectMaterial = function(itemId) {
    if (bpSelectorCallback) {
        bpSelectorCallback(itemId);
    }
    closeMaterialSelector();
};
