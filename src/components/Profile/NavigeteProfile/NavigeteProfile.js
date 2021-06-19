import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "../profile.module.css";

export const NavigateProfile = ({id}) => {
    return (
        <div className={'row'}>
            <div className={`col-12 ${classes.nav_block}`}>

                <NavLink activeClassName={classes.nav_block__item_active}
                         exact
                         className={`${classes.nav_block__item}`}
                         to={`/profile/${id}/info`}>Информация</NavLink>

                <NavLink activeClassName={classes.nav_block__item_active}
                         exact
                         className={`${classes.nav_block__item}`}
                         to={`/profile/${id}/visit_history`}>История посещений</NavLink>

                <NavLink activeClassName={classes.nav_block__item_active}
                         exact
                         className={`${classes.nav_block__item}`}
                         to={`/profile/${id}/payment_history`}>История оплат</NavLink>

                <NavLink activeClassName={classes.nav_block__item_active}
                         exact
                         className={`${classes.nav_block__item}`}
                         to={`/profile/${id}/gamification`}>Геймификация</NavLink>

            </div>
        </div>
    );
};