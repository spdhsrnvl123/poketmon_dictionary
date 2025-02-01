import { configureStore } from "@reduxjs/toolkit";
import cardData from "./card";
import countData from "./count";
import searchResults from "./search";

export const store = configureStore({
  reducer: {
    cardData: cardData.reducer,
    searchResults: searchResults.reducer,
    countData: countData.reducer,
  },
});

// RootState 타입 정의 (스토어 전체 상태 타입)
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch 타입 정의 (dispatch 타입)
export type AppDispatch = typeof store.dispatch;
