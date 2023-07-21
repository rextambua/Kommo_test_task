import PropTypes from "prop-types";
import React from "react";
import "./components.css";
import redball from '../assets/red ball copy.svg'
import vmecte from '../assets/Вместе.svg'

const Component = ({
                              className,
                              text = "Зарабатывайтебольше",
                              text1 = "30 готовыхрешений",
                              text2 = "использованияCRM",
                              text3 = "отдела продажи CRM системы",
                          }) => {
    return (
        <div className={`component ${className}`}>
            <div className="label">
                <div className="img-wrapper">
                    <img className="img" alt="Img" src={ vmecte } />
                </div>
            </div>
            <div className="overlap-group">
                <div className="element">{text}</div>
                <div className="WELBEX">с WELBEX</div>
                <div className="text-wrapper">Развиваем и контролируем продажи за вас</div>
            </div>
            <img className="red-ball" alt="Red ball" src={ redball } />
            <div className="div">{text1}</div>
            <div className="element-2">ВИДЖЕТЫ</div>
            <div className="dashboard">DASHBOARD</div>
            <div className="element-3">
                с показателями
                <br />
                вашего бизнеса
            </div>
            <div className="element-4">35 ДНЕЙ</div>
            <div className="CRM">{text2}</div>
            <div className="skype">SKYPE АУДИТ</div>
            <div className="CRM-2">{text3}</div>

            <div className="btn">
                <div className="element-5">Получить консультацию</div>
            </div>
        </div>
    );
};

Component.propTypes = {
    text: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
};

export default Component