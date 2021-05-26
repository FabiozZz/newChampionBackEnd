import React from "react";

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

export const renderTable = (maxDays,firstDayMonth,func,classIndex) => {
    let renderTable = [];
    cycleCalendar(maxDays, firstDayMonth, renderTable);
    return renderTable.map((tr,index)=>(
        <tr key={index}>{tr.map((td,index)=>(
            <td key={index} className={`${+classIndex === td ? 'activeItemTd':''}`} onClick={func}>{td}</td>))
        }</tr>))
};

export const renderTableRange = (maxDaysFrom,firstDayMonthFrom,func,dayFrom,monthFrom,yearFrom,dayTo,monthTo,yearTo,key) => {
    let tableFrom = [];
    cycleCalendar(maxDaysFrom, firstDayMonthFrom, tableFrom);
    let keyCell;

    return tableFrom.map((tr, index) => {
        return <tr key={index}>{tr.map((td, index) => {
            keyCell = key+monthFrom+yearFrom;
            key++;
                // let tempClass = (keyFrom === key+monthFrom+yearFrom || keyTo === key+monthTo+yearTo) ? 'activeItemTd' : null;
                // if (keyTo && keyFrom) {
                //     if (key > keyFrom && key  < keyTo) {
                //         tempClass += ' activeRangeItem'
                //     }
                // }

                return (<td key={key}
                            id={keyCell}
                            // className={tempClass}
                            onClick={func}>{td}</td>);
            }
        )}</tr>
    })
};

export const leapYear = (year)=>
{
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
