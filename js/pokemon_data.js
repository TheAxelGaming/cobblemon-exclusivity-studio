const POKEMON_DB = [
  {
    "dex": 1,
    "name": "Bulbasaur",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 1,
    "id": "bulbasaur"
  },
  {
    "dex": 2,
    "name": "Ivysaur",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 1,
    "id": "ivysaur"
  },
  {
    "dex": 3,
    "name": "Venusaur",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 1,
    "id": "venusaur"
  },
  {
    "dex": 4,
    "name": "Charmander",
    "types": [
      "fire"
    ],
    "gen": 1,
    "id": "charmander"
  },
  {
    "dex": 5,
    "name": "Charmeleon",
    "types": [
      "fire"
    ],
    "gen": 1,
    "id": "charmeleon"
  },
  {
    "dex": 6,
    "name": "Charizard",
    "types": [
      "fire",
      "flying"
    ],
    "gen": 1,
    "id": "charizard"
  },
  {
    "dex": 7,
    "name": "Squirtle",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "squirtle"
  },
  {
    "dex": 8,
    "name": "Wartortle",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "wartortle"
  },
  {
    "dex": 9,
    "name": "Blastoise",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "blastoise"
  },
  {
    "dex": 10,
    "name": "Caterpie",
    "types": [
      "bug"
    ],
    "gen": 1,
    "id": "caterpie"
  },
  {
    "dex": 11,
    "name": "Metapod",
    "types": [
      "bug"
    ],
    "gen": 1,
    "id": "metapod"
  },
  {
    "dex": 12,
    "name": "Butterfree",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 1,
    "id": "butterfree"
  },
  {
    "dex": 13,
    "name": "Weedle",
    "types": [
      "bug",
      "poison"
    ],
    "gen": 1,
    "id": "weedle"
  },
  {
    "dex": 14,
    "name": "Kakuna",
    "types": [
      "bug",
      "poison"
    ],
    "gen": 1,
    "id": "kakuna"
  },
  {
    "dex": 15,
    "name": "Beedrill",
    "types": [
      "bug",
      "poison"
    ],
    "gen": 1,
    "id": "beedrill"
  },
  {
    "dex": 16,
    "name": "Pidgey",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 1,
    "id": "pidgey"
  },
  {
    "dex": 17,
    "name": "Pidgeotto",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 1,
    "id": "pidgeotto"
  },
  {
    "dex": 18,
    "name": "Pidgeot",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 1,
    "id": "pidgeot"
  },
  {
    "dex": 19,
    "name": "Rattata",
    "types": [
      "normal"
    ],
    "gen": 1,
    "id": "rattata"
  },
  {
    "dex": 20,
    "name": "Raticate",
    "types": [
      "normal"
    ],
    "gen": 1,
    "id": "raticate"
  },
  {
    "dex": 21,
    "name": "Spearow",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 1,
    "id": "spearow"
  },
  {
    "dex": 22,
    "name": "Fearow",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 1,
    "id": "fearow"
  },
  {
    "dex": 23,
    "name": "Ekans",
    "types": [
      "poison"
    ],
    "gen": 1,
    "id": "ekans"
  },
  {
    "dex": 24,
    "name": "Arbok",
    "types": [
      "poison"
    ],
    "gen": 1,
    "id": "arbok"
  },
  {
    "dex": 25,
    "name": "Pikachu",
    "types": [
      "electric"
    ],
    "gen": 1,
    "id": "pikachu"
  },
  {
    "dex": 26,
    "name": "Raichu",
    "types": [
      "electric"
    ],
    "gen": 1,
    "id": "raichu"
  },
  {
    "dex": 27,
    "name": "Sandshrew",
    "types": [
      "ground"
    ],
    "gen": 1,
    "id": "sandshrew"
  },
  {
    "dex": 28,
    "name": "Sandslash",
    "types": [
      "ground"
    ],
    "gen": 1,
    "id": "sandslash"
  },
  {
    "dex": 29,
    "name": "Nidoran-f",
    "types": [
      "poison"
    ],
    "gen": 1,
    "id": "nidoran-f"
  },
  {
    "dex": 30,
    "name": "Nidorina",
    "types": [
      "poison"
    ],
    "gen": 1,
    "id": "nidorina"
  },
  {
    "dex": 31,
    "name": "Nidoqueen",
    "types": [
      "poison",
      "ground"
    ],
    "gen": 1,
    "id": "nidoqueen"
  },
  {
    "dex": 32,
    "name": "Nidoran-m",
    "types": [
      "poison"
    ],
    "gen": 1,
    "id": "nidoran-m"
  },
  {
    "dex": 33,
    "name": "Nidorino",
    "types": [
      "poison"
    ],
    "gen": 1,
    "id": "nidorino"
  },
  {
    "dex": 34,
    "name": "Nidoking",
    "types": [
      "poison",
      "ground"
    ],
    "gen": 1,
    "id": "nidoking"
  },
  {
    "dex": 35,
    "name": "Clefairy",
    "types": [
      "fairy"
    ],
    "gen": 1,
    "id": "clefairy"
  },
  {
    "dex": 36,
    "name": "Clefable",
    "types": [
      "fairy"
    ],
    "gen": 1,
    "id": "clefable"
  },
  {
    "dex": 37,
    "name": "Vulpix",
    "types": [
      "fire"
    ],
    "gen": 1,
    "id": "vulpix"
  },
  {
    "dex": 38,
    "name": "Ninetales",
    "types": [
      "fire"
    ],
    "gen": 1,
    "id": "ninetales"
  },
  {
    "dex": 39,
    "name": "Jigglypuff",
    "types": [
      "normal",
      "fairy"
    ],
    "gen": 1,
    "id": "jigglypuff"
  },
  {
    "dex": 40,
    "name": "Wigglytuff",
    "types": [
      "normal",
      "fairy"
    ],
    "gen": 1,
    "id": "wigglytuff"
  },
  {
    "dex": 41,
    "name": "Zubat",
    "types": [
      "poison",
      "flying"
    ],
    "gen": 1,
    "id": "zubat"
  },
  {
    "dex": 42,
    "name": "Golbat",
    "types": [
      "poison",
      "flying"
    ],
    "gen": 1,
    "id": "golbat"
  },
  {
    "dex": 43,
    "name": "Oddish",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 1,
    "id": "oddish"
  },
  {
    "dex": 44,
    "name": "Gloom",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 1,
    "id": "gloom"
  },
  {
    "dex": 45,
    "name": "Vileplume",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 1,
    "id": "vileplume"
  },
  {
    "dex": 46,
    "name": "Paras",
    "types": [
      "bug",
      "grass"
    ],
    "gen": 1,
    "id": "paras"
  },
  {
    "dex": 47,
    "name": "Parasect",
    "types": [
      "bug",
      "grass"
    ],
    "gen": 1,
    "id": "parasect"
  },
  {
    "dex": 48,
    "name": "Venonat",
    "types": [
      "bug",
      "poison"
    ],
    "gen": 1,
    "id": "venonat"
  },
  {
    "dex": 49,
    "name": "Venomoth",
    "types": [
      "bug",
      "poison"
    ],
    "gen": 1,
    "id": "venomoth"
  },
  {
    "dex": 50,
    "name": "Diglett",
    "types": [
      "ground"
    ],
    "gen": 1,
    "id": "diglett"
  },
  {
    "dex": 51,
    "name": "Dugtrio",
    "types": [
      "ground"
    ],
    "gen": 1,
    "id": "dugtrio"
  },
  {
    "dex": 52,
    "name": "Meowth",
    "types": [
      "normal"
    ],
    "gen": 1,
    "id": "meowth"
  },
  {
    "dex": 53,
    "name": "Persian",
    "types": [
      "normal"
    ],
    "gen": 1,
    "id": "persian"
  },
  {
    "dex": 54,
    "name": "Psyduck",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "psyduck"
  },
  {
    "dex": 55,
    "name": "Golduck",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "golduck"
  },
  {
    "dex": 56,
    "name": "Mankey",
    "types": [
      "fighting"
    ],
    "gen": 1,
    "id": "mankey"
  },
  {
    "dex": 57,
    "name": "Primeape",
    "types": [
      "fighting"
    ],
    "gen": 1,
    "id": "primeape"
  },
  {
    "dex": 58,
    "name": "Growlithe",
    "types": [
      "fire"
    ],
    "gen": 1,
    "id": "growlithe"
  },
  {
    "dex": 59,
    "name": "Arcanine",
    "types": [
      "fire"
    ],
    "gen": 1,
    "id": "arcanine"
  },
  {
    "dex": 60,
    "name": "Poliwag",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "poliwag"
  },
  {
    "dex": 61,
    "name": "Poliwhirl",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "poliwhirl"
  },
  {
    "dex": 62,
    "name": "Poliwrath",
    "types": [
      "water",
      "fighting"
    ],
    "gen": 1,
    "id": "poliwrath"
  },
  {
    "dex": 63,
    "name": "Abra",
    "types": [
      "psychic"
    ],
    "gen": 1,
    "id": "abra"
  },
  {
    "dex": 64,
    "name": "Kadabra",
    "types": [
      "psychic"
    ],
    "gen": 1,
    "id": "kadabra"
  },
  {
    "dex": 65,
    "name": "Alakazam",
    "types": [
      "psychic"
    ],
    "gen": 1,
    "id": "alakazam"
  },
  {
    "dex": 66,
    "name": "Machop",
    "types": [
      "fighting"
    ],
    "gen": 1,
    "id": "machop"
  },
  {
    "dex": 67,
    "name": "Machoke",
    "types": [
      "fighting"
    ],
    "gen": 1,
    "id": "machoke"
  },
  {
    "dex": 68,
    "name": "Machamp",
    "types": [
      "fighting"
    ],
    "gen": 1,
    "id": "machamp"
  },
  {
    "dex": 69,
    "name": "Bellsprout",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 1,
    "id": "bellsprout"
  },
  {
    "dex": 70,
    "name": "Weepinbell",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 1,
    "id": "weepinbell"
  },
  {
    "dex": 71,
    "name": "Victreebel",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 1,
    "id": "victreebel"
  },
  {
    "dex": 72,
    "name": "Tentacool",
    "types": [
      "water",
      "poison"
    ],
    "gen": 1,
    "id": "tentacool"
  },
  {
    "dex": 73,
    "name": "Tentacruel",
    "types": [
      "water",
      "poison"
    ],
    "gen": 1,
    "id": "tentacruel"
  },
  {
    "dex": 74,
    "name": "Geodude",
    "types": [
      "rock",
      "ground"
    ],
    "gen": 1,
    "id": "geodude"
  },
  {
    "dex": 75,
    "name": "Graveler",
    "types": [
      "rock",
      "ground"
    ],
    "gen": 1,
    "id": "graveler"
  },
  {
    "dex": 76,
    "name": "Golem",
    "types": [
      "rock",
      "ground"
    ],
    "gen": 1,
    "id": "golem"
  },
  {
    "dex": 77,
    "name": "Ponyta",
    "types": [
      "fire"
    ],
    "gen": 1,
    "id": "ponyta"
  },
  {
    "dex": 78,
    "name": "Rapidash",
    "types": [
      "fire"
    ],
    "gen": 1,
    "id": "rapidash"
  },
  {
    "dex": 79,
    "name": "Slowpoke",
    "types": [
      "water",
      "psychic"
    ],
    "gen": 1,
    "id": "slowpoke"
  },
  {
    "dex": 80,
    "name": "Slowbro",
    "types": [
      "water",
      "psychic"
    ],
    "gen": 1,
    "id": "slowbro"
  },
  {
    "dex": 81,
    "name": "Magnemite",
    "types": [
      "electric",
      "steel"
    ],
    "gen": 1,
    "id": "magnemite"
  },
  {
    "dex": 82,
    "name": "Magneton",
    "types": [
      "electric",
      "steel"
    ],
    "gen": 1,
    "id": "magneton"
  },
  {
    "dex": 83,
    "name": "Farfetchd",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 1,
    "id": "farfetchd"
  },
  {
    "dex": 84,
    "name": "Doduo",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 1,
    "id": "doduo"
  },
  {
    "dex": 85,
    "name": "Dodrio",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 1,
    "id": "dodrio"
  },
  {
    "dex": 86,
    "name": "Seel",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "seel"
  },
  {
    "dex": 87,
    "name": "Dewgong",
    "types": [
      "water",
      "ice"
    ],
    "gen": 1,
    "id": "dewgong"
  },
  {
    "dex": 88,
    "name": "Grimer",
    "types": [
      "poison"
    ],
    "gen": 1,
    "id": "grimer"
  },
  {
    "dex": 89,
    "name": "Muk",
    "types": [
      "poison"
    ],
    "gen": 1,
    "id": "muk"
  },
  {
    "dex": 90,
    "name": "Shellder",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "shellder"
  },
  {
    "dex": 91,
    "name": "Cloyster",
    "types": [
      "water",
      "ice"
    ],
    "gen": 1,
    "id": "cloyster"
  },
  {
    "dex": 92,
    "name": "Gastly",
    "types": [
      "ghost",
      "poison"
    ],
    "gen": 1,
    "id": "gastly"
  },
  {
    "dex": 93,
    "name": "Haunter",
    "types": [
      "ghost",
      "poison"
    ],
    "gen": 1,
    "id": "haunter"
  },
  {
    "dex": 94,
    "name": "Gengar",
    "types": [
      "ghost",
      "poison"
    ],
    "gen": 1,
    "id": "gengar"
  },
  {
    "dex": 95,
    "name": "Onix",
    "types": [
      "rock",
      "ground"
    ],
    "gen": 1,
    "id": "onix"
  },
  {
    "dex": 96,
    "name": "Drowzee",
    "types": [
      "psychic"
    ],
    "gen": 1,
    "id": "drowzee"
  },
  {
    "dex": 97,
    "name": "Hypno",
    "types": [
      "psychic"
    ],
    "gen": 1,
    "id": "hypno"
  },
  {
    "dex": 98,
    "name": "Krabby",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "krabby"
  },
  {
    "dex": 99,
    "name": "Kingler",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "kingler"
  },
  {
    "dex": 100,
    "name": "Voltorb",
    "types": [
      "electric"
    ],
    "gen": 1,
    "id": "voltorb"
  },
  {
    "dex": 101,
    "name": "Electrode",
    "types": [
      "electric"
    ],
    "gen": 1,
    "id": "electrode"
  },
  {
    "dex": 102,
    "name": "Exeggcute",
    "types": [
      "grass",
      "psychic"
    ],
    "gen": 1,
    "id": "exeggcute"
  },
  {
    "dex": 103,
    "name": "Exeggutor",
    "types": [
      "grass",
      "psychic"
    ],
    "gen": 1,
    "id": "exeggutor"
  },
  {
    "dex": 104,
    "name": "Cubone",
    "types": [
      "ground"
    ],
    "gen": 1,
    "id": "cubone"
  },
  {
    "dex": 105,
    "name": "Marowak",
    "types": [
      "ground"
    ],
    "gen": 1,
    "id": "marowak"
  },
  {
    "dex": 106,
    "name": "Hitmonlee",
    "types": [
      "fighting"
    ],
    "gen": 1,
    "id": "hitmonlee"
  },
  {
    "dex": 107,
    "name": "Hitmonchan",
    "types": [
      "fighting"
    ],
    "gen": 1,
    "id": "hitmonchan"
  },
  {
    "dex": 108,
    "name": "Lickitung",
    "types": [
      "normal"
    ],
    "gen": 1,
    "id": "lickitung"
  },
  {
    "dex": 109,
    "name": "Koffing",
    "types": [
      "poison"
    ],
    "gen": 1,
    "id": "koffing"
  },
  {
    "dex": 110,
    "name": "Weezing",
    "types": [
      "poison"
    ],
    "gen": 1,
    "id": "weezing"
  },
  {
    "dex": 111,
    "name": "Rhyhorn",
    "types": [
      "ground",
      "rock"
    ],
    "gen": 1,
    "id": "rhyhorn"
  },
  {
    "dex": 112,
    "name": "Rhydon",
    "types": [
      "ground",
      "rock"
    ],
    "gen": 1,
    "id": "rhydon"
  },
  {
    "dex": 113,
    "name": "Chansey",
    "types": [
      "normal"
    ],
    "gen": 1,
    "id": "chansey"
  },
  {
    "dex": 114,
    "name": "Tangela",
    "types": [
      "grass"
    ],
    "gen": 1,
    "id": "tangela"
  },
  {
    "dex": 115,
    "name": "Kangaskhan",
    "types": [
      "normal"
    ],
    "gen": 1,
    "id": "kangaskhan"
  },
  {
    "dex": 116,
    "name": "Horsea",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "horsea"
  },
  {
    "dex": 117,
    "name": "Seadra",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "seadra"
  },
  {
    "dex": 118,
    "name": "Goldeen",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "goldeen"
  },
  {
    "dex": 119,
    "name": "Seaking",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "seaking"
  },
  {
    "dex": 120,
    "name": "Staryu",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "staryu"
  },
  {
    "dex": 121,
    "name": "Starmie",
    "types": [
      "water",
      "psychic"
    ],
    "gen": 1,
    "id": "starmie"
  },
  {
    "dex": 122,
    "name": "Mr-mime",
    "types": [
      "psychic",
      "fairy"
    ],
    "gen": 1,
    "id": "mr-mime"
  },
  {
    "dex": 123,
    "name": "Scyther",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 1,
    "id": "scyther"
  },
  {
    "dex": 124,
    "name": "Jynx",
    "types": [
      "ice",
      "psychic"
    ],
    "gen": 1,
    "id": "jynx"
  },
  {
    "dex": 125,
    "name": "Electabuzz",
    "types": [
      "electric"
    ],
    "gen": 1,
    "id": "electabuzz"
  },
  {
    "dex": 126,
    "name": "Magmar",
    "types": [
      "fire"
    ],
    "gen": 1,
    "id": "magmar"
  },
  {
    "dex": 127,
    "name": "Pinsir",
    "types": [
      "bug"
    ],
    "gen": 1,
    "id": "pinsir"
  },
  {
    "dex": 128,
    "name": "Tauros",
    "types": [
      "normal"
    ],
    "gen": 1,
    "id": "tauros"
  },
  {
    "dex": 129,
    "name": "Magikarp",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "magikarp"
  },
  {
    "dex": 130,
    "name": "Gyarados",
    "types": [
      "water",
      "flying"
    ],
    "gen": 1,
    "id": "gyarados"
  },
  {
    "dex": 131,
    "name": "Lapras",
    "types": [
      "water",
      "ice"
    ],
    "gen": 1,
    "id": "lapras"
  },
  {
    "dex": 132,
    "name": "Ditto",
    "types": [
      "normal"
    ],
    "gen": 1,
    "id": "ditto"
  },
  {
    "dex": 133,
    "name": "Eevee",
    "types": [
      "normal"
    ],
    "gen": 1,
    "id": "eevee"
  },
  {
    "dex": 134,
    "name": "Vaporeon",
    "types": [
      "water"
    ],
    "gen": 1,
    "id": "vaporeon"
  },
  {
    "dex": 135,
    "name": "Jolteon",
    "types": [
      "electric"
    ],
    "gen": 1,
    "id": "jolteon"
  },
  {
    "dex": 136,
    "name": "Flareon",
    "types": [
      "fire"
    ],
    "gen": 1,
    "id": "flareon"
  },
  {
    "dex": 137,
    "name": "Porygon",
    "types": [
      "normal"
    ],
    "gen": 1,
    "id": "porygon"
  },
  {
    "dex": 138,
    "name": "Omanyte",
    "types": [
      "rock",
      "water"
    ],
    "gen": 1,
    "id": "omanyte"
  },
  {
    "dex": 139,
    "name": "Omastar",
    "types": [
      "rock",
      "water"
    ],
    "gen": 1,
    "id": "omastar"
  },
  {
    "dex": 140,
    "name": "Kabuto",
    "types": [
      "rock",
      "water"
    ],
    "gen": 1,
    "id": "kabuto"
  },
  {
    "dex": 141,
    "name": "Kabutops",
    "types": [
      "rock",
      "water"
    ],
    "gen": 1,
    "id": "kabutops"
  },
  {
    "dex": 142,
    "name": "Aerodactyl",
    "types": [
      "rock",
      "flying"
    ],
    "gen": 1,
    "id": "aerodactyl"
  },
  {
    "dex": 143,
    "name": "Snorlax",
    "types": [
      "normal"
    ],
    "gen": 1,
    "id": "snorlax"
  },
  {
    "dex": 144,
    "name": "Articuno",
    "types": [
      "ice",
      "flying"
    ],
    "gen": 1,
    "id": "articuno"
  },
  {
    "dex": 145,
    "name": "Zapdos",
    "types": [
      "electric",
      "flying"
    ],
    "gen": 1,
    "id": "zapdos"
  },
  {
    "dex": 146,
    "name": "Moltres",
    "types": [
      "fire",
      "flying"
    ],
    "gen": 1,
    "id": "moltres"
  },
  {
    "dex": 147,
    "name": "Dratini",
    "types": [
      "dragon"
    ],
    "gen": 1,
    "id": "dratini"
  },
  {
    "dex": 148,
    "name": "Dragonair",
    "types": [
      "dragon"
    ],
    "gen": 1,
    "id": "dragonair"
  },
  {
    "dex": 149,
    "name": "Dragonite",
    "types": [
      "dragon",
      "flying"
    ],
    "gen": 1,
    "id": "dragonite"
  },
  {
    "dex": 150,
    "name": "Mewtwo",
    "types": [
      "psychic"
    ],
    "gen": 1,
    "id": "mewtwo"
  },
  {
    "dex": 151,
    "name": "Mew",
    "types": [
      "psychic"
    ],
    "gen": 1,
    "id": "mew"
  },
  {
    "dex": 152,
    "name": "Chikorita",
    "types": [
      "grass"
    ],
    "gen": 2,
    "id": "chikorita"
  },
  {
    "dex": 153,
    "name": "Bayleef",
    "types": [
      "grass"
    ],
    "gen": 2,
    "id": "bayleef"
  },
  {
    "dex": 154,
    "name": "Meganium",
    "types": [
      "grass"
    ],
    "gen": 2,
    "id": "meganium"
  },
  {
    "dex": 155,
    "name": "Cyndaquil",
    "types": [
      "fire"
    ],
    "gen": 2,
    "id": "cyndaquil"
  },
  {
    "dex": 156,
    "name": "Quilava",
    "types": [
      "fire"
    ],
    "gen": 2,
    "id": "quilava"
  },
  {
    "dex": 157,
    "name": "Typhlosion",
    "types": [
      "fire"
    ],
    "gen": 2,
    "id": "typhlosion"
  },
  {
    "dex": 158,
    "name": "Totodile",
    "types": [
      "water"
    ],
    "gen": 2,
    "id": "totodile"
  },
  {
    "dex": 159,
    "name": "Croconaw",
    "types": [
      "water"
    ],
    "gen": 2,
    "id": "croconaw"
  },
  {
    "dex": 160,
    "name": "Feraligatr",
    "types": [
      "water"
    ],
    "gen": 2,
    "id": "feraligatr"
  },
  {
    "dex": 161,
    "name": "Sentret",
    "types": [
      "normal"
    ],
    "gen": 2,
    "id": "sentret"
  },
  {
    "dex": 162,
    "name": "Furret",
    "types": [
      "normal"
    ],
    "gen": 2,
    "id": "furret"
  },
  {
    "dex": 163,
    "name": "Hoothoot",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 2,
    "id": "hoothoot"
  },
  {
    "dex": 164,
    "name": "Noctowl",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 2,
    "id": "noctowl"
  },
  {
    "dex": 165,
    "name": "Ledyba",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 2,
    "id": "ledyba"
  },
  {
    "dex": 166,
    "name": "Ledian",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 2,
    "id": "ledian"
  },
  {
    "dex": 167,
    "name": "Spinarak",
    "types": [
      "bug",
      "poison"
    ],
    "gen": 2,
    "id": "spinarak"
  },
  {
    "dex": 168,
    "name": "Ariados",
    "types": [
      "bug",
      "poison"
    ],
    "gen": 2,
    "id": "ariados"
  },
  {
    "dex": 169,
    "name": "Crobat",
    "types": [
      "poison",
      "flying"
    ],
    "gen": 2,
    "id": "crobat"
  },
  {
    "dex": 170,
    "name": "Chinchou",
    "types": [
      "water",
      "electric"
    ],
    "gen": 2,
    "id": "chinchou"
  },
  {
    "dex": 171,
    "name": "Lanturn",
    "types": [
      "water",
      "electric"
    ],
    "gen": 2,
    "id": "lanturn"
  },
  {
    "dex": 172,
    "name": "Pichu",
    "types": [
      "electric"
    ],
    "gen": 2,
    "id": "pichu"
  },
  {
    "dex": 173,
    "name": "Cleffa",
    "types": [
      "fairy"
    ],
    "gen": 2,
    "id": "cleffa"
  },
  {
    "dex": 174,
    "name": "Igglybuff",
    "types": [
      "normal",
      "fairy"
    ],
    "gen": 2,
    "id": "igglybuff"
  },
  {
    "dex": 175,
    "name": "Togepi",
    "types": [
      "fairy"
    ],
    "gen": 2,
    "id": "togepi"
  },
  {
    "dex": 176,
    "name": "Togetic",
    "types": [
      "fairy",
      "flying"
    ],
    "gen": 2,
    "id": "togetic"
  },
  {
    "dex": 177,
    "name": "Natu",
    "types": [
      "psychic",
      "flying"
    ],
    "gen": 2,
    "id": "natu"
  },
  {
    "dex": 178,
    "name": "Xatu",
    "types": [
      "psychic",
      "flying"
    ],
    "gen": 2,
    "id": "xatu"
  },
  {
    "dex": 179,
    "name": "Mareep",
    "types": [
      "electric"
    ],
    "gen": 2,
    "id": "mareep"
  },
  {
    "dex": 180,
    "name": "Flaaffy",
    "types": [
      "electric"
    ],
    "gen": 2,
    "id": "flaaffy"
  },
  {
    "dex": 181,
    "name": "Ampharos",
    "types": [
      "electric"
    ],
    "gen": 2,
    "id": "ampharos"
  },
  {
    "dex": 182,
    "name": "Bellossom",
    "types": [
      "grass"
    ],
    "gen": 2,
    "id": "bellossom"
  },
  {
    "dex": 183,
    "name": "Marill",
    "types": [
      "water",
      "fairy"
    ],
    "gen": 2,
    "id": "marill"
  },
  {
    "dex": 184,
    "name": "Azumarill",
    "types": [
      "water",
      "fairy"
    ],
    "gen": 2,
    "id": "azumarill"
  },
  {
    "dex": 185,
    "name": "Sudowoodo",
    "types": [
      "rock"
    ],
    "gen": 2,
    "id": "sudowoodo"
  },
  {
    "dex": 186,
    "name": "Politoed",
    "types": [
      "water"
    ],
    "gen": 2,
    "id": "politoed"
  },
  {
    "dex": 187,
    "name": "Hoppip",
    "types": [
      "grass",
      "flying"
    ],
    "gen": 2,
    "id": "hoppip"
  },
  {
    "dex": 188,
    "name": "Skiploom",
    "types": [
      "grass",
      "flying"
    ],
    "gen": 2,
    "id": "skiploom"
  },
  {
    "dex": 189,
    "name": "Jumpluff",
    "types": [
      "grass",
      "flying"
    ],
    "gen": 2,
    "id": "jumpluff"
  },
  {
    "dex": 190,
    "name": "Aipom",
    "types": [
      "normal"
    ],
    "gen": 2,
    "id": "aipom"
  },
  {
    "dex": 191,
    "name": "Sunkern",
    "types": [
      "grass"
    ],
    "gen": 2,
    "id": "sunkern"
  },
  {
    "dex": 192,
    "name": "Sunflora",
    "types": [
      "grass"
    ],
    "gen": 2,
    "id": "sunflora"
  },
  {
    "dex": 193,
    "name": "Yanma",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 2,
    "id": "yanma"
  },
  {
    "dex": 194,
    "name": "Wooper",
    "types": [
      "water",
      "ground"
    ],
    "gen": 2,
    "id": "wooper"
  },
  {
    "dex": 195,
    "name": "Quagsire",
    "types": [
      "water",
      "ground"
    ],
    "gen": 2,
    "id": "quagsire"
  },
  {
    "dex": 196,
    "name": "Espeon",
    "types": [
      "psychic"
    ],
    "gen": 2,
    "id": "espeon"
  },
  {
    "dex": 197,
    "name": "Umbreon",
    "types": [
      "dark"
    ],
    "gen": 2,
    "id": "umbreon"
  },
  {
    "dex": 198,
    "name": "Murkrow",
    "types": [
      "dark",
      "flying"
    ],
    "gen": 2,
    "id": "murkrow"
  },
  {
    "dex": 199,
    "name": "Slowking",
    "types": [
      "water",
      "psychic"
    ],
    "gen": 2,
    "id": "slowking"
  },
  {
    "dex": 200,
    "name": "Misdreavus",
    "types": [
      "ghost"
    ],
    "gen": 2,
    "id": "misdreavus"
  },
  {
    "dex": 201,
    "name": "Unown",
    "types": [
      "psychic"
    ],
    "gen": 2,
    "id": "unown"
  },
  {
    "dex": 202,
    "name": "Wobbuffet",
    "types": [
      "psychic"
    ],
    "gen": 2,
    "id": "wobbuffet"
  },
  {
    "dex": 203,
    "name": "Girafarig",
    "types": [
      "normal",
      "psychic"
    ],
    "gen": 2,
    "id": "girafarig"
  },
  {
    "dex": 204,
    "name": "Pineco",
    "types": [
      "bug"
    ],
    "gen": 2,
    "id": "pineco"
  },
  {
    "dex": 205,
    "name": "Forretress",
    "types": [
      "bug",
      "steel"
    ],
    "gen": 2,
    "id": "forretress"
  },
  {
    "dex": 206,
    "name": "Dunsparce",
    "types": [
      "normal"
    ],
    "gen": 2,
    "id": "dunsparce"
  },
  {
    "dex": 207,
    "name": "Gligar",
    "types": [
      "ground",
      "flying"
    ],
    "gen": 2,
    "id": "gligar"
  },
  {
    "dex": 208,
    "name": "Steelix",
    "types": [
      "steel",
      "ground"
    ],
    "gen": 2,
    "id": "steelix"
  },
  {
    "dex": 209,
    "name": "Snubbull",
    "types": [
      "fairy"
    ],
    "gen": 2,
    "id": "snubbull"
  },
  {
    "dex": 210,
    "name": "Granbull",
    "types": [
      "fairy"
    ],
    "gen": 2,
    "id": "granbull"
  },
  {
    "dex": 211,
    "name": "Qwilfish",
    "types": [
      "water",
      "poison"
    ],
    "gen": 2,
    "id": "qwilfish"
  },
  {
    "dex": 212,
    "name": "Scizor",
    "types": [
      "bug",
      "steel"
    ],
    "gen": 2,
    "id": "scizor"
  },
  {
    "dex": 213,
    "name": "Shuckle",
    "types": [
      "bug",
      "rock"
    ],
    "gen": 2,
    "id": "shuckle"
  },
  {
    "dex": 214,
    "name": "Heracross",
    "types": [
      "bug",
      "fighting"
    ],
    "gen": 2,
    "id": "heracross"
  },
  {
    "dex": 215,
    "name": "Sneasel",
    "types": [
      "dark",
      "ice"
    ],
    "gen": 2,
    "id": "sneasel"
  },
  {
    "dex": 216,
    "name": "Teddiursa",
    "types": [
      "normal"
    ],
    "gen": 2,
    "id": "teddiursa"
  },
  {
    "dex": 217,
    "name": "Ursaring",
    "types": [
      "normal"
    ],
    "gen": 2,
    "id": "ursaring"
  },
  {
    "dex": 218,
    "name": "Slugma",
    "types": [
      "fire"
    ],
    "gen": 2,
    "id": "slugma"
  },
  {
    "dex": 219,
    "name": "Magcargo",
    "types": [
      "fire",
      "rock"
    ],
    "gen": 2,
    "id": "magcargo"
  },
  {
    "dex": 220,
    "name": "Swinub",
    "types": [
      "ice",
      "ground"
    ],
    "gen": 2,
    "id": "swinub"
  },
  {
    "dex": 221,
    "name": "Piloswine",
    "types": [
      "ice",
      "ground"
    ],
    "gen": 2,
    "id": "piloswine"
  },
  {
    "dex": 222,
    "name": "Corsola",
    "types": [
      "water",
      "rock"
    ],
    "gen": 2,
    "id": "corsola"
  },
  {
    "dex": 223,
    "name": "Remoraid",
    "types": [
      "water"
    ],
    "gen": 2,
    "id": "remoraid"
  },
  {
    "dex": 224,
    "name": "Octillery",
    "types": [
      "water"
    ],
    "gen": 2,
    "id": "octillery"
  },
  {
    "dex": 225,
    "name": "Delibird",
    "types": [
      "ice",
      "flying"
    ],
    "gen": 2,
    "id": "delibird"
  },
  {
    "dex": 226,
    "name": "Mantine",
    "types": [
      "water",
      "flying"
    ],
    "gen": 2,
    "id": "mantine"
  },
  {
    "dex": 227,
    "name": "Skarmory",
    "types": [
      "steel",
      "flying"
    ],
    "gen": 2,
    "id": "skarmory"
  },
  {
    "dex": 228,
    "name": "Houndour",
    "types": [
      "dark",
      "fire"
    ],
    "gen": 2,
    "id": "houndour"
  },
  {
    "dex": 229,
    "name": "Houndoom",
    "types": [
      "dark",
      "fire"
    ],
    "gen": 2,
    "id": "houndoom"
  },
  {
    "dex": 230,
    "name": "Kingdra",
    "types": [
      "water",
      "dragon"
    ],
    "gen": 2,
    "id": "kingdra"
  },
  {
    "dex": 231,
    "name": "Phanpy",
    "types": [
      "ground"
    ],
    "gen": 2,
    "id": "phanpy"
  },
  {
    "dex": 232,
    "name": "Donphan",
    "types": [
      "ground"
    ],
    "gen": 2,
    "id": "donphan"
  },
  {
    "dex": 233,
    "name": "Porygon2",
    "types": [
      "normal"
    ],
    "gen": 2,
    "id": "porygon2"
  },
  {
    "dex": 234,
    "name": "Stantler",
    "types": [
      "normal"
    ],
    "gen": 2,
    "id": "stantler"
  },
  {
    "dex": 235,
    "name": "Smeargle",
    "types": [
      "normal"
    ],
    "gen": 2,
    "id": "smeargle"
  },
  {
    "dex": 236,
    "name": "Tyrogue",
    "types": [
      "fighting"
    ],
    "gen": 2,
    "id": "tyrogue"
  },
  {
    "dex": 237,
    "name": "Hitmontop",
    "types": [
      "fighting"
    ],
    "gen": 2,
    "id": "hitmontop"
  },
  {
    "dex": 238,
    "name": "Smoochum",
    "types": [
      "ice",
      "psychic"
    ],
    "gen": 2,
    "id": "smoochum"
  },
  {
    "dex": 239,
    "name": "Elekid",
    "types": [
      "electric"
    ],
    "gen": 2,
    "id": "elekid"
  },
  {
    "dex": 240,
    "name": "Magby",
    "types": [
      "fire"
    ],
    "gen": 2,
    "id": "magby"
  },
  {
    "dex": 241,
    "name": "Miltank",
    "types": [
      "normal"
    ],
    "gen": 2,
    "id": "miltank"
  },
  {
    "dex": 242,
    "name": "Blissey",
    "types": [
      "normal"
    ],
    "gen": 2,
    "id": "blissey"
  },
  {
    "dex": 243,
    "name": "Raikou",
    "types": [
      "electric"
    ],
    "gen": 2,
    "id": "raikou"
  },
  {
    "dex": 244,
    "name": "Entei",
    "types": [
      "fire"
    ],
    "gen": 2,
    "id": "entei"
  },
  {
    "dex": 245,
    "name": "Suicune",
    "types": [
      "water"
    ],
    "gen": 2,
    "id": "suicune"
  },
  {
    "dex": 246,
    "name": "Larvitar",
    "types": [
      "rock",
      "ground"
    ],
    "gen": 2,
    "id": "larvitar"
  },
  {
    "dex": 247,
    "name": "Pupitar",
    "types": [
      "rock",
      "ground"
    ],
    "gen": 2,
    "id": "pupitar"
  },
  {
    "dex": 248,
    "name": "Tyranitar",
    "types": [
      "rock",
      "dark"
    ],
    "gen": 2,
    "id": "tyranitar"
  },
  {
    "dex": 249,
    "name": "Lugia",
    "types": [
      "psychic",
      "flying"
    ],
    "gen": 2,
    "id": "lugia"
  },
  {
    "dex": 250,
    "name": "Ho-oh",
    "types": [
      "fire",
      "flying"
    ],
    "gen": 2,
    "id": "ho-oh"
  },
  {
    "dex": 251,
    "name": "Celebi",
    "types": [
      "psychic",
      "grass"
    ],
    "gen": 2,
    "id": "celebi"
  },
  {
    "dex": 252,
    "name": "Treecko",
    "types": [
      "grass"
    ],
    "gen": 3,
    "id": "treecko"
  },
  {
    "dex": 253,
    "name": "Grovyle",
    "types": [
      "grass"
    ],
    "gen": 3,
    "id": "grovyle"
  },
  {
    "dex": 254,
    "name": "Sceptile",
    "types": [
      "grass"
    ],
    "gen": 3,
    "id": "sceptile"
  },
  {
    "dex": 255,
    "name": "Torchic",
    "types": [
      "fire"
    ],
    "gen": 3,
    "id": "torchic"
  },
  {
    "dex": 256,
    "name": "Combusken",
    "types": [
      "fire",
      "fighting"
    ],
    "gen": 3,
    "id": "combusken"
  },
  {
    "dex": 257,
    "name": "Blaziken",
    "types": [
      "fire",
      "fighting"
    ],
    "gen": 3,
    "id": "blaziken"
  },
  {
    "dex": 258,
    "name": "Mudkip",
    "types": [
      "water"
    ],
    "gen": 3,
    "id": "mudkip"
  },
  {
    "dex": 259,
    "name": "Marshtomp",
    "types": [
      "water",
      "ground"
    ],
    "gen": 3,
    "id": "marshtomp"
  },
  {
    "dex": 260,
    "name": "Swampert",
    "types": [
      "water",
      "ground"
    ],
    "gen": 3,
    "id": "swampert"
  },
  {
    "dex": 261,
    "name": "Poochyena",
    "types": [
      "dark"
    ],
    "gen": 3,
    "id": "poochyena"
  },
  {
    "dex": 262,
    "name": "Mightyena",
    "types": [
      "dark"
    ],
    "gen": 3,
    "id": "mightyena"
  },
  {
    "dex": 263,
    "name": "Zigzagoon",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "zigzagoon"
  },
  {
    "dex": 264,
    "name": "Linoone",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "linoone"
  },
  {
    "dex": 265,
    "name": "Wurmple",
    "types": [
      "bug"
    ],
    "gen": 3,
    "id": "wurmple"
  },
  {
    "dex": 266,
    "name": "Silcoon",
    "types": [
      "bug"
    ],
    "gen": 3,
    "id": "silcoon"
  },
  {
    "dex": 267,
    "name": "Beautifly",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 3,
    "id": "beautifly"
  },
  {
    "dex": 268,
    "name": "Cascoon",
    "types": [
      "bug"
    ],
    "gen": 3,
    "id": "cascoon"
  },
  {
    "dex": 269,
    "name": "Dustox",
    "types": [
      "bug",
      "poison"
    ],
    "gen": 3,
    "id": "dustox"
  },
  {
    "dex": 270,
    "name": "Lotad",
    "types": [
      "water",
      "grass"
    ],
    "gen": 3,
    "id": "lotad"
  },
  {
    "dex": 271,
    "name": "Lombre",
    "types": [
      "water",
      "grass"
    ],
    "gen": 3,
    "id": "lombre"
  },
  {
    "dex": 272,
    "name": "Ludicolo",
    "types": [
      "water",
      "grass"
    ],
    "gen": 3,
    "id": "ludicolo"
  },
  {
    "dex": 273,
    "name": "Seedot",
    "types": [
      "grass"
    ],
    "gen": 3,
    "id": "seedot"
  },
  {
    "dex": 274,
    "name": "Nuzleaf",
    "types": [
      "grass",
      "dark"
    ],
    "gen": 3,
    "id": "nuzleaf"
  },
  {
    "dex": 275,
    "name": "Shiftry",
    "types": [
      "grass",
      "dark"
    ],
    "gen": 3,
    "id": "shiftry"
  },
  {
    "dex": 276,
    "name": "Taillow",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 3,
    "id": "taillow"
  },
  {
    "dex": 277,
    "name": "Swellow",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 3,
    "id": "swellow"
  },
  {
    "dex": 278,
    "name": "Wingull",
    "types": [
      "water",
      "flying"
    ],
    "gen": 3,
    "id": "wingull"
  },
  {
    "dex": 279,
    "name": "Pelipper",
    "types": [
      "water",
      "flying"
    ],
    "gen": 3,
    "id": "pelipper"
  },
  {
    "dex": 280,
    "name": "Ralts",
    "types": [
      "psychic",
      "fairy"
    ],
    "gen": 3,
    "id": "ralts"
  },
  {
    "dex": 281,
    "name": "Kirlia",
    "types": [
      "psychic",
      "fairy"
    ],
    "gen": 3,
    "id": "kirlia"
  },
  {
    "dex": 282,
    "name": "Gardevoir",
    "types": [
      "psychic",
      "fairy"
    ],
    "gen": 3,
    "id": "gardevoir"
  },
  {
    "dex": 283,
    "name": "Surskit",
    "types": [
      "bug",
      "water"
    ],
    "gen": 3,
    "id": "surskit"
  },
  {
    "dex": 284,
    "name": "Masquerain",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 3,
    "id": "masquerain"
  },
  {
    "dex": 285,
    "name": "Shroomish",
    "types": [
      "grass"
    ],
    "gen": 3,
    "id": "shroomish"
  },
  {
    "dex": 286,
    "name": "Breloom",
    "types": [
      "grass",
      "fighting"
    ],
    "gen": 3,
    "id": "breloom"
  },
  {
    "dex": 287,
    "name": "Slakoth",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "slakoth"
  },
  {
    "dex": 288,
    "name": "Vigoroth",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "vigoroth"
  },
  {
    "dex": 289,
    "name": "Slaking",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "slaking"
  },
  {
    "dex": 290,
    "name": "Nincada",
    "types": [
      "bug",
      "ground"
    ],
    "gen": 3,
    "id": "nincada"
  },
  {
    "dex": 291,
    "name": "Ninjask",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 3,
    "id": "ninjask"
  },
  {
    "dex": 292,
    "name": "Shedinja",
    "types": [
      "bug",
      "ghost"
    ],
    "gen": 3,
    "id": "shedinja"
  },
  {
    "dex": 293,
    "name": "Whismur",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "whismur"
  },
  {
    "dex": 294,
    "name": "Loudred",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "loudred"
  },
  {
    "dex": 295,
    "name": "Exploud",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "exploud"
  },
  {
    "dex": 296,
    "name": "Makuhita",
    "types": [
      "fighting"
    ],
    "gen": 3,
    "id": "makuhita"
  },
  {
    "dex": 297,
    "name": "Hariyama",
    "types": [
      "fighting"
    ],
    "gen": 3,
    "id": "hariyama"
  },
  {
    "dex": 298,
    "name": "Azurill",
    "types": [
      "normal",
      "fairy"
    ],
    "gen": 3,
    "id": "azurill"
  },
  {
    "dex": 299,
    "name": "Nosepass",
    "types": [
      "rock"
    ],
    "gen": 3,
    "id": "nosepass"
  },
  {
    "dex": 300,
    "name": "Skitty",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "skitty"
  },
  {
    "dex": 301,
    "name": "Delcatty",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "delcatty"
  },
  {
    "dex": 302,
    "name": "Sableye",
    "types": [
      "dark",
      "ghost"
    ],
    "gen": 3,
    "id": "sableye"
  },
  {
    "dex": 303,
    "name": "Mawile",
    "types": [
      "steel",
      "fairy"
    ],
    "gen": 3,
    "id": "mawile"
  },
  {
    "dex": 304,
    "name": "Aron",
    "types": [
      "steel",
      "rock"
    ],
    "gen": 3,
    "id": "aron"
  },
  {
    "dex": 305,
    "name": "Lairon",
    "types": [
      "steel",
      "rock"
    ],
    "gen": 3,
    "id": "lairon"
  },
  {
    "dex": 306,
    "name": "Aggron",
    "types": [
      "steel",
      "rock"
    ],
    "gen": 3,
    "id": "aggron"
  },
  {
    "dex": 307,
    "name": "Meditite",
    "types": [
      "fighting",
      "psychic"
    ],
    "gen": 3,
    "id": "meditite"
  },
  {
    "dex": 308,
    "name": "Medicham",
    "types": [
      "fighting",
      "psychic"
    ],
    "gen": 3,
    "id": "medicham"
  },
  {
    "dex": 309,
    "name": "Electrike",
    "types": [
      "electric"
    ],
    "gen": 3,
    "id": "electrike"
  },
  {
    "dex": 310,
    "name": "Manectric",
    "types": [
      "electric"
    ],
    "gen": 3,
    "id": "manectric"
  },
  {
    "dex": 311,
    "name": "Plusle",
    "types": [
      "electric"
    ],
    "gen": 3,
    "id": "plusle"
  },
  {
    "dex": 312,
    "name": "Minun",
    "types": [
      "electric"
    ],
    "gen": 3,
    "id": "minun"
  },
  {
    "dex": 313,
    "name": "Volbeat",
    "types": [
      "bug"
    ],
    "gen": 3,
    "id": "volbeat"
  },
  {
    "dex": 314,
    "name": "Illumise",
    "types": [
      "bug"
    ],
    "gen": 3,
    "id": "illumise"
  },
  {
    "dex": 315,
    "name": "Roselia",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 3,
    "id": "roselia"
  },
  {
    "dex": 316,
    "name": "Gulpin",
    "types": [
      "poison"
    ],
    "gen": 3,
    "id": "gulpin"
  },
  {
    "dex": 317,
    "name": "Swalot",
    "types": [
      "poison"
    ],
    "gen": 3,
    "id": "swalot"
  },
  {
    "dex": 318,
    "name": "Carvanha",
    "types": [
      "water",
      "dark"
    ],
    "gen": 3,
    "id": "carvanha"
  },
  {
    "dex": 319,
    "name": "Sharpedo",
    "types": [
      "water",
      "dark"
    ],
    "gen": 3,
    "id": "sharpedo"
  },
  {
    "dex": 320,
    "name": "Wailmer",
    "types": [
      "water"
    ],
    "gen": 3,
    "id": "wailmer"
  },
  {
    "dex": 321,
    "name": "Wailord",
    "types": [
      "water"
    ],
    "gen": 3,
    "id": "wailord"
  },
  {
    "dex": 322,
    "name": "Numel",
    "types": [
      "fire",
      "ground"
    ],
    "gen": 3,
    "id": "numel"
  },
  {
    "dex": 323,
    "name": "Camerupt",
    "types": [
      "fire",
      "ground"
    ],
    "gen": 3,
    "id": "camerupt"
  },
  {
    "dex": 324,
    "name": "Torkoal",
    "types": [
      "fire"
    ],
    "gen": 3,
    "id": "torkoal"
  },
  {
    "dex": 325,
    "name": "Spoink",
    "types": [
      "psychic"
    ],
    "gen": 3,
    "id": "spoink"
  },
  {
    "dex": 326,
    "name": "Grumpig",
    "types": [
      "psychic"
    ],
    "gen": 3,
    "id": "grumpig"
  },
  {
    "dex": 327,
    "name": "Spinda",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "spinda"
  },
  {
    "dex": 328,
    "name": "Trapinch",
    "types": [
      "ground"
    ],
    "gen": 3,
    "id": "trapinch"
  },
  {
    "dex": 329,
    "name": "Vibrava",
    "types": [
      "ground",
      "dragon"
    ],
    "gen": 3,
    "id": "vibrava"
  },
  {
    "dex": 330,
    "name": "Flygon",
    "types": [
      "ground",
      "dragon"
    ],
    "gen": 3,
    "id": "flygon"
  },
  {
    "dex": 331,
    "name": "Cacnea",
    "types": [
      "grass"
    ],
    "gen": 3,
    "id": "cacnea"
  },
  {
    "dex": 332,
    "name": "Cacturne",
    "types": [
      "grass",
      "dark"
    ],
    "gen": 3,
    "id": "cacturne"
  },
  {
    "dex": 333,
    "name": "Swablu",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 3,
    "id": "swablu"
  },
  {
    "dex": 334,
    "name": "Altaria",
    "types": [
      "dragon",
      "flying"
    ],
    "gen": 3,
    "id": "altaria"
  },
  {
    "dex": 335,
    "name": "Zangoose",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "zangoose"
  },
  {
    "dex": 336,
    "name": "Seviper",
    "types": [
      "poison"
    ],
    "gen": 3,
    "id": "seviper"
  },
  {
    "dex": 337,
    "name": "Lunatone",
    "types": [
      "rock",
      "psychic"
    ],
    "gen": 3,
    "id": "lunatone"
  },
  {
    "dex": 338,
    "name": "Solrock",
    "types": [
      "rock",
      "psychic"
    ],
    "gen": 3,
    "id": "solrock"
  },
  {
    "dex": 339,
    "name": "Barboach",
    "types": [
      "water",
      "ground"
    ],
    "gen": 3,
    "id": "barboach"
  },
  {
    "dex": 340,
    "name": "Whiscash",
    "types": [
      "water",
      "ground"
    ],
    "gen": 3,
    "id": "whiscash"
  },
  {
    "dex": 341,
    "name": "Corphish",
    "types": [
      "water"
    ],
    "gen": 3,
    "id": "corphish"
  },
  {
    "dex": 342,
    "name": "Crawdaunt",
    "types": [
      "water",
      "dark"
    ],
    "gen": 3,
    "id": "crawdaunt"
  },
  {
    "dex": 343,
    "name": "Baltoy",
    "types": [
      "ground",
      "psychic"
    ],
    "gen": 3,
    "id": "baltoy"
  },
  {
    "dex": 344,
    "name": "Claydol",
    "types": [
      "ground",
      "psychic"
    ],
    "gen": 3,
    "id": "claydol"
  },
  {
    "dex": 345,
    "name": "Lileep",
    "types": [
      "rock",
      "grass"
    ],
    "gen": 3,
    "id": "lileep"
  },
  {
    "dex": 346,
    "name": "Cradily",
    "types": [
      "rock",
      "grass"
    ],
    "gen": 3,
    "id": "cradily"
  },
  {
    "dex": 347,
    "name": "Anorith",
    "types": [
      "rock",
      "bug"
    ],
    "gen": 3,
    "id": "anorith"
  },
  {
    "dex": 348,
    "name": "Armaldo",
    "types": [
      "rock",
      "bug"
    ],
    "gen": 3,
    "id": "armaldo"
  },
  {
    "dex": 349,
    "name": "Feebas",
    "types": [
      "water"
    ],
    "gen": 3,
    "id": "feebas"
  },
  {
    "dex": 350,
    "name": "Milotic",
    "types": [
      "water"
    ],
    "gen": 3,
    "id": "milotic"
  },
  {
    "dex": 351,
    "name": "Castform",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "castform"
  },
  {
    "dex": 352,
    "name": "Kecleon",
    "types": [
      "normal"
    ],
    "gen": 3,
    "id": "kecleon"
  },
  {
    "dex": 353,
    "name": "Shuppet",
    "types": [
      "ghost"
    ],
    "gen": 3,
    "id": "shuppet"
  },
  {
    "dex": 354,
    "name": "Banette",
    "types": [
      "ghost"
    ],
    "gen": 3,
    "id": "banette"
  },
  {
    "dex": 355,
    "name": "Duskull",
    "types": [
      "ghost"
    ],
    "gen": 3,
    "id": "duskull"
  },
  {
    "dex": 356,
    "name": "Dusclops",
    "types": [
      "ghost"
    ],
    "gen": 3,
    "id": "dusclops"
  },
  {
    "dex": 357,
    "name": "Tropius",
    "types": [
      "grass",
      "flying"
    ],
    "gen": 3,
    "id": "tropius"
  },
  {
    "dex": 358,
    "name": "Chimecho",
    "types": [
      "psychic"
    ],
    "gen": 3,
    "id": "chimecho"
  },
  {
    "dex": 359,
    "name": "Absol",
    "types": [
      "dark"
    ],
    "gen": 3,
    "id": "absol"
  },
  {
    "dex": 360,
    "name": "Wynaut",
    "types": [
      "psychic"
    ],
    "gen": 3,
    "id": "wynaut"
  },
  {
    "dex": 361,
    "name": "Snorunt",
    "types": [
      "ice"
    ],
    "gen": 3,
    "id": "snorunt"
  },
  {
    "dex": 362,
    "name": "Glalie",
    "types": [
      "ice"
    ],
    "gen": 3,
    "id": "glalie"
  },
  {
    "dex": 363,
    "name": "Spheal",
    "types": [
      "ice",
      "water"
    ],
    "gen": 3,
    "id": "spheal"
  },
  {
    "dex": 364,
    "name": "Sealeo",
    "types": [
      "ice",
      "water"
    ],
    "gen": 3,
    "id": "sealeo"
  },
  {
    "dex": 365,
    "name": "Walrein",
    "types": [
      "ice",
      "water"
    ],
    "gen": 3,
    "id": "walrein"
  },
  {
    "dex": 366,
    "name": "Clamperl",
    "types": [
      "water"
    ],
    "gen": 3,
    "id": "clamperl"
  },
  {
    "dex": 367,
    "name": "Huntail",
    "types": [
      "water"
    ],
    "gen": 3,
    "id": "huntail"
  },
  {
    "dex": 368,
    "name": "Gorebyss",
    "types": [
      "water"
    ],
    "gen": 3,
    "id": "gorebyss"
  },
  {
    "dex": 369,
    "name": "Relicanth",
    "types": [
      "water",
      "rock"
    ],
    "gen": 3,
    "id": "relicanth"
  },
  {
    "dex": 370,
    "name": "Luvdisc",
    "types": [
      "water"
    ],
    "gen": 3,
    "id": "luvdisc"
  },
  {
    "dex": 371,
    "name": "Bagon",
    "types": [
      "dragon"
    ],
    "gen": 3,
    "id": "bagon"
  },
  {
    "dex": 372,
    "name": "Shelgon",
    "types": [
      "dragon"
    ],
    "gen": 3,
    "id": "shelgon"
  },
  {
    "dex": 373,
    "name": "Salamence",
    "types": [
      "dragon",
      "flying"
    ],
    "gen": 3,
    "id": "salamence"
  },
  {
    "dex": 374,
    "name": "Beldum",
    "types": [
      "steel",
      "psychic"
    ],
    "gen": 3,
    "id": "beldum"
  },
  {
    "dex": 375,
    "name": "Metang",
    "types": [
      "steel",
      "psychic"
    ],
    "gen": 3,
    "id": "metang"
  },
  {
    "dex": 376,
    "name": "Metagross",
    "types": [
      "steel",
      "psychic"
    ],
    "gen": 3,
    "id": "metagross"
  },
  {
    "dex": 377,
    "name": "Regirock",
    "types": [
      "rock"
    ],
    "gen": 3,
    "id": "regirock"
  },
  {
    "dex": 378,
    "name": "Regice",
    "types": [
      "ice"
    ],
    "gen": 3,
    "id": "regice"
  },
  {
    "dex": 379,
    "name": "Registeel",
    "types": [
      "steel"
    ],
    "gen": 3,
    "id": "registeel"
  },
  {
    "dex": 380,
    "name": "Latias",
    "types": [
      "dragon",
      "psychic"
    ],
    "gen": 3,
    "id": "latias"
  },
  {
    "dex": 381,
    "name": "Latios",
    "types": [
      "dragon",
      "psychic"
    ],
    "gen": 3,
    "id": "latios"
  },
  {
    "dex": 382,
    "name": "Kyogre",
    "types": [
      "water"
    ],
    "gen": 3,
    "id": "kyogre"
  },
  {
    "dex": 383,
    "name": "Groudon",
    "types": [
      "ground"
    ],
    "gen": 3,
    "id": "groudon"
  },
  {
    "dex": 384,
    "name": "Rayquaza",
    "types": [
      "dragon",
      "flying"
    ],
    "gen": 3,
    "id": "rayquaza"
  },
  {
    "dex": 385,
    "name": "Jirachi",
    "types": [
      "steel",
      "psychic"
    ],
    "gen": 3,
    "id": "jirachi"
  },
  {
    "dex": 386,
    "name": "Deoxys-normal",
    "types": [
      "psychic"
    ],
    "gen": 3,
    "id": "deoxys-normal"
  },
  {
    "dex": 387,
    "name": "Turtwig",
    "types": [
      "grass"
    ],
    "gen": 4,
    "id": "turtwig"
  },
  {
    "dex": 388,
    "name": "Grotle",
    "types": [
      "grass"
    ],
    "gen": 4,
    "id": "grotle"
  },
  {
    "dex": 389,
    "name": "Torterra",
    "types": [
      "grass",
      "ground"
    ],
    "gen": 4,
    "id": "torterra"
  },
  {
    "dex": 390,
    "name": "Chimchar",
    "types": [
      "fire"
    ],
    "gen": 4,
    "id": "chimchar"
  },
  {
    "dex": 391,
    "name": "Monferno",
    "types": [
      "fire",
      "fighting"
    ],
    "gen": 4,
    "id": "monferno"
  },
  {
    "dex": 392,
    "name": "Infernape",
    "types": [
      "fire",
      "fighting"
    ],
    "gen": 4,
    "id": "infernape"
  },
  {
    "dex": 393,
    "name": "Piplup",
    "types": [
      "water"
    ],
    "gen": 4,
    "id": "piplup"
  },
  {
    "dex": 394,
    "name": "Prinplup",
    "types": [
      "water"
    ],
    "gen": 4,
    "id": "prinplup"
  },
  {
    "dex": 395,
    "name": "Empoleon",
    "types": [
      "water",
      "steel"
    ],
    "gen": 4,
    "id": "empoleon"
  },
  {
    "dex": 396,
    "name": "Starly",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 4,
    "id": "starly"
  },
  {
    "dex": 397,
    "name": "Staravia",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 4,
    "id": "staravia"
  },
  {
    "dex": 398,
    "name": "Staraptor",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 4,
    "id": "staraptor"
  },
  {
    "dex": 399,
    "name": "Bidoof",
    "types": [
      "normal"
    ],
    "gen": 4,
    "id": "bidoof"
  },
  {
    "dex": 400,
    "name": "Bibarel",
    "types": [
      "normal",
      "water"
    ],
    "gen": 4,
    "id": "bibarel"
  },
  {
    "dex": 401,
    "name": "Kricketot",
    "types": [
      "bug"
    ],
    "gen": 4,
    "id": "kricketot"
  },
  {
    "dex": 402,
    "name": "Kricketune",
    "types": [
      "bug"
    ],
    "gen": 4,
    "id": "kricketune"
  },
  {
    "dex": 403,
    "name": "Shinx",
    "types": [
      "electric"
    ],
    "gen": 4,
    "id": "shinx"
  },
  {
    "dex": 404,
    "name": "Luxio",
    "types": [
      "electric"
    ],
    "gen": 4,
    "id": "luxio"
  },
  {
    "dex": 405,
    "name": "Luxray",
    "types": [
      "electric"
    ],
    "gen": 4,
    "id": "luxray"
  },
  {
    "dex": 406,
    "name": "Budew",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 4,
    "id": "budew"
  },
  {
    "dex": 407,
    "name": "Roserade",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 4,
    "id": "roserade"
  },
  {
    "dex": 408,
    "name": "Cranidos",
    "types": [
      "rock"
    ],
    "gen": 4,
    "id": "cranidos"
  },
  {
    "dex": 409,
    "name": "Rampardos",
    "types": [
      "rock"
    ],
    "gen": 4,
    "id": "rampardos"
  },
  {
    "dex": 410,
    "name": "Shieldon",
    "types": [
      "rock",
      "steel"
    ],
    "gen": 4,
    "id": "shieldon"
  },
  {
    "dex": 411,
    "name": "Bastiodon",
    "types": [
      "rock",
      "steel"
    ],
    "gen": 4,
    "id": "bastiodon"
  },
  {
    "dex": 412,
    "name": "Burmy",
    "types": [
      "bug"
    ],
    "gen": 4,
    "id": "burmy"
  },
  {
    "dex": 413,
    "name": "Wormadam-plant",
    "types": [
      "bug",
      "grass"
    ],
    "gen": 4,
    "id": "wormadam-plant"
  },
  {
    "dex": 414,
    "name": "Mothim",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 4,
    "id": "mothim"
  },
  {
    "dex": 415,
    "name": "Combee",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 4,
    "id": "combee"
  },
  {
    "dex": 416,
    "name": "Vespiquen",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 4,
    "id": "vespiquen"
  },
  {
    "dex": 417,
    "name": "Pachirisu",
    "types": [
      "electric"
    ],
    "gen": 4,
    "id": "pachirisu"
  },
  {
    "dex": 418,
    "name": "Buizel",
    "types": [
      "water"
    ],
    "gen": 4,
    "id": "buizel"
  },
  {
    "dex": 419,
    "name": "Floatzel",
    "types": [
      "water"
    ],
    "gen": 4,
    "id": "floatzel"
  },
  {
    "dex": 420,
    "name": "Cherubi",
    "types": [
      "grass"
    ],
    "gen": 4,
    "id": "cherubi"
  },
  {
    "dex": 421,
    "name": "Cherrim",
    "types": [
      "grass"
    ],
    "gen": 4,
    "id": "cherrim"
  },
  {
    "dex": 422,
    "name": "Shellos",
    "types": [
      "water"
    ],
    "gen": 4,
    "id": "shellos"
  },
  {
    "dex": 423,
    "name": "Gastrodon",
    "types": [
      "water",
      "ground"
    ],
    "gen": 4,
    "id": "gastrodon"
  },
  {
    "dex": 424,
    "name": "Ambipom",
    "types": [
      "normal"
    ],
    "gen": 4,
    "id": "ambipom"
  },
  {
    "dex": 425,
    "name": "Drifloon",
    "types": [
      "ghost",
      "flying"
    ],
    "gen": 4,
    "id": "drifloon"
  },
  {
    "dex": 426,
    "name": "Drifblim",
    "types": [
      "ghost",
      "flying"
    ],
    "gen": 4,
    "id": "drifblim"
  },
  {
    "dex": 427,
    "name": "Buneary",
    "types": [
      "normal"
    ],
    "gen": 4,
    "id": "buneary"
  },
  {
    "dex": 428,
    "name": "Lopunny",
    "types": [
      "normal"
    ],
    "gen": 4,
    "id": "lopunny"
  },
  {
    "dex": 429,
    "name": "Mismagius",
    "types": [
      "ghost"
    ],
    "gen": 4,
    "id": "mismagius"
  },
  {
    "dex": 430,
    "name": "Honchkrow",
    "types": [
      "dark",
      "flying"
    ],
    "gen": 4,
    "id": "honchkrow"
  },
  {
    "dex": 431,
    "name": "Glameow",
    "types": [
      "normal"
    ],
    "gen": 4,
    "id": "glameow"
  },
  {
    "dex": 432,
    "name": "Purugly",
    "types": [
      "normal"
    ],
    "gen": 4,
    "id": "purugly"
  },
  {
    "dex": 433,
    "name": "Chingling",
    "types": [
      "psychic"
    ],
    "gen": 4,
    "id": "chingling"
  },
  {
    "dex": 434,
    "name": "Stunky",
    "types": [
      "poison",
      "dark"
    ],
    "gen": 4,
    "id": "stunky"
  },
  {
    "dex": 435,
    "name": "Skuntank",
    "types": [
      "poison",
      "dark"
    ],
    "gen": 4,
    "id": "skuntank"
  },
  {
    "dex": 436,
    "name": "Bronzor",
    "types": [
      "steel",
      "psychic"
    ],
    "gen": 4,
    "id": "bronzor"
  },
  {
    "dex": 437,
    "name": "Bronzong",
    "types": [
      "steel",
      "psychic"
    ],
    "gen": 4,
    "id": "bronzong"
  },
  {
    "dex": 438,
    "name": "Bonsly",
    "types": [
      "rock"
    ],
    "gen": 4,
    "id": "bonsly"
  },
  {
    "dex": 439,
    "name": "Mime-jr",
    "types": [
      "psychic",
      "fairy"
    ],
    "gen": 4,
    "id": "mime-jr"
  },
  {
    "dex": 440,
    "name": "Happiny",
    "types": [
      "normal"
    ],
    "gen": 4,
    "id": "happiny"
  },
  {
    "dex": 441,
    "name": "Chatot",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 4,
    "id": "chatot"
  },
  {
    "dex": 442,
    "name": "Spiritomb",
    "types": [
      "ghost",
      "dark"
    ],
    "gen": 4,
    "id": "spiritomb"
  },
  {
    "dex": 443,
    "name": "Gible",
    "types": [
      "dragon",
      "ground"
    ],
    "gen": 4,
    "id": "gible"
  },
  {
    "dex": 444,
    "name": "Gabite",
    "types": [
      "dragon",
      "ground"
    ],
    "gen": 4,
    "id": "gabite"
  },
  {
    "dex": 445,
    "name": "Garchomp",
    "types": [
      "dragon",
      "ground"
    ],
    "gen": 4,
    "id": "garchomp"
  },
  {
    "dex": 446,
    "name": "Munchlax",
    "types": [
      "normal"
    ],
    "gen": 4,
    "id": "munchlax"
  },
  {
    "dex": 447,
    "name": "Riolu",
    "types": [
      "fighting"
    ],
    "gen": 4,
    "id": "riolu"
  },
  {
    "dex": 448,
    "name": "Lucario",
    "types": [
      "fighting",
      "steel"
    ],
    "gen": 4,
    "id": "lucario"
  },
  {
    "dex": 449,
    "name": "Hippopotas",
    "types": [
      "ground"
    ],
    "gen": 4,
    "id": "hippopotas"
  },
  {
    "dex": 450,
    "name": "Hippowdon",
    "types": [
      "ground"
    ],
    "gen": 4,
    "id": "hippowdon"
  },
  {
    "dex": 451,
    "name": "Skorupi",
    "types": [
      "poison",
      "bug"
    ],
    "gen": 4,
    "id": "skorupi"
  },
  {
    "dex": 452,
    "name": "Drapion",
    "types": [
      "poison",
      "dark"
    ],
    "gen": 4,
    "id": "drapion"
  },
  {
    "dex": 453,
    "name": "Croagunk",
    "types": [
      "poison",
      "fighting"
    ],
    "gen": 4,
    "id": "croagunk"
  },
  {
    "dex": 454,
    "name": "Toxicroak",
    "types": [
      "poison",
      "fighting"
    ],
    "gen": 4,
    "id": "toxicroak"
  },
  {
    "dex": 455,
    "name": "Carnivine",
    "types": [
      "grass"
    ],
    "gen": 4,
    "id": "carnivine"
  },
  {
    "dex": 456,
    "name": "Finneon",
    "types": [
      "water"
    ],
    "gen": 4,
    "id": "finneon"
  },
  {
    "dex": 457,
    "name": "Lumineon",
    "types": [
      "water"
    ],
    "gen": 4,
    "id": "lumineon"
  },
  {
    "dex": 458,
    "name": "Mantyke",
    "types": [
      "water",
      "flying"
    ],
    "gen": 4,
    "id": "mantyke"
  },
  {
    "dex": 459,
    "name": "Snover",
    "types": [
      "grass",
      "ice"
    ],
    "gen": 4,
    "id": "snover"
  },
  {
    "dex": 460,
    "name": "Abomasnow",
    "types": [
      "grass",
      "ice"
    ],
    "gen": 4,
    "id": "abomasnow"
  },
  {
    "dex": 461,
    "name": "Weavile",
    "types": [
      "dark",
      "ice"
    ],
    "gen": 4,
    "id": "weavile"
  },
  {
    "dex": 462,
    "name": "Magnezone",
    "types": [
      "electric",
      "steel"
    ],
    "gen": 4,
    "id": "magnezone"
  },
  {
    "dex": 463,
    "name": "Lickilicky",
    "types": [
      "normal"
    ],
    "gen": 4,
    "id": "lickilicky"
  },
  {
    "dex": 464,
    "name": "Rhyperior",
    "types": [
      "ground",
      "rock"
    ],
    "gen": 4,
    "id": "rhyperior"
  },
  {
    "dex": 465,
    "name": "Tangrowth",
    "types": [
      "grass"
    ],
    "gen": 4,
    "id": "tangrowth"
  },
  {
    "dex": 466,
    "name": "Electivire",
    "types": [
      "electric"
    ],
    "gen": 4,
    "id": "electivire"
  },
  {
    "dex": 467,
    "name": "Magmortar",
    "types": [
      "fire"
    ],
    "gen": 4,
    "id": "magmortar"
  },
  {
    "dex": 468,
    "name": "Togekiss",
    "types": [
      "fairy",
      "flying"
    ],
    "gen": 4,
    "id": "togekiss"
  },
  {
    "dex": 469,
    "name": "Yanmega",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 4,
    "id": "yanmega"
  },
  {
    "dex": 470,
    "name": "Leafeon",
    "types": [
      "grass"
    ],
    "gen": 4,
    "id": "leafeon"
  },
  {
    "dex": 471,
    "name": "Glaceon",
    "types": [
      "ice"
    ],
    "gen": 4,
    "id": "glaceon"
  },
  {
    "dex": 472,
    "name": "Gliscor",
    "types": [
      "ground",
      "flying"
    ],
    "gen": 4,
    "id": "gliscor"
  },
  {
    "dex": 473,
    "name": "Mamoswine",
    "types": [
      "ice",
      "ground"
    ],
    "gen": 4,
    "id": "mamoswine"
  },
  {
    "dex": 474,
    "name": "Porygon-z",
    "types": [
      "normal"
    ],
    "gen": 4,
    "id": "porygon-z"
  },
  {
    "dex": 475,
    "name": "Gallade",
    "types": [
      "psychic",
      "fighting"
    ],
    "gen": 4,
    "id": "gallade"
  },
  {
    "dex": 476,
    "name": "Probopass",
    "types": [
      "rock",
      "steel"
    ],
    "gen": 4,
    "id": "probopass"
  },
  {
    "dex": 477,
    "name": "Dusknoir",
    "types": [
      "ghost"
    ],
    "gen": 4,
    "id": "dusknoir"
  },
  {
    "dex": 478,
    "name": "Froslass",
    "types": [
      "ice",
      "ghost"
    ],
    "gen": 4,
    "id": "froslass"
  },
  {
    "dex": 479,
    "name": "Rotom",
    "types": [
      "electric",
      "ghost"
    ],
    "gen": 4,
    "id": "rotom"
  },
  {
    "dex": 480,
    "name": "Uxie",
    "types": [
      "psychic"
    ],
    "gen": 4,
    "id": "uxie"
  },
  {
    "dex": 481,
    "name": "Mesprit",
    "types": [
      "psychic"
    ],
    "gen": 4,
    "id": "mesprit"
  },
  {
    "dex": 482,
    "name": "Azelf",
    "types": [
      "psychic"
    ],
    "gen": 4,
    "id": "azelf"
  },
  {
    "dex": 483,
    "name": "Dialga",
    "types": [
      "steel",
      "dragon"
    ],
    "gen": 4,
    "id": "dialga"
  },
  {
    "dex": 484,
    "name": "Palkia",
    "types": [
      "water",
      "dragon"
    ],
    "gen": 4,
    "id": "palkia"
  },
  {
    "dex": 485,
    "name": "Heatran",
    "types": [
      "fire",
      "steel"
    ],
    "gen": 4,
    "id": "heatran"
  },
  {
    "dex": 486,
    "name": "Regigigas",
    "types": [
      "normal"
    ],
    "gen": 4,
    "id": "regigigas"
  },
  {
    "dex": 487,
    "name": "Giratina-altered",
    "types": [
      "ghost",
      "dragon"
    ],
    "gen": 4,
    "id": "giratina-altered"
  },
  {
    "dex": 488,
    "name": "Cresselia",
    "types": [
      "psychic"
    ],
    "gen": 4,
    "id": "cresselia"
  },
  {
    "dex": 489,
    "name": "Phione",
    "types": [
      "water"
    ],
    "gen": 4,
    "id": "phione"
  },
  {
    "dex": 490,
    "name": "Manaphy",
    "types": [
      "water"
    ],
    "gen": 4,
    "id": "manaphy"
  },
  {
    "dex": 491,
    "name": "Darkrai",
    "types": [
      "dark"
    ],
    "gen": 4,
    "id": "darkrai"
  },
  {
    "dex": 492,
    "name": "Shaymin-land",
    "types": [
      "grass"
    ],
    "gen": 4,
    "id": "shaymin-land"
  },
  {
    "dex": 493,
    "name": "Arceus",
    "types": [
      "normal"
    ],
    "gen": 4,
    "id": "arceus"
  },
  {
    "dex": 494,
    "name": "Victini",
    "types": [
      "psychic",
      "fire"
    ],
    "gen": 5,
    "id": "victini"
  },
  {
    "dex": 495,
    "name": "Snivy",
    "types": [
      "grass"
    ],
    "gen": 5,
    "id": "snivy"
  },
  {
    "dex": 496,
    "name": "Servine",
    "types": [
      "grass"
    ],
    "gen": 5,
    "id": "servine"
  },
  {
    "dex": 497,
    "name": "Serperior",
    "types": [
      "grass"
    ],
    "gen": 5,
    "id": "serperior"
  },
  {
    "dex": 498,
    "name": "Tepig",
    "types": [
      "fire"
    ],
    "gen": 5,
    "id": "tepig"
  },
  {
    "dex": 499,
    "name": "Pignite",
    "types": [
      "fire",
      "fighting"
    ],
    "gen": 5,
    "id": "pignite"
  },
  {
    "dex": 500,
    "name": "Emboar",
    "types": [
      "fire",
      "fighting"
    ],
    "gen": 5,
    "id": "emboar"
  },
  {
    "dex": 501,
    "name": "Oshawott",
    "types": [
      "water"
    ],
    "gen": 5,
    "id": "oshawott"
  },
  {
    "dex": 502,
    "name": "Dewott",
    "types": [
      "water"
    ],
    "gen": 5,
    "id": "dewott"
  },
  {
    "dex": 503,
    "name": "Samurott",
    "types": [
      "water"
    ],
    "gen": 5,
    "id": "samurott"
  },
  {
    "dex": 504,
    "name": "Patrat",
    "types": [
      "normal"
    ],
    "gen": 5,
    "id": "patrat"
  },
  {
    "dex": 505,
    "name": "Watchog",
    "types": [
      "normal"
    ],
    "gen": 5,
    "id": "watchog"
  },
  {
    "dex": 506,
    "name": "Lillipup",
    "types": [
      "normal"
    ],
    "gen": 5,
    "id": "lillipup"
  },
  {
    "dex": 507,
    "name": "Herdier",
    "types": [
      "normal"
    ],
    "gen": 5,
    "id": "herdier"
  },
  {
    "dex": 508,
    "name": "Stoutland",
    "types": [
      "normal"
    ],
    "gen": 5,
    "id": "stoutland"
  },
  {
    "dex": 509,
    "name": "Purrloin",
    "types": [
      "dark"
    ],
    "gen": 5,
    "id": "purrloin"
  },
  {
    "dex": 510,
    "name": "Liepard",
    "types": [
      "dark"
    ],
    "gen": 5,
    "id": "liepard"
  },
  {
    "dex": 511,
    "name": "Pansage",
    "types": [
      "grass"
    ],
    "gen": 5,
    "id": "pansage"
  },
  {
    "dex": 512,
    "name": "Simisage",
    "types": [
      "grass"
    ],
    "gen": 5,
    "id": "simisage"
  },
  {
    "dex": 513,
    "name": "Pansear",
    "types": [
      "fire"
    ],
    "gen": 5,
    "id": "pansear"
  },
  {
    "dex": 514,
    "name": "Simisear",
    "types": [
      "fire"
    ],
    "gen": 5,
    "id": "simisear"
  },
  {
    "dex": 515,
    "name": "Panpour",
    "types": [
      "water"
    ],
    "gen": 5,
    "id": "panpour"
  },
  {
    "dex": 516,
    "name": "Simipour",
    "types": [
      "water"
    ],
    "gen": 5,
    "id": "simipour"
  },
  {
    "dex": 517,
    "name": "Munna",
    "types": [
      "psychic"
    ],
    "gen": 5,
    "id": "munna"
  },
  {
    "dex": 518,
    "name": "Musharna",
    "types": [
      "psychic"
    ],
    "gen": 5,
    "id": "musharna"
  },
  {
    "dex": 519,
    "name": "Pidove",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 5,
    "id": "pidove"
  },
  {
    "dex": 520,
    "name": "Tranquill",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 5,
    "id": "tranquill"
  },
  {
    "dex": 521,
    "name": "Unfezant",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 5,
    "id": "unfezant"
  },
  {
    "dex": 522,
    "name": "Blitzle",
    "types": [
      "electric"
    ],
    "gen": 5,
    "id": "blitzle"
  },
  {
    "dex": 523,
    "name": "Zebstrika",
    "types": [
      "electric"
    ],
    "gen": 5,
    "id": "zebstrika"
  },
  {
    "dex": 524,
    "name": "Roggenrola",
    "types": [
      "rock"
    ],
    "gen": 5,
    "id": "roggenrola"
  },
  {
    "dex": 525,
    "name": "Boldore",
    "types": [
      "rock"
    ],
    "gen": 5,
    "id": "boldore"
  },
  {
    "dex": 526,
    "name": "Gigalith",
    "types": [
      "rock"
    ],
    "gen": 5,
    "id": "gigalith"
  },
  {
    "dex": 527,
    "name": "Woobat",
    "types": [
      "psychic",
      "flying"
    ],
    "gen": 5,
    "id": "woobat"
  },
  {
    "dex": 528,
    "name": "Swoobat",
    "types": [
      "psychic",
      "flying"
    ],
    "gen": 5,
    "id": "swoobat"
  },
  {
    "dex": 529,
    "name": "Drilbur",
    "types": [
      "ground"
    ],
    "gen": 5,
    "id": "drilbur"
  },
  {
    "dex": 530,
    "name": "Excadrill",
    "types": [
      "ground",
      "steel"
    ],
    "gen": 5,
    "id": "excadrill"
  },
  {
    "dex": 531,
    "name": "Audino",
    "types": [
      "normal"
    ],
    "gen": 5,
    "id": "audino"
  },
  {
    "dex": 532,
    "name": "Timburr",
    "types": [
      "fighting"
    ],
    "gen": 5,
    "id": "timburr"
  },
  {
    "dex": 533,
    "name": "Gurdurr",
    "types": [
      "fighting"
    ],
    "gen": 5,
    "id": "gurdurr"
  },
  {
    "dex": 534,
    "name": "Conkeldurr",
    "types": [
      "fighting"
    ],
    "gen": 5,
    "id": "conkeldurr"
  },
  {
    "dex": 535,
    "name": "Tympole",
    "types": [
      "water"
    ],
    "gen": 5,
    "id": "tympole"
  },
  {
    "dex": 536,
    "name": "Palpitoad",
    "types": [
      "water",
      "ground"
    ],
    "gen": 5,
    "id": "palpitoad"
  },
  {
    "dex": 537,
    "name": "Seismitoad",
    "types": [
      "water",
      "ground"
    ],
    "gen": 5,
    "id": "seismitoad"
  },
  {
    "dex": 538,
    "name": "Throh",
    "types": [
      "fighting"
    ],
    "gen": 5,
    "id": "throh"
  },
  {
    "dex": 539,
    "name": "Sawk",
    "types": [
      "fighting"
    ],
    "gen": 5,
    "id": "sawk"
  },
  {
    "dex": 540,
    "name": "Sewaddle",
    "types": [
      "bug",
      "grass"
    ],
    "gen": 5,
    "id": "sewaddle"
  },
  {
    "dex": 541,
    "name": "Swadloon",
    "types": [
      "bug",
      "grass"
    ],
    "gen": 5,
    "id": "swadloon"
  },
  {
    "dex": 542,
    "name": "Leavanny",
    "types": [
      "bug",
      "grass"
    ],
    "gen": 5,
    "id": "leavanny"
  },
  {
    "dex": 543,
    "name": "Venipede",
    "types": [
      "bug",
      "poison"
    ],
    "gen": 5,
    "id": "venipede"
  },
  {
    "dex": 544,
    "name": "Whirlipede",
    "types": [
      "bug",
      "poison"
    ],
    "gen": 5,
    "id": "whirlipede"
  },
  {
    "dex": 545,
    "name": "Scolipede",
    "types": [
      "bug",
      "poison"
    ],
    "gen": 5,
    "id": "scolipede"
  },
  {
    "dex": 546,
    "name": "Cottonee",
    "types": [
      "grass",
      "fairy"
    ],
    "gen": 5,
    "id": "cottonee"
  },
  {
    "dex": 547,
    "name": "Whimsicott",
    "types": [
      "grass",
      "fairy"
    ],
    "gen": 5,
    "id": "whimsicott"
  },
  {
    "dex": 548,
    "name": "Petilil",
    "types": [
      "grass"
    ],
    "gen": 5,
    "id": "petilil"
  },
  {
    "dex": 549,
    "name": "Lilligant",
    "types": [
      "grass"
    ],
    "gen": 5,
    "id": "lilligant"
  },
  {
    "dex": 550,
    "name": "Basculin-red-striped",
    "types": [
      "water"
    ],
    "gen": 5,
    "id": "basculin-red-striped"
  },
  {
    "dex": 551,
    "name": "Sandile",
    "types": [
      "ground",
      "dark"
    ],
    "gen": 5,
    "id": "sandile"
  },
  {
    "dex": 552,
    "name": "Krokorok",
    "types": [
      "ground",
      "dark"
    ],
    "gen": 5,
    "id": "krokorok"
  },
  {
    "dex": 553,
    "name": "Krookodile",
    "types": [
      "ground",
      "dark"
    ],
    "gen": 5,
    "id": "krookodile"
  },
  {
    "dex": 554,
    "name": "Darumaka",
    "types": [
      "fire"
    ],
    "gen": 5,
    "id": "darumaka"
  },
  {
    "dex": 555,
    "name": "Darmanitan-standard",
    "types": [
      "fire"
    ],
    "gen": 5,
    "id": "darmanitan-standard"
  },
  {
    "dex": 556,
    "name": "Maractus",
    "types": [
      "grass"
    ],
    "gen": 5,
    "id": "maractus"
  },
  {
    "dex": 557,
    "name": "Dwebble",
    "types": [
      "bug",
      "rock"
    ],
    "gen": 5,
    "id": "dwebble"
  },
  {
    "dex": 558,
    "name": "Crustle",
    "types": [
      "bug",
      "rock"
    ],
    "gen": 5,
    "id": "crustle"
  },
  {
    "dex": 559,
    "name": "Scraggy",
    "types": [
      "dark",
      "fighting"
    ],
    "gen": 5,
    "id": "scraggy"
  },
  {
    "dex": 560,
    "name": "Scrafty",
    "types": [
      "dark",
      "fighting"
    ],
    "gen": 5,
    "id": "scrafty"
  },
  {
    "dex": 561,
    "name": "Sigilyph",
    "types": [
      "psychic",
      "flying"
    ],
    "gen": 5,
    "id": "sigilyph"
  },
  {
    "dex": 562,
    "name": "Yamask",
    "types": [
      "ghost"
    ],
    "gen": 5,
    "id": "yamask"
  },
  {
    "dex": 563,
    "name": "Cofagrigus",
    "types": [
      "ghost"
    ],
    "gen": 5,
    "id": "cofagrigus"
  },
  {
    "dex": 564,
    "name": "Tirtouga",
    "types": [
      "water",
      "rock"
    ],
    "gen": 5,
    "id": "tirtouga"
  },
  {
    "dex": 565,
    "name": "Carracosta",
    "types": [
      "water",
      "rock"
    ],
    "gen": 5,
    "id": "carracosta"
  },
  {
    "dex": 566,
    "name": "Archen",
    "types": [
      "rock",
      "flying"
    ],
    "gen": 5,
    "id": "archen"
  },
  {
    "dex": 567,
    "name": "Archeops",
    "types": [
      "rock",
      "flying"
    ],
    "gen": 5,
    "id": "archeops"
  },
  {
    "dex": 568,
    "name": "Trubbish",
    "types": [
      "poison"
    ],
    "gen": 5,
    "id": "trubbish"
  },
  {
    "dex": 569,
    "name": "Garbodor",
    "types": [
      "poison"
    ],
    "gen": 5,
    "id": "garbodor"
  },
  {
    "dex": 570,
    "name": "Zorua",
    "types": [
      "dark"
    ],
    "gen": 5,
    "id": "zorua"
  },
  {
    "dex": 571,
    "name": "Zoroark",
    "types": [
      "dark"
    ],
    "gen": 5,
    "id": "zoroark"
  },
  {
    "dex": 572,
    "name": "Minccino",
    "types": [
      "normal"
    ],
    "gen": 5,
    "id": "minccino"
  },
  {
    "dex": 573,
    "name": "Cinccino",
    "types": [
      "normal"
    ],
    "gen": 5,
    "id": "cinccino"
  },
  {
    "dex": 574,
    "name": "Gothita",
    "types": [
      "psychic"
    ],
    "gen": 5,
    "id": "gothita"
  },
  {
    "dex": 575,
    "name": "Gothorita",
    "types": [
      "psychic"
    ],
    "gen": 5,
    "id": "gothorita"
  },
  {
    "dex": 576,
    "name": "Gothitelle",
    "types": [
      "psychic"
    ],
    "gen": 5,
    "id": "gothitelle"
  },
  {
    "dex": 577,
    "name": "Solosis",
    "types": [
      "psychic"
    ],
    "gen": 5,
    "id": "solosis"
  },
  {
    "dex": 578,
    "name": "Duosion",
    "types": [
      "psychic"
    ],
    "gen": 5,
    "id": "duosion"
  },
  {
    "dex": 579,
    "name": "Reuniclus",
    "types": [
      "psychic"
    ],
    "gen": 5,
    "id": "reuniclus"
  },
  {
    "dex": 580,
    "name": "Ducklett",
    "types": [
      "water",
      "flying"
    ],
    "gen": 5,
    "id": "ducklett"
  },
  {
    "dex": 581,
    "name": "Swanna",
    "types": [
      "water",
      "flying"
    ],
    "gen": 5,
    "id": "swanna"
  },
  {
    "dex": 582,
    "name": "Vanillite",
    "types": [
      "ice"
    ],
    "gen": 5,
    "id": "vanillite"
  },
  {
    "dex": 583,
    "name": "Vanillish",
    "types": [
      "ice"
    ],
    "gen": 5,
    "id": "vanillish"
  },
  {
    "dex": 584,
    "name": "Vanilluxe",
    "types": [
      "ice"
    ],
    "gen": 5,
    "id": "vanilluxe"
  },
  {
    "dex": 585,
    "name": "Deerling",
    "types": [
      "normal",
      "grass"
    ],
    "gen": 5,
    "id": "deerling"
  },
  {
    "dex": 586,
    "name": "Sawsbuck",
    "types": [
      "normal",
      "grass"
    ],
    "gen": 5,
    "id": "sawsbuck"
  },
  {
    "dex": 587,
    "name": "Emolga",
    "types": [
      "electric",
      "flying"
    ],
    "gen": 5,
    "id": "emolga"
  },
  {
    "dex": 588,
    "name": "Karrablast",
    "types": [
      "bug"
    ],
    "gen": 5,
    "id": "karrablast"
  },
  {
    "dex": 589,
    "name": "Escavalier",
    "types": [
      "bug",
      "steel"
    ],
    "gen": 5,
    "id": "escavalier"
  },
  {
    "dex": 590,
    "name": "Foongus",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 5,
    "id": "foongus"
  },
  {
    "dex": 591,
    "name": "Amoonguss",
    "types": [
      "grass",
      "poison"
    ],
    "gen": 5,
    "id": "amoonguss"
  },
  {
    "dex": 592,
    "name": "Frillish",
    "types": [
      "water",
      "ghost"
    ],
    "gen": 5,
    "id": "frillish"
  },
  {
    "dex": 593,
    "name": "Jellicent",
    "types": [
      "water",
      "ghost"
    ],
    "gen": 5,
    "id": "jellicent"
  },
  {
    "dex": 594,
    "name": "Alomomola",
    "types": [
      "water"
    ],
    "gen": 5,
    "id": "alomomola"
  },
  {
    "dex": 595,
    "name": "Joltik",
    "types": [
      "bug",
      "electric"
    ],
    "gen": 5,
    "id": "joltik"
  },
  {
    "dex": 596,
    "name": "Galvantula",
    "types": [
      "bug",
      "electric"
    ],
    "gen": 5,
    "id": "galvantula"
  },
  {
    "dex": 597,
    "name": "Ferroseed",
    "types": [
      "grass",
      "steel"
    ],
    "gen": 5,
    "id": "ferroseed"
  },
  {
    "dex": 598,
    "name": "Ferrothorn",
    "types": [
      "grass",
      "steel"
    ],
    "gen": 5,
    "id": "ferrothorn"
  },
  {
    "dex": 599,
    "name": "Klink",
    "types": [
      "steel"
    ],
    "gen": 5,
    "id": "klink"
  },
  {
    "dex": 600,
    "name": "Klang",
    "types": [
      "steel"
    ],
    "gen": 5,
    "id": "klang"
  },
  {
    "dex": 601,
    "name": "Klinklang",
    "types": [
      "steel"
    ],
    "gen": 5,
    "id": "klinklang"
  },
  {
    "dex": 602,
    "name": "Tynamo",
    "types": [
      "electric"
    ],
    "gen": 5,
    "id": "tynamo"
  },
  {
    "dex": 603,
    "name": "Eelektrik",
    "types": [
      "electric"
    ],
    "gen": 5,
    "id": "eelektrik"
  },
  {
    "dex": 604,
    "name": "Eelektross",
    "types": [
      "electric"
    ],
    "gen": 5,
    "id": "eelektross"
  },
  {
    "dex": 605,
    "name": "Elgyem",
    "types": [
      "psychic"
    ],
    "gen": 5,
    "id": "elgyem"
  },
  {
    "dex": 606,
    "name": "Beheeyem",
    "types": [
      "psychic"
    ],
    "gen": 5,
    "id": "beheeyem"
  },
  {
    "dex": 607,
    "name": "Litwick",
    "types": [
      "ghost",
      "fire"
    ],
    "gen": 5,
    "id": "litwick"
  },
  {
    "dex": 608,
    "name": "Lampent",
    "types": [
      "ghost",
      "fire"
    ],
    "gen": 5,
    "id": "lampent"
  },
  {
    "dex": 609,
    "name": "Chandelure",
    "types": [
      "ghost",
      "fire"
    ],
    "gen": 5,
    "id": "chandelure"
  },
  {
    "dex": 610,
    "name": "Axew",
    "types": [
      "dragon"
    ],
    "gen": 5,
    "id": "axew"
  },
  {
    "dex": 611,
    "name": "Fraxure",
    "types": [
      "dragon"
    ],
    "gen": 5,
    "id": "fraxure"
  },
  {
    "dex": 612,
    "name": "Haxorus",
    "types": [
      "dragon"
    ],
    "gen": 5,
    "id": "haxorus"
  },
  {
    "dex": 613,
    "name": "Cubchoo",
    "types": [
      "ice"
    ],
    "gen": 5,
    "id": "cubchoo"
  },
  {
    "dex": 614,
    "name": "Beartic",
    "types": [
      "ice"
    ],
    "gen": 5,
    "id": "beartic"
  },
  {
    "dex": 615,
    "name": "Cryogonal",
    "types": [
      "ice"
    ],
    "gen": 5,
    "id": "cryogonal"
  },
  {
    "dex": 616,
    "name": "Shelmet",
    "types": [
      "bug"
    ],
    "gen": 5,
    "id": "shelmet"
  },
  {
    "dex": 617,
    "name": "Accelgor",
    "types": [
      "bug"
    ],
    "gen": 5,
    "id": "accelgor"
  },
  {
    "dex": 618,
    "name": "Stunfisk",
    "types": [
      "ground",
      "electric"
    ],
    "gen": 5,
    "id": "stunfisk"
  },
  {
    "dex": 619,
    "name": "Mienfoo",
    "types": [
      "fighting"
    ],
    "gen": 5,
    "id": "mienfoo"
  },
  {
    "dex": 620,
    "name": "Mienshao",
    "types": [
      "fighting"
    ],
    "gen": 5,
    "id": "mienshao"
  },
  {
    "dex": 621,
    "name": "Druddigon",
    "types": [
      "dragon"
    ],
    "gen": 5,
    "id": "druddigon"
  },
  {
    "dex": 622,
    "name": "Golett",
    "types": [
      "ground",
      "ghost"
    ],
    "gen": 5,
    "id": "golett"
  },
  {
    "dex": 623,
    "name": "Golurk",
    "types": [
      "ground",
      "ghost"
    ],
    "gen": 5,
    "id": "golurk"
  },
  {
    "dex": 624,
    "name": "Pawniard",
    "types": [
      "dark",
      "steel"
    ],
    "gen": 5,
    "id": "pawniard"
  },
  {
    "dex": 625,
    "name": "Bisharp",
    "types": [
      "dark",
      "steel"
    ],
    "gen": 5,
    "id": "bisharp"
  },
  {
    "dex": 626,
    "name": "Bouffalant",
    "types": [
      "normal"
    ],
    "gen": 5,
    "id": "bouffalant"
  },
  {
    "dex": 627,
    "name": "Rufflet",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 5,
    "id": "rufflet"
  },
  {
    "dex": 628,
    "name": "Braviary",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 5,
    "id": "braviary"
  },
  {
    "dex": 629,
    "name": "Vullaby",
    "types": [
      "dark",
      "flying"
    ],
    "gen": 5,
    "id": "vullaby"
  },
  {
    "dex": 630,
    "name": "Mandibuzz",
    "types": [
      "dark",
      "flying"
    ],
    "gen": 5,
    "id": "mandibuzz"
  },
  {
    "dex": 631,
    "name": "Heatmor",
    "types": [
      "fire"
    ],
    "gen": 5,
    "id": "heatmor"
  },
  {
    "dex": 632,
    "name": "Durant",
    "types": [
      "bug",
      "steel"
    ],
    "gen": 5,
    "id": "durant"
  },
  {
    "dex": 633,
    "name": "Deino",
    "types": [
      "dark",
      "dragon"
    ],
    "gen": 5,
    "id": "deino"
  },
  {
    "dex": 634,
    "name": "Zweilous",
    "types": [
      "dark",
      "dragon"
    ],
    "gen": 5,
    "id": "zweilous"
  },
  {
    "dex": 635,
    "name": "Hydreigon",
    "types": [
      "dark",
      "dragon"
    ],
    "gen": 5,
    "id": "hydreigon"
  },
  {
    "dex": 636,
    "name": "Larvesta",
    "types": [
      "bug",
      "fire"
    ],
    "gen": 5,
    "id": "larvesta"
  },
  {
    "dex": 637,
    "name": "Volcarona",
    "types": [
      "bug",
      "fire"
    ],
    "gen": 5,
    "id": "volcarona"
  },
  {
    "dex": 638,
    "name": "Cobalion",
    "types": [
      "steel",
      "fighting"
    ],
    "gen": 5,
    "id": "cobalion"
  },
  {
    "dex": 639,
    "name": "Terrakion",
    "types": [
      "rock",
      "fighting"
    ],
    "gen": 5,
    "id": "terrakion"
  },
  {
    "dex": 640,
    "name": "Virizion",
    "types": [
      "grass",
      "fighting"
    ],
    "gen": 5,
    "id": "virizion"
  },
  {
    "dex": 641,
    "name": "Tornadus-incarnate",
    "types": [
      "flying"
    ],
    "gen": 5,
    "id": "tornadus-incarnate"
  },
  {
    "dex": 642,
    "name": "Thundurus-incarnate",
    "types": [
      "electric",
      "flying"
    ],
    "gen": 5,
    "id": "thundurus-incarnate"
  },
  {
    "dex": 643,
    "name": "Reshiram",
    "types": [
      "dragon",
      "fire"
    ],
    "gen": 5,
    "id": "reshiram"
  },
  {
    "dex": 644,
    "name": "Zekrom",
    "types": [
      "dragon",
      "electric"
    ],
    "gen": 5,
    "id": "zekrom"
  },
  {
    "dex": 645,
    "name": "Landorus-incarnate",
    "types": [
      "ground",
      "flying"
    ],
    "gen": 5,
    "id": "landorus-incarnate"
  },
  {
    "dex": 646,
    "name": "Kyurem",
    "types": [
      "dragon",
      "ice"
    ],
    "gen": 5,
    "id": "kyurem"
  },
  {
    "dex": 647,
    "name": "Keldeo-ordinary",
    "types": [
      "water",
      "fighting"
    ],
    "gen": 5,
    "id": "keldeo-ordinary"
  },
  {
    "dex": 648,
    "name": "Meloetta-aria",
    "types": [
      "normal",
      "psychic"
    ],
    "gen": 5,
    "id": "meloetta-aria"
  },
  {
    "dex": 649,
    "name": "Genesect",
    "types": [
      "bug",
      "steel"
    ],
    "gen": 5,
    "id": "genesect"
  },
  {
    "dex": 650,
    "name": "Chespin",
    "types": [
      "grass"
    ],
    "gen": 6,
    "id": "chespin"
  },
  {
    "dex": 651,
    "name": "Quilladin",
    "types": [
      "grass"
    ],
    "gen": 6,
    "id": "quilladin"
  },
  {
    "dex": 652,
    "name": "Chesnaught",
    "types": [
      "grass",
      "fighting"
    ],
    "gen": 6,
    "id": "chesnaught"
  },
  {
    "dex": 653,
    "name": "Fennekin",
    "types": [
      "fire"
    ],
    "gen": 6,
    "id": "fennekin"
  },
  {
    "dex": 654,
    "name": "Braixen",
    "types": [
      "fire"
    ],
    "gen": 6,
    "id": "braixen"
  },
  {
    "dex": 655,
    "name": "Delphox",
    "types": [
      "fire",
      "psychic"
    ],
    "gen": 6,
    "id": "delphox"
  },
  {
    "dex": 656,
    "name": "Froakie",
    "types": [
      "water"
    ],
    "gen": 6,
    "id": "froakie"
  },
  {
    "dex": 657,
    "name": "Frogadier",
    "types": [
      "water"
    ],
    "gen": 6,
    "id": "frogadier"
  },
  {
    "dex": 658,
    "name": "Greninja",
    "types": [
      "water",
      "dark"
    ],
    "gen": 6,
    "id": "greninja"
  },
  {
    "dex": 659,
    "name": "Bunnelby",
    "types": [
      "normal"
    ],
    "gen": 6,
    "id": "bunnelby"
  },
  {
    "dex": 660,
    "name": "Diggersby",
    "types": [
      "normal",
      "ground"
    ],
    "gen": 6,
    "id": "diggersby"
  },
  {
    "dex": 661,
    "name": "Fletchling",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 6,
    "id": "fletchling"
  },
  {
    "dex": 662,
    "name": "Fletchinder",
    "types": [
      "fire",
      "flying"
    ],
    "gen": 6,
    "id": "fletchinder"
  },
  {
    "dex": 663,
    "name": "Talonflame",
    "types": [
      "fire",
      "flying"
    ],
    "gen": 6,
    "id": "talonflame"
  },
  {
    "dex": 664,
    "name": "Scatterbug",
    "types": [
      "bug"
    ],
    "gen": 6,
    "id": "scatterbug"
  },
  {
    "dex": 665,
    "name": "Spewpa",
    "types": [
      "bug"
    ],
    "gen": 6,
    "id": "spewpa"
  },
  {
    "dex": 666,
    "name": "Vivillon",
    "types": [
      "bug",
      "flying"
    ],
    "gen": 6,
    "id": "vivillon"
  },
  {
    "dex": 667,
    "name": "Litleo",
    "types": [
      "fire",
      "normal"
    ],
    "gen": 6,
    "id": "litleo"
  },
  {
    "dex": 668,
    "name": "Pyroar",
    "types": [
      "fire",
      "normal"
    ],
    "gen": 6,
    "id": "pyroar"
  },
  {
    "dex": 669,
    "name": "Flabebe",
    "types": [
      "fairy"
    ],
    "gen": 6,
    "id": "flabebe"
  },
  {
    "dex": 670,
    "name": "Floette",
    "types": [
      "fairy"
    ],
    "gen": 6,
    "id": "floette"
  },
  {
    "dex": 671,
    "name": "Florges",
    "types": [
      "fairy"
    ],
    "gen": 6,
    "id": "florges"
  },
  {
    "dex": 672,
    "name": "Skiddo",
    "types": [
      "grass"
    ],
    "gen": 6,
    "id": "skiddo"
  },
  {
    "dex": 673,
    "name": "Gogoat",
    "types": [
      "grass"
    ],
    "gen": 6,
    "id": "gogoat"
  },
  {
    "dex": 674,
    "name": "Pancham",
    "types": [
      "fighting"
    ],
    "gen": 6,
    "id": "pancham"
  },
  {
    "dex": 675,
    "name": "Pangoro",
    "types": [
      "fighting",
      "dark"
    ],
    "gen": 6,
    "id": "pangoro"
  },
  {
    "dex": 676,
    "name": "Furfrou",
    "types": [
      "normal"
    ],
    "gen": 6,
    "id": "furfrou"
  },
  {
    "dex": 677,
    "name": "Espurr",
    "types": [
      "psychic"
    ],
    "gen": 6,
    "id": "espurr"
  },
  {
    "dex": 678,
    "name": "Meowstic-male",
    "types": [
      "psychic"
    ],
    "gen": 6,
    "id": "meowstic-male"
  },
  {
    "dex": 679,
    "name": "Honedge",
    "types": [
      "steel",
      "ghost"
    ],
    "gen": 6,
    "id": "honedge"
  },
  {
    "dex": 680,
    "name": "Doublade",
    "types": [
      "steel",
      "ghost"
    ],
    "gen": 6,
    "id": "doublade"
  },
  {
    "dex": 681,
    "name": "Aegislash-shield",
    "types": [
      "steel",
      "ghost"
    ],
    "gen": 6,
    "id": "aegislash-shield"
  },
  {
    "dex": 682,
    "name": "Spritzee",
    "types": [
      "fairy"
    ],
    "gen": 6,
    "id": "spritzee"
  },
  {
    "dex": 683,
    "name": "Aromatisse",
    "types": [
      "fairy"
    ],
    "gen": 6,
    "id": "aromatisse"
  },
  {
    "dex": 684,
    "name": "Swirlix",
    "types": [
      "fairy"
    ],
    "gen": 6,
    "id": "swirlix"
  },
  {
    "dex": 685,
    "name": "Slurpuff",
    "types": [
      "fairy"
    ],
    "gen": 6,
    "id": "slurpuff"
  },
  {
    "dex": 686,
    "name": "Inkay",
    "types": [
      "dark",
      "psychic"
    ],
    "gen": 6,
    "id": "inkay"
  },
  {
    "dex": 687,
    "name": "Malamar",
    "types": [
      "dark",
      "psychic"
    ],
    "gen": 6,
    "id": "malamar"
  },
  {
    "dex": 688,
    "name": "Binacle",
    "types": [
      "rock",
      "water"
    ],
    "gen": 6,
    "id": "binacle"
  },
  {
    "dex": 689,
    "name": "Barbaracle",
    "types": [
      "rock",
      "water"
    ],
    "gen": 6,
    "id": "barbaracle"
  },
  {
    "dex": 690,
    "name": "Skrelp",
    "types": [
      "poison",
      "water"
    ],
    "gen": 6,
    "id": "skrelp"
  },
  {
    "dex": 691,
    "name": "Dragalge",
    "types": [
      "poison",
      "dragon"
    ],
    "gen": 6,
    "id": "dragalge"
  },
  {
    "dex": 692,
    "name": "Clauncher",
    "types": [
      "water"
    ],
    "gen": 6,
    "id": "clauncher"
  },
  {
    "dex": 693,
    "name": "Clawitzer",
    "types": [
      "water"
    ],
    "gen": 6,
    "id": "clawitzer"
  },
  {
    "dex": 694,
    "name": "Helioptile",
    "types": [
      "electric",
      "normal"
    ],
    "gen": 6,
    "id": "helioptile"
  },
  {
    "dex": 695,
    "name": "Heliolisk",
    "types": [
      "electric",
      "normal"
    ],
    "gen": 6,
    "id": "heliolisk"
  },
  {
    "dex": 696,
    "name": "Tyrunt",
    "types": [
      "rock",
      "dragon"
    ],
    "gen": 6,
    "id": "tyrunt"
  },
  {
    "dex": 697,
    "name": "Tyrantrum",
    "types": [
      "rock",
      "dragon"
    ],
    "gen": 6,
    "id": "tyrantrum"
  },
  {
    "dex": 698,
    "name": "Amaura",
    "types": [
      "rock",
      "ice"
    ],
    "gen": 6,
    "id": "amaura"
  },
  {
    "dex": 699,
    "name": "Aurorus",
    "types": [
      "rock",
      "ice"
    ],
    "gen": 6,
    "id": "aurorus"
  },
  {
    "dex": 700,
    "name": "Sylveon",
    "types": [
      "fairy"
    ],
    "gen": 6,
    "id": "sylveon"
  },
  {
    "dex": 701,
    "name": "Hawlucha",
    "types": [
      "fighting",
      "flying"
    ],
    "gen": 6,
    "id": "hawlucha"
  },
  {
    "dex": 702,
    "name": "Dedenne",
    "types": [
      "electric",
      "fairy"
    ],
    "gen": 6,
    "id": "dedenne"
  },
  {
    "dex": 703,
    "name": "Carbink",
    "types": [
      "rock",
      "fairy"
    ],
    "gen": 6,
    "id": "carbink"
  },
  {
    "dex": 704,
    "name": "Goomy",
    "types": [
      "dragon"
    ],
    "gen": 6,
    "id": "goomy"
  },
  {
    "dex": 705,
    "name": "Sliggoo",
    "types": [
      "dragon"
    ],
    "gen": 6,
    "id": "sliggoo"
  },
  {
    "dex": 706,
    "name": "Goodra",
    "types": [
      "dragon"
    ],
    "gen": 6,
    "id": "goodra"
  },
  {
    "dex": 707,
    "name": "Klefki",
    "types": [
      "steel",
      "fairy"
    ],
    "gen": 6,
    "id": "klefki"
  },
  {
    "dex": 708,
    "name": "Phantump",
    "types": [
      "ghost",
      "grass"
    ],
    "gen": 6,
    "id": "phantump"
  },
  {
    "dex": 709,
    "name": "Trevenant",
    "types": [
      "ghost",
      "grass"
    ],
    "gen": 6,
    "id": "trevenant"
  },
  {
    "dex": 710,
    "name": "Pumpkaboo-average",
    "types": [
      "ghost",
      "grass"
    ],
    "gen": 6,
    "id": "pumpkaboo-average"
  },
  {
    "dex": 711,
    "name": "Gourgeist-average",
    "types": [
      "ghost",
      "grass"
    ],
    "gen": 6,
    "id": "gourgeist-average"
  },
  {
    "dex": 712,
    "name": "Bergmite",
    "types": [
      "ice"
    ],
    "gen": 6,
    "id": "bergmite"
  },
  {
    "dex": 713,
    "name": "Avalugg",
    "types": [
      "ice"
    ],
    "gen": 6,
    "id": "avalugg"
  },
  {
    "dex": 714,
    "name": "Noibat",
    "types": [
      "flying",
      "dragon"
    ],
    "gen": 6,
    "id": "noibat"
  },
  {
    "dex": 715,
    "name": "Noivern",
    "types": [
      "flying",
      "dragon"
    ],
    "gen": 6,
    "id": "noivern"
  },
  {
    "dex": 716,
    "name": "Xerneas",
    "types": [
      "fairy"
    ],
    "gen": 6,
    "id": "xerneas"
  },
  {
    "dex": 717,
    "name": "Yveltal",
    "types": [
      "dark",
      "flying"
    ],
    "gen": 6,
    "id": "yveltal"
  },
  {
    "dex": 718,
    "name": "Zygarde-50",
    "types": [
      "dragon",
      "ground"
    ],
    "gen": 6,
    "id": "zygarde-50"
  },
  {
    "dex": 719,
    "name": "Diancie",
    "types": [
      "rock",
      "fairy"
    ],
    "gen": 6,
    "id": "diancie"
  },
  {
    "dex": 720,
    "name": "Hoopa",
    "types": [
      "psychic",
      "ghost"
    ],
    "gen": 6,
    "id": "hoopa"
  },
  {
    "dex": 721,
    "name": "Volcanion",
    "types": [
      "fire",
      "water"
    ],
    "gen": 6,
    "id": "volcanion"
  },
  {
    "dex": 722,
    "name": "Rowlet",
    "types": [
      "grass",
      "flying"
    ],
    "gen": 7,
    "id": "rowlet"
  },
  {
    "dex": 723,
    "name": "Dartrix",
    "types": [
      "grass",
      "flying"
    ],
    "gen": 7,
    "id": "dartrix"
  },
  {
    "dex": 724,
    "name": "Decidueye",
    "types": [
      "grass",
      "ghost"
    ],
    "gen": 7,
    "id": "decidueye"
  },
  {
    "dex": 725,
    "name": "Litten",
    "types": [
      "fire"
    ],
    "gen": 7,
    "id": "litten"
  },
  {
    "dex": 726,
    "name": "Torracat",
    "types": [
      "fire"
    ],
    "gen": 7,
    "id": "torracat"
  },
  {
    "dex": 727,
    "name": "Incineroar",
    "types": [
      "fire",
      "dark"
    ],
    "gen": 7,
    "id": "incineroar"
  },
  {
    "dex": 728,
    "name": "Popplio",
    "types": [
      "water"
    ],
    "gen": 7,
    "id": "popplio"
  },
  {
    "dex": 729,
    "name": "Brionne",
    "types": [
      "water"
    ],
    "gen": 7,
    "id": "brionne"
  },
  {
    "dex": 730,
    "name": "Primarina",
    "types": [
      "water",
      "fairy"
    ],
    "gen": 7,
    "id": "primarina"
  },
  {
    "dex": 731,
    "name": "Pikipek",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 7,
    "id": "pikipek"
  },
  {
    "dex": 732,
    "name": "Trumbeak",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 7,
    "id": "trumbeak"
  },
  {
    "dex": 733,
    "name": "Toucannon",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 7,
    "id": "toucannon"
  },
  {
    "dex": 734,
    "name": "Yungoos",
    "types": [
      "normal"
    ],
    "gen": 7,
    "id": "yungoos"
  },
  {
    "dex": 735,
    "name": "Gumshoos",
    "types": [
      "normal"
    ],
    "gen": 7,
    "id": "gumshoos"
  },
  {
    "dex": 736,
    "name": "Grubbin",
    "types": [
      "bug"
    ],
    "gen": 7,
    "id": "grubbin"
  },
  {
    "dex": 737,
    "name": "Charjabug",
    "types": [
      "bug",
      "electric"
    ],
    "gen": 7,
    "id": "charjabug"
  },
  {
    "dex": 738,
    "name": "Vikavolt",
    "types": [
      "bug",
      "electric"
    ],
    "gen": 7,
    "id": "vikavolt"
  },
  {
    "dex": 739,
    "name": "Crabrawler",
    "types": [
      "fighting"
    ],
    "gen": 7,
    "id": "crabrawler"
  },
  {
    "dex": 740,
    "name": "Crabominable",
    "types": [
      "fighting",
      "ice"
    ],
    "gen": 7,
    "id": "crabominable"
  },
  {
    "dex": 741,
    "name": "Oricorio-baile",
    "types": [
      "fire",
      "flying"
    ],
    "gen": 7,
    "id": "oricorio-baile"
  },
  {
    "dex": 742,
    "name": "Cutiefly",
    "types": [
      "bug",
      "fairy"
    ],
    "gen": 7,
    "id": "cutiefly"
  },
  {
    "dex": 743,
    "name": "Ribombee",
    "types": [
      "bug",
      "fairy"
    ],
    "gen": 7,
    "id": "ribombee"
  },
  {
    "dex": 744,
    "name": "Rockruff",
    "types": [
      "rock"
    ],
    "gen": 7,
    "id": "rockruff"
  },
  {
    "dex": 745,
    "name": "Lycanroc-midday",
    "types": [
      "rock"
    ],
    "gen": 7,
    "id": "lycanroc-midday"
  },
  {
    "dex": 746,
    "name": "Wishiwashi-solo",
    "types": [
      "water"
    ],
    "gen": 7,
    "id": "wishiwashi-solo"
  },
  {
    "dex": 747,
    "name": "Mareanie",
    "types": [
      "poison",
      "water"
    ],
    "gen": 7,
    "id": "mareanie"
  },
  {
    "dex": 748,
    "name": "Toxapex",
    "types": [
      "poison",
      "water"
    ],
    "gen": 7,
    "id": "toxapex"
  },
  {
    "dex": 749,
    "name": "Mudbray",
    "types": [
      "ground"
    ],
    "gen": 7,
    "id": "mudbray"
  },
  {
    "dex": 750,
    "name": "Mudsdale",
    "types": [
      "ground"
    ],
    "gen": 7,
    "id": "mudsdale"
  },
  {
    "dex": 751,
    "name": "Dewpider",
    "types": [
      "water",
      "bug"
    ],
    "gen": 7,
    "id": "dewpider"
  },
  {
    "dex": 752,
    "name": "Araquanid",
    "types": [
      "water",
      "bug"
    ],
    "gen": 7,
    "id": "araquanid"
  },
  {
    "dex": 753,
    "name": "Fomantis",
    "types": [
      "grass"
    ],
    "gen": 7,
    "id": "fomantis"
  },
  {
    "dex": 754,
    "name": "Lurantis",
    "types": [
      "grass"
    ],
    "gen": 7,
    "id": "lurantis"
  },
  {
    "dex": 755,
    "name": "Morelull",
    "types": [
      "grass",
      "fairy"
    ],
    "gen": 7,
    "id": "morelull"
  },
  {
    "dex": 756,
    "name": "Shiinotic",
    "types": [
      "grass",
      "fairy"
    ],
    "gen": 7,
    "id": "shiinotic"
  },
  {
    "dex": 757,
    "name": "Salandit",
    "types": [
      "poison",
      "fire"
    ],
    "gen": 7,
    "id": "salandit"
  },
  {
    "dex": 758,
    "name": "Salazzle",
    "types": [
      "poison",
      "fire"
    ],
    "gen": 7,
    "id": "salazzle"
  },
  {
    "dex": 759,
    "name": "Stufful",
    "types": [
      "normal",
      "fighting"
    ],
    "gen": 7,
    "id": "stufful"
  },
  {
    "dex": 760,
    "name": "Bewear",
    "types": [
      "normal",
      "fighting"
    ],
    "gen": 7,
    "id": "bewear"
  },
  {
    "dex": 761,
    "name": "Bounsweet",
    "types": [
      "grass"
    ],
    "gen": 7,
    "id": "bounsweet"
  },
  {
    "dex": 762,
    "name": "Steenee",
    "types": [
      "grass"
    ],
    "gen": 7,
    "id": "steenee"
  },
  {
    "dex": 763,
    "name": "Tsareena",
    "types": [
      "grass"
    ],
    "gen": 7,
    "id": "tsareena"
  },
  {
    "dex": 764,
    "name": "Comfey",
    "types": [
      "fairy"
    ],
    "gen": 7,
    "id": "comfey"
  },
  {
    "dex": 765,
    "name": "Oranguru",
    "types": [
      "normal",
      "psychic"
    ],
    "gen": 7,
    "id": "oranguru"
  },
  {
    "dex": 766,
    "name": "Passimian",
    "types": [
      "fighting"
    ],
    "gen": 7,
    "id": "passimian"
  },
  {
    "dex": 767,
    "name": "Wimpod",
    "types": [
      "bug",
      "water"
    ],
    "gen": 7,
    "id": "wimpod"
  },
  {
    "dex": 768,
    "name": "Golisopod",
    "types": [
      "bug",
      "water"
    ],
    "gen": 7,
    "id": "golisopod"
  },
  {
    "dex": 769,
    "name": "Sandygast",
    "types": [
      "ghost",
      "ground"
    ],
    "gen": 7,
    "id": "sandygast"
  },
  {
    "dex": 770,
    "name": "Palossand",
    "types": [
      "ghost",
      "ground"
    ],
    "gen": 7,
    "id": "palossand"
  },
  {
    "dex": 771,
    "name": "Pyukumuku",
    "types": [
      "water"
    ],
    "gen": 7,
    "id": "pyukumuku"
  },
  {
    "dex": 772,
    "name": "Type-null",
    "types": [
      "normal"
    ],
    "gen": 7,
    "id": "type-null"
  },
  {
    "dex": 773,
    "name": "Silvally",
    "types": [
      "normal"
    ],
    "gen": 7,
    "id": "silvally"
  },
  {
    "dex": 774,
    "name": "Minior-red-meteor",
    "types": [
      "rock",
      "flying"
    ],
    "gen": 7,
    "id": "minior-red-meteor"
  },
  {
    "dex": 775,
    "name": "Komala",
    "types": [
      "normal"
    ],
    "gen": 7,
    "id": "komala"
  },
  {
    "dex": 776,
    "name": "Turtonator",
    "types": [
      "fire",
      "dragon"
    ],
    "gen": 7,
    "id": "turtonator"
  },
  {
    "dex": 777,
    "name": "Togedemaru",
    "types": [
      "electric",
      "steel"
    ],
    "gen": 7,
    "id": "togedemaru"
  },
  {
    "dex": 778,
    "name": "Mimikyu-disguised",
    "types": [
      "ghost",
      "fairy"
    ],
    "gen": 7,
    "id": "mimikyu-disguised"
  },
  {
    "dex": 779,
    "name": "Bruxish",
    "types": [
      "water",
      "psychic"
    ],
    "gen": 7,
    "id": "bruxish"
  },
  {
    "dex": 780,
    "name": "Drampa",
    "types": [
      "normal",
      "dragon"
    ],
    "gen": 7,
    "id": "drampa"
  },
  {
    "dex": 781,
    "name": "Dhelmise",
    "types": [
      "ghost",
      "grass"
    ],
    "gen": 7,
    "id": "dhelmise"
  },
  {
    "dex": 782,
    "name": "Jangmo-o",
    "types": [
      "dragon"
    ],
    "gen": 7,
    "id": "jangmo-o"
  },
  {
    "dex": 783,
    "name": "Hakamo-o",
    "types": [
      "dragon",
      "fighting"
    ],
    "gen": 7,
    "id": "hakamo-o"
  },
  {
    "dex": 784,
    "name": "Kommo-o",
    "types": [
      "dragon",
      "fighting"
    ],
    "gen": 7,
    "id": "kommo-o"
  },
  {
    "dex": 785,
    "name": "Tapu-koko",
    "types": [
      "electric",
      "fairy"
    ],
    "gen": 7,
    "id": "tapu-koko"
  },
  {
    "dex": 786,
    "name": "Tapu-lele",
    "types": [
      "psychic",
      "fairy"
    ],
    "gen": 7,
    "id": "tapu-lele"
  },
  {
    "dex": 787,
    "name": "Tapu-bulu",
    "types": [
      "grass",
      "fairy"
    ],
    "gen": 7,
    "id": "tapu-bulu"
  },
  {
    "dex": 788,
    "name": "Tapu-fini",
    "types": [
      "water",
      "fairy"
    ],
    "gen": 7,
    "id": "tapu-fini"
  },
  {
    "dex": 789,
    "name": "Cosmog",
    "types": [
      "psychic"
    ],
    "gen": 7,
    "id": "cosmog"
  },
  {
    "dex": 790,
    "name": "Cosmoem",
    "types": [
      "psychic"
    ],
    "gen": 7,
    "id": "cosmoem"
  },
  {
    "dex": 791,
    "name": "Solgaleo",
    "types": [
      "psychic",
      "steel"
    ],
    "gen": 7,
    "id": "solgaleo"
  },
  {
    "dex": 792,
    "name": "Lunala",
    "types": [
      "psychic",
      "ghost"
    ],
    "gen": 7,
    "id": "lunala"
  },
  {
    "dex": 793,
    "name": "Nihilego",
    "types": [
      "rock",
      "poison"
    ],
    "gen": 7,
    "id": "nihilego"
  },
  {
    "dex": 794,
    "name": "Buzzwole",
    "types": [
      "bug",
      "fighting"
    ],
    "gen": 7,
    "id": "buzzwole"
  },
  {
    "dex": 795,
    "name": "Pheromosa",
    "types": [
      "bug",
      "fighting"
    ],
    "gen": 7,
    "id": "pheromosa"
  },
  {
    "dex": 796,
    "name": "Xurkitree",
    "types": [
      "electric"
    ],
    "gen": 7,
    "id": "xurkitree"
  },
  {
    "dex": 797,
    "name": "Celesteela",
    "types": [
      "steel",
      "flying"
    ],
    "gen": 7,
    "id": "celesteela"
  },
  {
    "dex": 798,
    "name": "Kartana",
    "types": [
      "grass",
      "steel"
    ],
    "gen": 7,
    "id": "kartana"
  },
  {
    "dex": 799,
    "name": "Guzzlord",
    "types": [
      "dark",
      "dragon"
    ],
    "gen": 7,
    "id": "guzzlord"
  },
  {
    "dex": 800,
    "name": "Necrozma",
    "types": [
      "psychic"
    ],
    "gen": 7,
    "id": "necrozma"
  },
  {
    "dex": 801,
    "name": "Magearna",
    "types": [
      "steel",
      "fairy"
    ],
    "gen": 7,
    "id": "magearna"
  },
  {
    "dex": 802,
    "name": "Marshadow",
    "types": [
      "fighting",
      "ghost"
    ],
    "gen": 7,
    "id": "marshadow"
  },
  {
    "dex": 803,
    "name": "Poipole",
    "types": [
      "poison"
    ],
    "gen": 7,
    "id": "poipole"
  },
  {
    "dex": 804,
    "name": "Naganadel",
    "types": [
      "poison",
      "dragon"
    ],
    "gen": 7,
    "id": "naganadel"
  },
  {
    "dex": 805,
    "name": "Stakataka",
    "types": [
      "rock",
      "steel"
    ],
    "gen": 7,
    "id": "stakataka"
  },
  {
    "dex": 806,
    "name": "Blacephalon",
    "types": [
      "fire",
      "ghost"
    ],
    "gen": 7,
    "id": "blacephalon"
  },
  {
    "dex": 807,
    "name": "Zeraora",
    "types": [
      "electric"
    ],
    "gen": 7,
    "id": "zeraora"
  },
  {
    "dex": 808,
    "name": "Meltan",
    "types": [
      "steel"
    ],
    "gen": 7,
    "id": "meltan"
  },
  {
    "dex": 809,
    "name": "Melmetal",
    "types": [
      "steel"
    ],
    "gen": 7,
    "id": "melmetal"
  },
  {
    "dex": 810,
    "name": "Grookey",
    "types": [
      "grass"
    ],
    "gen": 8,
    "id": "grookey"
  },
  {
    "dex": 811,
    "name": "Thwackey",
    "types": [
      "grass"
    ],
    "gen": 8,
    "id": "thwackey"
  },
  {
    "dex": 812,
    "name": "Rillaboom",
    "types": [
      "grass"
    ],
    "gen": 8,
    "id": "rillaboom"
  },
  {
    "dex": 813,
    "name": "Scorbunny",
    "types": [
      "fire"
    ],
    "gen": 8,
    "id": "scorbunny"
  },
  {
    "dex": 814,
    "name": "Raboot",
    "types": [
      "fire"
    ],
    "gen": 8,
    "id": "raboot"
  },
  {
    "dex": 815,
    "name": "Cinderace",
    "types": [
      "fire"
    ],
    "gen": 8,
    "id": "cinderace"
  },
  {
    "dex": 816,
    "name": "Sobble",
    "types": [
      "water"
    ],
    "gen": 8,
    "id": "sobble"
  },
  {
    "dex": 817,
    "name": "Drizzile",
    "types": [
      "water"
    ],
    "gen": 8,
    "id": "drizzile"
  },
  {
    "dex": 818,
    "name": "Inteleon",
    "types": [
      "water"
    ],
    "gen": 8,
    "id": "inteleon"
  },
  {
    "dex": 819,
    "name": "Skwovet",
    "types": [
      "normal"
    ],
    "gen": 8,
    "id": "skwovet"
  },
  {
    "dex": 820,
    "name": "Greedent",
    "types": [
      "normal"
    ],
    "gen": 8,
    "id": "greedent"
  },
  {
    "dex": 821,
    "name": "Rookidee",
    "types": [
      "flying"
    ],
    "gen": 8,
    "id": "rookidee"
  },
  {
    "dex": 822,
    "name": "Corvisquire",
    "types": [
      "flying"
    ],
    "gen": 8,
    "id": "corvisquire"
  },
  {
    "dex": 823,
    "name": "Corviknight",
    "types": [
      "flying",
      "steel"
    ],
    "gen": 8,
    "id": "corviknight"
  },
  {
    "dex": 824,
    "name": "Blipbug",
    "types": [
      "bug"
    ],
    "gen": 8,
    "id": "blipbug"
  },
  {
    "dex": 825,
    "name": "Dottler",
    "types": [
      "bug",
      "psychic"
    ],
    "gen": 8,
    "id": "dottler"
  },
  {
    "dex": 826,
    "name": "Orbeetle",
    "types": [
      "bug",
      "psychic"
    ],
    "gen": 8,
    "id": "orbeetle"
  },
  {
    "dex": 827,
    "name": "Nickit",
    "types": [
      "dark"
    ],
    "gen": 8,
    "id": "nickit"
  },
  {
    "dex": 828,
    "name": "Thievul",
    "types": [
      "dark"
    ],
    "gen": 8,
    "id": "thievul"
  },
  {
    "dex": 829,
    "name": "Gossifleur",
    "types": [
      "grass"
    ],
    "gen": 8,
    "id": "gossifleur"
  },
  {
    "dex": 830,
    "name": "Eldegoss",
    "types": [
      "grass"
    ],
    "gen": 8,
    "id": "eldegoss"
  },
  {
    "dex": 831,
    "name": "Wooloo",
    "types": [
      "normal"
    ],
    "gen": 8,
    "id": "wooloo"
  },
  {
    "dex": 832,
    "name": "Dubwool",
    "types": [
      "normal"
    ],
    "gen": 8,
    "id": "dubwool"
  },
  {
    "dex": 833,
    "name": "Chewtle",
    "types": [
      "water"
    ],
    "gen": 8,
    "id": "chewtle"
  },
  {
    "dex": 834,
    "name": "Drednaw",
    "types": [
      "water",
      "rock"
    ],
    "gen": 8,
    "id": "drednaw"
  },
  {
    "dex": 835,
    "name": "Yamper",
    "types": [
      "electric"
    ],
    "gen": 8,
    "id": "yamper"
  },
  {
    "dex": 836,
    "name": "Boltund",
    "types": [
      "electric"
    ],
    "gen": 8,
    "id": "boltund"
  },
  {
    "dex": 837,
    "name": "Rolycoly",
    "types": [
      "rock"
    ],
    "gen": 8,
    "id": "rolycoly"
  },
  {
    "dex": 838,
    "name": "Carkol",
    "types": [
      "rock",
      "fire"
    ],
    "gen": 8,
    "id": "carkol"
  },
  {
    "dex": 839,
    "name": "Coalossal",
    "types": [
      "rock",
      "fire"
    ],
    "gen": 8,
    "id": "coalossal"
  },
  {
    "dex": 840,
    "name": "Applin",
    "types": [
      "grass",
      "dragon"
    ],
    "gen": 8,
    "id": "applin"
  },
  {
    "dex": 841,
    "name": "Flapple",
    "types": [
      "grass",
      "dragon"
    ],
    "gen": 8,
    "id": "flapple"
  },
  {
    "dex": 842,
    "name": "Appletun",
    "types": [
      "grass",
      "dragon"
    ],
    "gen": 8,
    "id": "appletun"
  },
  {
    "dex": 843,
    "name": "Silicobra",
    "types": [
      "ground"
    ],
    "gen": 8,
    "id": "silicobra"
  },
  {
    "dex": 844,
    "name": "Sandaconda",
    "types": [
      "ground"
    ],
    "gen": 8,
    "id": "sandaconda"
  },
  {
    "dex": 845,
    "name": "Cramorant",
    "types": [
      "flying",
      "water"
    ],
    "gen": 8,
    "id": "cramorant"
  },
  {
    "dex": 846,
    "name": "Arrokuda",
    "types": [
      "water"
    ],
    "gen": 8,
    "id": "arrokuda"
  },
  {
    "dex": 847,
    "name": "Barraskewda",
    "types": [
      "water"
    ],
    "gen": 8,
    "id": "barraskewda"
  },
  {
    "dex": 848,
    "name": "Toxel",
    "types": [
      "electric",
      "poison"
    ],
    "gen": 8,
    "id": "toxel"
  },
  {
    "dex": 849,
    "name": "Toxtricity-amped",
    "types": [
      "electric",
      "poison"
    ],
    "gen": 8,
    "id": "toxtricity-amped"
  },
  {
    "dex": 850,
    "name": "Sizzlipede",
    "types": [
      "fire",
      "bug"
    ],
    "gen": 8,
    "id": "sizzlipede"
  },
  {
    "dex": 851,
    "name": "Centiskorch",
    "types": [
      "fire",
      "bug"
    ],
    "gen": 8,
    "id": "centiskorch"
  },
  {
    "dex": 852,
    "name": "Clobbopus",
    "types": [
      "fighting"
    ],
    "gen": 8,
    "id": "clobbopus"
  },
  {
    "dex": 853,
    "name": "Grapploct",
    "types": [
      "fighting"
    ],
    "gen": 8,
    "id": "grapploct"
  },
  {
    "dex": 854,
    "name": "Sinistea",
    "types": [
      "ghost"
    ],
    "gen": 8,
    "id": "sinistea"
  },
  {
    "dex": 855,
    "name": "Polteageist",
    "types": [
      "ghost"
    ],
    "gen": 8,
    "id": "polteageist"
  },
  {
    "dex": 856,
    "name": "Hatenna",
    "types": [
      "psychic"
    ],
    "gen": 8,
    "id": "hatenna"
  },
  {
    "dex": 857,
    "name": "Hattrem",
    "types": [
      "psychic"
    ],
    "gen": 8,
    "id": "hattrem"
  },
  {
    "dex": 858,
    "name": "Hatterene",
    "types": [
      "psychic",
      "fairy"
    ],
    "gen": 8,
    "id": "hatterene"
  },
  {
    "dex": 859,
    "name": "Impidimp",
    "types": [
      "dark",
      "fairy"
    ],
    "gen": 8,
    "id": "impidimp"
  },
  {
    "dex": 860,
    "name": "Morgrem",
    "types": [
      "dark",
      "fairy"
    ],
    "gen": 8,
    "id": "morgrem"
  },
  {
    "dex": 861,
    "name": "Grimmsnarl",
    "types": [
      "dark",
      "fairy"
    ],
    "gen": 8,
    "id": "grimmsnarl"
  },
  {
    "dex": 862,
    "name": "Obstagoon",
    "types": [
      "dark",
      "normal"
    ],
    "gen": 8,
    "id": "obstagoon"
  },
  {
    "dex": 863,
    "name": "Perrserker",
    "types": [
      "steel"
    ],
    "gen": 8,
    "id": "perrserker"
  },
  {
    "dex": 864,
    "name": "Cursola",
    "types": [
      "ghost"
    ],
    "gen": 8,
    "id": "cursola"
  },
  {
    "dex": 865,
    "name": "Sirfetchd",
    "types": [
      "fighting"
    ],
    "gen": 8,
    "id": "sirfetchd"
  },
  {
    "dex": 866,
    "name": "Mr-rime",
    "types": [
      "ice",
      "psychic"
    ],
    "gen": 8,
    "id": "mr-rime"
  },
  {
    "dex": 867,
    "name": "Runerigus",
    "types": [
      "ground",
      "ghost"
    ],
    "gen": 8,
    "id": "runerigus"
  },
  {
    "dex": 868,
    "name": "Milcery",
    "types": [
      "fairy"
    ],
    "gen": 8,
    "id": "milcery"
  },
  {
    "dex": 869,
    "name": "Alcremie",
    "types": [
      "fairy"
    ],
    "gen": 8,
    "id": "alcremie"
  },
  {
    "dex": 870,
    "name": "Falinks",
    "types": [
      "fighting"
    ],
    "gen": 8,
    "id": "falinks"
  },
  {
    "dex": 871,
    "name": "Pincurchin",
    "types": [
      "electric"
    ],
    "gen": 8,
    "id": "pincurchin"
  },
  {
    "dex": 872,
    "name": "Snom",
    "types": [
      "ice",
      "bug"
    ],
    "gen": 8,
    "id": "snom"
  },
  {
    "dex": 873,
    "name": "Frosmoth",
    "types": [
      "ice",
      "bug"
    ],
    "gen": 8,
    "id": "frosmoth"
  },
  {
    "dex": 874,
    "name": "Stonjourner",
    "types": [
      "rock"
    ],
    "gen": 8,
    "id": "stonjourner"
  },
  {
    "dex": 875,
    "name": "Eiscue-ice",
    "types": [
      "ice"
    ],
    "gen": 8,
    "id": "eiscue-ice"
  },
  {
    "dex": 876,
    "name": "Indeedee-male",
    "types": [
      "psychic",
      "normal"
    ],
    "gen": 8,
    "id": "indeedee-male"
  },
  {
    "dex": 877,
    "name": "Morpeko-full-belly",
    "types": [
      "electric",
      "dark"
    ],
    "gen": 8,
    "id": "morpeko-full-belly"
  },
  {
    "dex": 878,
    "name": "Cufant",
    "types": [
      "steel"
    ],
    "gen": 8,
    "id": "cufant"
  },
  {
    "dex": 879,
    "name": "Copperajah",
    "types": [
      "steel"
    ],
    "gen": 8,
    "id": "copperajah"
  },
  {
    "dex": 880,
    "name": "Dracozolt",
    "types": [
      "electric",
      "dragon"
    ],
    "gen": 8,
    "id": "dracozolt"
  },
  {
    "dex": 881,
    "name": "Arctozolt",
    "types": [
      "electric",
      "ice"
    ],
    "gen": 8,
    "id": "arctozolt"
  },
  {
    "dex": 882,
    "name": "Dracovish",
    "types": [
      "water",
      "dragon"
    ],
    "gen": 8,
    "id": "dracovish"
  },
  {
    "dex": 883,
    "name": "Arctovish",
    "types": [
      "water",
      "ice"
    ],
    "gen": 8,
    "id": "arctovish"
  },
  {
    "dex": 884,
    "name": "Duraludon",
    "types": [
      "steel",
      "dragon"
    ],
    "gen": 8,
    "id": "duraludon"
  },
  {
    "dex": 885,
    "name": "Dreepy",
    "types": [
      "dragon",
      "ghost"
    ],
    "gen": 8,
    "id": "dreepy"
  },
  {
    "dex": 886,
    "name": "Drakloak",
    "types": [
      "dragon",
      "ghost"
    ],
    "gen": 8,
    "id": "drakloak"
  },
  {
    "dex": 887,
    "name": "Dragapult",
    "types": [
      "dragon",
      "ghost"
    ],
    "gen": 8,
    "id": "dragapult"
  },
  {
    "dex": 888,
    "name": "Zacian",
    "types": [
      "fairy"
    ],
    "gen": 8,
    "id": "zacian"
  },
  {
    "dex": 889,
    "name": "Zamazenta",
    "types": [
      "fighting"
    ],
    "gen": 8,
    "id": "zamazenta"
  },
  {
    "dex": 890,
    "name": "Eternatus",
    "types": [
      "poison",
      "dragon"
    ],
    "gen": 8,
    "id": "eternatus"
  },
  {
    "dex": 891,
    "name": "Kubfu",
    "types": [
      "fighting"
    ],
    "gen": 8,
    "id": "kubfu"
  },
  {
    "dex": 892,
    "name": "Urshifu-single-strike",
    "types": [
      "fighting",
      "dark"
    ],
    "gen": 8,
    "id": "urshifu-single-strike"
  },
  {
    "dex": 893,
    "name": "Zarude",
    "types": [
      "dark",
      "grass"
    ],
    "gen": 8,
    "id": "zarude"
  },
  {
    "dex": 894,
    "name": "Regieleki",
    "types": [
      "electric"
    ],
    "gen": 8,
    "id": "regieleki"
  },
  {
    "dex": 895,
    "name": "Regidrago",
    "types": [
      "dragon"
    ],
    "gen": 8,
    "id": "regidrago"
  },
  {
    "dex": 896,
    "name": "Glastrier",
    "types": [
      "ice"
    ],
    "gen": 8,
    "id": "glastrier"
  },
  {
    "dex": 897,
    "name": "Spectrier",
    "types": [
      "ghost"
    ],
    "gen": 8,
    "id": "spectrier"
  },
  {
    "dex": 898,
    "name": "Calyrex",
    "types": [
      "psychic",
      "grass"
    ],
    "gen": 8,
    "id": "calyrex"
  },
  {
    "dex": 899,
    "name": "Wyrdeer",
    "types": [
      "normal",
      "psychic"
    ],
    "gen": 8,
    "id": "wyrdeer"
  },
  {
    "dex": 900,
    "name": "Kleavor",
    "types": [
      "bug",
      "rock"
    ],
    "gen": 8,
    "id": "kleavor"
  },
  {
    "dex": 901,
    "name": "Ursaluna",
    "types": [
      "ground",
      "normal"
    ],
    "gen": 8,
    "id": "ursaluna"
  },
  {
    "dex": 902,
    "name": "Basculegion-male",
    "types": [
      "water",
      "ghost"
    ],
    "gen": 8,
    "id": "basculegion-male"
  },
  {
    "dex": 903,
    "name": "Sneasler",
    "types": [
      "fighting",
      "poison"
    ],
    "gen": 8,
    "id": "sneasler"
  },
  {
    "dex": 904,
    "name": "Overqwil",
    "types": [
      "dark",
      "poison"
    ],
    "gen": 8,
    "id": "overqwil"
  },
  {
    "dex": 905,
    "name": "Enamorus-incarnate",
    "types": [
      "fairy",
      "flying"
    ],
    "gen": 8,
    "id": "enamorus-incarnate"
  },
  {
    "dex": 906,
    "name": "Sprigatito",
    "types": [
      "grass"
    ],
    "gen": 9,
    "id": "sprigatito"
  },
  {
    "dex": 907,
    "name": "Floragato",
    "types": [
      "grass"
    ],
    "gen": 9,
    "id": "floragato"
  },
  {
    "dex": 908,
    "name": "Meowscarada",
    "types": [
      "grass",
      "dark"
    ],
    "gen": 9,
    "id": "meowscarada"
  },
  {
    "dex": 909,
    "name": "Fuecoco",
    "types": [
      "fire"
    ],
    "gen": 9,
    "id": "fuecoco"
  },
  {
    "dex": 910,
    "name": "Crocalor",
    "types": [
      "fire"
    ],
    "gen": 9,
    "id": "crocalor"
  },
  {
    "dex": 911,
    "name": "Skeledirge",
    "types": [
      "fire",
      "ghost"
    ],
    "gen": 9,
    "id": "skeledirge"
  },
  {
    "dex": 912,
    "name": "Quaxly",
    "types": [
      "water"
    ],
    "gen": 9,
    "id": "quaxly"
  },
  {
    "dex": 913,
    "name": "Quaxwell",
    "types": [
      "water"
    ],
    "gen": 9,
    "id": "quaxwell"
  },
  {
    "dex": 914,
    "name": "Quaquaval",
    "types": [
      "water",
      "fighting"
    ],
    "gen": 9,
    "id": "quaquaval"
  },
  {
    "dex": 915,
    "name": "Lechonk",
    "types": [
      "normal"
    ],
    "gen": 9,
    "id": "lechonk"
  },
  {
    "dex": 916,
    "name": "Oinkologne-male",
    "types": [
      "normal"
    ],
    "gen": 9,
    "id": "oinkologne-male"
  },
  {
    "dex": 917,
    "name": "Tarountula",
    "types": [
      "bug"
    ],
    "gen": 9,
    "id": "tarountula"
  },
  {
    "dex": 918,
    "name": "Spidops",
    "types": [
      "bug"
    ],
    "gen": 9,
    "id": "spidops"
  },
  {
    "dex": 919,
    "name": "Nymble",
    "types": [
      "bug"
    ],
    "gen": 9,
    "id": "nymble"
  },
  {
    "dex": 920,
    "name": "Lokix",
    "types": [
      "bug",
      "dark"
    ],
    "gen": 9,
    "id": "lokix"
  },
  {
    "dex": 921,
    "name": "Pawmi",
    "types": [
      "electric"
    ],
    "gen": 9,
    "id": "pawmi"
  },
  {
    "dex": 922,
    "name": "Pawmo",
    "types": [
      "electric",
      "fighting"
    ],
    "gen": 9,
    "id": "pawmo"
  },
  {
    "dex": 923,
    "name": "Pawmot",
    "types": [
      "electric",
      "fighting"
    ],
    "gen": 9,
    "id": "pawmot"
  },
  {
    "dex": 924,
    "name": "Tandemaus",
    "types": [
      "normal"
    ],
    "gen": 9,
    "id": "tandemaus"
  },
  {
    "dex": 925,
    "name": "Maushold-family-of-four",
    "types": [
      "normal"
    ],
    "gen": 9,
    "id": "maushold-family-of-four"
  },
  {
    "dex": 926,
    "name": "Fidough",
    "types": [
      "fairy"
    ],
    "gen": 9,
    "id": "fidough"
  },
  {
    "dex": 927,
    "name": "Dachsbun",
    "types": [
      "fairy"
    ],
    "gen": 9,
    "id": "dachsbun"
  },
  {
    "dex": 928,
    "name": "Smoliv",
    "types": [
      "grass",
      "normal"
    ],
    "gen": 9,
    "id": "smoliv"
  },
  {
    "dex": 929,
    "name": "Dolliv",
    "types": [
      "grass",
      "normal"
    ],
    "gen": 9,
    "id": "dolliv"
  },
  {
    "dex": 930,
    "name": "Arboliva",
    "types": [
      "grass",
      "normal"
    ],
    "gen": 9,
    "id": "arboliva"
  },
  {
    "dex": 931,
    "name": "Squawkabilly-green-plumage",
    "types": [
      "normal",
      "flying"
    ],
    "gen": 9,
    "id": "squawkabilly-green-plumage"
  },
  {
    "dex": 932,
    "name": "Nacli",
    "types": [
      "rock"
    ],
    "gen": 9,
    "id": "nacli"
  },
  {
    "dex": 933,
    "name": "Naclstack",
    "types": [
      "rock"
    ],
    "gen": 9,
    "id": "naclstack"
  },
  {
    "dex": 934,
    "name": "Garganacl",
    "types": [
      "rock"
    ],
    "gen": 9,
    "id": "garganacl"
  },
  {
    "dex": 935,
    "name": "Charcadet",
    "types": [
      "fire"
    ],
    "gen": 9,
    "id": "charcadet"
  },
  {
    "dex": 936,
    "name": "Armarouge",
    "types": [
      "fire",
      "psychic"
    ],
    "gen": 9,
    "id": "armarouge"
  },
  {
    "dex": 937,
    "name": "Ceruledge",
    "types": [
      "fire",
      "ghost"
    ],
    "gen": 9,
    "id": "ceruledge"
  },
  {
    "dex": 938,
    "name": "Tadbulb",
    "types": [
      "electric"
    ],
    "gen": 9,
    "id": "tadbulb"
  },
  {
    "dex": 939,
    "name": "Bellibolt",
    "types": [
      "electric"
    ],
    "gen": 9,
    "id": "bellibolt"
  },
  {
    "dex": 940,
    "name": "Wattrel",
    "types": [
      "electric",
      "flying"
    ],
    "gen": 9,
    "id": "wattrel"
  },
  {
    "dex": 941,
    "name": "Kilowattrel",
    "types": [
      "electric",
      "flying"
    ],
    "gen": 9,
    "id": "kilowattrel"
  },
  {
    "dex": 942,
    "name": "Maschiff",
    "types": [
      "dark"
    ],
    "gen": 9,
    "id": "maschiff"
  },
  {
    "dex": 943,
    "name": "Mabosstiff",
    "types": [
      "dark"
    ],
    "gen": 9,
    "id": "mabosstiff"
  },
  {
    "dex": 944,
    "name": "Shroodle",
    "types": [
      "poison",
      "normal"
    ],
    "gen": 9,
    "id": "shroodle"
  },
  {
    "dex": 945,
    "name": "Grafaiai",
    "types": [
      "poison",
      "normal"
    ],
    "gen": 9,
    "id": "grafaiai"
  },
  {
    "dex": 946,
    "name": "Bramblin",
    "types": [
      "grass",
      "ghost"
    ],
    "gen": 9,
    "id": "bramblin"
  },
  {
    "dex": 947,
    "name": "Brambleghast",
    "types": [
      "grass",
      "ghost"
    ],
    "gen": 9,
    "id": "brambleghast"
  },
  {
    "dex": 948,
    "name": "Toedscool",
    "types": [
      "ground",
      "grass"
    ],
    "gen": 9,
    "id": "toedscool"
  },
  {
    "dex": 949,
    "name": "Toedscruel",
    "types": [
      "ground",
      "grass"
    ],
    "gen": 9,
    "id": "toedscruel"
  },
  {
    "dex": 950,
    "name": "Klawf",
    "types": [
      "rock"
    ],
    "gen": 9,
    "id": "klawf"
  },
  {
    "dex": 951,
    "name": "Capsakid",
    "types": [
      "grass"
    ],
    "gen": 9,
    "id": "capsakid"
  },
  {
    "dex": 952,
    "name": "Scovillain",
    "types": [
      "grass",
      "fire"
    ],
    "gen": 9,
    "id": "scovillain"
  },
  {
    "dex": 953,
    "name": "Rellor",
    "types": [
      "bug"
    ],
    "gen": 9,
    "id": "rellor"
  },
  {
    "dex": 954,
    "name": "Rabsca",
    "types": [
      "bug",
      "psychic"
    ],
    "gen": 9,
    "id": "rabsca"
  },
  {
    "dex": 955,
    "name": "Flittle",
    "types": [
      "psychic"
    ],
    "gen": 9,
    "id": "flittle"
  },
  {
    "dex": 956,
    "name": "Espathra",
    "types": [
      "psychic"
    ],
    "gen": 9,
    "id": "espathra"
  },
  {
    "dex": 957,
    "name": "Tinkatink",
    "types": [
      "fairy",
      "steel"
    ],
    "gen": 9,
    "id": "tinkatink"
  },
  {
    "dex": 958,
    "name": "Tinkatuff",
    "types": [
      "fairy",
      "steel"
    ],
    "gen": 9,
    "id": "tinkatuff"
  },
  {
    "dex": 959,
    "name": "Tinkaton",
    "types": [
      "fairy",
      "steel"
    ],
    "gen": 9,
    "id": "tinkaton"
  },
  {
    "dex": 960,
    "name": "Wiglett",
    "types": [
      "water"
    ],
    "gen": 9,
    "id": "wiglett"
  },
  {
    "dex": 961,
    "name": "Wugtrio",
    "types": [
      "water"
    ],
    "gen": 9,
    "id": "wugtrio"
  },
  {
    "dex": 962,
    "name": "Bombirdier",
    "types": [
      "flying",
      "dark"
    ],
    "gen": 9,
    "id": "bombirdier"
  },
  {
    "dex": 963,
    "name": "Finizen",
    "types": [
      "water"
    ],
    "gen": 9,
    "id": "finizen"
  },
  {
    "dex": 964,
    "name": "Palafin-zero",
    "types": [
      "water"
    ],
    "gen": 9,
    "id": "palafin-zero"
  },
  {
    "dex": 965,
    "name": "Varoom",
    "types": [
      "steel",
      "poison"
    ],
    "gen": 9,
    "id": "varoom"
  },
  {
    "dex": 966,
    "name": "Revavroom",
    "types": [
      "steel",
      "poison"
    ],
    "gen": 9,
    "id": "revavroom"
  },
  {
    "dex": 967,
    "name": "Cyclizar",
    "types": [
      "dragon",
      "normal"
    ],
    "gen": 9,
    "id": "cyclizar"
  },
  {
    "dex": 968,
    "name": "Orthworm",
    "types": [
      "steel"
    ],
    "gen": 9,
    "id": "orthworm"
  },
  {
    "dex": 969,
    "name": "Glimmet",
    "types": [
      "rock",
      "poison"
    ],
    "gen": 9,
    "id": "glimmet"
  },
  {
    "dex": 970,
    "name": "Glimmora",
    "types": [
      "rock",
      "poison"
    ],
    "gen": 9,
    "id": "glimmora"
  },
  {
    "dex": 971,
    "name": "Greavard",
    "types": [
      "ghost"
    ],
    "gen": 9,
    "id": "greavard"
  },
  {
    "dex": 972,
    "name": "Houndstone",
    "types": [
      "ghost"
    ],
    "gen": 9,
    "id": "houndstone"
  },
  {
    "dex": 973,
    "name": "Flamigo",
    "types": [
      "flying",
      "fighting"
    ],
    "gen": 9,
    "id": "flamigo"
  },
  {
    "dex": 974,
    "name": "Cetoddle",
    "types": [
      "ice"
    ],
    "gen": 9,
    "id": "cetoddle"
  },
  {
    "dex": 975,
    "name": "Cetitan",
    "types": [
      "ice"
    ],
    "gen": 9,
    "id": "cetitan"
  },
  {
    "dex": 976,
    "name": "Veluza",
    "types": [
      "water",
      "psychic"
    ],
    "gen": 9,
    "id": "veluza"
  },
  {
    "dex": 977,
    "name": "Dondozo",
    "types": [
      "water"
    ],
    "gen": 9,
    "id": "dondozo"
  },
  {
    "dex": 978,
    "name": "Tatsugiri-curly",
    "types": [
      "dragon",
      "water"
    ],
    "gen": 9,
    "id": "tatsugiri-curly"
  },
  {
    "dex": 979,
    "name": "Annihilape",
    "types": [
      "fighting",
      "ghost"
    ],
    "gen": 9,
    "id": "annihilape"
  },
  {
    "dex": 980,
    "name": "Clodsire",
    "types": [
      "poison",
      "ground"
    ],
    "gen": 9,
    "id": "clodsire"
  },
  {
    "dex": 981,
    "name": "Farigiraf",
    "types": [
      "normal",
      "psychic"
    ],
    "gen": 9,
    "id": "farigiraf"
  },
  {
    "dex": 982,
    "name": "Dudunsparce-two-segment",
    "types": [
      "normal"
    ],
    "gen": 9,
    "id": "dudunsparce-two-segment"
  },
  {
    "dex": 983,
    "name": "Kingambit",
    "types": [
      "dark",
      "steel"
    ],
    "gen": 9,
    "id": "kingambit"
  },
  {
    "dex": 984,
    "name": "Great-tusk",
    "types": [
      "ground",
      "fighting"
    ],
    "gen": 9,
    "id": "great-tusk"
  },
  {
    "dex": 985,
    "name": "Scream-tail",
    "types": [
      "fairy",
      "psychic"
    ],
    "gen": 9,
    "id": "scream-tail"
  },
  {
    "dex": 986,
    "name": "Brute-bonnet",
    "types": [
      "grass",
      "dark"
    ],
    "gen": 9,
    "id": "brute-bonnet"
  },
  {
    "dex": 987,
    "name": "Flutter-mane",
    "types": [
      "ghost",
      "fairy"
    ],
    "gen": 9,
    "id": "flutter-mane"
  },
  {
    "dex": 988,
    "name": "Slither-wing",
    "types": [
      "bug",
      "fighting"
    ],
    "gen": 9,
    "id": "slither-wing"
  },
  {
    "dex": 989,
    "name": "Sandy-shocks",
    "types": [
      "electric",
      "ground"
    ],
    "gen": 9,
    "id": "sandy-shocks"
  },
  {
    "dex": 990,
    "name": "Iron-treads",
    "types": [
      "ground",
      "steel"
    ],
    "gen": 9,
    "id": "iron-treads"
  },
  {
    "dex": 991,
    "name": "Iron-bundle",
    "types": [
      "ice",
      "water"
    ],
    "gen": 9,
    "id": "iron-bundle"
  },
  {
    "dex": 992,
    "name": "Iron-hands",
    "types": [
      "fighting",
      "electric"
    ],
    "gen": 9,
    "id": "iron-hands"
  },
  {
    "dex": 993,
    "name": "Iron-jugulis",
    "types": [
      "dark",
      "flying"
    ],
    "gen": 9,
    "id": "iron-jugulis"
  },
  {
    "dex": 994,
    "name": "Iron-moth",
    "types": [
      "fire",
      "poison"
    ],
    "gen": 9,
    "id": "iron-moth"
  },
  {
    "dex": 995,
    "name": "Iron-thorns",
    "types": [
      "rock",
      "electric"
    ],
    "gen": 9,
    "id": "iron-thorns"
  },
  {
    "dex": 996,
    "name": "Frigibax",
    "types": [
      "dragon",
      "ice"
    ],
    "gen": 9,
    "id": "frigibax"
  },
  {
    "dex": 997,
    "name": "Arctibax",
    "types": [
      "dragon",
      "ice"
    ],
    "gen": 9,
    "id": "arctibax"
  },
  {
    "dex": 998,
    "name": "Baxcalibur",
    "types": [
      "dragon",
      "ice"
    ],
    "gen": 9,
    "id": "baxcalibur"
  },
  {
    "dex": 999,
    "name": "Gimmighoul",
    "types": [
      "ghost"
    ],
    "gen": 9,
    "id": "gimmighoul"
  },
  {
    "dex": 1000,
    "name": "Gholdengo",
    "types": [
      "steel",
      "ghost"
    ],
    "gen": 9,
    "id": "gholdengo"
  },
  {
    "dex": 1001,
    "name": "Wo-chien",
    "types": [
      "dark",
      "grass"
    ],
    "gen": 9,
    "id": "wo-chien"
  },
  {
    "dex": 1002,
    "name": "Chien-pao",
    "types": [
      "dark",
      "ice"
    ],
    "gen": 9,
    "id": "chien-pao"
  },
  {
    "dex": 1003,
    "name": "Ting-lu",
    "types": [
      "dark",
      "ground"
    ],
    "gen": 9,
    "id": "ting-lu"
  },
  {
    "dex": 1004,
    "name": "Chi-yu",
    "types": [
      "dark",
      "fire"
    ],
    "gen": 9,
    "id": "chi-yu"
  },
  {
    "dex": 1005,
    "name": "Roaring-moon",
    "types": [
      "dragon",
      "dark"
    ],
    "gen": 9,
    "id": "roaring-moon"
  },
  {
    "dex": 1006,
    "name": "Iron-valiant",
    "types": [
      "fairy",
      "fighting"
    ],
    "gen": 9,
    "id": "iron-valiant"
  },
  {
    "dex": 1007,
    "name": "Koraidon",
    "types": [
      "fighting",
      "dragon"
    ],
    "gen": 9,
    "id": "koraidon"
  },
  {
    "dex": 1008,
    "name": "Miraidon",
    "types": [
      "electric",
      "dragon"
    ],
    "gen": 9,
    "id": "miraidon"
  },
  {
    "dex": 1009,
    "name": "Walking-wake",
    "types": [
      "water",
      "dragon"
    ],
    "gen": 9,
    "id": "walking-wake"
  },
  {
    "dex": 1010,
    "name": "Iron-leaves",
    "types": [
      "grass",
      "psychic"
    ],
    "gen": 9,
    "id": "iron-leaves"
  },
  {
    "dex": 1011,
    "name": "Dipplin",
    "types": [
      "grass",
      "dragon"
    ],
    "gen": 9,
    "id": "dipplin"
  },
  {
    "dex": 1012,
    "name": "Poltchageist",
    "types": [
      "grass",
      "ghost"
    ],
    "gen": 9,
    "id": "poltchageist"
  },
  {
    "dex": 1013,
    "name": "Sinistcha",
    "types": [
      "grass",
      "ghost"
    ],
    "gen": 9,
    "id": "sinistcha"
  },
  {
    "dex": 1014,
    "name": "Okidogi",
    "types": [
      "poison",
      "fighting"
    ],
    "gen": 9,
    "id": "okidogi"
  },
  {
    "dex": 1015,
    "name": "Munkidori",
    "types": [
      "poison",
      "psychic"
    ],
    "gen": 9,
    "id": "munkidori"
  },
  {
    "dex": 1016,
    "name": "Fezandipiti",
    "types": [
      "poison",
      "fairy"
    ],
    "gen": 9,
    "id": "fezandipiti"
  },
  {
    "dex": 1017,
    "name": "Ogerpon",
    "types": [
      "grass"
    ],
    "gen": 9,
    "id": "ogerpon"
  },
  {
    "dex": 1018,
    "name": "Archaludon",
    "types": [
      "steel",
      "dragon"
    ],
    "gen": 9,
    "id": "archaludon"
  },
  {
    "dex": 1019,
    "name": "Hydrapple",
    "types": [
      "grass",
      "dragon"
    ],
    "gen": 9,
    "id": "hydrapple"
  },
  {
    "dex": 1020,
    "name": "Gouging-fire",
    "types": [
      "fire",
      "dragon"
    ],
    "gen": 9,
    "id": "gouging-fire"
  },
  {
    "dex": 1021,
    "name": "Raging-bolt",
    "types": [
      "electric",
      "dragon"
    ],
    "gen": 9,
    "id": "raging-bolt"
  },
  {
    "dex": 1022,
    "name": "Iron-boulder",
    "types": [
      "rock",
      "psychic"
    ],
    "gen": 9,
    "id": "iron-boulder"
  },
  {
    "dex": 1023,
    "name": "Iron-crown",
    "types": [
      "steel",
      "psychic"
    ],
    "gen": 9,
    "id": "iron-crown"
  },
  {
    "dex": 1024,
    "name": "Terapagos",
    "types": [
      "normal"
    ],
    "gen": 9,
    "id": "terapagos"
  },
  {
    "dex": 1025,
    "name": "Pecharunt",
    "types": [
      "poison",
      "ghost"
    ],
    "gen": 9,
    "id": "pecharunt"
  }
];