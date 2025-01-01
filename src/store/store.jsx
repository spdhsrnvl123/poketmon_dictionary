import { configureStore } from "@reduxjs/toolkit"
import cardData from './card'
import countData from "./count"
import searchResults from "./search";

export default configureStore({
  reducer: {
    cardData: cardData.reducer,
    searchResults: searchResults.reducer,
    countData: countData.reducer,
  },
});
