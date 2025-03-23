
// localStorage or Redux dono hi global data store krne ki jagah hen 
// laken local - Storage RealTime nhi hai jb k Redux realtime data dyta hai

// agar humne Navbar me koye bhi theam select kiya or uska impect Home k page ko btana hai wo us time tk malum
// nhi hoga jb tk page reload nhi hoga.Q k jb tk ap Navbar me select krengy us time tk Home k page render ho chuka hoga


// Redux
// global state management library that has a real time feature

//     Difference with localStorage
//     localStorage with non - realTime approch

// component-- -> Reducer-- -> Store
// Store-- -> Reducer-- -> component

// store
// import { configureStore } from "@reduxjs/toolkit"

// Reducer-- -> har module k liye alag Reducer banega
// import { createSlice } from "@reduxjs/toolkit"

// Reducer banane k bad usy Store me import k use krliya

// Store or Reducer ready hen ab isy Connect krne k liye Provider use krna hoga App k file me
// or whn Provider k ander component ko wrap krdo
// import { Provider, useDispatch, useSelector } from "react-redux"

// DataSAve k liye
// updateTheame ko import kr k arrowfunction me call kro laken apne us arrow function ko bhi useDispatch me call krna hai
// or store me value console kro or wahn value 2nd parameter(data) me ayega data.payload kr k use kro 


// DataLyne k liye
// useSelector chahiye hoga us k first argument me milyga


// Steps
// 1. npm i react - redux redux @reduxjs/toolkit
// 2. First Configuration  then Connect



/* 
header
outlet sy is liye alag rakha hai q k navigaation work nhi kr rha tha

*/

// ---------------------  Redux Toolkit Query  ---------------------
//https://www.youtube.com/watch?v=60ELggkwLHc

//https://www.npmjs.com/package/json-server //json-server npm link
//npm i json-server -g

    //we are using dummy local server for testing
    //json-server --watch db.json --port 3001 //db.json file create kr k us me data save krdo 
    //json-server --watch .\src\assets\db.json 

    /* 
    Steps to configure Redux Toolkit Query
    1. npm i @reduxjs/toolkit-query react-query react-query/devtools
    2. Create a new file api.js in the store folder
       a. import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
       b. Create API's using createApi
       c. export the API's
    3. Import the API's in the store/index.js file
        a. Add the API's reducer in the configureStore ( in the rootReducer/combineReducers ) )
        b. Add the API's middleware to the store
    4. Use the API's in the components (add a route in the router.jsx file)
    5. Use the useQuery and useMutation hooks to fetch and mutate the data (refer to the ViewPost.jsx file)
    6. Add the API's provider in the index.js file
    
    */