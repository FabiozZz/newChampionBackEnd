import React from 'react';
import classes from './add_modal.module.css';

export const AddClientModal = ({name}) => {
    return (

            <div className={classes.wrapper}>
                <h3 className={classes.name}>
                    Отметить клиента в группе {name}
                </h3>


                <div className={classes.loader}>loading</div>


                {/*<div className={classes.change}>*/}
                {/*    <span className={classes.placeholder}>Чтобы отметить клиента поднесите карточку к терминалу или напишите его фамилию ниже</span>*/}
                {/*    <OtherInput readOnly={true} value={''} placeholder={'Начните писать ФИО клиента'}/>*/}
                {/*</div>*/}
                {/*<div className={classes.btn_group}>*/}
                {/*    <Button factor={'success'} text={'отменить'}/>*/}
                {/*    <Button factor={'danger'} text={'сохранить'}/>*/}
                {/*</div>*/}
            </div>

    );
};

