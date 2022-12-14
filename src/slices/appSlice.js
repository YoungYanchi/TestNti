import {createSlice} from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        products: null,
        categories: null,
            selectedCategory: "Отопительное оборудование",
        selectedFilters: null
    },
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload
        },
        loadCategories: (state, action) => {
            state.categories = action.payload
        },
        updateSelectedFilters: (state, action) => {
            state.selectedFilters = action.payload
        },
        resetFilters: (state, action) =>{
            state.selectedFilters = null
        }
    }
})

export const fetchProducts = () => {
    return async dispatch => {
        const response = await fetch('https://62bc79866b1401736cfb7cf4.mockapi.io/items/')
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
        })

        Object.keys(fields).forEach(category => {
            Object.keys(fields[category]["filters"]).forEach(key=>fields[category]["filters"][key] = [...new Set(fields[category]["filters"][key])])
        })
        console.log(fields);

        dispatch(loadCategories(fields))
    }
}


export const updateFilter = ({ selectedFilters, category, field, value }) => {
    return async dispatch => {
        let tempSelectedFilters = JSON.parse(JSON.stringify(selectedFilters)) ?? {}

        if (!!tempSelectedFilters?.[category]?.[field]){
            if (!!tempSelectedFilters?.[category]?.[field]?.includes(value)) {
                tempSelectedFilters[category][field].splice(tempSelectedFilters[category][field].indexOf(value), 1)
                if (tempSelectedFilters[category][field].length === 0) delete tempSelectedFilters[category][field]
                if (Object.values(tempSelectedFilters[category]).length === 0) delete tempSelectedFilters[category]
                if (Object.values(tempSelectedFilters).length === 0) tempSelectedFilters = null
            }
            else
                tempSelectedFilters[category][field].push(value)
        }
        else {
            tempSelectedFilters[category] = {
                ...tempSelectedFilters?.[category] ?? {},
                [field]: [
                    ...tempSelectedFilters?.[category]?.[field] ?? [],
                    value
                ]
            }

        }
        dispatch(updateSelectedFilters(tempSelectedFilters))
    }
}


export const { loadProducts, loadCategories, updateSelectedFilters, resetFilters } = appSlice.actions;

export default appSlice.reducer;