import React from 'react';
import classes from "../../add.module.css";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";
import {DataPicker} from "../../../../utils/DataPicker/DataPicker";

export const PersonalData = ({data,change,changeData}) => {

    return (
        <div className={classes.block_info}>

            <h3 className={classes.block_info__title}>информация о ребёнке</h3>
            <div className={classes.block_info__item}>
                <div className={classes.last_name}>
                    <OtherInput value={data.last_name} setValue={change} name={'last_name'} label={'фамилия'} required={true}/>
                </div>
                <div className={classes.first_name}>
                    <OtherInput value={data.first_name} setValue={change} name={'first_name'} label={'имя'} required={true}/>
                </div>
                <div className={classes.middle_name}>
                    <OtherInput value={data.middle_name} setValue={change} name={'middle_name'} label={'отчество'}/>
                </div>
                <div className={classes.date_of_birth}>
                    <DataPicker value={data.date_of_birth} setValue={changeData} name={'date_of_birth'} label={'дата рождения'} required={true}/>
                </div>
            </div>
        </div>


    );
};