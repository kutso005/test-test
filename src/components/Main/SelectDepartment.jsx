import React from 'react'
import Accordion from './Accordion'

export default function SelectDepartment() {
    return (
        <div className='select_depertament'>
            <div className="wrap">
                <h3 className='center uppercase'> Выбери подразделение: </h3>
                <div className="btns center" style={{ flexWrap: "wrap" }}>
                    <button className='btn-succes'> Строительный  отдел </button>
                    <button className='btn-outline'> офис </button>
                    <button className='btn-outline'> финансовый  отдел </button>
                    <button className='btn-outline'> Отдел продаж </button>
                    <button className='btn-outline'> Внештатный сотрудник </button>
                </div>
                <Accordion />
                <button className='btn-contained center'> откликнуться на вакансию </button>
            </div>
        </div>
    )
}
