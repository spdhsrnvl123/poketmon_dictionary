import { createSlice, PayloadAction } from "@reduxjs/toolkit"

let searchResults = createSlice({
  name: "searchResults",
  initialState: "",
  reducers: {
    setSearchResults(state, action: PayloadAction<string>) {
      return (state = action.payload);
    },
  },
});

export let { setSearchResults } = searchResults.actions;
export default searchResults;
