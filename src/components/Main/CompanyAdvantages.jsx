import React from 'react'
import img1 from "../../assets/image/advantages1.svg"
import img2 from "../../assets/image/advantages2.svg"
import img3 from "../../assets/image/advantages3.svg"
import img4 from "../../assets/image/advantages4.svg"
import img5 from "../../assets/image/advantages5.svg"
import { FaPlus } from "react-icons/fa6";


const data = [
    {
        image: img1,
        title: "Качество продукта",
        text: "Мы гордимся результатами своей работы! Мы убеждены, что именно качество — это самое главное, это то, что даёт Нам уверенность в завтрашнем дне.",
    },
    {
        image: img2,
        title: "Популярность бренда в сети",
        text: "Мы занимаем высокие позиции в поисковой выдаче и имеем многочисленные отзывы, привлекающие новых заказчиков независимо от времени года.",
    },
    {
        image: img3,
        title: "Передовое рабочее место",
        text: "Комфортный офис в центре г. Санкт-Петербург, оборудованный передовыми технологиями. Твой рабочий компьютер может быть даже в твоём смартфоне!",
    },
    {
        image: img4,
        title: "Свои автоматизированные системы обучения",
        text: "Создали и постоянно улучшаем собственные автоматизированные системы обучения специалистов и повышения их квалификации внутри компании.",
    },
    {
        image: img5,
        title: "Сотрудничество с ведущими Компаниями рынка",
        text: "Сотрудничаем с ведущими Компаниями рынка строительных материалов: «Grand Line», «Петрович», «Окна Петербурга», «КраскиДоски», «Technonicol» и другими.",
    },
]

export default function CompanyAdvantages() {
    return (
        <div className='companyAdvantages'>
            <div className="wrap">
                <h3 className='uppercase center dark-grey'> Преимущества Компании </h3>
                <div className="advantages">
                    {
                        data.map((item, index) => (
                            <div className="advantag flex j-between" key={index}>
                                <img src={item.image} alt="" />
                                <div className="plus center">
                                    <FaPlus />
                                </div>
                                <div>
                                    <h3 className='white'> {item.title} </h3>
                                    <h5> {item.text} </h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
