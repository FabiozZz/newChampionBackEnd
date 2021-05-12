import React from 'react';
import './button.css';

export const Button = ({factor = 'default', text,style={},click = ()=>{}, type = 'button',disabled=false}) => {
    const handlerClick = (e) => {
        if (e.target.type === 'submit') {
            e.preventDefault();
        }
        click();
    };
    return (
        <button disabled={disabled} type={type} className={`btn-app__${factor}`} onClick={handlerClick} style={style}>{text}</button>
    );
};