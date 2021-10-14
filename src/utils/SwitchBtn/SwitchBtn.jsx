import React from 'react';
import './switchBtn.css';
import {Switch} from "antd";
import PropTypes from "prop-types";

/**
 * компонент для визуализации переключения состояния родительского компонента,
 * принемает булевое значение и функцию которая срабатывает при клике
 *
 * @param size размер переключателя, доступные значения ['small','default'], 'default' идет по умолчанию
 *
 * @param position вертикальное либо горизонтальное положение переключателя, доступно только ['vertical']
 * если ничего не передавать, переключатель будет горизонтальным
 *
 * @param style объект со стилями для корневого элемента переключателя
 *
 * @param isChecked булевое значение
 *
 * @param setIsChecked коллбек функция для переключения состояния isChecked
 *
 * @param disabled отключает или включает кнопку, принимает булевое значение
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const SwitchBtn = ({size,position,style,isChecked,setIsChecked,disabled}) => {
    /**
     * копирует стили
     * @type {{style}}
     */
    let userStyle = {style}

    /**
     * если в position передана строка 'vertical' дополняет копию переданного стиля вертикальным видом
     */
    if (position === 'vertical') {
        userStyle = {...style,transform:'rotate(270deg)'}
    }
    return (
        <div style={userStyle} className={'switch-wrapper'}>
            {isChecked ?
                <Switch defaultChecked disabled={disabled} size={size}
                        className={isChecked ? 'switch-wrapper__checked' : 'switch-wrapper__unchecked'}
                        checked={isChecked}
                        onChange={setIsChecked} />
                :
                <Switch disabled={disabled} size={size}
                        className={isChecked ? 'switch-wrapper__checked' : 'switch-wrapper__unchecked'}
                        checked={isChecked}
                        onChange={setIsChecked} />
            }
        </div>
    );
};

SwitchBtn.defaultProps = {
    size: 'default',
    style: {},
    disabled: false
};
SwitchBtn.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    setIsChecked: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['default', 'small']),
    position: PropTypes.oneOf(['vertical']),
    disabled: PropTypes.bool,
    style: PropTypes.object,
};

