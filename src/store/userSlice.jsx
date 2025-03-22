//reducer
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: { //initail yhn banao ya upper
        user: {
            name: "admin",
            email: "admin@gmail.com"
        }
    },
    reducers: {                                 //actions
        setUser: (state, data) => {
            // 1 easi logic lagao k user "name" pass kry too "name" ki "state update" or "email" ki value pass kry too "email" ki "update" 
            // console.log("payload1", data.payload)
            // console.log("payload2--->", data.payload.value, data.payload.name)

            //logic 1 if else
            // data.payload.name == 'name' ? state.user.name = data.payload.value : state.user.email = data.payload.value

            //logic 2 porani state ko destructure krdo phir jo "value" or ushi ki "key" k name  sy usy update krdo
            state.user = {
                ...state.user,//like idhar name:"admin" hai pehly sy
                [data.payload.name]: data.payload.value  //ab yhn data aya  name:"Ali" ,to ab name update hojayega
            }

        },
        removeUser: (state) => {
            state.user = {}
        },
    }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice

// fixed_1
// export default userSlice.reducer //if you export this you don't need to write userSlice.reducer in store.jsx file in configureStore

/* 
1.store ki initial value
2nd createSlice me 3 chezen
    i. store k name
   ii. store ki initial state
  iii. action jo state ko update kryga

*/