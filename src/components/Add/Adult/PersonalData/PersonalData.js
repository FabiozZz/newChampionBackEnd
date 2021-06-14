import React from 'react';
import classes from "../../add.module.css";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";
import {DataPicker} from "../../../../utils/DataPicker/DataPicker";
import {MaskInput} from "../../../../utils/MaskInput/MaskInput";

export const PersonalData = ({data,change,changeData}) => {

    return (
        <div className={`row ${classes.block_info}`}>

            <div className="col-12">
                <h3 className={classes.block_info__title}>личная информация</h3>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className={`col-4 ${classes.block_info__item}`}>
                        <OtherInput value={data.lastName} setValue={change} name={'lastName'} label={'фамилия'} required={true}/>
                    </div>
                    <div className={`col-4 ${classes.block_info__item}`}>
                        <OtherInput value={data.name} setValue={change} name={'name'} label={'имя'} required={true}/>
                    </div>
                    <div className={`col-4 ${classes.block_info__item}`}>
                        <OtherInput value={data.middleName} setValue={change} name={'middleName'} label={'отчество'} required={true}/>
                    </div>
                </div>
                <div className="row">
                    <div className={`col-5 ${classes.block_info__item}`}>
                        <DataPicker value={data.birthDay} setValue={changeData} name={'birthDay'} label={'дата рождения'}/>
                    </div>
                    <div className={`col-6 ${classes.block_info__item}`}>
                        <MaskInput value={data.phone}
                                   name={'phone'}
                                   setValue={change}
                                   mask={'+7 (999) 999-99-99'}
                                   label={'номер телефона'}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};