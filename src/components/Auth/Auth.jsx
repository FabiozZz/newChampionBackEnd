import React, { useState} from 'react';
import {OtherInput} from "../../utils/OtherInput/OtherInput";
import {Button} from "../../utils/Buttons/Button";
import Api from "../../Api/Api";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {log_in} from "../../Acnions/userActions";
import classes from './auth.module.css';

/**
 * компонент для авторизации менеджера
 * @returns {JSX.Element}
 * @constructor
 */
export const Auth = () => {

    /**
     * константа и метод ее изменения, для переключения индикатора загрузки
     */
    const [isLoad, setIsLoad] = useState(false);

    const dispatch = useDispatch();

    const history = useHistory();

    /**
     * стейт для полей ввода
     */
    const [data, setData] = useState({
        email:'',
        password:''
    });

    /**
     * метод для изменения полей ввода
     * @param e
     */
    const handleChangeInput = (e) => {
        setData(prevState => ({...prevState,[e.target.name]:e.target.value}))
    };

    /**
     * прослушивание события отправки формы авторизации
     * тут идет запрос на сервер
     * @param e
     */
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setIsLoad(true)
            await Api.login(data).then(res=>{
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
                    <form className={classes.form_wrapper} onSubmit={handleSubmitForm}>
                        <div className="row">
                            <div className={`col-8 ${classes.form_wrapper__block_input}`}>
                                <div className="row">
                                    <div className={`col-12 ${classes.form_wrapper__item}`}>
                                        <OtherInput value={data.email} setValue={handleChangeInput} label={'введите email'} name={'email'} type={'email'}/>
                                    </div>
                                    <div className={`col-12 ${classes.form_wrapper__item}`}>
                                        <OtherInput value={data.password} setValue={handleChangeInput} label={'введите пароль'} name={'password'} type={'password'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`col-4 ${classes.form_wrapper__send}`}>
                                <Button factor={'success'} disabled={!data.email||!data.password||isLoad} text={'Войти'} type={'submit'}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
};