import React, {useState} from 'react';
import classes from "../../../add.module.css";
import {OtherInput} from "../../../../../utils/OtherInput/OtherInput";
import {MaskInput} from "../../../../../utils/MaskInput/MaskInput";

export const AddParent = ({data,setsData,className=''}) => {

    return (
        <div className={`col-12 ${className}`}>
            <div className="row">
                <div className={`col-4 ${classes.block_info__item}`}>
                    <OtherInput value={data.lastName} setValue={setsData} name={'lastName'} label={'фамилия'} required={true}/>
                </div>
                <div className={`col-4 ${classes.block_info__item}`}>
                    <OtherInput value={data.name} setValue={setsData} name={'name'} label={'имя'} required={true}/>
                </div>
                <div className={`col-4 ${classes.block_info__item}`}>
                    <OtherInput value={data.middleName} setValue={setsData} name={'middleName'} label={'отчество'} required={true}/>
                </div>
            </div>
            <div className="row">
                <div className={`col-6 ${classes.block_info__item}`}>
                    <OtherInput value={data.hoIs} setValue={setsData} name={'hoIs'} label={'кем приходитесь ребёнку'} required={true}/>
                </div>
                <div className={`col-6 ${classes.block_info__item}`}>
                    <MaskInput name={'phone'} value={data.phone} mask={'+7 (999) 999-99-99'} setValue={setsData} required={true} label={'номер телефона'}/>
                </div>
            </div>

        </div>
    );
};