import React from "react";
import "./footer.css";
import whatsapp from '../assets/whatsapp copy.svg'
import telegram from '../assets/telegram copy.svg'
import viber from '../assets/viber copy.svg'


const Footer = ({ className }) => {
    return (
        <div className={`footer ${className}`}>
            <p className="element">Москва, Путевой проезд 3с1, к 902</p>
            <div className="text-wrapper">+7 555 555-55-55</div>
            <div className="div">О КОМПАНИИ</div>
            <div className="element-2">МЕНЮ</div>
            <div className="element-3">КОНТАКТЫ</div>
            <img className="whatsapp" alt="Whatsapp" src={ whatsapp } />
            <img className="telegram" alt="Telegram" src={ telegram } />
            <img className="viber" alt="Viber" src={ viber } />
            <div className="element-4">Партнёрская программа</div>
            <div className="element-5">Расчёт стоимости</div>
            <div className="youtube">Блог на Youtube</div>
            <div className="element-6">Услуги</div>
            <div className="element-7">Вопрос / Ответ</div>
            <div className="element-8">Виджеты</div>
            <div className="element-9">Интеграции</div>
            <div className="element-10">Наши клиенты</div>
            <div className="element-11">Кейсы</div>
            <div className="element-12">Благодарственные письма</div>
            <div className="element-13">Сертификаты</div>
            <div className="element-14">Вакансии</div>
            <p className="WELBEX">©WELBEX 2022 . Все права защищены.</p>
            <div className="element-15">Политика конфиденциальности</div>
        </div>
    );
};

export default Footer