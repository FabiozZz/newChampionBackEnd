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
        <div className={`row ${classes.block_info}`}>

            <div className="col-12">
                <h3 className={classes.block_info__title}>пробное занятие</h3>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className={`col-6 ${classes.block_info__item}`}>
                        <SelectGroup name={'group'} value={value.group.name} setValue={setGroup}
                                     label={'групповые занятия единоборствами'} data={groupList}/>
                    </div>
                    <div className={`col-6 ${classes.block_info__item}`}>
                        <SelectFilial data={filialList} label={'филиал'} value={value.filial.name} setValue={setFilial}/>
                    </div>
                </div>
                <div className="row">
                    <div className={`col-5 ${classes.block_info__item}`}>
                        <DataPicker value={value.dateTest} name={'dateTest'} setValue={setDate} label={'дата пробного занятия'}/>
                    </div>
                    {!isAdult&&
                    <div className={`col-4 ${classes.block_info__item}`}>
                        <Button size={'default'} text={'добавить справку'} click={()=>{
                            refFile.current.click();
                        }}/>
                        <input ref={refFile} name={'health'} type="file" hidden={true}/>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};