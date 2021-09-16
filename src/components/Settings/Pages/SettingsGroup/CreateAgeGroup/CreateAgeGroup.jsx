import React, {useState} from 'react';
import classes from './age.module.css';
import {Redirect} from "../../../../common/Redirect";
import HeaderNav from "../../../../common/HeaderNav";
import {OtherInput} from "../../../../../utils/OtherInput/OtherInput";
import {Button} from "../../../../../utils/Buttons/Button";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {fetch_new_age_group} from "../../../../../store/Actions/settingsGroupActions";

export const CreateAgeGroup = () => {

    const [label, setLabel] = useState('');

    const dispatch = useDispatch()

    const handleChangeLabel = (e) => {
        setLabel(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetch_new_age_group(label))
    };

    return (
        <>
            <HeaderNav/>

            <Redirect padding={true} title={'Добавить возрастную группу'}/>

            <div className={classes.form_wrapper}>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.label_group}>
                        <OtherInput setValue={handleChangeLabel} label={'название возрастной группы'} value={label}/>
                    </div>
                    <div className={classes.send_btn}>
                        <Button text={'Сохранить возрастную группу'} type={"submit"} factor={"success"} size={"min"}/>
                    </div>
                </form>

            </div>
        </>
    );
};