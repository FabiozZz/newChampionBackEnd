import React from 'react';
import classes from "../TimeTable/timeTable.module.css";
import {NavLink} from "react-router-dom";
import {Button} from "../../utils/Buttons/Button";
import {SearchBox} from "../../utils/SearchBox/SearchBox";

const HeaderNav = () => {
    return (
        <div className={`row ${classes.button_group}`}>
            <div className={`col-4 ${classes.button_group__btn}`}>
                <NavLink to={'/add_adult'}>
                    <Button size={'auto'} text={'добавить взрослого'}/>
                </NavLink>
            </div>
            <div className={`col-4 ${classes.button_group__btn}`}>
                <NavLink to={'/add_child'}>
                    <Button size={'auto'} text={'добавить ребенка'} factor={'success'}/>
                </NavLink>
            </div>
            <div className={`col-4 ${classes.button_group__btn}`}>
                <SearchBox/>
            </div>
        </div>
    );
};

export default HeaderNav;