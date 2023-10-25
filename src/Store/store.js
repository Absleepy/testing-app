import { configureStore } from "@reduxjs/toolkit";
import addProducts from "./ProductSlice";



export const store = configureStore({
    reducer: {
        products: addProducts,
    },
})