import React, { useState } from 'react';
import { OtherInput } from "../../utils/OtherInput/OtherInput";
import { Button } from "../../utils/Buttons/Button";
import Api from "../../Api/Api";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { log_in } from "../../Actions/userActions";
import classes from './auth.module.css';
import {notificationPopUp} from "../common/Error";

/**
 * компонент для авторизации менеджера
 * @returns {JSX.Element}
 * @constructor
 */
export const Auth = () => {

    const [inputError, setIError] = useState(false);

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
        username: '',
        password: ''
    });

    /**
     * метод для изменения полей ввода
     * @param e
     */
    const handleChangeInput = (e) => {
        setData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    };

    const focusInput = () => {
        setIError(false)
    };

    /**
     * прослушивание события отправки формы авторизации
     * тут идет запрос на сервер
     * @param e
     */
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setIsLoad(true)
        await Api.login(data).then(() => {
            setIsLoad(false)
            dispatch(log_in());
            history.push('/');
        }).catch(er => {
            if (er.response) {
                setIError(true)
                notificationPopUp('error','Введены неверные данные','Перепроверьте введенные данные и попробуйте еще раз')
            }else if (er.request) {
                notificationPopUp('error','Проблемы с сервером','Попробуйте позже')
            } else {
                console.log('another');
            }
            setIsLoad(false)
        });
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <h1>Авторизация</h1>
            </div>
            <form className={classes.form_wrapper} onSubmit={handleSubmitForm}>
                <div className={classes.form_wrapper__item}>
                    <div>
                        <OtherInput onFocus={focusInput} value={data.username} setValue={handleChangeInput} danger={inputError} label={'введите login'} name={'username'} type={'text'} />
                        {inputError&&<span className={classes.warning_text}>Не правильно заполнен Login</span>}
                    </div>
                    <div>
                        <OtherInput onFocus={focusInput} value={data.password} setValue={handleChangeInput} danger={inputError} label={'введите пароль'} name={'password'} type={'password'} />
                        {inputError&&<span className={classes.warning_text}>Не правильно заполнен Пароль</span>}
                    </div>
                </div>
                <div className={classes.form_wrapper__send}>
                    <Button factor={'success'} size={"auto"} disabled={!data.username || !data.password || isLoad} text={'Войти'} type={'submit'} />
                </div>
            </form>
        </div>
    );
};