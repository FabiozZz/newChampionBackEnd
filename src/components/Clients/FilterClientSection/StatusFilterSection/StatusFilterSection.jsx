import React from 'react';
import classes from './status.module.css'
import cn from 'classnames';

export const StatusFilterSection = ({data}) => {
    return (
        <div className={cn('row', classes.wrapper)}>
            {data.map(option=><div key={option.id} className={classes.item}><img src={option.img} alt={option.name}/><span>{option.name}</span></div>)}
        </div>
    );
};