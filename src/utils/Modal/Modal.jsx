import React from 'react'
import classes from './modal.module.css';
import close from '../../assets/images/close_modal.svg';

/**
 * @param hide - принимает булевое зщначение, открыта модалка или нет
 * @param toggle - принимает функцию для смнены hide
 * @param children - то что должна скрывать модалка
 * @returns JSX
 */
export const Modal = ({toggle,children,size='sm'}) => {
    const sizeWindow = size === 'lg' ? classes.wrapper_lg : classes.wrapper_sm;
    return (
        <div className={classes.back}>
            <div className={sizeWindow}>
                <img onClick={toggle} className={classes.close} src={close} alt="close"/>
                {children}
            </div>
        </div>
    )
}
