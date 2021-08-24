import React, {useState} from 'react';
import classes from './gen.module.css';
import HeaderNav from "../common/HeaderNav";
import ItemCourse from "./ItemCourse/ItemCourse";

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

const GeneralPage = () => {
    // const [group, setGroups] = useState({id: 1, name: 'Бразильское Джиу-Джитсу'});
    // const handleChangeGroup = (group) => {
    //     setGroups(group);
    // };
    return (
        <>
            <HeaderNav/>
            <h1 className={classes.title}>Расписание</h1>
            <div className={classes.wrapper}>
                <span className={classes.time}>21.10.1989</span>
                <div className={classes.course_list}>
                    <ItemCourse/>
                    <ItemCourse/>
                    <ItemCourse/>
                    <ItemCourse/>
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

export default GeneralPage;