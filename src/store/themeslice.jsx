//reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: "red"
}

const themeSlice = createSlice({
    name: 'theme',
    /*
    initialState: { //initail yhn banao ya upper
        value: "red"
    }, 
     */
    initialState,
    reducers: {                                 //actions (ye PureFuntion redux ki State ko update krne k liye use krengy)
        updateTheme: (state, data) => {
            // console.log("payload", data)
            // console.log("payload---->", data.payload)
            // state.theme = "blue"
            state.theme = data.payload

        },
    }
})

export const { updateTheme } = themeSlice.actions //updateTheme k function export ta k hum "redux" ki "state" update kren
export default themeSlice //themeSlice ko export kiya q k store ko btana hai 


/* 
1.store ki initial value
2nd createSlice me 3 chezen
    i. store k name
   ii. store ki initial state
  iii. action jo state ko update kryga

*/