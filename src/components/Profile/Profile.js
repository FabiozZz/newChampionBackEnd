import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router";
import Api from "../../Api/Api";
import HeaderNav from "../common/HeaderNav";
import classes from "../Add/add.module.css";
import {Redirect} from "../common/Redirect";

export const Profile = () => {
    const params = useParams();


    const [user, setUser] = useState({});

    useEffect(() => {
        Api.getProfile(params.id).then(r => {
            setUser({...r})
        });
    },[]);

    return (
        <div>
            <HeaderNav/>
            <Redirect title={'Профиль'}/>

            <h1>{user.name}</h1>

            <div className={classes.block_info}></div>
            <div className={classes.block_info}></div>
            <div className={classes.block_info}></div>
            <div className={classes.block_info}></div>
            <div className={classes.block_info}></div>
        </div>
    );
};