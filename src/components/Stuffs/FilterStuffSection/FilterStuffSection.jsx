import React, { useEffect, useRef, useState } from 'react';
import classes from './stuff_filter.module.css';
import { OtherInput } from "../../../utils/OtherInput/OtherInput";
import { StuffAnchorBox } from "../StuffAnchorBox/StuffAnchorBox";
import SelectGroup from "../../../utils/SelectGroup/SelectGroup";
import {FilialList} from "../../Clients/FilterClientSection/FilialList/FilialList";

export const FilterStuffSection = () => {


    // const filterData = useSelector(state => state.stuffs);

    const [search, setSearch] = useState('');
    const handleChangeSearch = (e) => {

        // здесь будут запросы к базе

        setSearch(e.target.value);
    };
    const [selectFilter, setSelectFilter] = useState({
        filialList: { name: '' },
        specialList: { name: '' }
    });

    const {filialList,specialList} = selectFilter;

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
            filialList: { name: '' },
            specialList: { name: '' }
        });
        setSearch('');
    };
    const selectedData = filialList.name || specialList.name || search;
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
                {/*    <div className={classes.type_list}>*/}
                {/*        <ListType name={'listType'} value={listType.name} setValue={handleChangeFilterDate} label={'тип списка'} data={filterData.types} />*/}
                {/*    </div>*/}
                {/*    <div className={classes.type_aboniment}>*/}
                {/*        <AbonimentType name={'abonementType'} value={abonementType.name} setValue={handleChangeFilterDate} label={'тип абонемента'} data={filterData.abonement} />*/}
                {/*    </div>*/}
                {/*    <div className={classes.couch}>*/}
                {/*        <CouchList name={'couchList'} value={couchList.name} setValue={handleChangeFilterDate} label={'тренер'} data={filterData.couch} />*/}
                {/*    </div>*/}
                    <div className={classes.filial}>
                        <FilialList name={'filialList'} value={filialList.name} setValue={handleChangeFilterDate} label={'филиалы'} data={[]} />
                    </div>
                    <div className={classes.special}>
                        <SelectGroup name={'groupList'} value={specialList.name} setValue={handleChangeFilterDate} label={'должность'} data={[]} />
                    </div>
                {/*    <div className={classes.btn}>*/}
                {/*        <BtnGroup is_Adult={isAdult} toggleActive={setIsAdult} />*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<StatusFilterSection activePunkt={activeStatus.name} setPunkt={handleChangeValueForStatus} data={filterData.status} />*/}
            </div>
            {(ancor || selectedData) &&
            <StuffAnchorBox ancor={ancor} clear={clearFilter} select={selectedData} />
            }
            </div>

        </>
    );
};