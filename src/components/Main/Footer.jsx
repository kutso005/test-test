import React from 'react'
import phone from "../../assets/image/phone.svg"
import email from "../../assets/image/email.svg"
import locator from "../../assets/image/locator.svg"
import { YandexMap } from './Maps'
import youtube from "../../assets/image/youtube.svg"
import wka from "../../assets/image/wka.svg"
import telegram from "../../assets/image/telegram.svg"
import logo from "../../assets/image/alpha.svg"


const data = [
    {
        img: phone,
        title: "8 (812) 602-77-60",
        link: "tel: 8 (812) 602-77-60",
    },
    {
        img: email,
        title: "info@pplk.ru",
        link: "mailto:info@pplk.ru"
    },
    {
        img: locator,
        title: "ул. Заозёрная, д. 8 к. 2, офис 202 (7 мин. пешком от метро Фрунзенская)",
        link: "https://www.google.com/maps/search/?api=1&query=59.907478,30.324797"
    },
]

const icons = [
    {
        img: youtube,
        link: "https://www.youtube.com/",
    },
    {
        img: wka,
        link: "https://vk.com/",
    },
    {
        img: telegram,
        link: "https://web.telegram.org/k/",
    },
]

export default function Footer() {
    return (
        <div id='footer'>
            <div className="wrap">
                <div className="flex j-between footer-start">
                    <div className="footerText">
                        <h3 className='white uppercase contacts'> КОНТАКТЫ </h3>
                        <div className="btns">
                            <button className='btn-succes'> САНКТ-ПЕТЕРБУРГ </button>
                            <button className='btn-outline'> МОСКВА </button>
                        </div>
                        <div className="footer-communications">
                            {
                                data.map((item, index) => (
                                    <div className='communications flex' key={index}>
                                        <img src={item.img} alt="" />
                                        <a href={item.link} target='_blank'> {item.title} </a>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="footer-icons flex">
                            {
                                icons.map((item, index) => (
                                    <a href={item.link} target="_blank" key={index}>
                                        <img src={item.img} alt="" />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <YandexMap />
                </div>
                <div className="footer-end column">
                    <p> © 2023 Пестовский Лесокомбинат. Все права защищены. </p>
                    <p className='underline'> Оформить заявку на кредит </p>
                    <p className='underline'> Реквизиты </p>
                    <p className='underline'> Политика конфиденциальности </p>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}
