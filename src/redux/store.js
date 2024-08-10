import { configureStore } from "@reduxjs/toolkit";
import counterSlice from  "./counterSlice"


// dont forget to export 
export const store=configureStore({
      reducer:{
        // reducer should be in key value pais 
        counter:counterSlice
      }
})