import React, { useState} from 'react';
import classes from "../../../add.module.css";
import {OtherInput} from "../../../../../utils/OtherInput/OtherInput";
import {MaskInput} from "../../../../../utils/MaskInput/MaskInput";

export const AddParent = ({data,setsData,className=''}) => {
    const [userDate,setObject] = useState({
        lastName: '',
        name: '',
        middleName: '',
        hoIs: '',
        phone: ''
    })
    const changeInputs = (e) =>{
        setObject({...userDate,[e.target.name]: e.target.value})
    }

    return (
        <>
            <div className="row">
                <div className={`col-4 ${classes.block_info__item}`}>
                    <OtherInput value={userDate.lastName} setValue={(e)=>{
                        Object.assign(data,userDate);
                        changeInputs(e);
                    }} name={'lastName'} label={'фамилия'} required={true}/>
                </div>
                <div className={`col-4 ${classes.block_info__item}`}>
                    <OtherInput value={userDate.name} setValue={(e)=>{
                        Object.assign(data,userDate);
                        changeInputs(e);
                    }} name={'name'} label={'имя'} required={true}/>
                </div>
                <div className={`col-4 ${classes.block_info__item}`}>
                    <OtherInput value={userDate.middleName} setValue={(e)=>{
                        Object.assign(data,userDate);
                        changeInputs(e);
                    }} name={'middleName'} label={'отчество'} required={true}/>
                </div>
            </div>
            <div className="row">
                <div className={`col-6 ${classes.block_info__item}`}>
                    <OtherInput value={userDate.hoIs} setValue={(e)=>{
                        Object.assign(data,userDate);
                        changeInputs(e);
                    }} name={'hoIs'} label={'кем приходитесь ребёнку'} required={true}/>
                </div>
                <div className={`col-6 ${classes.block_info__item}`}>
                    <MaskInput name={'phone'} value={userDate.phone} mask={'+7 (999) 999-99-99'} setValue={(e)=>{
                        Object.assign(data,userDate);
                        changeInputs(e);
                    }} required={true} label={'номер телефона'}/>
                </div>
            </div>
        </>
    );
};