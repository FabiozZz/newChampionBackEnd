import React, {useState} from 'react';
import PropTypes from "prop-types";
import classes from './otherInput.module.css';

/**
 * визуальная обертка для стандартного <input/>
 *
 * @param name имя поля
 *
 * @param required стандартный аттрибут для <input/>, установка обязательного поля
 *
 * @param label принимает строку, устанавливает подпись для поля
 *
 * @param type стандартный аттрибут для <input/>, устанавливает тип поля
 *
 * @param disabled булевое значение, для переключения состояния кнопки
 *
 * @param simpleClass принимает строку, установка пользовательских классов для обертки без изменения стандартных, уже установленных классов
 *
 * @param style принимает объект стилей
 *
 * @param placeholder стандартный аттрибут для <input/>, установка подписи внутри поля инпут
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const OtherInput = ({value,setValue,name,required, label,type,disabled,style,placeholder,...props}) => {

    return (
        <div style={style} className={`${classes.otherInputWrapper} ${props.className}`}>
            {label&&<label>{label}</label>}
            <input value={value} name={name} onChange={setValue} required={required} placeholder={placeholder} type={type} disabled={disabled}/>
        </div>
    );
};

OtherInput.defaultProps = {
    required: false,
    type: 'text',
    disabled: false,
    simpleClass: '',
    name:'',
    style: {},
    placeholder: 'Не указано',
    className: ''
};

OtherInput.propTypes = {
    required: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    simpleClass: PropTypes.string,
    style: PropTypes.object,
    placeholder: PropTypes.string
};