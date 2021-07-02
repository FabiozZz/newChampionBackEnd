import React from "react";
import moment from "moment";

const cycleCalendar = (days,month,array)=>{
    for (let row = 1, day = 1; day <= days; row++) {
        let temp = [];
        for (let col = 1; col <= 7; col++) {
            if (row <= month) {
                temp.push(undefined)
                row++;
            }else{
                if (day <= days) {
                    temp.push(day);
                }else{
                    temp.push(undefined)
                }
                day++;
            }
        }
        array.push(temp);
    }

}

export const renderTable = (maxDays,firstDayMonth,func,classIndex,className) => {
    let renderTable = [];
    cycleCalendar(maxDays, firstDayMonth, renderTable);
    return renderTable.map((tr,index)=>(
        <tr key={index}>{tr.map((td,index)=>(
            <td key={index} className={`${+classIndex === td ? className:''}`} onClick={func}>{td}</td>))
        }</tr>))
};

export const renderTableRange = (
    maxDaysFrom,
    firstDayMonthFrom,
    func,
    dayFrom,
    monthFrom,
    yearFrom,
    dayTo,
    monthTo,
    yearTo,
    selectFrom,
    selectTo,click,classes) => {

    let tableFrom = [];


    cycleCalendar(maxDaysFrom, firstDayMonthFrom, tableFrom);

    return tableFrom.map((tr, index) => {
        return <tr key={index}>{tr.map((td,index) => {
                let month = (click ? monthFrom : monthTo);
                let year = (click ? yearFrom : yearTo);
            let idCell = (td < 10 ? '0'+ td : td) + '-' + (month<10? '0'+month:month) + '-' + year;
            let cell = [+td, +month+1, +year];
                let arrayFrom = selectFrom.split('-');
                let arrayTo = selectTo.split('-');
                let [fromD,fromM,fromY] = arrayFrom;
                let [toD,toM,toY] = arrayTo;
                let tempClass = (selectFrom === idCell) || (selectTo === idCell) ? classes.activeItemTd : '';
            let addClassFrom = '',addClassTo='';
            if ((selectFrom !== selectTo)&& (selectTo && selectFrom)) {
                addClassFrom = moment([+fromD,+fromM+1,+fromY],'DD-MM-YYYY').isBefore(moment([+toD,+toM+1,+toY],'DD-MM-YYYY'))
                ? classes.activeItemFrom:classes.activeItemTo;
                addClassTo = moment([+fromD,+fromM+1,+fromY],'DD-MM-YYYY').isAfter(moment([+toD,+toM+1,+toY],'DD-MM-YYYY'))
                ? classes.activeItemFrom:classes.activeItemTo;
            }

            let follow = moment(cell, 'DD-MM-YYYY').isBefore(moment([+toD,+toM+1,+toY], 'DD-MM-YYYY'))&&moment(cell, 'DD-MM-YYYY').isAfter(moment([+fromD,+fromM+1,+fromY], 'D-M-YYYY'))
            let unfollow = moment(cell, 'DD-MM-YYYY').isBefore(moment([+fromD,+fromM+1,+fromY], 'DD-MM-YYYY'))&&moment(cell, 'DD-MM-YYYY').isAfter(moment([+toD,+toM+1,+toY], 'D-M-YYYY'))
                let plusClass =
                    td !== undefined && selectTo && selectFrom && selectFrom !== selectTo
                    &&
                    (
                        follow || unfollow
                    )
                        ? classes.activeItemRange : '';
                return (<td key={index}
                            id={idCell}
                            className={`${tempClass} ${plusClass} ${idCell === selectFrom ?addClassFrom:''} ${idCell === selectTo?addClassTo:''}`}
                            onClick={td!==undefined? func : null}>{td}</td>);
            }
        )}</tr>
    })
};

export const leapYear = (year)=>
{
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
