import React, {useEffect, useRef, useState} from 'react';
import './datapicker.css';
import calendar from '../../assets/images/calendar.svg';
import InputMask from 'react-input-mask';

function leapYear(year)
{
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

const renderTable = (maxDays,firstDayMonth,func,classIndex) => {
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


export const DataPicker = ({setDate = ()=>{},date= new Date()}) => {
    const [activeDate,setActiveDay] = useState({
        currentDay: 10,
        currentYear: 2000,
        currentMonth: 10,
        currentDayWeek: 1,
    })
    const {currentMonth, currentYear,currentDay} = activeDate;

// const wrapperNode =
    const [userData, setUserData] = useState('');
    const [toggleIcon, setToggleIcon] = useState(false);

    const calendarRef = useRef();

    // const handleClickOutSide = (e) => {
    //     console.log(e.target.contains())
    // };

    // useEffect(() => {
    //     document.addEventListener('mousedown',handleClickOutSide)
    // },[]);
    // useEffect(() => {
    //     return ()=>
    //     document.removeEventListener('mousedown',handleClickOutSide)
    // },[]);

    const handleNextMonth = (e) => {
        e.preventDefault();
        currentMonth + 1 > 11?
            setActiveDay({...activeDate,currentMonth: 0,currentYear: currentYear+1}):
            setActiveDay({...activeDate,currentMonth: currentMonth+1});
        console.log(userData)
    };
    const handlePrevMonth = (e) => {
        e.preventDefault();
        currentMonth - 1 < 0?
            setActiveDay({...activeDate,currentMonth: 11,currentYear: currentYear-1}):
            setActiveDay({...activeDate,currentMonth: currentMonth-1});
    };

    const handleNextYear = (e) => {
        e.preventDefault();
        setActiveDay({...activeDate,currentYear: currentYear + 1});
    };
    const handlePrevYear = (e) => {
        e.preventDefault();
        setActiveDay({...activeDate,currentYear: currentYear - 1});
    };

    const handleToggleIconCalendar = (e) => {
        e.preventDefault();
        setToggleIcon(!toggleIcon);
        if (userData !== '') {
            let newActiveDay = userData.split('.');
            console.log(newActiveDay);

            setActiveDay({...activeDate,
                currentDay: Number(newActiveDay[0]) <32 ? Number(newActiveDay[0]):currentDay,
                currentMonth: Number(newActiveDay[1]) < 13 ?Number(newActiveDay[1]-1):activeDate.currentMonth,
                currentYear: Number(newActiveDay[2])
            })
        }
    };

    const handleChangeInputDate = (e) => {
        let symbol = e.target.value;

        setUserData(symbol);
    };

    const handleChangeDataPicker = (e) => {
        let symbol = e.target.textContent;
        setActiveDay({...activeDate,currentDay: symbol})
        setUserData(((symbol<10)?'0'+ symbol:symbol) + '.' + ((currentMonth+1) < 10 ?'0'+(currentMonth+1):currentMonth+1) + '.' + currentYear)
    };

    const dayOfTheWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const month = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']

    const days = [31,28,31,30,31,30,31,31,30,31,30,31]

    let maxDays = days[currentMonth];

    if (leapYear(currentYear)) {
        maxDays++;
    }

    const firstDayMonth = new Date(currentYear,currentMonth,0).getDay()

    let table = renderTable(maxDays, firstDayMonth,handleChangeDataPicker,currentDay);
    return (
        <div className={'dataPicker-wrapper'}>
            <div className="dataPicker-wrapper__inputWrapper">
                <label className={'dataPicker-wrapper__inputWrapper__after'}>
                    <InputMask mask="99.99.9999"
                               placeholder={'Не указано'}
                               onChange={handleChangeInputDate}
                               value={userData}
                    />
                    <img src={calendar} alt="calendar" onClick={handleToggleIconCalendar}/>
                </label>
            </div>
            {toggleIcon&&
            <div  onBlur={handleToggleIconCalendar} className={'dataPicker-wrapper__calendar'}>
                <div className={'dataPicker-wrapper__calendar__change'}>
                    <div className={'dataPicker-wrapper__calendar__change__wrapper'}>
                        <div className={'dataPicker-wrapper__calendar__change__wrapper__prev'}
                                onClick={handlePrevMonth}/>
                        <span>{month[currentMonth]}</span>
                        <div className={'dataPicker-wrapper__calendar__change__wrapper__next'}
                                onClick={handleNextMonth}/>
                    </div>
                    <div className={'dataPicker-wrapper__calendar__change__wrapper'}>
                        <div className={'dataPicker-wrapper__calendar__change__wrapper__prev'}
                                onClick={handlePrevYear}/>
                        <span>{currentYear}</span>
                        <div className={'dataPicker-wrapper__calendar__change__wrapper__next'}
                                onClick={handleNextYear}/>
                    </div>
                </div>
                <div ref={calendarRef} className={'dataPicker-wrapper__calendar__date'}>
                    <table>
                        <thead><tr>{dayOfTheWeek.map((el,index)=><th key={index}>{el}</th>)}</tr></thead>
                        <tbody>
                        <tr className={'separate'}/>

                        {table}
                        </tbody>
                    </table>
                </div>
            </div>
            }
        </div>
    );
};

