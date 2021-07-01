import React from 'react';
import cn from 'classnames';
import classes from './btn.module.css';

export const Btn = ({children,isActive,...props}) => {
    return (
            <button className={cn(classes.btn,{[classes.active]:isActive,[classes.disabled]:!isActive})} {...props}>{children}</button>
    );
};
