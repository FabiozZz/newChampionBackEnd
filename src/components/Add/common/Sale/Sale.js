import React from 'react';
import classes from "../../add.module.css";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";

export const Sale = ({sale,setSale}) => {
    return (
        <div className={`row ${classes.block_info}`}>
            <div className="col-12">
                <h3 className={classes.block_info__title}>прочее</h3>
            </div>
            <div className={`col-6 ${classes.block_info__item}`}>
                <OtherInput value={sale} setValue={setSale} name={'sales'} label={'дата пробного занятия'} required={true}/>
            </div>
        </div>
    );
};