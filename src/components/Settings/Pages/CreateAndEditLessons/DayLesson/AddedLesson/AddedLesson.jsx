import React, {useEffect, useState} from 'react';
import classes from './add.module.css';
import {SelectGroup} from "../../../../../Profile/Pages/ProfileInfo/AddAboniment/SelectGroup/SelectGroup";
import {Btn} from "../../../../../Clients/FilterClientSection/BtnGroup/Btn/Btn";
import {useSelector} from "react-redux";
import {isEmpty} from "../../../../../../../../../../next.js/with-redux-thunk-app/components/halpers/common";

export const AddedLesson = (props) => {
    const {group} = useSelector(state => state.lessons);
    const [userData,setUserData] = useState({
        // trainer:{
        //     id: null,
        //     first_name: '',
        //     last_name: '',
        //     middle_name: '',
        // },
        // group:{
            id: null,
            name: ''
        // }
    });

    // const handleChangeCouch = (obj) => {
    //     setUserData(prevState => ({...prevState,trainer: {...obj}}));
    // };

    const handleChangeGroup = (obj) => {
        setUserData({...obj});
    };
    useEffect(() => {
        if (isEmpty(props.item)) {
            Object.assign(props.item,userData);
        }
    },[props.item, userData]);

    useEffect(() => {
        Object.assign(props.item,userData);
        // props.change(props.index,userData);
    },[props.item, userData])
    return (
        <div className={classes.wrapper}>
            <div className={classes.first_line}>
                <SelectGroup setValue={handleChangeGroup} label={'группа'} value={userData} data={group}/>
                {/*<SelectCouch setValue={handleChangeCouch} label={'тренер'} value={userData.trainer} data={couch}/>*/}
                <Btn factor={'danger'} onClick={()=>props.remove(props.iterator)}>
                    <svg className={classes.delete_lesson} width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3 3.00033C3 1.71166 4.04467 0.666992 5.33333 0.666992H6.66667C7.95533 0.666992 9 1.71166 9 3.00033L11.3333 3.00033C11.7015 3.00033 12 3.2988 12 3.66699C12 4.03518 11.7015 4.33366 11.3333 4.33366H10.6667V11.0003C10.6667 12.1049 9.77124 13.0003 8.66667 13.0003H3.33333C2.22876 13.0003 1.33333 12.1049 1.33333 11.0003V4.33366H0.666667C0.298477 4.33366 0 4.03518 0 3.66699C0 3.2988 0.298477 3.00033 0.666667 3.00033L3 3.00033ZM5.33333 6.33366C5.33333 5.96547 5.03486 5.66699 4.66667 5.66699C4.29848 5.66699 4 5.96547 4 6.33366V9.66699C4 10.0352 4.29848 10.3337 4.66667 10.3337C5.03486 10.3337 5.33333 10.0352 5.33333 9.66699V6.33366ZM8 6.33366C8 5.96547 7.70152 5.66699 7.33333 5.66699C6.96514 5.66699 6.66667 5.96547 6.66667 6.33366V9.66699C6.66667 10.0352 6.96514 10.3337 7.33333 10.3337C7.70152 10.3337 8 10.0352 8 9.66699V6.33366Z" fill="#8798AD"/></svg>
                </Btn>
            </div>
            <div/>
        </div>
    );
};