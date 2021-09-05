import React, { useEffect, useRef, useState } from 'react';
import classes from "./option.module.css";
import edit from "../../../../assets/images/editCouch.svg";

/**
 * компонент для изменения треннера группы
 *
 * @param change функция с помощью которой можно поменять тренера
 * @param id порядковый номер группы в базе
 * @param couch тренер
 * @param couchList список доступных тренеров
 * @returns {JSX.Element}
 * @constructor
 */
export const Option = ({ change, id, couch, couchList }) => {

    /**
     * локальный стейт для переключения видимости блока со списком тренеров
     */
    const [toggleOption, setToggleOption] = useState(false);

    /**
     * функция для переключения видимости блока со списком тренеров
     */
    const handleToggleOptionBox = () => {
        setToggleOption(!toggleOption);
    };

    /**
     * ссылка на блок со списком тренеров
     * @type {React.MutableRefObject<null>}
     */
    const optionBox = useRef(null);

    /**
     * ссылка на оболочку компонента
     * @type {React.MutableRefObject<null>}
     */
    const selectRef = useRef(null);

    /**
     * эффект запускается каждый раз при переключения видимости блока со списком тренеров
     * проверяет положение блока и корректирует его если блок выходит за видимою часть окна браузера
     */
    useEffect(() => {
        if (optionBox.current != null) {
            optionBox.current.style.bottom = - (optionBox.current.getBoundingClientRect().height) + 'px'
            if (optionBox.current.getBoundingClientRect().right >= window.innerWidth) {
                optionBox.current.style.right = 30 + 'px';
            }else if(optionBox.current.getBoundingClientRect().left <= 0){
                optionBox.current.style.right = optionBox.current.getBoundingClientRect().left-10+'px';
            }

            // else if(optionBox.current.getBoundingClientRect().left <= window.innerWidth){
            //
            // }
        }
    }, [toggleOption]);

    /**
     * эффект запускается один раз
     * при монтировании компонента вешает на страницу прослушивание события клика,
     * если клик пришелся на по компоненту - сворачивает блок с тренерами,
     * если клик был по конкретному тренеру - отправляет данные на сервер для замены
     * и сворачивает блок
     * при размонтировании компонента, удаляет прослушку
     */
    useEffect(() => {
        const onClick = e => {
            if ((optionBox.current && !optionBox.current.contains(e.target))
                &&
                selectRef.current && !selectRef.current.contains(e.target)) {
                setToggleOption(false)
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);


    return (
        <div onClick={handleToggleOptionBox} ref={selectRef} className={classes.block_trainer}>
            <span className={classes.trainer}>{couch}</span>
            <div className={classes.edit}>
                <img className={classes.edit__icon} src={edit} alt="edit" />
                {toggleOption && <div className={classes.arrowOptionBox} />}
                {toggleOption &&
                <div ref={optionBox} className={classes.optionBox}>
                    {couchList.map(item => {
                        let trainer = `${item.last_name} ${item.first_name} ${item.middle_name}`
                        if (item.id !== 0) {
                            return (<option key={item.id} onClick={() => {
                                change(id,{...item});
                                setToggleOption(false);
                            }} className={classes.optionBox_item}>{trainer}</option>);
                        }else{
                            return null;
                        }
                    })}
                </div>
                }

            </div>

        </div>);
};