import React from 'react'
import user from "../../assets/image/user.svg"
import p from "../../assets/image/₽.svg"
import { FaPlus } from "react-icons/fa6";

const data = [
    {
        title: "Прораб",
        from: "от 00 000 руб",
    },
    {
        title: "Специалист службы снабжения",
        from: "Обсуждается на собеседовании",
    },
    {
        title: "Логист",
        from: "от 00 000 руб",
    },
    {
        title: "Проектировщик",
        from: "от 00 000 руб",
    },
]

export default function Accordion() {
    return (
        <div className='column accordions'>
            {
                data.map((item, index) => (
                    <div className='accordion flex j-between' key={index}>
                        <div>
                            <div className="users">
                                <div className="user center">
                                    <img src={user} alt="" />
                                </div>
                                <h3 className='white'> {item.title} </h3>
                            </div>
                            <div className="users">
                                <div className="user center">
                                    <img src={p} alt="" />
                                </div>
                                <h3 className='green uppercase'> {item.from} </h3>
                            </div>
                        </div>
                        <div className='plus center'>
                            <FaPlus />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
