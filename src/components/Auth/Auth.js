import React, {useRef, useState} from 'react';
import {OtherInput} from "../../utils/OtherInput/OtherInput";
import {Button} from "../../utils/Buttons/Button";
import Api from "../../Api/Api";
import './auth.css';
import {Container} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {log_in} from "../../Acnions/userActions";


export const Auth = ({setLoad}) => {

    const dispatch = useDispatch();
    const formRef = useRef(null);
    const history = useHistory();

    /**
     * прослушивание события отправки формы авторизации
     * тут идет запрос на сервер
     * @param e
     */
    const handleSubmitForm = async (e) => {
        e.preventDefault();

        let form={}

        for(let key of formRef.current.elements){
            if (key.tagName === 'INPUT') {
                form = {...form,[key.name]:key.value}
            }
        }

        await Api.login(form).then(res=>{
            dispatch(log_in(res));
        });
        history.push('/');
    };

    return (
        <Container fluid={true} className={'mainWrapper formWrapper'}>

            <div className="row h-100 m-auto align-content-center ">
                <h1 className={'mb-4'}>
                    Авторизация
                </h1>

                <form className={'col-12 row'} ref={formRef} onSubmit={handleSubmitForm}>

                    <div className="formGroup mx-auto row">
                        <OtherInput label={'введите email'} simpleClass={'col-12 mt-3 ml-auto mr-auto'} name={'email'} type={'email'}/>
                        <OtherInput label={'введите пароль'} simpleClass={'col-12 mt-3 mx-auto'} name={'password'} type={'password'}/>
                    </div>
                    <Button style={{margin:'30px auto'}}  factor={'success'} text={'Войти'} type={'submit'}/>
                </form>
            </div>
        </Container>
    );
};