import React from 'react';
import InputMask from "react-input-mask";
import classes from "./mask.module.css";
import PropTypes from "prop-types";

/**
 * @param style принимает объект, инлайн стили для обертки
 *
 * @param label принимает строку, подпись к текстовому полю
 *
 * @param name принимает строку, имя текстового поля
 *
 * @param required булевое значение, обязательно ли поле для заполнения
 *
 * @param disabled булевое значение, будет выключенно ввод в поле если true
 *
 * @param className принимает строку, задает класс для обертки компонента
 *
 * @param placeholder принимает строку, надпись которвая будет видно до ввода в поле любого символа
 *
 * @param value принимает строку, строка из родительского компонента из локального стейта
 *
 * @param setValue принимает функцию, передается из родительского компонента, служит для изменения value
 *
 * @param mask принимает строку, для отображения маски ввода
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const MaskInput = ({style,label,name,required,disabled,className,placeholder,value,setValue,mask,permanents=[]}) => {
    return (
        <div style={style} className={`${classes.otherInputWrapper} ${className}`}>
            {label&&<label>{label}</label>}
            <InputMask name={name}
                       permanents={permanents}
                       required={required}
                       disabled={disabled}
                       value={value}
                       onChange={setValue}
                       placeholder={placeholder}
                       // className={classes.block_info__input}
                       mask={mask}/>
        </div>
    );
};
MaskInput.defaultProps= {
    style:{},
    label:'',
    name:'',
    required:false,
    disabled:false,
    className:'',
    placeholder:'Не указано',
    mask: ''
}
MaskInput.propTypes= {
    style:PropTypes.object,
    label:PropTypes.string,
    name:PropTypes.string,
    required:PropTypes.bool,
    disabled:PropTypes.bool,
    className:PropTypes.string,
    placeholder:PropTypes.string,
    mask: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func.isRequired
}