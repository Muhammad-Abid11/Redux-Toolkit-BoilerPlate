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
import { myAPI } from './api' //imported from api.js file


//-------------x----------when Single-Slice/Reducer
/* 
const store = configureStore({
    reducer: themeSlice.reducer, //yhn reducer:"storeKname".reducer,  <--`here reducer is a required keyword with themeSlice argument
    
    //fixed_1
    // Since Now I export "themeSlice.reducer" from "themeslice" file
    // reducer: themeSlice, 
})
 */

//------------x---------CombinedReducers  (gooodPractice rootReducer ki file me combine kro)

const rootReducer = combineReducers({ //ap ye direct nichy bhi likh sakty ho
    user: userSlice.reducer,
    theme: themeSlice.reducer,
    
    //fixed_1 (I think above/below is good practice as it shows reducer keyword with name slice name)
    // Since Now I export "themeSlice.reducer" from "themeslice" file
    // theme: themeSlice, 

    // [themeSlice.name]: themeSlice.reducer, //agar name property set ki hui ho to, this make the name of slice dynamic
    // [userSlice.name]: userSlice.reducer, //agar name property set ki hui ho to, this make the name of slice dynamic
    [myAPI.reducerPath]: myAPI.reducer,
})


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer, //here
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myAPI.middleware),
});
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
          
        //fixed_1
        // Since Now I export "themeSlice.reducer" from "themeslice" file
        // theme: themeSlice,
    }
})

export default store

*/
