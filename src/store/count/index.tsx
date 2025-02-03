import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let countData = createSlice({
  name: "countData",
  initialState: 0,
  reducers: {
    UpdateNumber(state, action: PayloadAction<number>) {
      return (state = action.payload);
    },
  },
});

export let { UpdateNumber } = countData.actions;
export default countData;