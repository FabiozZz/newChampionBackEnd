import React, {useEffect, useRef, useState} from 'react';
import {Button} from "../../utils/Buttons/Button";
import {SearchBox} from "../../utils/SearchBox/SearchBox";
import {FilterSection} from "./FilterSection/FilterSection";
import classes from './timeTable.module.css';
import {CourseTable} from "./CourseTable/CourseTable";
import Api from "../../Api/Api";
import {useDispatch, useSelector} from "react-redux";
import {Skeleton} from "antd";
import {load_clients, load_couch, load_group} from "../../Acnions/timeTableActions";
import {NavLink} from "react-router-dom";
import {HiddenFilter} from "./HiddenFilter/HiddenFilter";




export const TimeTable = () => {

    const filterRef = useRef(null);
    const [isHide, setIsHide] = useState(false);

    const [visibleHiddenFilter, setVvisibleHiddenFilter] = useState(false);

    const stateClients = useSelector(state => state.timeTable);

    const {clients,filterClients} = stateClients

    let dataClients = filterClients.length? filterClients : clients;

    const [isLoad, setIsLoad] = useState(false);

    const dispatch = useDispatch();

    const handleToggleFilter = ()=>{
        setIsHide(!isHide);
        if (!isHide) {
            filterRef.current.style.top = (-filterRef.current.offsetHeight + 12) + 'px';
        }else{
            filterRef.current.style.top = 0
        }
    }

    useEffect(() => {
        const getCoord = () => {
            if (filterRef.current) {
                let box = filterRef.current.getBoundingClientRect();
                if (box.top <= 0) {
                    console.log(box.top < 0)
                    setVvisibleHiddenFilter(true);
                } else if (box.top > 0){
                    setVvisibleHiddenFilter(false);
                }
            }
        };
        document.addEventListener('scroll', getCoord);
        return ()=>{
            document.removeEventListener('scroll', getCoord);
        }
    },[]);

    useEffect(() => {
        setIsLoad(true);
            (async () => {

                await Api.getClientsTimeTable().then(r => {
                    dispatch(load_clients(r))
                    setIsLoad(false);
                });
            })();
            (async () => {

                await Api.getGroupList().then(r => {
                    dispatch(load_group(r))
                })
            })();
            (async () => {

                await Api.getCouchList().then(r => {
                    dispatch(load_couch(r))
                })
            })();
        },[dispatch]);

    return (
        <>
            <div className={classes.helper}>
                {/*<img src={} alt=""/>*/}
            </div>
        {/*// <div className={`row ${classes.wrapper}`}>*/}
            {/* верхняя группа кнопок */}
            <div className={`col-12 ${classes.button_group}`}>
                <div className={classes.button_group__btn}>
                    <NavLink to={'/add_adult'}>
                        <Button text={'добавить взрослого'}/>
                    </NavLink>
                </div>
                <div className={classes.button_group__btn}>
                    <NavLink to={'/add_child'}>
                        <Button text={'добавить ребенка'} factor={'success'}/>
                    </NavLink>
                </div>
                <div className={classes.button_group__btn}>
                    <SearchBox/>
                </div>
            </div>
            <div className="col-12">
                <h1 className={classes.wrapper__title}>Расписание</h1>
            </div>

            <div className="col-12">

                <div ref={filterRef} className={`row ${classes.wrapper__filter}`}>
                    <FilterSection selectCouch={dataClients.couch} selectGroup={dataClients.group}/>
                    {visibleHiddenFilter&&<HiddenFilter hide={isHide} toggleHide={handleToggleFilter}/>}
                </div>
                    {/*d-flex flex-row flex-nowrap overflow-auto justify-content-start*/}
                        <div className={` ${classes.wrapper__course_table} ${isLoad?'row':''}`}>
                            <Skeleton loading={isLoad} paragraph={{rows:4,width:'100%'}} active={true}/>
                            <Skeleton loading={isLoad} paragraph={{rows:4,width:'100%'}} active={true}/>
                            <Skeleton loading={isLoad} paragraph={{rows:4,width:'100%'}} active={true}>
                                <CourseTable data={dataClients}/>
                            </Skeleton>
                        </div>
            </div>
        {/*</div>*/}
        </>

    );
};