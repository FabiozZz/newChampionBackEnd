/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import classes from './timeTable.module.css';
import {CourseTable} from "./CourseTable/CourseTable";
import Api from "../../Api/Api";
import {useDispatch, useSelector} from "react-redux";
import {message, Skeleton} from "antd";
import {filtered_clients, load_clients, load_couch, load_group} from "../../Acnions/timeTableActions";
import HeaderNav from "../common/HeaderNav";
import axios from "axios";
import {FilterSection} from "./FilterSection/FilterSection";
import {HiddenFilter} from "./HiddenFilter/HiddenFilter";
import {InfoBlock} from "./InfoBlock/InfoBlock";

export const error = (text) => {
    message.error(text, 2);
};

export const TimeTable = () => {

    const refBox = useRef(null);
    const refInfo = useRef(null);

    const stateClients = useSelector(state => state.timeTable);

    const {clients,filterClients} = stateClients

    let dataClients = filterClients.length ? filterClients : clients;

    const [isLoad, setIsLoad] = useState(false);

    const dispatch = useDispatch();

    const [groupData, setGroup] = useState('');
    const handleChangeGroup = (e) => {
        setGroup(e.target.value);
    };

    const [couchData, setCouch] = useState('');
    const handleChangeCouch = (e) => {
        setCouch(e.target.value);
    };

    const [date, setDate] = useState({
        from:'',
        to:''
    });
    const handleChangeDateFrom = (some) =>{
        setDate(prevState => ({...prevState,from: some}))
    }

    const handleChangeDateTo = (some) =>{
        setDate(prevState => ({...prevState,to: some}))
    }

    
    useEffect(() => {
        const source = axios.CancelToken.source();
        setIsLoad(true);
        (async () =>{
            await Api.getClientsTimeTable(source.token).then(r => {
                dispatch(load_clients(r.data))
            })
            await Api.getGroupList(source.token).then(r => {
                dispatch(load_group(r.data))
            })
            await Api.getCouchList(source.token).then(r => {
                dispatch(load_couch(r.data));
            })
            await setIsLoad(false);

        })().catch(e=> {
            if (axios.isCancel(e)) {
                error(e.message);
            }
        });
        return ()=> source.cancel('Операция прервана');
    },[dispatch]);

    const [hide, setHide] = useState(false);
    const handleToggleHide = () => {
        setHide(!hide);
    };

    const clearFilter = () => {
        setDate({from:'',to:''});
        setGroup('');
        setCouch('')
    };

    useEffect(() => {
        dispatch(filtered_clients(groupData, couchData));
    },[couchData, dispatch, groupData]);

    const [hideOrVisInfo, setHideOrVisInfo] = useState(false);
    const [visibleInfo, setVisibleInfo] = useState(false);
    const toggleVisibleInfo = () => {
        setVisibleInfo(!visibleInfo);
    };


    useEffect(() => {
            if (refBox.current) {
                if (refBox.current.scrollWidth > refBox.current.clientWidth) {
                    setHideOrVisInfo(true)
                }else{
                    setHideOrVisInfo(false)
                }
            }
    });

    useEffect(() => {
        const scrollBox = () => {
            if (refInfo.current) {
                refInfo.current.style.right = refBox.current.getBoundingClientRect().right;
            }
        };
        refBox.current.addEventListener('scroll', scrollBox);
    },[]);


    return (
        <>
            <div className="col-12">
                <HeaderNav/>
            </div>
            <div className="col-12">
                <h1 className={classes.wrapper__title}>Расписание</h1>
            </div>
            
            <div className={`col-12 ${classes.wrapper__table}`}>
                    {!hide&&
                    <FilterSection date={date}
                                   couchData={couchData}
                                   groupData={groupData}
                                   handleChangeCouch={handleChangeCouch}
                                   handleChangeGroup={handleChangeGroup}
                                   changeDateTo={handleChangeDateTo}
                                   changeDateFrom={handleChangeDateFrom}/>
                    }
                    <HiddenFilter hide={hide} clear={clearFilter}
                                  toggleHide={handleToggleHide} couch={couchData} group={groupData} date={date}/>

                {
                    hideOrVisInfo&&
                    <div ref={refInfo} className={classes.info_block} onClick={toggleVisibleInfo}>
                        <InfoBlock toggle={visibleInfo}/>
                    </div>
                }
                <div ref={refBox} className={` ${classes.wrapper__course_table} ${isLoad ? 'row' : ''}`}>
                    <Skeleton loading={isLoad} paragraph={{rows: 4, width: '100%'}} active={true}/>
                    <Skeleton loading={isLoad} paragraph={{rows: 4, width: '100%'}} active={true}/>
                    <Skeleton loading={isLoad} paragraph={{rows: 4, width: '100%'}} active={true}>
                        <CourseTable data={dataClients}/>
                    </Skeleton>
                </div>
            </div>
        </>

    );
};