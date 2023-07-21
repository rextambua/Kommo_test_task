import React from "react";
import "./style.css";

export const Box = () => {
    return (
        <div className="box">
            <div className="header-wrapper">
                <header className="header">
                    <img className="logo-welbex" alt="Logo welbex" src="logo-welbex.svg" />
                    <p className="text-wrapper">крупный интегратор CRM в Росcии и ещё 8 странах</p>
                    <div className="div">+7 555 555-55-55</div>
                    <img className="whatsapp" alt="Whatsapp" src="whatsapp.svg" />
                    <img className="telegram" alt="Telegram" src="telegram.svg" />
                    <img className="viber" alt="Viber" src="viber.svg" />
                    <div className="navbar">
                        <div className="text-wrapper-2">Виджеты</div>
                        <div className="text-wrapper-3">Интеграции</div>
                        <div className="text-wrapper-4">Кейсы</div>
                        <div className="text-wrapper-5">Сертификаты</div>
                        <div className="text-wrapper-6">Услуги</div>
                    </div>
                </header>
            </div>
        </div>
    );
};
