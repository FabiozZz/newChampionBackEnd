import React, {useContext} from 'react';
import {SuccessContext} from "../../../SuccessContext";
import classes from './success.module.css';
import {Button} from "../../../../../utils/Buttons/Button";
import {useHistory} from "react-router";

export const SuccessAdd = () => {
    const history = useHistory();
    const {profile} = useContext(SuccessContext)
    const {user} = profile;
    console.log(user)
    const goGeneralPage = () => {
        history.push('/')
    };
    return (
        <div className={classes.wrapper}>
            <div className={classes.info_wrapper}>
                <p className={classes.info_head}>Абонемент &laquo;{user.club_card.rate.name}&raquo; со статусом &laquo;{user.club_card.level.name} клиент&raquo; сохранен</p>
                <p className={classes.info_mute}>Абонемент активируется при первом посещении</p>
            </div>
            <div className={classes.btn_group}>
                <Button size={'min'}>
                    <svg className={classes.svg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4844 3.86719V2.92969C16.4844 1.31426 15.1701 0 13.5547 0H6.36719C4.75176 0 3.4375 1.31426 3.4375 2.92969V3.86719H16.4844Z" fill="#2E384D"/>
                        <path d="M4.60938 12.4609V17.2266V18.2422V18.8281C4.60938 19.4753 5.13402 20 5.78125 20H14.1406C14.7879 20 15.3125 19.4753 15.3125 18.8281V18.2422V17.2266V12.4609H4.60938ZM11.5234 17.4609H8.39844C8.07484 17.4609 7.8125 17.1986 7.8125 16.875C7.8125 16.5514 8.07484 16.2891 8.39844 16.2891H11.5234C11.847 16.2891 12.1094 16.5514 12.1094 16.875C12.1094 17.1986 11.847 17.4609 11.5234 17.4609ZM11.5234 14.9609H8.39844C8.07484 14.9609 7.8125 14.6986 7.8125 14.375C7.8125 14.0514 8.07484 13.7891 8.39844 13.7891H11.5234C11.847 13.7891 12.1094 14.0514 12.1094 14.375C12.1094 14.6986 11.847 14.9609 11.5234 14.9609Z" fill="#2E384D"/>
                        <path d="M17.0312 5.03906H2.92969C1.31426 5.03906 0 6.35332 0 7.96875V12.6562C0 14.2717 1.31426 15.5859 2.92969 15.5859H3.4375V12.4609H3.08594C2.76234 12.4609 2.5 12.1986 2.5 11.875C2.5 11.5514 2.76234 11.2891 3.08594 11.2891H4.02344H15.8984H16.8359C17.1595 11.2891 17.4219 11.5514 17.4219 11.875C17.4219 12.1986 17.1595 12.4609 16.8359 12.4609H16.4844V15.5859H17.0312C18.6467 15.5859 19.9609 14.2717 19.9609 12.6562V7.96875C19.9609 6.35332 18.6467 5.03906 17.0312 5.03906ZM4.96094 8.71094H3.08594C2.76234 8.71094 2.5 8.44859 2.5 8.125C2.5 7.80141 2.76234 7.53906 3.08594 7.53906H4.96094C5.28453 7.53906 5.54688 7.80141 5.54688 8.125C5.54688 8.44859 5.28453 8.71094 4.96094 8.71094Z" fill="#2E384D"/>
                    </svg>
                </Button>
                <Button click={goGeneralPage} factor={'success'} text={'На главную'}/>
            </div>
        </div>
    );
};