import React from 'react';
import classes from "../../add.module.css";
import {MaskInputTel} from "../../../../utils/MaskInputTel/MaskInputTel";

const PhoneSection = () => {
    return (
        <div className={classes.block_info}>
            <div className={classes.block_info__item}>
                <div className={classes.phone_number}>
                    <MaskInputTel label={"номер телефона"} setValue={()=>{}}/>
                </div>
            </div>
        </div>
    );
};

export default PhoneSection;