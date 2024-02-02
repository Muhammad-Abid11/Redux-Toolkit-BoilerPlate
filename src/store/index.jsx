//store
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import themeSlice from './themeslice'
import userSlice from './userSlice'
/* 
const store = configureStore({
    reducer: themeSlice.reducer, //yhn reducer:"storeKname".reducer,  <--`here reducer is a required keyword with themeSlice argument
})
 */

const combinedRoot = combineReducers({ //ap ye direct nichy bhi likh sakty ho
    user: userSlice.reducer,
    theme: themeSlice.reducer,
})
const store = configureStore({
    reducer: combinedRoot//here
})

export default store

