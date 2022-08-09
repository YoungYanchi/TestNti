import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import c from "./products.module.scss"

const Products = () => {
    const {products} = useSelector((state) => state.app)

    const productView = (product) => {
        return (
            <div key={product.id} className={c["product-item"]}>
                <div className={c["product-item__img-container"]}><img src={product.image} alt={""}/></div>
                <div className={c["product-item__title"]}>{product.name}</div>
                <div className={c["product-item__footer"]}>
                    <div className={c["product-item__footer__price"]}>{product.price}</div>
                    <div className={c["product-item__footer__add-cart"]}>
                        <button>add to cart</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {products && products.map(product => productView(product))}
        </div>
    );
}

export default Products;