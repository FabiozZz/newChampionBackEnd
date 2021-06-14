import React from 'react';
import classes from "../../add.module.css";
import {CheckboxBtn} from "../../../../utils/CheckboxBtn/CheckboxBtn";

export const Rules = ({personal,setPersonal,rules,setRules}) => {
    return (
        <div className={`row ${classes.polytic}`}>
            <div className={`col-12 ${classes.polytic__block}`}>
                <CheckboxBtn isChecked={personal} setIsChecked={setPersonal}/>
                <p className={classes.polytic__text}>Согласен на обработку моих <span
                    className={classes.polytic__sub_text}>персональных данных</span></p>
            </div>
            <div className={`col-12 ${classes.polytic__block}`}>
                <CheckboxBtn isChecked={rules} setIsChecked={setRules}/>
                <p className={classes.polytic__text}>С <span className={classes.polytic__sub_text}>правилами зачисления и посещения спортивного клуба RUSH</span> ознакомлен
                </p>
            </div>
        </div>
    );
};