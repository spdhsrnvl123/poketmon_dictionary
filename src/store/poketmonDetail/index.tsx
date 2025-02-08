import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const asyncUpFetch = createAsyncThunk(
  "countSlice/fetchData",
  async () => {
    const resp = await fetch("https://~~~");
    const data = await resp.json();
    return data.value;
  }
);

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
    status: "Welcome",
  },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});
