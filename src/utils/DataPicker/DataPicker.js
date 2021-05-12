import React, {useEffect, useState} from 'react';
import {createHead} from "../../helpers/DataPicker/dataPicker";

export const DataPicker = (props) => {
    const [activeDate,setActiveDate] = useState({
        day:NaN,month:NaN,year:NaN
    });
    useEffect(() => {

    });
    const month = [
        'Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'
    ]
    const dayOfTheWeek = [
        'Пн','Вт','Ср','Чт','Пт','Сб','Вс'
    ];
    const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    return (
        <div className={'calendar-wrapper'}>
            {/*<div className={'calendar-wrapper__change'}>*/}
            {/*    <div className={'calendar-wrapper__change__month'}>*/}
            {/*        <span className={'calendar-wrapper__change__month__prev'}/>*/}
            {/*        <span></span>*/}
            {/*        <span className={'calendar-wrapper__change__month__next'}/>*/}
            {/*    </div>*/}
            {/*    <div className={'calendar-wrapper__change__year'}></div>*/}
            {/*</div>*/}
            {/*<div className={'calendar-wrapper__date'}>*/}
            {/*    <table>*/}
            {/*        <thead><tr>{daysWeek}</tr></thead>*/}
            {/*        <tbody></tbody>*/}
            {/*    </table>*/}
            {/*</div>*/}
        </div>
    );
};

