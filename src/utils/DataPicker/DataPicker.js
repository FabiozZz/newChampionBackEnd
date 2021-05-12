import React, { useState} from 'react';

export const DataPicker = (props) => {
    const date = new Date();
    const [activeDate, setActiveDate] = useState({
        day: date.getDate(),
        dayWeek: date.getDay(),
        month: date.getMonth(),
        year: date.getFullYear(),
    });

    const month = [
        'Январь', 'Февраль',
        'Март', 'Апрель',
        'Май', 'Июнь',
        'Июль', 'Август',
        'Сентябрь', 'Октябрь',
        'Ноябрь', 'Декабрь'
    ];

    const dayOfTheWeek = ['Вс','Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    let maxDays = nDays[month];

    if (month === 1) {
        if ((activeDate.year % 4 === 0 && activeDate.year % 100 !== 0) || activeDate.year % 400 === 0) {
            maxDays++;
        }
    }



    console.log(dayOfTheWeek[activeDate.dayWeek])
    console.log(month[activeDate.month])

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

