interface PokemonStat {
  name: string;
  value: number;
}

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
  stats: PokemonStat[];
  evolution?: number[];
  description: string;
}

export const pokemonData: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    stats: [
      { name: "HP", value: 45 },
      { name: "Attack", value: 49 },
      { name: "Defense", value: 49 },
      { name: "Speed", value: 45 }
    ],
    evolution: [2, 3],
    description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon."
  },
  {
    id: 4,
    name: "Charmander",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    stats: [
      { name: "HP", value: 39 },
      { name: "Attack", value: 52 },
      { name: "Defense", value: 43 },
      { name: "Speed", value: 65 }
    ],
    evolution: [5, 6],
    description: "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out."
  },
  {
    id: 7,
    name: "Squirtle",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    stats: [
      { name: "HP", value: 44 },
      { name: "Attack", value: 48 },
      { name: "Defense", value: 65 },
      { name: "Speed", value: 43 }
    ],
    evolution: [8, 9],
    description: "When it retracts its long neck into its shell, it squirts out water with vigorous force."
  },
  {
    id: 25,
    name: "Pikachu",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    stats: [
      { name: "HP", value: 35 },
      { name: "Attack", value: 55 },
      { name: "Defense", value: 40 },
      { name: "Speed", value: 90 }
    ],
    evolution: [26],
    description: "When several of these Pokémon gather, their electricity can build and cause lightning storms."
  },
  {
    id: 133,
    name: "Eevee",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    stats: [
      { name: "HP", value: 55 },
      { name: "Attack", value: 55 },
      { name: "Defense", value: 50 },
      { name: "Speed", value: 55 }
    ],
    evolution: [134, 135, 136],
    description: "Its genetic code is irregular. It may mutate if it is exposed to radiation from element stones."
  },
  {
    id: 152,
    name: "Chikorita",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
    stats: [
      { name: "HP", value: 45 },
      { name: "Attack", value: 49 },
      { name: "Defense", value: 65 },
      { name: "Speed", value: 45 }
    ],
    evolution: [153, 154],
    description: "A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up sunbeams."
  },
  {
    id: 155,
    name: "Cyndaquil",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
    stats: [
      { name: "HP", value: 39 },
      { name: "Attack", value: 52 },
      { name: "Defense", value: 43 },
      { name: "Speed", value: 65 }
    ],
    evolution: [156, 157],
    description: "It is timid, and always curls itself up in a ball. If attacked, it flares up its back for protection."
  },
  {
    id: 158,
    name: "Totodile",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png",
    stats: [
      { name: "HP", value: 50 },
      { name: "Attack", value: 65 },
      { name: "Defense", value: 64 },
      { name: "Speed", value: 43 }
    ],
    evolution: [159, 160],
    description: "Its powerful, well-developed jaws are capable of crushing anything. Even its Trainer must be careful."
  },
  {
    id: 252,
    name: "Treecko",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
    stats: [
      { name: "HP", value: 40 },
      { name: "Attack", value: 45 },
      { name: "Defense", value: 35 },
      { name: "Speed", value: 70 }
    ],
    evolution: [253, 254],
    description: "It makes its nest in a giant tree in the forest. It ferociously guards against anything nearing its territory."
  },
  {
    id: 255,
    name: "Torchic",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png",
    stats: [
      { name: "HP", value: 45 },
      { name: "Attack", value: 60 },
      { name: "Defense", value: 40 },
      { name: "Speed", value: 45 }
    ],
    evolution: [256, 257],
    description: "If attacked, it strikes back by spitting balls of fire it forms in its stomach."
  }
];