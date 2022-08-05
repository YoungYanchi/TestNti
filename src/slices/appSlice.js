import {createSlice} from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        products: [],
        categories: [],
    },
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export function fetchProducts() {
    return async dispatch => {
        const response = await fetch('https://62ec043e55d2bd170e7b459a.mockapi.io/products')
        const data = await response.json()

        dispatch(loadProducts(data))

    }
}

export const {loadProducts} = appSlice.actions;

export default appSlice.reducer;