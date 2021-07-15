import React from 'react';
import classes from "../TimeTable/general.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "../../utils/Buttons/Button";
import { SearchBox } from "../../utils/SearchBox/SearchBox";

const HeaderNav = () => {
    return (
        <div className={classes.btn_group}>
            <div className={classes.create_adult}>
                <NavLink to={'/add_adult'}>
                    <Button size={'auto'} text={'добавить взрослого'} />
                </NavLink>
            </div>
            <div className={classes.create_child}>
                <NavLink to={'/add_child'}>
                    <Button size={'auto'} text={'добавить ребенка'} factor={'success'} />
                </NavLink>
            </div>
            <div className={classes.search}>
                <SearchBox />
            </div>

        </div>
    );
};

export default HeaderNav;