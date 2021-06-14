import React from 'react';
import classes from "../../add.module.css";
import {Button} from "../../../../utils/Buttons/Button";

export const EndBtnGroup = ({goBack,personal,rules,submit}) => {
    return (
        <div className={`row ${classes.btn_group}`}>
            <div className={`col-4 ${classes.btn_group__item}`}>
                <Button click={goBack} text={'отменить'} factor={'danger'}/>
            </div>
            <div className={`col-4 ${classes.btn_group__item}`}>
                <Button click={submit} disabled={!personal || !rules} text={'сохранить'} factor={'success'}/>
            </div>
        </div>
    );
};