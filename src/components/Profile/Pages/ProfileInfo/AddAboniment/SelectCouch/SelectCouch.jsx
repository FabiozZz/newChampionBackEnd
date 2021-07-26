import React, { useEffect, useRef, useState } from 'react';
import PropTypes from "prop-types";
import classes from './selectCouch.module.css';
import {isEmpty} from "../../../../../../helpers/common";

/**
 * компонент для визуальзации выпадающего списка select
 *
 * @param label принимает строку, для отображения заголовка поля
 *
 * @param simpleClass принимает строку, установка пользовательских классов для обертки + к существующем классвм
 *
 * @param style принимает объект стилей
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const SelectCouch = ({ label, value, setValue, data, ...props }) => {

    /**
     * локальный стейт для установки и хранения значения видимости блока с опциями
     */
    const [toggleOptionBox, setToggleOptionBox] = useState(false);

    /**
     * переключатлель видимости блока с опциями
     * @param e
     */
    const handleToggleOptionBox = (e) => {
        e.preventDefault();
        setToggleOptionBox(prevState => !prevState);
    };

    /**
     * ссылка на весь компонент
     * @type {React.MutableRefObject<null>}
     */
    const selectRef = useRef(null);

    /**
     * ссылка на окно с опциями
     * @type {React.MutableRefObject<null>}
     */
    const optionBox = useRef(null);

    /**
     * еффект следит за положением выподающего списка с опциями, эсли он уходит с экрана,
     * добовляет отступ чтобы список оставался видимым полностью
     */
    useEffect(() => {
        if (optionBox.current != null) {
            if (optionBox.current.getBoundingClientRect().right > window.innerWidth) {
                optionBox.current.style.right = (window.innerWidth - optionBox.current.getBoundingClientRect().right - 10) + 'px'
            }
        }
    }, [toggleOptionBox]);

    /**
     * при монтировании компонента добовляет событие клика для компонента
     *
     * если есть блок с выбором опций, и клик произошел не на его дочерних элементах
     * а так же если есть общее поле селекта и клик произошел не на нем,
     * сворачивается окно с опциями
     *
     * при размонтировании компонента удаляется событие
     */
    useEffect(() => {
        const onClick = e => {
            if ((optionBox.current && !optionBox.current.contains(e.target))
                &&
                selectRef.current && !selectRef.current.contains(e.target)) {
                setToggleOptionBox(false)
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);


    return (
        <div ref={selectRef} className={`${classes.selectBoxWrapper} ${props.className}`} {...props}>
            <label className={`${classes.label}`} >{label}</label>
            <div className={classes.inputWrapper} onClick={handleToggleOptionBox}>
                <svg className={classes.arrow} width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66437 0.252601C1.25159 -0.114317 0.619519 -0.0771359 0.252601 0.335647C-0.114317 0.74843 -0.0771359 1.3805 0.335647 1.74742L4.83565 5.74742C5.21453 6.08421 5.78549 6.08421 6.16437 5.74742L10.6644 1.74742C11.0772 1.3805 11.1143 0.74843 10.7474 0.335647C10.3805 -0.0771359 9.74843 -0.114317 9.33565 0.252601L5.50001 3.66206L1.66437 0.252601Z" fill="#BFC5D2" /></svg>
                <span />
                <input readOnly className={classes.input} value={isEmpty(value)?'':(`${value.last_name} ${value.first_name} ${value.middle_name}`)} disabled={true} type="text" placeholder={props.placeholder?props.placeholder:'Не выбрано'} />
                {toggleOptionBox && <div className={classes.arrowOptionBox} />}
            </div>
            {toggleOptionBox &&
                <div ref={optionBox} className={classes.optionBox}>
                    {data.map(item => {
                        let trainer = `${item.last_name} ${item.first_name} ${item.middle_name}`;
                        return (
                            <option key={item.id} onClick={(e) => {
                                setValue({...item});
                                setToggleOptionBox(false);
                            }} value={trainer} className={classes.item}>{trainer}
                            </option>)})}
                    {/*<h3 className={'selectBox-wrapper__optionBox__title'}>дети 3-7 лет</h3>*/}
                    {/*<option onClick={handleChangeValue} value={'Маленький самурай'} className={'selectBox-wrapper__optionBox__item'}>Маленький самурай</option>*/}
                    {/*<option onClick={handleChangeValue} value={'Маленький чемпион'} className={'selectBox-wrapper__optionBox__item'}>Маленький чемпион</option>*/}
                    {/*<option onClick={handleChangeValue} value={'Маленький воин'} className={'selectBox-wrapper__optionBox__item'}>Маленький воин</option>*/}
                    {/*<h3 className={'selectBox-wrapper__optionBox__title'}>подростки 8-15 лет</h3>*/}
                    {/*<option onClick={handleChangeValue} value={'Тхеквондо'} className={'selectBox-wrapper__optionBox__item'}>Тхеквондо</option>*/}
                    {/*<option onClick={handleChangeValue} value={'Бразильское Джиу-Джитсу'} className={'selectBox-wrapper__optionBox__item'}>Бразильское Джиу-Джитсу</option>*/}
                    {/*<option onClick={handleChangeValue} value={'Самбо/Дзюдо'} className={'selectBox-wrapper__optionBox__item'}>Самбо/Дзюдо</option>*/}
                    {/*<option onClick={handleChangeValue} value={'Бокс'} className={'selectBox-wrapper__optionBox__item'}>Бокс</option>*/}
                    {/*<option onClick={handleChangeValue} value={'Тайский бокс'} className={'selectBox-wrapper__optionBox__item'}>Тайский бокс</option>*/}
                </div>
            }
        </div>
    );
};

SelectCouch.defaultProps = {
    label: '',
    style: {}
};

SelectCouch.propTypes = {
    label: PropTypes.string,
    style: PropTypes.object
};