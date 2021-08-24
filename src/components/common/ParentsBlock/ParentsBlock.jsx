import React from 'react';
import classes from '../../Add/add.module.css';
import {Button} from "../../../utils/Buttons/Button";
import {AddParent} from "./AddParent/AddParent";
import separate from '../../../assets/images/blockInfoSeparate.svg';
import remove from '../../../assets/images/removeParent.svg';

/**
 * компонент прослойка
 * @param parents массив с пустыми объектами
 * @param addParents функция добавления нового пустого объекта
 * @param removeParents функция удаления ненужно объекта из массива parents
 * @param change функция обработчик, прослушивает событие ввода данных в поле
 * @returns {JSX.Element}
 * @constructor
 */
export const ParentsBlock = ({parents,addParents,removeParents,change}) => {

    return (
        <div className={classes.block_info}>
                <h3 className={classes.block_info__title}>информация о родителях</h3>
            {parents.map((e,index)=> {
                return (
                    <div key={index} className={`${classes.block_info__parent_block} ${index>0&& classes.block_info__added}`}>

                        {/* начиная со второго элемента добавляется разделитель между блоками и кнопка для удаления не нужного блока */}
                        {index>0 &&
                        <>
                            <img className={`${classes.block_info__separate} ${classes.block_info__added}`} src={separate} alt="separate"/>

                            <div onClick={()=>removeParents(index)} className={classes.block_info__remove_parents}>
                                <img src={remove} alt="remove"/>
                            </div>

                        </>
                        }
                        <AddParent data={e} index={index} change={change}/>
                    </div>
                )
            })}

            <div className={`col-12 ${classes.block_info__btn}`}>
                <Button text={'добавить родственника'} click={addParents} size={'auto'} factor={'success'}/>
            </div>
        </div>

    );
};