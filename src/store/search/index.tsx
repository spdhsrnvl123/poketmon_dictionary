import { createSlice } from "@reduxjs/toolkit"

let searchResults = createSlice({
  name: "searchResults",
  initialState: "",
  reducers: {
    setSearchResults(state, action) {
        console.log(action.payload);
      return (state = action.payload);
    },
  },
});

export let { setSearchResults } = searchResults.actions;
export default searchResults;
