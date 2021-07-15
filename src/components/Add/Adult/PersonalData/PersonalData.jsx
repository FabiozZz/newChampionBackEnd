import React from 'react';
import classes from "../../add.module.css";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";
import {DataPicker} from "../../../../utils/DataPicker/DataPicker";
import {MaskInput} from "../../../../utils/MaskInput/MaskInput";

/**
 * компонент визуализации ввода персональных данных
 *
 * @param data объект с данными {...data,lastName,name,middleName,phone,birthDay}
 * @param change функция изменения {...data,lastName,name,middleName,phone}
 * @param changeData функция изменения {...data,birthDay}
 * @returns {JSX.Element}
 * @constructor
 */
export const PersonalData = ({data,change,changeData,changePass}) => {

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
                    <MaskInput value={data.phone}
                               name={'phone_number'}
                               setValue={change}
                               mask={'+7 (999) 999-99-99'}
                               required={true}
                               label={'номер телефона'}
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