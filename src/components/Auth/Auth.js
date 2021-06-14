import React, {useRef, useState} from 'react';
import {OtherInput} from "../../utils/OtherInput/OtherInput";
import {Button} from "../../utils/Buttons/Button";
import Api from "../../Api/Api";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {log_in} from "../../Acnions/userActions";
import classes from './auth.module.css';

export const Auth = ({setLoad}) => {

    const [isLoad, setIsLoad] = useState(false);

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
        setIsLoad(true)

        let form={}

        for(let key of formRef.current.elements){
            if (key.tagName === 'INPUT') {
                form = {...form,[key.name]:key.value}
            }
        }

        await Api.login(form).then(res=>{
            setIsLoad(false)
            dispatch(log_in(res));
            history.push('/');
        });
    };

    return (
            <div className="row">
                <div className={'col-12'}>
                    <h1 className={classes.title}>Авторизация</h1>
                </div>

                <div className="col-12">
                    <form className={classes.form_wrapper} ref={formRef} onSubmit={handleSubmitForm}>
                        <div className="row">
                            <div className={`col-8 ${classes.form_wrapper__block_input}`}>
                                <div className="row">
                                    <div className={`col-12 ${classes.form_wrapper__item}`}>
                                        <OtherInput label={'введите email'} name={'email'} type={'email'}/>
                                    </div>
                                    <div className={`col-12 ${classes.form_wrapper__item}`}>
                                        <OtherInput label={'введите пароль'} name={'password'} type={'password'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`col-4 ${classes.form_wrapper__send}`}>
                                <Button factor={'success'} disabled={isLoad} text={'Войти'} type={'submit'}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
};