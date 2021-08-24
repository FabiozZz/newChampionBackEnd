import React, {useContext} from 'react';
import classes from "../add.module.css";
import {MaskInputTel} from "../../../utils/MaskInputTel/MaskInputTel";
import {ContextCommon} from "../Add";

const PhoneSection = () => {
    const {phone_number, handleChangePhone} = useContext(ContextCommon);
    return (
        <div className={classes.block_info}>
            <div className={classes.block_info__item}>
                <div className={classes.phone_number}>
                    <MaskInputTel label={"номер телефона"} value={phone_number} setValue={handleChangePhone}/>
                </div>
            </div>
        </div>
    );
};

export default PhoneSection;