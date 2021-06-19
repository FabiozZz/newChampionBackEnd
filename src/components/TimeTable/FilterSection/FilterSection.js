import React, {useState} from 'react';
import classes from './filterSection.module.css';
import {DataPickerRange} from "../../../utils/DataPickerRange/DataPickerRange";
import {Button} from "../../../utils/Buttons/Button";
import {SelectGroup} from "./SelectGroup/SelectGroup";
import {SelectCouch} from "./SelectCouch/SelectCouch";
import {useDispatch, useSelector} from "react-redux";
import {OtherInput} from "../../../utils/OtherInput/OtherInput";
import {clear_filter, filtered_clients} from "../../../Acnions/timeTableActions";
import {isEmpty} from "../../../helpers/common";

export const FilterSection = (props) => {
    const dispacth = useDispatch();

    const filteredVariables = useSelector(state => state.timeTable.filterSection);

    const {group, couch} = filteredVariables;

    const [sectionGroup, setSectionGroup] = useState('');

    const handleChangeValueGroup = ({target}) => {
        setSectionGroup(target.value);
    };

    const handleChangeFilter = (e) => {
        e.preventDefault();
        if (isEmpty(date)) {
            // api запрос к базе
        }
        dispacth(filtered_clients(sectionGroup, sectionCouch));
    };
    const clearFilter = (e) => {
        e.preventDefault();
        setSectionGroup('');
        setSectionCouch('');
        setDate(prevState => ({from:'',to:''}))
        dispacth(clear_filter());
    };


    const [sectionCouch, setSectionCouch] = useState('');
    const handleChangeValueCouch = ({target}) => {
        setSectionCouch(target.value);
    };

    const [date, setDate] = useState({
        from:'',
        to: ''
    });
    const handleChangeDatePickerFrom = (some) => {
        setDate(prevState => ({...prevState,from:some}))
    };
    const handleChangeDatePickerTo = (some) => {
        setDate(prevState=>({...prevState,to:some}))
    };

    return (

            <div className={`col-12 ${classes.wrapper}`}>
                <div className="row">
                    <div className="col-12">
                        <OtherInput name={'search_name'} label={'фио'} placeholder={'Все'}/>
                    </div>
                </div>
                <div className={`row ${classes.wrapper__select_group}`}>
                    <div className={`col`}>
                        <SelectGroup value={sectionGroup} setValue={handleChangeValueGroup} label={'групповые занятия'} data={group}/>
                    </div>
                    <div className={`col`}>
                        <SelectCouch value={sectionCouch} setValue={handleChangeValueCouch} label={"тренеры"} data={couch}/>
                    </div>
                    <div className={`col`}>
                        <DataPickerRange value={date} setValueFrom={handleChangeDatePickerFrom} setValueTo={handleChangeDatePickerTo} label={"даты"}/>
                    </div>
                </div>

                <div className={`row ${classes.wrapper__btn_group}`}>
                        <Button click={clearFilter} disabled={!(sectionCouch || sectionGroup||date.to||date.from)} className={classes.wrapper__btn_group__item} factor={'default'} text={'очистить фильтры'}/>
                        <Button click={handleChangeFilter} className={classes.wrapper__btn_group__item} factor={"success"} text={'применить'}/>
                </div>
            </div>

    );
};