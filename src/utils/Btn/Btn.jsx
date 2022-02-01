import React from 'react';
import cn from 'classnames';
import classes from './btn.module.css';

export const Btn = ({children,isActive,factor='default',...props}) => {
    let formFactor = factor === 'danger'? classes.danger:'';
    let otherClass = props&&props.cn?props.cn:'';
    return (
            <button className={cn(classes.btn,formFactor,{[classes.active]:isActive,[classes.disabled]:!isActive},otherClass)} {...props}>{children}</button>
    );
};
