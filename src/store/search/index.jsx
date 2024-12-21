import { createSlice } from "@reduxjs/toolkit"

let searchData = createSlice({
    name : 'searchData',
    initialState : "",
    reducers : {
        InputData(state, action){
            return state = action.payload;
        }
    }
})

export let { InputData } = searchData.actions;
export default searchData;