import React from 'react';
import classes from "../../add.module.css";
import {SelectGroup} from "../../../TimeTable/FilterSection/SelectGroup/SelectGroup";
import {DataPicker} from "../../../../utils/DataPicker/DataPicker";
import {SelectFilial} from "./SelectFilial";

/**
 * компонент визуализации ввода данных о тестовом занятии
 *
 * @param groupList массив
 * @param value объект с значениями
 * @param setGroup функция для установки значения в value.group
 * @param setDate функция для устновки значения в value.dateTest
 * @returns {JSX.Element}
 * @constructor
 */
export const TestLesson = ({groupList,value,setGroup,setDate,setFilial,filialList}) => {
    return (
        <div className={`row ${classes.block_info}`}>

            <div className="col-12">
                <h3 className={classes.block_info__title}>пробное занятие</h3>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className={`col-6 ${classes.block_info__item}`}>
                        <SelectGroup name={'group'} value={value.group} setValue={setGroup}
                                     label={'групповые занятия единоборствами'} data={groupList}/>
                    </div>
                    <div className={`col-6 ${classes.block_info__item}`}>
                        <SelectFilial data={filialList} label={'филиал'} value={value.filial} setValue={setFilial}/>
                    </div>
                </div>
                <div className="row">
                    <div className={`col-5 ${classes.block_info__item}`}>
                        <DataPicker value={value.dateTest} name={'dateTest'} setValue={setDate} label={'дата пробного занятия'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};