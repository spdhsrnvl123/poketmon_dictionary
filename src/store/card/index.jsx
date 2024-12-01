import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const asyncUpFetch = createAsyncThunk(
    'getData/asyncUpFetch',
    async ()=>{
        const response = await fetch("http://localhost:4000/jobList");
        const data = await response.json();
        let sortedItem = data.sort((a,b)=>(
            new Date(b.createdAt) - new Date(a.createdAt)
       ))
        return sortedItem;
    }
)

let cardData = createSlice({
    name : 'cardData',
    initialState : {
        value : [],
        status : "Loading"
    },
    extraReducers : (builder)=>{
        builder.addCase(asyncUpFetch.pending, (state,action)=>{
            state.status = "Loading";

        })
        builder.addCase(asyncUpFetch.fulfilled, (state,action)=>{
            state.value = action.payload;
            state.status = 'complete';

        })
        builder.addCase(asyncUpFetch.rejected, (state,action)=>{
            state.status = 'fail';
            console.log("error")
        })
    }
})

export default cardData;
export {asyncUpFetch}