import { createSlice } from "@reduxjs/toolkit"

let searchResults = createSlice({
  name: "searchResults",
  initialState: "",
  reducers: {
    setSearchResults(state, action) {
      return (state = action.payload);
    },
  },
});

export let { setSearchResults } = searchResults.actions;
export default searchResults;
