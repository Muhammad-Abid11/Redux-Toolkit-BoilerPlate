//store

//to-Connect-LocalStorage
//reduxPersis library to connect localStorage
// npm i redux-persist
// https://www.npmjs.com/package/redux-persist

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//to-Connect-LocalStorage

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import themeSlice from './themeslice'
import userSlice from './userSlice'


//-------------x----------when Single-Slice/Reducer
/* 
const store = configureStore({
    reducer: themeSlice.reducer, //yhn reducer:"storeKname".reducer,  <--`here reducer is a required keyword with themeSlice argument
})
 */

//------------x---------CombinedReducers  (gooodPractice rootReducer ki file me combine kro)

const rootReducer = combineReducers({ //ap ye direct nichy bhi likh sakty ho
    user: userSlice.reducer,
    theme: themeSlice.reducer,
})


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer//here
})
const persistor = persistStore(store)

// let store = configureStore(persistedReducer)
export { store, persistor }
// let store = createStore(persistedReducer)
//------------x---------withOut-CombinedReducers We can also combineReducer 

/* 

const store = configureStore({
    reducer: { //ap ye direct nichy bhi likh sakty ho
        user: userSlice.reducer,
        theme: themeSlice.reducer,
    }
})

export default store

*/
