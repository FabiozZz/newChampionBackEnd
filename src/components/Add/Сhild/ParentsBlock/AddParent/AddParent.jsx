import React, {useEffect, useState} from 'react';
import classes from "../../../add.module.css";
import {OtherInput} from "../../../../../utils/OtherInput/OtherInput";
import {MaskInput} from "../../../../../utils/MaskInput/MaskInput";
import {isEmpty} from "../../../../../helpers/common";

/**
 * компонент визуализация ввода данных
 *
 * @param data пустой объект, приходит от компонента Kid
 * @param change функция замены пустого массива на измененный
 * @param index порядковый номер объекта в массива parents
 * @returns {JSX.Element}
 * @constructor
 */
export const AddParent = ({data,change,index}) => {

    /**
     * локальный стейт, в случае если объект data приходит не пустой, заполняется данными из data
     */
    const [userDate,setUserDate] = useState({
        lastName: data.lastName||'',
        name: data.name||'',
        middleName: data.middleName||'',
        hoIs: data.hoIs||'',
        phone: data.phone||''
    });

    const changeInputs = (e) =>{
        setUserDate(prevState => ({...prevState, [e.target.name]: e.target.value}));
        // Object.assign(data,userDate);
    }

    /**
     * эффект отрабатывает один раз при отрисовке компонента,
     * проверяет, если объект data пустой, то в нем появляются свойства из локальной стейта компонента,
     */
    useEffect(() => {
        if (isEmpty(data)) {
            Object.assign(data,userDate);
        }
    },[data, userDate]);

    /**
     * эффект отрабатывает каждый раз при вводе пользователем
     * запускает функцию change, которая заменяет пустой массив на новый, с новыми введенными данными
     */
    useEffect(() => {
        change(index,userDate);
    },[change, index, userDate]);

    return (
        <>
            <div className="row">

                <div className={`col-4 ${classes.block_info__item}`}>
                    <OtherInput value={data.lastName} setValue={changeInputs} name={'lastName'} label={'фамилия'} required={true}/>
                </div>

                <div className={`col-4 ${classes.block_info__item}`}>
                    <OtherInput value={data.name} setValue={changeInputs} name={'name'} label={'имя'} required={true}/>
                </div>

                <div className={`col-4 ${classes.block_info__item}`}>
                    <OtherInput value={data.middleName} setValue={changeInputs} name={'middleName'} label={'отчество'} required={true}/>
                </div>

            </div>

            <div className="row">

                <div className={`col-6 ${classes.block_info__item}`}>
                    <OtherInput value={data.hoIs} setValue={changeInputs} name={'hoIs'} label={'кем приходитесь ребёнку'} required={true}/>
                </div>

                <div className={`col-6 ${classes.block_info__item}`}>
                    <MaskInput name={'phone'} value={data.phone} mask={'+7 (999) 999-99-99'} setValue={changeInputs} required={true} label={'номер телефона'}/>
                </div>

            </div>
        </>
    );
};