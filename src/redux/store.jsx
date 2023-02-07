import { configureStore } from "@reduxjs/toolkit"
import cardData from './card'
import searchData from "./search"
import countData from "./count"

export default configureStore({
    reducer : {
        cardData : cardData.reducer,
        searchData : searchData.reducer,
        countData : countData.reducer
    }
})
