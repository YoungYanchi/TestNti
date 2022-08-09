import React, {useEffect} from 'react';
import c from "./filter.module.scss"
import {useDispatch, useSelector} from "react-redux";

const Filter = () => {
    const dispatch = useDispatch()
    const { categories, selectedCategory, selectedFilters } = useSelector(state => state.app)

    const filterClickHandle = ({field, value}) => {

    }

    // useEffect(() => {
    //     return (categories) => {
    //         console.log(categories)
    //     };
    // }, []);

    const getFilterView = (name, values) => {
        let type

        switch (name) {
            case "price":
                type = "range"
                break
            case "brand":
            case "sections":
            case "distance":
            case "subCategory":
            case "color":
            case "heatingArea":
                type = "checkbox"
                break
            default:
                type = null
        }
        return type && <div>
            <p>{name}</p>
            <div className={c["filter-" + type]}>{values.map(value => {
                return (
                    <>
                        <input type={type}/>
                        <label>{value}</label>
                    </>
                )
            })}</div>
        </div>
    }

    return (
        <div className={c["filters-container"]}>
            {categories && Object.keys(categories).map(category => {
                if (category === selectedCategory)
                    return Object.keys(categories[category]["filters"]).map(key => getFilterView(key, categories[category]["filters"][key]))
                return null
            })}
        </div>
    );
}

export default Filter;