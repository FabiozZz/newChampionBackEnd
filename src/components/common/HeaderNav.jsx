import React from 'react';
import classes from "../general.module.css";
import { NavLink } from "react-router-dom";
import { SearchBox } from "../../utils/SearchBox/SearchBox";
import {Button} from "../../utils/Buttons/Button";

const HeaderNav = () => {
    return (
        <div className={classes.btn_group}>
            <div className={classes.create_adult}>
                <NavLink to={'/add_client'}>
                    <Button size={'auto'} text={'добавить клиента'} factor={'success'} />
                </NavLink>
            </div>
            <div className={classes.search}>
                <SearchBox />
            </div>

        </div>
    );
};

export default HeaderNav;