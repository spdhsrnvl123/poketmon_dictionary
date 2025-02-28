import { configureStore } from "@reduxjs/toolkit";
import countData from "./count";
import searchResults from "./search";
import pokemonData from "./pokemons";
import pokemonDetailData from "./pokemonsDetail";

export const store = configureStore({
  reducer: {
    pokemonData: pokemonData.reducer,
    searchResults: searchResults.reducer,
    countData: countData.reducer,
    pokemonDetailData : pokemonDetailData.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;