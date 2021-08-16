import React from 'react';
import classes from "../../add.module.css";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";
import {DataPicker} from "../../../../utils/DataPicker/DataPicker";

const TrialSectionSection = () => {
    return (
        <div className={classes.block_info}>
            <h3 className={classes.block_info__title}>Пробное занятие</h3>
            <div className={classes.block_info__item}>
                <div className={classes.group}>
                    <OtherInput label={'группа'}/>
                </div>
                <div className={classes.filial}>
                    <OtherInput label={'филиал'}/>
                </div>
                <div className={classes.picker}>
                    <DataPicker label={"дата пробного занятия"} setValue={()=>{}}/>
                </div>
            </div>
        </div>
    );
};

export default TrialSectionSection;