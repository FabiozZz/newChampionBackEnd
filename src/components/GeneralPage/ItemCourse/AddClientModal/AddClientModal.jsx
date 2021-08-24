import React from 'react';
import classes from './add_modal.module.css';
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";
import {Button} from "../../../../utils/Buttons/Button";

export const AddClientModal = ({name}) => {
    return (

            <div className={classes.wrapper}>
                <h3 className={classes.name}>
                    Отметить клиента в группе {name}
                </h3>


                {/*<div className={classes.loader}>loading</div>*/}


                <div className={classes.change}>
                    <span className={classes.placeholder}>Чтобы отметить клиента поднесите карточку к терминалу или напишите его фамилию ниже</span>
                    <OtherInput readOnly={true} value={''} placeholder={'Начните писать ФИО клиента'}/>
                </div>
                <div className={classes.btn_group}>
                    <Button factor={'danger'} text={'отменить'}/>
                    <Button factor={'success'} text={'сохранить'}/>
                </div>
            </div>

    );
};

