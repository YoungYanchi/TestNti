import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, getCategories} from "./slices/appSlice";
import Header from "./components/header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import Products from "./components/products/Products";
import Filters from "./components/filter/Filters";
import c from "./App.module.scss";
import Banner from "./components/Banner/Banner";
import {useMediaQuery} from 'react-responsive'
import Footer from "./components/footer/Footer";
import Description from "./components/description/Description"

function App() {

    const dispatch = useDispatch()
    const {products, selectedCategory} = useSelector(state => state.app)
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    })
    const [filtersOpened, setFiltersOpened] = useState(false)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    useEffect(() => {
        if (!products || !products.length > 0) return
        dispatch(getCategories(products))

    }, [dispatch, products])


    return (
        <div className="App">
            {(isDesktopOrLaptop || !filtersOpened) && <Header/>}
            {(isDesktopOrLaptop || !filtersOpened) && <SubHeader/>}
            {(isDesktopOrLaptop || !filtersOpened) && <Banner/>}
            {isDesktopOrLaptop && <div className={c["category-header"]}>
                <div className={c["category-header__page-info"]}>
                    <p>Главня /&nbsp;</p>
                    <div className={c["category-header__page-info__link"]}>{selectedCategory}</div>
                </div>
                <div className={c["category-header__selected-category"]}>
                {selectedCategory}
                </div>
            </div>}
            <div className={c["catalog-container"]}>
                {((!isDesktopOrLaptop && filtersOpened) || isDesktopOrLaptop) &&
                    <Filters isDesktopOrLaptop={isDesktopOrLaptop} opened={filtersOpened}
                             setFiltersOpened={setFiltersOpened}/>}
                {(isDesktopOrLaptop || !filtersOpened) &&
                    <Products isDesktopOrLaptop={isDesktopOrLaptop} setFiltersOpened={setFiltersOpened}/>}
            </div>
            {(isDesktopOrLaptop || !filtersOpened) && <Description/>}
            {(isDesktopOrLaptop || !filtersOpened) && <Footer/>}
        </div>
    );
}

export default App;
