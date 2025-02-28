import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonsDetail } from "../../types/pokemonsDetail";


const getPokemonDetailData = createAsyncThunk(
  "pokemon/getPokemonDetailData",
  async (poketmonId: string) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${poketmonId}`
      );

      const data = await response.json();

      // 포켓몬 기본 정보 추출
      const pokemonInfo: PokemonsDetail = {
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

const initialState = {
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
    }, // 타입 강제 지정
    status: "Welcome"
  } as any

const pokemonDetailData = createSlice({
  name: "pokemonDetailData",
  initialState : initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonDetailData.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(getPokemonDetailData.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(getPokemonDetailData.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default pokemonDetailData; 
export { getPokemonDetailData };