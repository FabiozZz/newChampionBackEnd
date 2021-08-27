import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export const CustomLink = (props) => {
    if (props.route === props.to) {
        return (
            <div className={`${props.className} ${props.activeClassName}`}>
                {props.children}
            </div>
        )
    } else {
        return (
            <NavLink {...props}>
                {props.children}
            </NavLink>
        )

    }
}
