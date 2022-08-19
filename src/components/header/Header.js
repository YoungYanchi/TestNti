import React from 'react';
import c from "./header.module.scss"


function Header() {
    return (
        <header className={c["header"]}>
            <div className={c["header__menu-btn"]}>
                <img src='images/menu.svg' alt='menu'/>
            </div>
            <div className={c["header__logo"]}>
                <img className={c["header__logo__img"]} src='images/logo.svg' alt='logo'/>
                <div className={c["header__logo__title"]}>
                    <img src='images/logo_text.svg' alt='logo_text'/>
                    <p>Энергосберегающие  технологии</p>
                </div>
            </div>
            <div className={c["header__search"]}>
                <input placeholder='Поиск товаров..'/>
            </div>
            <div className={c["header__actions"]}>
                <img src='images/tel.svg' alt='tel'/>
                <img src='images/home.svg' alt='home'/>
                <img src='images/cart.svg' alt='cart'/>
            </div>
        </header>
    );
}

export default Header;