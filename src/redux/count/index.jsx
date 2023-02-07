import { createSlice } from "@reduxjs/toolkit";

let countData = createSlice({
    name : 'countData',
    initialState : 0,
    reducers : {
        UpdateNumber(state, action){
            return state = action.payload
        }
    }
})

export let { UpdateNumber } = countData.actions;
export default countData;