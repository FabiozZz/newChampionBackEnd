import React from 'react';
import classes from './filterSection.module.css';
import { DataPickerRange } from "../../../utils/DataPickerRange/DataPickerRange";
import { SelectGroup } from "./SelectGroup/SelectGroup";
import { SelectCouch } from "./SelectCouch/SelectCouch";
import { useSelector } from "react-redux";
import { OtherInput } from "../../../utils/OtherInput/OtherInput";

export const FilterSection = ({ groupData, date, changeDateFrom, changeDateTo, couchData, handleChangeGroup, handleChangeCouch }) => {

    const filteredVariables = useSelector(state => state.timeTable.filterSection);

    const { group, couch } = filteredVariables;

    return (
        <div id={'filters'} className={classes.wrapper}>
            <div className={classes.search}>
                <OtherInput name={'search_name'} label={'фио'} placeholder={'Все'} />
            </div>
            <div className={classes.select_group}>
                <SelectGroup value={groupData} setValue={handleChangeGroup} label={'групповые занятия'} data={group} />
                <SelectCouch value={couchData} setValue={handleChangeCouch} label={"тренеры"} data={couch} />
                <DataPickerRange value={date} setValueFrom={changeDateFrom} setValueTo={changeDateTo} label={"даты"} />
            </div>
        </div>

    );
};