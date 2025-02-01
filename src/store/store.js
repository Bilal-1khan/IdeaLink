import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import postReducer from "./postSlice"; // Import the post slice

const store = configureStore({
    reducer:{ 
        authReducer,
        postReducer

    }
})

export default store;