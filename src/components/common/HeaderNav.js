import React from 'react';
import classes from "../TimeTable/timeTable.module.css";
import {NavLink} from "react-router-dom";
import {Button} from "../../utils/Buttons/Button";
import {SearchBox} from "../../utils/SearchBox/SearchBox";

const HeaderNav = () => {
    return (
        <div className={`col-12 ${classes.button_group}`}>
            <div className={classes.button_group__btn}>
                <NavLink to={'/add_adult'}>
                    <Button text={'добавить взрослого'}/>
                </NavLink>
            </div>
            <div className={classes.button_group__btn}>
                <NavLink to={'/add_child'}>
                    <Button text={'добавить ребенка'} factor={'success'}/>
                </NavLink>
            </div>
            <div className={classes.button_group__btn}>
                <SearchBox/>
            </div>
        </div>
    );
};

export default HeaderNav;