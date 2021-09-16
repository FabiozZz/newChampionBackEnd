import React from 'react';
import classes from './create_group.module.css';
import {Redirect} from "../../../../common/Redirect";
import cn from "classnames";
import {OtherInput} from "../../../../../utils/OtherInput/OtherInput";
import {SelectCouch} from "../../../../Profile/Pages/ProfileInfo/AddAboniment/SelectCouch/SelectCouch";
import {useSelector} from "react-redux";
import SelectGroup from "../../../../../utils/SelectGroup/SelectGroup";
import SelectImage from "../../../../../utils/SelectImage/SelectImage";

export const CreateGroup = () => {
    const {couches,ages_group} = useSelector(state => state.settings_group);
    const svgs = require.context('../../../../../assets/images/IconPack', true, /\.svg$/)
    const svgsObjArray = svgs.keys()
        .map(key => ({
            path: key,
                file: svgs(key),
        }))
    const selectImage = (e)=>{
        console.log(e.target.getAttribute('src'))
    }
    return (
        <>
            <Redirect title={'Добавить группу'}/>
            <div className={cn(classes.block_wrapper,classes.block_icon)}>
                {svgsObjArray.map(e=> <img onClick={selectImage} key={e.path} src={e.file.default} alt=""/>)}
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
                <div className={classes.ages_group}>
                    <SelectImage/>
                </div>
            </div>
        </>
    );
};