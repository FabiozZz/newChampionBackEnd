import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import HeaderNav from "../common/HeaderNav";
import { Redirect } from "../common/Redirect";
import { NavigateProfile } from "./NavigeteProfile/NavigeteProfile";
import { ProfileInfo } from "./Pages/ProfileInfo/ProfileInfo";
import { isEmpty } from "../../helpers/common";
import classes from './profile.module.css';
import { Button } from "../../utils/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { ProfileVisit } from './Pages/ProfileVisit/ProfileVisit';
import { ProfilePay } from './Pages/ProfilePay/ProfilePay';
import {clear_profile, open_edit_page} from "../../store/Actions/profileActions";


/**
 * страница просмотра и редактирования профиля клиента
 * @returns {JSX.Element}
 * @constructor
 */
export const Profile = () => {

    const profile = useSelector(state => state.profile)

    const dispatch = useDispatch();

    const { id } = useParams();

    const [tabIndex, setTabIndex] = useState(0)

    useEffect(() => {
        if (isEmpty(profile.user)) {
            dispatch(open_edit_page(id))
        }
        // return () => {
        //     dispatch(clear_profile());
        // };
    }, [dispatch, id, profile.user]);

    return (
        <>
            <HeaderNav/>
            <Redirect title={'Профиль'} padding={true} />
            <div className={classes.wrapper}>
                {profile.user.in_archive &&
                    <div className={classes.block_info}>
                        <h3 className={classes.block_info__title}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.2282 6.36145H4.77038C3.3246 6.36145 2.16797 7.51807 2.16797 8.96385V21.3976C2.16797 22.8433 3.3246 24 4.77038 24H19.2282C20.674 24 21.8306 22.8433 21.8306 21.3976V8.96385C21.8306 7.51807 20.674 6.36145 19.2282 6.36145ZM16.1342 13.3879C16.1342 13.8795 15.7583 14.2554 15.2668 14.2554H8.73182C8.24026 14.2554 7.86435 13.8795 7.86435 13.3879V11.1904C7.86435 10.6988 8.24026 10.3229 8.73182 10.3229C9.22339 10.3229 9.59929 10.6988 9.59929 11.1904V12.5205H14.3993V11.1904C14.3993 10.6988 14.7752 10.3229 15.2668 10.3229C15.7583 10.3229 16.1342 10.6988 16.1342 11.1904V13.3879Z"
                                    fill="#8798AD" />
                                <path
                                    d="M19.2276 3.18073H4.76981C4.27825 3.18073 3.90234 3.55663 3.90234 4.0482C3.90234 4.53976 4.27825 4.91566 4.76981 4.91566H19.2276C19.7192 4.91566 20.0951 4.53976 20.0951 4.0482C20.0951 3.55663 19.7192 3.18073 19.2276 3.18073Z"
                                    fill="#8798AD" />
                                <path
                                    d="M17.7833 0H6.21708C5.72551 0 5.34961 0.375904 5.34961 0.867471C5.34961 1.35904 5.72551 1.73494 6.21708 1.73494H17.7833C18.2749 1.73494 18.6508 1.35904 18.6508 0.867471C18.6508 0.375904 18.2749 0 17.7833 0Z"
                                    fill="#8798AD" />
                            </svg>
                            &nbsp;клиент находится в арихиве
                        </h3>
                        <div className={`${classes.block_info__btn_group}`}>
                            <Button text={'сделать активным'} factor={"success"} size={"auto"} />
                            <Button text={'оставить комментарий'} size={"auto"} />
                        </div>
                    </div>

                }

                    <NavigateProfile tabIndex={tabIndex} setIndex={setTabIndex} id={id} />

                {!isEmpty(profile.user) && (tabIndex === 1 ?
                    <ProfileVisit profile={profile}/>
                    :
                    tabIndex === 2 ?
                        <ProfilePay profile={profile} />
                        :
                        tabIndex === 3 ?
                            <h1>Геймификация</h1>
                            :
                            <ProfileInfo profile={profile} />)
                }
            </div>
        </>
    );

};