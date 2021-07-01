import React, {useState} from 'react';
import classes from './filter.module.css';
import {OtherInput} from "../../../utils/OtherInput/OtherInput";
import {ListType} from "./ListType/ListType";
import {useSelector} from "react-redux";
import {AbonimentType} from "./AbonimentType/AbonimentType";
import {CouchList} from "./CouchList/CouchList";
import {FilialList} from "./FilialList/FilialList";
import {GroupList} from "./GroupList/GroupList";
import {BtnGroup} from "./BtnGroup/BtnGroup";
import {StatusFilterSection} from "./StatusFilterSection/StatusFilterSection";

export const FilterClientsSection = () => {
    const [isAdult, setIsAdult] = useState(false);
    // const [isActiveStatus,setActiveStatus] = useState({
    //     name:'',
    //     active:false
    // })
    const filterData = useSelector(state => state.clientsList.filterSection);
    const [search, setSearch] = useState('');
    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <div className={`row ${classes.wrapper}`}>
                <div className={classes.wrapper__first_line}>
                    <OtherInput name={'search'}
                                value={search}
                                setValue={handleChangeSearch}
                                label={'поиск'}/>

                </div>
                <div className={classes.wrapper__second_line}>
                    <ListType label={'тип списка'} data={filterData.types}/>
                    <AbonimentType label={'тип абонимента'} data={filterData.aboniment}/>
                    <CouchList label={'тренер'} data={filterData.couch}/>
                </div>
                <div className={classes.wrapper__third_line}>
                    <FilialList label={'филиалы'} data={filterData.filial}/>
                    <GroupList label={'единоборства'} data={filterData.group}/>
                    <BtnGroup is_Adult={isAdult} toggleActive={setIsAdult}/>
                </div>
            </div>
                <StatusFilterSection data={filterData.status}/>
        </>
    );
};