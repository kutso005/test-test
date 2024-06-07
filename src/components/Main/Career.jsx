import React from 'react'
import img1 from "../../assets/image/career1.svg"
import img2 from "../../assets/image/career2.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Navigation } from 'swiper/modules';
import people1 from "../../assets/image/oleg.svg"
import people2 from "../../assets/image/mariya.svg"
import people3 from "../../assets/image/danil.svg"



const ourCompany = [
    {
        image: img1,
        title: "Наша Компания является ярким примером, где достойные люди смело и заслуженно поднимаются по карьерной лестнице.",
    },
    {
        image: img2,
        title: "Мы ценим стремление к развитию и предоставляем все необходимые для этого условия.",
    },
]

const careerSwiper = [
    {
        image: people1,
        name: "Олег Воробьёв",
        specialist: "Прораб",
        company: "В Компании с 2018 года. Начал с позиции плотника в строительной бригаде.",
        yearWork: "В течение года работы Олег стал бригадиром и был приглашён в офис Компании на должность штатного Производителя строительных работ.",
        moment: "На данный момент в Его подчинении находятся 9 строительных бригад. Олег вносит весомый вклад в итоговый результат Компании, а это реализация 100 объектов в год!",
    },
    {
        image: people2,
        name: "Мария Обухова",
        specialist: "Руководитель финансовой службы",
        company: "В декабре 2018 года заступил на должность Менеджера отдела продаж.",
        yearWork: "После 9 месяцев стабильных результатов, зарекомендовав себя как надёжный сотрудник, получил ответственную должность Логиста.",
        moment: "Через год Даниил занял должность Специалиста службы снабжения, взяв на себя помимо закупа материала ещё и крайне важную роль Сметчика.",
    },
    {
        image: people3,
        name: "Даниил Басенков",
        specialist: "Менеджер по снабжению",
        company: "В декабре 2018 года заступил на должность Менеджера отдела продаж.",
        yearWork: "После 9 месяцев стабильных результатов, зарекомендовав себя как надёжный сотрудник, получил ответственную должность Логиста.",
        moment: "Через год Даниил занял должность Специалиста службы снабжения, взяв на себя помимо закупа материала ещё и крайне важную роль Сметчика.",
    },
]


export default function Career() {
    return (
        <div className='careers'>
            <div className="wrap">
                <h3 className='dark-grey uppercase center'> карьерный рост </h3>
                <div className="around career-around">
                    {
                        ourCompany.map((item, index) => (
                            <div className='flex' style={{ gap: 20 }} key={index}>
                                <img src={item.image} alt="" />
                                <h4> {item.title} </h4>
                            </div>
                        ))
                    }
                </div>
                <div className="careerSwiper">
                    <Swiper
                        effect={'flip'}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[EffectFlip, Navigation]}
                        className="mySwiper"
                    >
                        {
                            careerSwiper.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div style={{ position: "relative", }}>
                                        <div className='flex around career'>
                                            <div className='careerSwiperText'>
                                                <div className='column leader'>
                                                    <h3 className='white'> {item.name} </h3>
                                                    <h5 className='white'> {item.specialist} </h5>
                                                </div>
                                                <ul className='white'>
                                                    <li> {item.company} </li>
                                                    <br />
                                                    <li> {item.yearWork} </li>
                                                    <br />
                                                    <li> {item.moment} </li>
                                                </ul>
                                            </div>
                                            <img className='careerImage' style={{ position: "relative", zIndex: "-1" }} src={item.image} />
                                        </div>
                                        <div className="borderGreen"></div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
