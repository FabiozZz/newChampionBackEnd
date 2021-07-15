import React, {useEffect} from 'react';
import Api from "../../../../../Api/Api";
import {useParams} from "react-router";
import axios from "axios";
import {
    clear_profile,
    load_profile_aboniment, load_profile_couch, load_profile_filial,
    load_profile_group,
    load_profile_status,
    load_profile_user
} from "../../../../../Acnions/profileActions";
import {useDispatch, useSelector} from "react-redux";
import {AdultEdit} from "./Adult/AdultEdit";
import {ChildEdit} from "./Child/ChildEdit";
import {error} from "../../../../TimeTable/TimeTable";

export const EditProfile = () => {

    const user = useSelector(state => state.profile.user);

    const {id} = useParams()

    const dispatch = useDispatch();

    useEffect(() => {
        let source = axios.CancelToken.source();
        (async () => {
            await Api.getProfile(id).then(r => {
                dispatch(load_profile_user(r.data))
            });
        })();
        return () => {
            dispatch(clear_profile());
            source.cancel('операция прервана');
        };
    }, [dispatch, id]);
    console.log(user)
    if(user.is_adult){
        return <AdultEdit user={user}/>
    }else{
        return <ChildEdit user={user}/>
    }
};