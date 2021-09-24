import React, {useEffect, useRef, useState} from 'react';
import PropTypes from "prop-types";
import classes from './type.module.css';

/**
 * @description компонент для визуальзации выпадающего списка select
 *
 * @param {string} name имя поля инпута
 * @param {string} label принимает строку, для отображения заголовка поля
 * @param {string} value возвращаемое значение
 * @param {function} setValue функция дял изменения значения value
 * @param {array} data массив для выподающего списка
 * @param {object} props пропы для контейенра компонента
 * @returns {JSX.Element}
 * @constructor
 */
export const AbonimentType = ({name,label,value,setValue,data,disabled=false,...props}) => {

    /**
     * @description локальный стейт для установки и хранения значения видимости блока с опциями
     * @param {boolean} toggleOptionBox булевое значение
     * @param {function} setToggleOptionBox функция изменения значения toggleOptionBox
     */
    const [toggleOptionBox, setToggleOptionBox] = useState(false);

    /**
     * @description переключатлель видимости блока с опциями
     * @function
     */
    const handleToggleOptionBox = () => {
        setToggleOptionBox(prevState => !prevState);
    };

    /**
     * ссылка на контейнер компонента
     * @type {React.MutableRefObject<null>}
     */
    const selectRef = useRef(null);

    /**
     * ссылка на выпадающий бюокс с опциями
     * @type {React.MutableRefObject<null>}
     */
    const optionBox = useRef(null);

    /**
     * еффект следит за положением выподающего списка с опциями, эсли он уходит с экрана,
     * добовляет отступ чтобы список оставался видимым полностью
     */
    useEffect(() => {
        if (optionBox.current!=null) {
            if (optionBox.current.getBoundingClientRect().right > window.innerWidth) {
                optionBox.current.style.right = (window.innerWidth - optionBox.current.getBoundingClientRect().right- 10 ) + 'px'
            }
        }
    },[toggleOptionBox]);

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

    let disabledClass = disabled ? classes.disabled : classes.inputWrapper;
    return (
        <div ref={selectRef} className={`${classes.selectBoxWrapper} ${props.className}`} {...props}>
            <label className={`${classes.label}`} >{label}</label>
            <div className={disabledClass} onClick={!disabled&&handleToggleOptionBox}>
                <svg className={classes.arrow} width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66437 0.252601C1.25159 -0.114317 0.619519 -0.0771359 0.252601 0.335647C-0.114317 0.74843 -0.0771359 1.3805 0.335647 1.74742L4.83565 5.74742C5.21453 6.08421 5.78549 6.08421 6.16437 5.74742L10.6644 1.74742C11.0772 1.3805 11.1143 0.74843 10.7474 0.335647C10.3805 -0.0771359 9.74843 -0.114317 9.33565 0.252601L5.50001 3.66206L1.66437 0.252601Z" fill="#BFC5D2"/></svg>
                <span/>
                <input readOnly={true} className={classes.input} value={value} disabled={disabled} type="text" placeholder={'Не выбрано'}/>
                {toggleOptionBox&&<div className={classes.arrowOptionBox}/>}
            </div>
            {toggleOptionBox&&
            <div ref={optionBox} className={classes.optionBox}>
                {data.map(item=> (<option key={item.id} onClick={()=> {
                    setValue({...item});
                    setToggleOptionBox(false);
                }} value={item.name} className={classes.item}>{item.name}</option>))}
            </div>
            }
        </div>
    );
};

AbonimentType.defaultProps = {
    label: '',
    style: {}
};

AbonimentType.propTypes = {
    label: PropTypes.string,
    style: PropTypes.object
};