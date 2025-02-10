import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// data.stats 배열의 각 요소에 대한 타입
interface Stat {
  base_stat: number;
}

// data.types 배열의 각 요소에 대한 타입
interface TypeInfo {
  type: {
    name: string;
  };
}

// data.abilities 배열의 각 요소에 대한 타입
interface AbilityInfo {
  ability: {
    name: string;
  };
}

// data의 전체 구조에 대한 타입
interface PokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: TypeInfo[];
  stats: Stat[];
  height: number;  // cm 단위
  weight: number;  // hectograms (100g 단위)
  abilities: AbilityInfo[];
}

// pokemonInfo의 타입 정의
interface PokemonInfo {
  id: number;
  name: string;
  sprite: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  height: number;  // 미터 단위
  weight: number;  // kg 단위
  abilities: string[];
}

const fetchPokemonById = createAsyncThunk(
  "pokemon/fetchByName",
  async (poketmonId: string) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${poketmonId}`
      );

      const data = await response.json();

      // 포켓몬 기본 정보 추출
      const pokemonInfo: PokemonInfo = {
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map((typeInfo: any) => typeInfo.type.name),
        stats: {
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        },
        height: data.height / 10, // 미터 단위로 변환
        weight: data.weight / 10, // kg 단위로 변환
        abilities: data.abilities.map((ability: any) => ability.ability.name),
      };

      return pokemonInfo;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch pokemon data");
    }
  }
);

const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState: {
    value: {
      id: 0,
      name: "",
      sprite: "",
      types: [],
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
      },
      height: 0,
      weight: 0,
      abilities: [],
    } as PokemonInfo, // 타입 강제 지정
    status: "Welcome",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonById.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(fetchPokemonById.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(fetchPokemonById.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default pokemonDetailSlice; // cardData slice를 export
export {fetchPokemonById};