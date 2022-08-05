import './App.module.scss';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchProducts} from "./slices/appSlice";
import Products from "./components/products/Products";
import c from "./App.module.scss"
import Header from "./components/header/Header";
import Filter from "./components/filter/Filters";

function App() {
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(fetchProducts())
  }, [])
  return (
    <div className={c["wrapper"]}>
        <Header/>
        <Products/>
        <Filter/>
    </div>
  );
}

export default App;


// https://62ec043e55d2bd170e7b459a.mockapi.io/products