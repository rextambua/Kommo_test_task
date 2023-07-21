import React from "react";
import Component  from "./component";
import Footer from "../components/footer";
import purple_light from '../assets/purple light copy.svg'
import redball from '../assets/red ball copy.svg'
import purple_ball from '../assets/purple ball copy.svg'
import whatsapp from '../assets/whatsapp copy.svg'
import telegram from '../assets/telegram copy.svg'
import viber from '../assets/viber copy.svg'
import logo_welbex from '../assets/logo_welbex copy.svg'
import "./desktop.css";

export const Desktop = () => {
    return (
        <div className="desktop">
            <div className="div-2">
                <div className="overlap">
                    <img className="purple-light" alt="Purple light" src={ purple_light } />
                    <img className="red-ball-2" alt="Red ball" src={ redball } />
                    <img className="purple-ball" alt="Purple ball" src={ purple_ball } />
                    <Component
                        className="component-1"
                        text={
                            <>
                                Зарабатывайте
                                <br />
                                больше
                            </>
                        }
                        text1={
                            <>
                                30 готовых
                                <br />
                                решений
                            </>
                        }
                        text2={
                            <>
                                использования
                                <br />
                                CRM
                            </>
                        }
                        text3={
                            <>
                                отдела продаж
                                <br />
                                и CRM системы
                            </>
                        }
                    />
                    <header className="header">
                        <img className="logo-welbex" alt="Logo welbex" src={ logo_welbex } />
                        <p className="text-wrapper-2">крупный интегратор CRM в Росcии и ещё 8 странах</p>
                        <div className="text-wrapper-3">+7 555 555-55-55</div>
                        <img className="whatsapp-2" alt="Whatsapp" src={ whatsapp } />
                        <img className="telegram-2" alt="Telegram" src={ telegram } />
                        <img className="viber-2" alt="Viber" src={viber } />
                        <div className="navbar">
                            <div className="text-wrapper-4">Виджеты</div>
                            <div className="text-wrapper-5">Интеграции</div>
                            <div className="text-wrapper-6">Кейсы</div>
                            <div className="text-wrapper-7">Сертификаты</div>
                            <div className="text-wrapper-8">Услуги</div>
                        </div>
                    </header>
                </div>
                <Footer className="footer-instance" />
            </div>
        </div>
    );
};
