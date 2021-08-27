import React, {createContext, useEffect, useState} from 'react'
import HeaderNav from '../../../common/HeaderNav';
import {Redirect} from '../../../common/Redirect';
import classes from './less.module.css';
import {FilterLesson} from "./FilterLesson/FilterLesson";
import {MonthLesson} from "./MonthLesson/MonthLesson";
import {WeekLesson} from "./WeekLesson/WeekLesson";
import {DayLesson} from "./DayLesson/DayLesson";
import moment from "moment";
import axios from "axios";
import Api from "../../../../Api/Api";
import {useDispatch} from "react-redux";
import {download_couch_data, download_data, download_group_data} from "../../../../store/Actions/createLessonsActions";
// import {load_couch, load_group} from "../../../Actions/timeTableActions";

/**
 * контекст для передачи данных вниз по дереву компонентам, которые обернуты в контекст
 * @type {React.Context<undefined>}
 */
export const ContextData = createContext(undefined);

/**
 * страница управления расписанием
 * @returns {JSX.Element}
 * @constructor
 */
export const CreateAndEditLessons = () => {
    const dispatch = useDispatch();

    const [date, setDate] = useState(moment());
    const changeDate = (some) => {
        console.log(date.format('YYYY-DD-MM'))
        setDate(moment(some))
        console.log(date.format('YYYY-DD-MM'))
    };

    const [activeBtn,setActiveBtn] = useState('')
    const handleClickBtn = (e) => {
        setActiveBtn(e.target.dataset.valueActive);
    };
    useEffect(() => {
        if (!activeBtn) {
            setActiveBtn('month');
        }
    },[activeBtn])
    useEffect(() => {
        const source = axios.CancelToken.source();
        (async () => {
            await Api.getClientsTimeTable(source.token).then((r) => {
                dispatch(download_data(r.data));
            });
            await Api.getGroupList(source.token).then((r) => {

                dispatch(download_group_data(r.data));
            });
            await Api.getCouchList(source.token).then((r) => {
                dispatch(download_couch_data(r.data));
            });
        })().catch((e) => {
            if (axios.isCancel(e)) {
            }
        });
        return () => source.cancel("Операция прервана");
    }, [dispatch]);
    return (
        <>
            <HeaderNav/>
            <Redirect title={'Настройки расписания'}/>
            <ContextData.Provider value={{activeBtn,setActiveBtn,handleClickBtn,date,changeDate,setDate}}>
                <FilterLesson/>
                <div className={classes.out}>
                    <div className={classes.wrapper}>
                        {
                            activeBtn === "month" ? <MonthLesson/>:
                                activeBtn === "week" ? <WeekLesson/>:
                                    <DayLesson/>
                        }
                    </div>

                </div>
            </ContextData.Provider>

        </>
    )
}
