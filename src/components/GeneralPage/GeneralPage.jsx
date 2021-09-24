import moment from "moment";

import React, {useEffect, useState} from 'react';
import classes from './gen.module.css';
import HeaderNav from "../common/HeaderNav";
import ItemCourse from "./ItemCourse/ItemCourse";
import {useSelector} from "react-redux";
import {isEmpty} from "../../../../../../next.js/with-redux-thunk-app/components/halpers/common";

// const data = [
//     {id: 1, name: 'Бразильское Джиу-Джитсу'},
//     {id: 2, name: 'Маленькие Чемпионы'},
//     {id: 3, name: 'Маленькие Воины'},
//     {id: 4, name: 'Маленькие Самураи'},
//     {id: 5, name: 'Грепплинг'},
//     {id: 6, name: 'Кейтенринг'},
//     {id: 7, name: 'Гимнастика'},
//     {id: 8, name: 'Еще какой-то курс'},
// ];
// const dataHeadres = [
//     {id: 1, name: 'Дети 3-7 лет',groups:[
//             {id: 1,name: 'Маленькие Чемпионы'},
//             {id: 2,name: 'Маленькие Самураи'},
//             {id: 3,name: 'Маленькие Воины'},
//         ]},
//     {id: 2, name: 'подростки 8-16 лет',groups:[
//             {id: 4,name: 'Тхеквондо'},
//             {id: 5,name: 'Бразильское Джиу-Джитсу'},
//             {id: 6,name: 'Самбо/Дзюдо'},
//             {id: 7,name: 'Бокс'},
//             {id: 8,name: 'Тайский бокс'},
//         ]},
//     {id: 3, name: 'Взрослые 16+ лет',groups:[
//             {id: 9,name: 'Бокс'},
//             {id: 10,name: 'Тайский бокс'},
//             {id: 11,name: 'Грепплинг'},
//         ]},
// ];

export const GeneralPage = () => {
    // const [group, setGroups] = useState({id: 1, name: 'Бразильское Джиу-Джитсу'});
    // const handleChangeGroup = (group) => {
    //     setGroups(group);
    // };
    const generalPage = useSelector(state => state.general_page);
    const [renderList, setList] = useState([]);
    useEffect(() => {
        if (!isEmpty(generalPage.groups)) {
            setList(generalPage.groups.sort(function (a, b){
                return moment(a.date).format('k:mm') > moment(b.date).format('k:mm')?1:-1;
                // return a.id > b.id;
            }))
        }
    },[generalPage]);
    return (
        <>
            <HeaderNav/>
            <h1 className={classes.title}>Расписание</h1>
            <div className={classes.wrapper}>
                <span className={classes.time}>{moment().format('DD.MM.YYYY')}</span>
                <div className={classes.course_list}>
                    {renderList.length?
                        renderList.map(course=><ItemCourse key={course.id} course={course} couches={generalPage.couches}/> )
                        :
                        <h2>Сегодня занятий нет</h2>
                    }
                    {/*<ItemCourse/>*/}
                    {/*<ItemCourse/>*/}
                    {/*<ItemCourse/>*/}
                </div>
            </div>
            {/*<div style={{position:'absolute',bottom:'500px',left:0}}>*/}
            {/*    <SelectGroup label={'выбор группы'} setValue={handleChangeGroup} data={data} value={group}/>*/}
            {/*</div>*/}
            {/*<div style={{position:'absolute',bottom:'500px',left:0}}>*/}
            {/*    <SelectHeadersGroup label={'выбор группы'} setValue={handleChangeGroup} data={dataHeadres} value={group}/>*/}
            {/*</div>*/}

        </>
    );
};

