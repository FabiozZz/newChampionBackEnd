import React from 'react';
import classes from "../../add.module.css";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";
import {DataPicker} from "../../../../utils/DataPicker/DataPicker";
import {MaskInput} from "../../../../utils/MaskInput/MaskInput";
import {MaskInputTel} from "../../../../utils/MaskInputTel/MaskInputTel";

/**
 * компонент визуализации ввода персональных данных
 *
 * @param {object} data объект с данными {...data,last_name,first_name,middle_name,phone_number,birth_of_date}
 * @param {function} change функция изменения {...data,last_name,first_name,middle_name,phone_number}
 * @param {function} changeData функция изменения {...data,birth_of_date}
 * @param {function} changePass функция изменения данных паспорта
 * @returns {JSX.Element}
 * @constructor
 */
export const PersonalData = ({data,change,changeData,changePass}) => {

    // let beforeMaskedValueChange = (newState, oldState, userInput) => {
    //     let value = newState.value;
    //    if (userInput.length >= 10){
    //         value.slice(1,10)
    //     }
    //     return {value};
    // }

    return (
        <div className={`${classes.block_info}`}>

            <h3 className={classes.block_info__title}>личная информация</h3>
            <div className={`${classes.block_info__item}`}>
                <div className={classes.last_name}>
                    <OtherInput value={data.lastName} setValue={change} name={'last_name'} label={'фамилия'} required={true}/>
                </div>
                <div className={classes.first_name}>
                    <OtherInput value={data.name} setValue={change} name={'first_name'} label={'имя'} required={true}/>
                </div>
                <div className={classes.middle_name}>
                    <OtherInput value={data.middleName} setValue={change} name={'middle_name'} label={'отчество'}/>
                </div>
                <div className={classes.date_of_birth}>
                    <DataPicker value={data.date_of_birth} setValue={changeData} name={'date_of_birth'} label={'дата рождения'} required={true}/>
                </div>
                <div className={classes.phone_number}>
                    <MaskInputTel value={data.phone_number}
                               name={'phone_number'}
                               setValue={change}
                               required={true}
                               label={'номер телефона'}
                               // beforeMaskedValueChange={beforeMaskedValueChange}
                    />
                </div>
                <div className={classes.serial}>
                    <MaskInput setValue={changePass} name={'serial'} value={data.passport.serial}
                               mask={'9999'}
                               label={'паспорт'} placeholder={'Серия'}/>
                </div>
                <div className={classes.number}>
                    <MaskInput value={data.passport.number} setValue={changePass} name={'number'}
                               mask={'999999999'} placeholder={'Номер'}/>
                </div>

            </div>
        </div>
    );
};