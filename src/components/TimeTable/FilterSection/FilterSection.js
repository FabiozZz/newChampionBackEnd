import React, {useState} from 'react';
import classes from './filterSection.module.css';
import {DataPickerRange} from "../../../utils/DataPickerRange/DataPickerRange";
import {Button} from "../../../utils/Buttons/Button";
import {SelectGroup} from "./SelectGroup/SelectGroup";
import {SelectCouch} from "./SelectCouch/SelectCouch";
import {useSelector} from "react-redux";
import {OtherInput} from "../../../utils/OtherInput/OtherInput";

export const FilterSection = (props) => {
    const filteredData = useSelector(state => state.timeTable.filterSection);
    const {group, couch} = filteredData;
    const [sectionGroup, setSectionGroup] = useState('');
    const handleChangeValueGroup = ({target}) => {
        setSectionGroup(target.value);
    };

    const [sectionCouch, setSectionCouch] = useState('');
    const handleChangeValueCouch = ({target}) => {
        setSectionCouch(target.value);
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
                        <DataPickerRange label={"даты"}/>
                    </div>
                </div>

                <div className={`row ${classes.wrapper__btn_group}`}>
                        <Button className={classes.wrapper__btn_group__item} factor={'success'} disabled={true} text={'очистить фильтры'}/>
                        <Button className={classes.wrapper__btn_group__item} factor={"success"} text={'применить'}/>
                </div>
            </div>

    );
};