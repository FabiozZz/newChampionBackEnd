import React from 'react';
import './button.css';
import PropTypes from "prop-types";

/**
 *
 * @param name
 * @param size
 * @param factor
 * @param text
 * @param style
 * @param click
 * @param type
 * @param disabled
 * @returns {JSX.Element}
 * @constructor
 */
export const Button = ({name,size,factor, text,style,click, type='button',disabled}) => {
    size += 'SizeButton';
    return (
        <button name={name} disabled={disabled} type={type} className={`${size} btn-app__${factor}`} onClick={click} style={style}>{text}</button>
    );
};
Button.defaultProps = {
    size: 'default',
    style:{},
    disabled: false,
    name: '',
    factor:'default'
}

Button.propTypes = {
    name: PropTypes.string,
    size: PropTypes.oneOf(['default','small']),
    factor: PropTypes.oneOf(['success','danger','default','dark']),
    style: PropTypes.object,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit']),
    click: PropTypes.func,
    text: PropTypes.string.isRequired
}