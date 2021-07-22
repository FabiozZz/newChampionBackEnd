import React from 'react';
import PropTypes from "prop-types";
import classes from './button.module.css';

/**
 *
 * @param className
 * @param name прнимает строку, при необходимости можно задать имя кнопке
 *
 * @param size принимает строку, устанавливает размер кнопки,
 * присутствует две вариации ['small',default], по-умолчанию идет 'default'
 *
 * @param factor принимает строку, в зависимости от выбраннаго форм-фактора раскрашивает кнопку
 * доступно ['success','danger','default','dark'], по-умолчанию идет 'default'
 *
 * @param text принимает строку, устанавливает подпись к кнопке
 *
 * @param style принимает объект, устанавливает инлайн-стили к кнопке
 *
 * @param click принимает функцию-callback
 *
 * @param type принимает строку, стандартный аттрибут кнопки
 * доступно ['button','submit'], 'button' идет по-умолчанию
 *
 * @param disabled принимает булевое значение
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const Button = ({className,name,size,factor, text,style,click, type='button',disabled,...props}) => {

    /**
     * проверка введенного значения и подстановка соответствующего класса
     */
    let sizeUser = size === 'default' ? classes.defaultSizeButton : size === 'small' ? classes.smallSizeButton : size === 'auto'? classes.autoSizeButton :size === 'min'? classes.minSizeButton :classes.defaultSizeButton;

    /**
     * проверка введенного форм-фактора и в зависимости от выбранного применяет стили
     */
    let factorUser = factor === 'success' ? classes.success :
        factor === 'danger' ? classes.danger : factor === 'default' ? classes.default :
            factor === 'dark' ? classes.dark : classes.default;

    return (
        <button name={name} disabled={disabled} type={type} className={`${sizeUser} ${classes.btnApp} ${className} ${factorUser}`} onClick={click} style={style}>{text?text:props.children}</button>
    );
};

Button.defaultProps = {
    size: 'default',
    style:{},
    disabled: false,
    name: '',
    factor:'default',
    className: ''
}

Button.propTypes = {
    name: PropTypes.string,
    size: PropTypes.oneOf(['default','small','auto','min']),
    factor: PropTypes.oneOf(['success','danger','default','dark']),
    style: PropTypes.object,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit']),
    click: PropTypes.func,
    text: PropTypes.string
}