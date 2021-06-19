import React, {useEffect, useState} from 'react';
import {Route, Switch, useHistory, useParams} from "react-router";
import Api from "../../Api/Api";
import HeaderNav from "../common/HeaderNav";
import classes from "./profile.module.css";
import {Redirect} from "../common/Redirect";
import {NavigateProfile} from "./NavigeteProfile/NavigeteProfile";
import {ProfileInfo} from "./Pages/ProfileInfo/ProfileInfo";
import {isEmpty} from "../../helpers/common";

export const Profile = () => {
    const {id} = useParams();


    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            await Api.getProfile(id).then(r => {
                setUser({...r})
            });
        })();
    },[]);

    return (
        <div>
            <HeaderNav/>
            <Redirect title={'Профиль'}/>
            <NavigateProfile id={id}/>
            <Switch>
                {!isEmpty(user)&&
                    <>
                <Route exact path={`/profile/${id}/info`} render={() => <ProfileInfo user={user}/>}/>
                    <Route path={`/profile/${id}/visit_history`} render={() => <h1>История посещений</h1>}/>
                    <Route path={`/profile/${id}/payment_history`} render={() => <h1>История оплат</h1>}/>
                    <Route path={`/profile/${id}/gamification`} render={() => <h1>Геймификация</h1>}/>
                    </>
                }
            </Switch>
            {/*<div className={classes.block_info}></div>*/}
            {/*<div className={classes.block_info}></div>*/}
            {/*<div className={classes.block_info}></div>*/}
            {/*<div className={classes.block_info}></div>*/}
        </div>
    );
};