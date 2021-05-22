import React from "react";

export const renderTable = (maxDays,firstDayMonth,func,classIndex) => {
    let renderTable = [];
    for (let row = 1, day = 1; day <= maxDays; row++) {
        let temp = [];
        for (let col = 1; col <= 7; col++) {
            if (row <= firstDayMonth) {
                temp.push(undefined)
                row++;
            }else{
                if (day <= maxDays) {
                    temp.push(day);
                }else{
                    temp.push(undefined)
                }
                day++;
            }
        }
        renderTable.push(temp);
    }
    return renderTable.map((tr,index)=>(<tr key={index}>{tr.map((td,index)=>(<td key={index} className={+classIndex === td? 'activeItemTd':''} onClick={func}>{td}</td>))}</tr>))
};

export const leapYear = (year)=>
{
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
