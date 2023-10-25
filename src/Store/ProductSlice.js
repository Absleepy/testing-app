
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}
let productsArray = [];
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.data = action.payload;
            productsArray = action.payload;
        },
        addProduct: (state, action) => {
            state.data = [action.payload, ...state.data]
        },
        deleteProduct: (state, action) => {
            state.data = state.data.filter(x => x.id !== action.payload)
        },
        editProduct: (state, action) => {
            state.data = state.data.map(x => x.id === action.payload.id ? action.payload : x)
        },
        searchProduct: (state, action) => {
            let tempArr = [...state.data];
            tempArr = productsArray.filter(x => x.title.toLowerCase().includes(action.payload));
            state.data = tempArr
        }

    },
})

export const { getProducts, addProduct, deleteProduct, editProduct, searchProduct } = productsSlice.actions

export default productsSlice.reducer;
