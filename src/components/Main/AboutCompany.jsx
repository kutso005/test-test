import React from 'react'

const data = [
    {
        number: 2,
        description: "Города присутствия: Санкт-Петербург и Москва"
    },
    {
        number: ">30",
        description: "Лет среди лидеров рынка"
    },
    {
        number: 100,
        description: "Домов и бань сдаём ежегодно"
    },
]

export default function AboutCompany() {
    return (
        <div className='about_company'>
            <div className="wrap">
                <h3 className='center uppercase'> О КОМПАНИИ </h3>
                <div className="about_company_cards ">
                    {
                        data.map((item, index) => (
                            <div id='center' key={index}>
                                <button className='btn-card'> {item.number} </button>
                                <h6> {item.description} </h6>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
