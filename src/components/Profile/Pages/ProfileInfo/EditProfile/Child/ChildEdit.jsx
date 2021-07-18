import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { change_data_profile } from '../../../../../../Acnions/profileActions';
import Api from '../../../../../../Api/Api';
import { DataPicker } from '../../../../../../utils/DataPicker/DataPicker';
import { OtherInput } from '../../../../../../utils/OtherInput/OtherInput';
import { Address } from '../../../../../Add/common/Address/Address';
import { EndBtnGroup } from '../../../../../Add/common/EndBtnGroup/EndBtnGroup';
import { Sale } from '../../../../../Add/common/Sale/Sale';
import { ParentsBlock } from '../../../../../Add/Сhild/ParentsBlock/ParentsBlock';
import { PersonalData } from '../../../../../Add/Сhild/PersonalData/PersonalData';
import HeaderNav from '../../../../../common/HeaderNav';
import { Redirect } from "../../../../../common/Redirect";
import classes from '../../../../profile.module.css';

export const ChildEdit = ({ user }) => {

    const dispatch = useDispatch();

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }
    const [client,setClient] = useState({
        first_name:user.first_name,
        last_name:user.last_name,
        middle_name:user.middle_name,
        date_of_birth:user.date_of_birth,
        address:user.address,
    })
    const handleChangeClientData = (e)=>{
        setClient(prevState=> ({...prevState,[e.target.name]:e.target.value}))
    }

    const handleChangeDateClientData = (some)=>{
        setClient(prevState=>({...prevState,date_of_birth:some}))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await Api.editProfile(user.id,client).then(r=>{
            dispatch(change_data_profile(r.data));
            history.push(`/profile/${r.data.id}`)

        })
    }

    return (
        <>
            <HeaderNav/>
            <Redirect title={"Редактирование профиля"} />
            <form onSubmit={handleSubmit} className={classes.wrapper}>
                <div className={classes.block_info}>
                    <div className={classes.block_info__header}>
                        <h3 className={classes.block_info__title}>информация о ребенке</h3>
                    </div>
                    <div className={classes.block_info__grid}>
                        <div className={`${classes.last_name}`}>
                            <OtherInput label={'фамилия'} setValue={handleChangeClientData} name={'last_name'} value={client.last_name} />
                        </div>
                        <div className={`${classes.first_name}`}>
                            <OtherInput label={'имя'} setValue={handleChangeClientData} name={'first_name'} value={client.first_name} />
                        </div>
                        <div className={`${classes.middle_name}`}>
                            <OtherInput label={'отчество'} setValue={handleChangeClientData} name={'middle_name'} value={client.middle_name} />
                        </div>
                        <div className={`${classes.date_of_birth}`}>
                            <DataPicker label={'дата рождения'} setValue={handleChangeDateClientData} value={client.date_of_birth} />
                        </div>
                    </div>
                </div>
                <div className={classes.block_info}>
                    <div className={classes.block_info__header}>
                        <h3 className={classes.block_info__title}>адрес проживания</h3>

                    </div>
                    <div className={classes.block_info__grid}>
                        <div className={`${classes.street}`}>
                            <OtherInput label={'адресс'} setValue={handleChangeClientData} name={'address'} value={client.address}/>
                        </div>
                    </div>
                </div>
                <div className={classes.end_btn}>
                    <EndBtnGroup goBack={goBack} />
                </div>
            </form>
        </>
    );
};