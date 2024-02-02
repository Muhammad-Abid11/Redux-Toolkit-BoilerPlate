//store
import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeslice'

const store = configureStore({
    reducer: themeSlice.reducer
})

export default store

