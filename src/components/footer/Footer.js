import React from "react";
import c from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={c["footer"]}>
            <div className={c["footer__content"]}>
                <div className={c["footer__content__contact"]}>
                    <div className={c["footer__content__contact__logo"]}>
                        <img className={c["footer__content__contact__logo-img"]} src='images/logo.svg' alt='logo'/>
                        <div className={c["footer__content__contact__logo-title"]}>
                            <img src='images/logo_text.svg' alt='logo_text'/>
                            <p>Энергосберегающие технологии</p>
                        </div>
                    </div>

                    <div className={c["footer__content__contact__phone"]}>
                        <div className={c["footer__content__contact__phone-number"]}>
                            <img src="images/phone_black.svg" alt="phone"/>
                            <p>+7 (495) 506-36-50</p>
                        </div>
                        <div className={c["footer__content__contact__phone-description"]}>
                            <div>
                                <p>
                                    Пн-Пт:<br/>
                                    Сб-Вс:
                                </p>
                            </div>

                            <div className={c["footer__content__contact__phone-time"]}>
                                <p>
                                    с 08:00 до 19:00<br/>
                                    с 08:00 до 16:00
                                </p>


                            </div>
                        </div>
                    </div>
                    <div className={c["footer__content__contact__mail"]}>
                        <img src="images/mail_black.svg" alt="mail"/>
                        <p>office@uconerfo.ru</p>
                    </div>
                    <div className={c["footer__content__contact__social"]}>
                        <div className={c["footer__content__contact__social__description"]}>
                            <p>Мы в сети</p>
                        </div>
                        <div className={c["footer__content__contact__social__links"]}>
                            <div className={c["footer__content__contact__social__links-vk"]}>
                                <img src="images/VK.svg" alt="VK"/>
                                <p>ВКонтакте</p>
                            </div>
                            <div className={c["footer__content__contact__social__links-inst"]}>
                                <img src="images/insta.svg" alt="INST"/>
                                <p>Instagram</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={c["footer__content__category"]}>
                    <div className={c["footer__content__category__header"]}>
                        <p>Категории продукции</p>
                    </div>
                    <div className={c["footer__content__category__description"]}>
                        <p>Трубчатые радиаторы</p>
                        <p>Панельные радиаторы</p>
                        <p>Полотенцесушители</p>
                        <p>Вертикальные радиаторы</p>
                        <p>Дизайн радиаторы</p>
                        <p>Внутрипольные конвекторы</p>
                        <p>Конвекторы водяные</p>
                        <p>Водосберегающая сантехника</p>
                        <p>Теплый пол</p>
                        <p>Чугунные дизайн радиаторы</p>
                        <p>Арматура для радиаторов</p>
                    </div>
                </div>

                <div className={c["footer__content__category"]}>
                    <div className={c["footer__content__category__header"]}><p>Категории продукции</p></div>
                    <div className={c["footer__content__category__description"]}>
                        <p>Трубчатые радиаторы</p>
                        <p>Панельные радиаторы</p>
                        <p>Полотенцесушители</p>
                        <p>Вертикальные радиаторы</p>
                        <p>Дизайн радиаторы</p>
                        <p>Внутрипольные конвекторы</p>
                        <p>Конвекторы водяные</p>
                        <p>Водосберегающая сантехника</p>
                        <p>Теплый пол</p>
                        <p>Чугунные дизайн радиаторы</p>
                        <p>Арматура для радиаторов</p>
                    </div>
                </div>

                <div className={c["footer__content__info"]}>
                    <div className={c["footer__content__info__header"]}><p>Информация</p></div>
                    <div className={c["footer__content__info__description"]}>
                        <p>О компании</p>
                        <p>Готовые решения</p>
                        <p>Наша продукция</p>
                        <p>Цвета</p>
                        <p>Сертификаты</p>
                        <p>Доставка и оплата</p>
                        <p>Контакты</p>

                    </div>
                </div>
            </div>
            <div className={c["footer__border"]}></div>

            <div className={c["footer__subfooter"]}>
                <div className={c["footer__subfooter__content"]}>
                    <p>Copyright © 2014 - 2020</p>
                </div>
                <div className={c["footer__subfooter__content"]}>
                    <p>Политика конфиденциальности</p>
                </div>
                <div className={c["footer__subfooter__content"]}>
                    <p>Обработка персональной информации</p>
                </div>
                <div className={c["footer__subfooter__devinfo"]}>
                    <div className={c["footer__subfooter__devinfo__text"]}>
                        <p>Разработано</p></div>
                    <div className={c["footer__subfooter__devinfo__logo"]}>
                        <img src="images/Group 169.svg" alt="reqLogo"/>
                    </div>
                    <div className={c["footer__subfooter__devinfo__title"]}>
                        <img src="images/footer_logo_text.svg" alt="reqText"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}