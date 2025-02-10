import { configureStore } from "@reduxjs/toolkit";
import cardData from "./card";
import countData from "./count";
import searchResults from "./search";
import pokemonDetailSlice from "./pokemonDetail";

export const store = configureStore({
  reducer: {
    cardData: cardData.reducer,
    searchResults: searchResults.reducer,
    countData: countData.reducer,
    pokemonDetailSlice : pokemonDetailSlice.reducer
  },
});

// RootState 타입 정의 (스토어 전체 상태 타입)
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch 타입 정의 (dispatch 타입)
export type AppDispatch = typeof store.dispatch;
