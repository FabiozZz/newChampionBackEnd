import React from 'react';
import classes from './notification.module.css';
import warning_not from '../../assets/images/warning_notif.svg'
import success_not from '../../assets/images/succsess_notif.svg';

export const Notification = ({text,factor}) => {
    let color,box,img;
    switch (factor) {
        case 'warning':
            color = classes.notif_warning;
            box = classes.notif__box_warning
            img = warning_not
            break;
        case 'danger':
            color = classes.notif_danger;
            box = classes.notif__box_danger
            img = warning_not
            break;
        default:
            color = classes.notif_success;
            box = classes.notif__box_success
            img = success_not
            break;
    }
    return (
        <div className={`${classes.notif} ${color}`}>
            <div className={`${classes.notif__box} ${box}`}>
                <img className={classes.notif__img} src={img} alt="notif"/>
            </div>
            <p className={classes.notif__text}>{text}</p>
        </div>
    );
};