import React, {useContext} from 'react';
import classes from "../../add.module.css";
import {DataPicker} from "../../../../utils/DataPicker/DataPicker";
import {ContextCommon} from "../../Add";
import SelectGroup from "../../../../utils/SelectGroup/SelectGroup";
import SelectAgesGroup from "../../../../utils/SelectAgesGroup/SelectAgesGroup";

const TrialSectionSection = () => {
    const {handleChangeValueDateTestLesson,testData,groups,agesGroup,handleChangeValueGroupTestLesson,
        handleChangeValueAgesGroupTestLesson,errorInput} = useContext(ContextCommon);
    console.log("TrialSection",errorInput)
    return (
        <div className={classes.block_info}>
            <h3 className={classes.block_info__title}>Пробное занятие</h3>
            <div className={classes.block_info__item}>
                <div className={classes.ages_group}>
                    <SelectAgesGroup value={testData.agesGroup} danger={errorInput&&errorInput.age_group_id} setValue={handleChangeValueAgesGroupTestLesson} label={'возрастная группа'} data={agesGroup}/>
                    {errorInput&&errorInput.age_group_id&&<span className={classes.warning_text}>{errorInput.age_group_id.join()}</span>}
                </div>
                {/*<div className={classes.group}>*/}
                {/*    <SelectGroup value={testData.group} setValue={handleChangeValueGroupTestLesson} label={'группа'} data={groups}/>*/}
                {/*</div>*/}
                {/*<div className={classes.filial}>*/}
                {/*    <SelectGroup value={{name:''}} label={'филиал'}/>*/}
                {/*</div>*/}
                {/*<div className={classes.picker}>*/}
                {/*    <DataPicker label={"дата пробного занятия"} value={testData.dateTest} setValue={handleChangeValueDateTestLesson}/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default TrialSectionSection;