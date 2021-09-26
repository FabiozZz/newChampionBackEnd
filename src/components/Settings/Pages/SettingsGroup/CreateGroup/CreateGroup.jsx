import React, {useEffect, useState} from 'react';
import classes from './create_group.module.css';
import {Redirect} from "../../../../common/Redirect";
import {SelectCouch} from "../../../../Profile/Pages/ProfileInfo/AddAboniment/SelectCouch/SelectCouch";
import {useDispatch, useSelector} from "react-redux";
import SelectGroup from "../../../../../utils/SelectGroup/SelectGroup";
import SelectImage from "../../../../../utils/SelectImage/SelectImage";
import HeaderNav from "../../../../common/HeaderNav";
import {fetch_group, start_load_data_set_group} from "../../../../../store/Actions/settingsGroupActions";
import SelectAgesGroup from "../../../../../utils/SelectAgesGroup/SelectAgesGroup";
import {useHistory} from "react-router";
import {Button} from "../../../../../utils/Buttons/Button";
import {OtherInput} from "../../../../../utils/OtherInput/OtherInput";

export const CreateGroup = () => {
    const {couches,ages_groups} = useSelector(state => state.settings_group);
    const dispatch = useDispatch();
    const history = useHistory();
    const [data, setData] = useState({
        name: '',
        age: {name: '', id: null},
        trainer: {
            first_name: '',
            last_name: '',
            middle_name: '',
            id: null
        }
    });
    const changeName = (e) => {
        setData(prevState => ({...prevState,name:e.target.value}));
    };
    const chengeAgeGroup = (age) => {
        setData(prevState => ({...prevState,age}))
    };
    const changeCouch = (trainer) => {
        setData(prevState => ({...prevState,trainer}))
    };

    const hendleSubmit = (e)=> {
        e.stopPropagation();
        const uploadData = {
            name: data.name,
            age_group: data.age.id,
            trainer_id: data.trainer.id
        }
        dispatch(fetch_group(uploadData));
        history.goBack();
    }

    return (
        <>
            <HeaderNav/>
            <Redirect padding={true} title={'Добавить групповое занятие'}/>
            <div className={classes.block_wrapper}>
                <div className={classes.block}>

                    <div className={classes.add_icon}>
                        <div className={classes.ages_group}>
                            <SelectImage/>
                        </div>
                    </div>

                    <div className={classes.fields}>
                        <div className={classes.name_group}>
                            <OtherInput label={'название группы'} value={data.name} setValue={changeName}/>
                        </div>
                        <div className={classes.ages_group}>
                            <SelectAgesGroup label={'Возрастная группа'} data={ages_groups} value={data.age} setValue={chengeAgeGroup}/>
                        </div>
                        <div className={classes.couch}>
                            <SelectCouch label={'тренер'} data={couches} value={data.trainer} setValue={changeCouch}/>
                        </div>
                    </div>

                    <div className={classes.btn}>
                        <Button click={hendleSubmit} type={'submit'} factor={'success'} text={'сохранить группу'}/>
                    </div>

                </div>

            </div>
        </>
    );
};