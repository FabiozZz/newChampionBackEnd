import React from 'react'
import { NavLink } from 'react-router-dom';

/**
 * Оболочка для NavLink из react-router
 * @param {string} to путь на который будет вести ссылка
 * @param {string} active класс для отображения активного состояния (не актуальна потому что после клика меню закрывается)
 * @param {any} children дочерние элементы
 * @param {object} props для передачи стандартных HTML-аттрибутов (className,style ....)
 * @returns {JSX.Element}
 * @constructor
 */
export const LinkItem = ({to='/',active='',children, ...props}) => {
    return (
        <NavLink to={to} activeClassName={active} {...props}>
            {children}
        </NavLink>
    )
}
