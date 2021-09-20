import React, {useEffect, useState} from 'react';
import {isEmpty} from "../../helpers/common";
import {open_edit_page} from "../../store/Actions/profileActions";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router";
import classes from "./edit.module.css";
import {Redirect} from "../common/Redirect";
import camera from "./camera (1) 1.png";
import {OtherInput} from "../../utils/OtherInput/OtherInput";
import {DataPicker} from "../../utils/DataPicker/DataPicker";
import EditPhoneSection from "./EditPhoneSection/EditPhoneSection";
import {EditAddresSection} from "./common/EditAddresSection/EditAddresSection";
import {EndBtnGroup} from "../common/EndBtnGroup/EndBtnGroup";
import {ParentsBlock} from "../common/ParentsBlock/ParentsBlock";

export const EditParents = () => {
    const user = useSelector(state => state.profile.user);
    const {id} = useParams()
    const dispatch = useDispatch();
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [parents, setParents] = useState([{}]);

    const handleChangeItemParentsBlock = (i, object) => {
        setParents(prevState => [...prevState.slice(0, i), object, ...prevState.slice(i + 1)]);
    };

    /**
     * функция добавления нового поустого объекта в массив родителей
     */
    const addParentsData = () => {
        setParents(prevState => [...prevState, {}]);
    };

    /**
     * удаление объекта из массива
     * @param i индекс объекта в массиве который нужно удалить
     */
    const removeParentsData = (i) => {
        setParents(parents.filter((e, index) => index !== i));
    };


    useEffect(() => {
        if (isEmpty(user)) {
            dispatch(open_edit_page(id))
        }else{
            setParents(user.parents)
        }
    },[dispatch, id, user]);
    return (
        <>
            <div className={classes.redirect}>
                <Redirect title={"Редактирование профиля"} padding={true}/>
            </div>
            <form onSubmit={handleSubmit} className={classes.wrapper}>


                <ParentsBlock parents={parents}
                              change={handleChangeItemParentsBlock}
                              addParents={addParentsData}
                              removeParents={removeParentsData}
                />


                <EndBtnGroup goBack={goBack}/>

            </form>
        </>
    );
};