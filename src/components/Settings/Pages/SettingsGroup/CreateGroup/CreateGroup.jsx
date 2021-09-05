import React from 'react';
import classes from './create_group.module.css';
import {Redirect} from "../../../../common/Redirect";
import cn from "classnames";
import {OtherInput} from "../../../../../utils/OtherInput/OtherInput";
import {SelectCouch} from "../../../../Profile/Pages/ProfileInfo/AddAboniment/SelectCouch/SelectCouch";
import {useSelector} from "react-redux";
import SelectGroup from "../../../../../utils/SelectGroup/SelectGroup";

export const CreateGroup = () => {
    const {couches,ages_group} = useSelector(state => state.settings_group);

    return (
        <>
            <Redirect title={'Добавить группу'}/>
            <div className={cn(classes.block_wrapper,classes.block_icon)}>

            </div>
            <div className={cn(classes.block_wrapper,classes.block_add)}>
                <div className={classes.name_group}>
                    <OtherInput label={'название группы'}/>
                </div>
                <div className={classes.couch}>
                    <SelectCouch label={'тренер'} data={couches} value={{id:null}}/>
                </div>
                <div className={classes.ages_group}>
                    <SelectGroup label={'Возрастная группа'} data={ages_group}/>
                </div>
            </div>
        </>
    );
};