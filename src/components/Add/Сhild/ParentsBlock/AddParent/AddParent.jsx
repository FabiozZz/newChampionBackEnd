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
 * @param passport если есть паспорт, в локальный стейт добавляется поля для пасспорта
 * @returns {JSX.Element}
 * @constructor
 */
export const AddParent = ({data,change,index,passport=false}) => {

    /**
     * локальный стейт, в случае если объект data приходит не пустой, заполняется данными из data
     */
    let initialState;
    console.log(data)
    if (passport) {
        initialState = {
            last_name: data.last_name||'',
            first_name: data.first_name||'',
            middle_name: data.middle_name||'',
            who: data.who||'',
            phone_number: data.phone_number||'',
            passport: {...data.passport}
        };
    }else{
        initialState = {
            last_name: data.last_name||'',
            first_name: data.first_name||'',
            middle_name: data.middle_name||'',
            who: data.who||'',
            phone_number: data.phone_number||''
        };
    }
    const [userDate, setUserDate] = useState(initialState);

    const changeInputs = (e) =>{
        setUserDate(prevState => ({...prevState, [e.target.name]: e.target.value}));
        // Object.assign(data,userDate);
    }

    const changeInputsPassport = (e) =>{
        setUserDate(prevState => ({...prevState, passport: {...prevState.passport,[e.target.name]:e.target.value}}));
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
    },[]);

    /**
     * эффект отрабатывает каждый раз при вводе пользователем
     * запускает функцию change, которая заменяет пустой массив на новый, с новыми введенными данными
     */
    useEffect(() => {
        change(index,userDate);
    },[ index, userDate]);

    return (
        <div className={classes.block_info__item}>
            <div className={classes.last_name_parent}>
                <OtherInput value={data.last_name} setValue={changeInputs} name={'last_name'} label={'фамилия'} required={true}/>
            </div>
            <div className={classes.first_name_parent}>
                <OtherInput value={data.first_name} setValue={changeInputs} name={'first_name'} label={'имя'} required={true}/>
            </div>
            <div className={classes.middle_name_parent}>
                <OtherInput value={data.middle_name} setValue={changeInputs} name={'middle_name'} label={'отчество'}/>
            </div>
            <div className={classes.ho_is}>
                <OtherInput value={data.who} setValue={changeInputs} name={'who'} label={'кем приходитесь ребёнку'} required={true}/>
            </div>
            <div className={classes.phone_number_parent}>
                <MaskInput name={'phone_number'} value={data.phone_number} mask={'+7 (999) 999-99-99'} setValue={changeInputs} required={true} label={'номер телефона'}/>
            </div>
            {/* {passport&&
                <>
                    <div className={classes.serial_parent}>
                        <MaskInput setValue={changeInputsPassport} name={'serial'} value={data.passport.serial}
                                   mask={'9999'}
                                   label={'паспорт'} placeholder={'Серия'}/>
                    </div>
                    <div className={classes.number_parent}>
                        <MaskInput value={data.passport.number} setValue={changeInputsPassport} name={'number'}
                                   mask={'999999999'} placeholder={'Номер'}/>
                    </div>
                </>
            } */}
        </div>
    );
};