
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