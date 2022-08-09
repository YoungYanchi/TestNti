import {createSlice} from "@reduxjs/toolkit";
import filters from "../components/filter/Filters";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        products: [],
        categories: {},
        selectedCategory: "Home",
        selectedFilters: null,
    },
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload
        },
        loadCategories: (state, action) => {
            state.categories = action.payload
        },
    }

})

export function fetchProducts() {
    return async dispatch => {
        const response = await fetch('https://62ec043e55d2bd170e7b459a.mockapi.io/products')
        const data = await response.json()

        dispatch(loadProducts(data))

    }
}

export const getCategories = (products) => {
    return async dispatch => {
        let fields = {}

        products.forEach(product => {
            const keys = Object.keys(product)
            if (!(product.category in fields)) fields[product.category] = {"filters":{}}

            keys.forEach(key=>{
                fields[product.category]["filters"][key] ? fields[product.category]["filters"][key].push(product[key]) : fields[product.category]["filters"][key] = [product[key]]
            })

            Object.keys(fields).forEach(category => {
                Object.keys(fields[category]["filters"]).forEach(key=>fields[category]["filters"][key] = [...new Set(fields[category]["filters"][key])])
            })
        })
        // console.log(products)
        // console.log(fields)
        dispatch(loadCategories(fields))
    }
}

export const updateFilter = ({selectedFilters, category, field, value}) => {
    const tempSelectedFilters = {...selectedFilters}
    if (!!tempSelectedFilters?.[category]?.[field]?.[value])
        tempSelectedFilters[category][field][value] = !tempSelectedFilters[category][field][value]
    else
        tempSelectedFilters[category][field][value] = true


}


export const {loadProducts, loadCategories} = appSlice.actions;

export default appSlice.reducer;