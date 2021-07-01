import React from 'react';
import classes from './info.module.css';

import infoImage from '../../../assets/images/infoBlock.svg';
import moveImage from '../../../assets/images/move.svg';

export const InfoBlock = ({toggle}) => {
    return (
        <>
            {toggle?
                <div className={classes.wrapper}>
                    <img className={classes.img} src={moveImage} alt=""/>
                    <p className={classes.text}>
                        Чтобы увидеть все группы, подвигайти расписание
                    </p>
                    <span className={classes.muted_text}>
                        Спасибо, все понятно
                    </span>
                </div>
                :
                <div className={classes.hide_wrapper}>
                    <img src={infoImage} alt="info"/>
                </div>
            }
        </>
    );
};