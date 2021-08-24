import React, {useContext} from 'react';
import classes from "../edit.module.css";
import {MaskInputTel} from "../../../utils/MaskInputTel/MaskInputTel";
import {ContextCommonEdit} from "../Edit";

const EditPhoneSection = () => {
    const {phone_number, handleChangePhone} = useContext(ContextCommonEdit);
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

export default EditPhoneSection;