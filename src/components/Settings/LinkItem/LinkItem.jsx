import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './link.module.css';

export const LinkItem = ({to='/',active='',children, ...props}) => {
    return (
        <NavLink to={to} activeClassName={active} {...props}>
            {children}
        </NavLink>
    )
}
