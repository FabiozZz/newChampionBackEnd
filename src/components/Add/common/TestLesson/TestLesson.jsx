import React, {useRef} from 'react';
import classes from "../../add.module.css";
import {SelectGroup} from "../../../TimeTable/FilterSection/SelectGroup/SelectGroup";
import {DataPicker} from "../../../../utils/DataPicker/DataPicker";
import {SelectFilial} from "./SelectFilial";
import {Button} from "../../../../utils/Buttons/Button";

/**
 * компонент визуализации ввода данных о тестовом занятии
 *
 * @param groupList массив
 * @param value объект с значениями
 * @param setGroup функция для установки значения в value.group
 * @param setDate функция для устновки значения в value.dateTest
 * @param setFilial
 * @param filialList
 * @returns {JSX.Element}
 * @constructor
 */
export const TestLesson = ({groupList,value,setGroup,setDate,setFilial,filialList,isAdult=false}) => {
    const refFile = useRef(null);
    return (
        <div className={` ${classes.block_info}`}>

                <h3 className={classes.block_info__title}>пробное занятие</h3>
                    <div className={`${classes.block_info__item}`}>
                        <div className={classes.group}>
                            <SelectGroup required={true} name={'group'} value={value.group.name} setValue={setGroup}
                                         label={'группа'} data={groupList}/>
                        </div>
                        <div className={classes.filial}>
                            <SelectFilial required={true} data={filialList} label={'филиал'} value={value.filial.name} setValue={setFilial}/>
                        </div>
                        <div className={classes.picker}>
                            <DataPicker required={true} value={value.dateTest} name={'dateTest'} setValue={setDate} label={'дата пробного занятия'}/>
                        </div>
                        {!isAdult&&
                        <div className={classes.button}>
                            <Button size={'default'} text={'добавить справку'} click={()=>{
                                refFile.current.click();
                            }}/>
                            <input ref={refFile} name={'health'} type="file" hidden={true}/>
                        </div>
                        }
                    </div>
        </div>
    );
};