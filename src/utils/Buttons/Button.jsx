import React from 'react';
import classes from './button.module.css';

/**
 * @desc Компонент кнопка которая может использоваться как отправка формы, для этого нужно передать type='submit'
 * @param {string} name прнимает строку, при необходимости можно задать имя кнопке
 * @param {string} size принимает строку, устанавливает размер кнопки,
 * присутствует две вариации ['small',default], по-умолчанию идет 'default'
 * @param {string} factor принимает строку, в зависимости от выбраннаго форм-фактора раскрашивает кнопку
 * доступно ['success','danger','default','dark'], по-умолчанию идет 'default'
 * @param {string} text принимает строку, устанавливает подпись к кнопке
 * @param {object} style принимает объект, устанавливает инлайн-стили к кнопке
 * @param {function} click принимает функцию-callback
 * @param {string} type принимает строку, стандартный аттрибут кнопки
 * доступно ['button','submit'], 'button' идет по-умолчанию
 * @param {boolean} disabled принимает булевое значение
 * @param {object} props остальные пропы которые можно применить к {<Button/>}
 * @returns {JSX.Element}
 * @constructor
 */
export const Button = ({name,size,factor, text,style,click, type='button',disabled,...props}) => {

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
        <button name={name} disabled={disabled} type={type} className={`${sizeUser} ${classes.btnApp} ${factorUser}`} onClick={click} style={style}>{text?text:props.children}</button>
    );
};