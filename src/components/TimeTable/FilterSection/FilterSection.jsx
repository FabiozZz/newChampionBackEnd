import React from 'react';
import classes from './filterSection.module.css';
import {DataPickerRange} from "../../../utils/DataPickerRange/DataPickerRange";
import {SelectGroup} from "./SelectGroup/SelectGroup";
import {SelectCouch} from "./SelectCouch/SelectCouch";
import {useSelector} from "react-redux";
import {OtherInput} from "../../../utils/OtherInput/OtherInput";

export const FilterSection = ({groupData,date,changeDateFrom,changeDateTo,couchData,handleChangeGroup,handleChangeCouch}) => {

    const filteredVariables = useSelector(state => state.timeTable.filterSection);

    const {group, couch} = filteredVariables;

    return (
        <div id={'filters'} className={`row ${classes.wrapper}`}>
                <div className="row">
                    <div className="col-12">
                        <OtherInput name={'search_name'} label={'фио'} placeholder={'Все'}/>
                    </div>
                </div>
                <div className={`row ${classes.wrapper__select_group}`}>
                    <div className={`col`}>
                        <SelectGroup value={groupData} setValue={handleChangeGroup} label={'групповые занятия'} data={group}/>
                    </div>
                    <div className={`col`}>
                        <SelectCouch value={couchData} setValue={handleChangeCouch} label={"тренеры"} data={couch}/>
                    </div>
                    <div className={`col`}>
                        <DataPickerRange value={date} setValueFrom={changeDateFrom} setValueTo={changeDateTo} label={"даты"}/>
                    </div>
                </div>
        </div>

    );
};