import React, { useEffect, useRef, useState } from 'react';
import classes from './filter.module.css';
import { ListType } from "./ListType/ListType";
import { useSelector } from "react-redux";
import { AbonimentType } from "./AbonimentType/AbonimentType";
import { CouchList } from "./CouchList/CouchList";
import { FilialList } from "./FilialList/FilialList";
import { BtnGroup } from "./BtnGroup/BtnGroup";
import { StatusFilterSection } from "./StatusFilterSection/StatusFilterSection";
import { AnchorBox } from "../AnchorBox/AnchorBox";
import SelectGroup from "../../../utils/SelectGroup/SelectGroup";
import {OtherInput} from "../../../utils/OtherInput/OtherInput";

export const FilterClientsSection = () => {

    const [isAdult, setIsAdult] = useState(false);

    const filterData = useSelector(state => state.clientsList.filterSection);

    const [search, setSearch] = useState('');
    const handleChangeSearch = (e) => {

        // здесь будут запросы к базе

        setSearch(e.target.value);
    };
    const [activeStatus, setActiveStatus] = useState({
        name: ''
    });
    const handleChangeValueForStatus = (some) => {
        setActiveStatus(some);
    }

    const [selectFilter, setSelectFilter] = useState({
        listType: { name: '' },
        abonementType: { name: '' },
        couchList: { name: '' },
        filialList: { name: '' },
        groupList: { name: '' }
    });

    const { listType, abonementType, couchList, filialList, groupList } = selectFilter;

    const handleChangeFilterDate = (name, obj) => {
        setSelectFilter(prevState => ({ ...prevState, [name]: { ...obj } }));
    };

    const [ancor, setHideAncor] = useState(false);

    const refFilter = useRef(null)
    useEffect(() => {
        const spyFilterSection = () => {
            if (refFilter.current) {
                if (refFilter.current.getBoundingClientRect().bottom < 0) {
                    setHideAncor(true)
                } else {
                    setHideAncor(false);
                }
            }
        };
        document.addEventListener('scroll', spyFilterSection);
        return () => document.removeEventListener('scroll', spyFilterSection);
    }, [])

    const clearFilter = () => {
        setSelectFilter({
            listType: { name: '' },
            abonementType: { name: '' },
            couchList: { name: '' },
            filialList: { name: '' },
            groupList: { name: '' }
        });
        setActiveStatus({ name: '' });
        setSearch('');
    };
    const selectedData = listType.name || abonementType.name || couchList.name || filialList.name || groupList.name || search || activeStatus.name;
    return (
        <>
            <div ref={refFilter} id={'filters'} className="">

                <div className={`${classes.wrapper}`}>
                    <div className={classes.search}>
                        <OtherInput name={'search'}
                            value={search}
                            setValue={handleChangeSearch}
                            label={'поиск'} />
                    </div>
                    <div className={classes.type_list}>
                        <ListType name={'listType'} value={listType.name} setValue={handleChangeFilterDate} label={'тип списка'} data={filterData.types} />
                    </div>
                    <div className={classes.type_aboniment}>
                        <AbonimentType name={'abonementType'} value={abonementType.name} setValue={handleChangeFilterDate} label={'тип абонемента'} data={filterData.abonement} />
                    </div>
                    <div className={classes.couch}>
                        <CouchList name={'couchList'} value={couchList.name} setValue={handleChangeFilterDate} label={'тренер'} data={filterData.couch} />
                    </div>
                    <div className={classes.filial}>
                        <FilialList name={'filialList'} value={filialList.name} setValue={handleChangeFilterDate} label={'филиалы'} data={filterData.filial} />
                    </div>
                    <div className={classes.course}>
                        <SelectGroup name={'groupList'} value={groupList.name} setValue={handleChangeFilterDate} label={'единоборства'} data={filterData.group} />
                    </div>
                    <div className={classes.btn}>
                        <BtnGroup is_Adult={isAdult} toggleActive={setIsAdult} />
                    </div>
                </div>
                <StatusFilterSection activePunkt={activeStatus.name} setPunkt={handleChangeValueForStatus} data={filterData.status} />
            </div>
            {(ancor || selectedData) &&
                <AnchorBox ancor={ancor} clear={clearFilter} select={selectedData} />
            }

        </>
    );
};