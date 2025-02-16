import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SearchState {
  keyword: string;
  filterType: string;
}

const initialState: SearchState = {
  keyword: "",
  filterType: "All", // 기본값 설정
};

let searchResults = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    setSearchResults(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
    setFilterType(state, action: PayloadAction<string>) {
      state.filterType = action.payload;
    },
  },
});

export let { setSearchResults, setFilterType } = searchResults.actions;
export default searchResults;
