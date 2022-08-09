import './App.module.scss';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, getCategories} from "./slices/appSlice";
import Products from "./components/products/Products";
import Filter from "./components/filter/Filters";
import c from "./App.module.scss"
import Header from "./components/header/Header";

function App() {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.app)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    useEffect(() => {
        if (!products) return
        dispatch(getCategories(products))
    }, [dispatch, products])


    return (
        <div className={c["catalog-container"]}>
            <Header/>
            {/*<Filter/>*/}
            {/*<Products/>*/}
        </div>
    );
}

export default App;


