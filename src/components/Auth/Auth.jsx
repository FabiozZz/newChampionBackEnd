import React, { useState } from 'react';
import { OtherInput } from "../../utils/OtherInput/OtherInput";
import { Button } from "../../utils/Buttons/Button";
import {useDispatch, useSelector} from "react-redux";
import { log_in } from "../../store/Actions/userActions";
import classes from './auth.module.css';
import {isEmpty} from "../../helpers/common";
import {notificationPopUp} from "../common/Error";
import {notification} from "antd";

/**
 * компонент для авторизации менеджера
 * @returns {JSX.Element}
 * @constructor
 */
export const Auth = () => {

    const {error,success} = useSelector(state => state.user);

    const [inputError, setIError] = useState(!isEmpty(error));

    /**
     * константа и метод ее изменения, для переключения индикатора загрузки
     */

    const dispatch = useDispatch();

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
        dispatch(log_in(data))
        // setIsLoad(true)
        // await Api.login(data).then(() => {
        //     setIsLoad(false)
        //     dispatch();
        //     history.push('/');
        // }).catch(er => {
        //     if (er.response) {
        //         setIError(true)
        //         notificationPopUp('error','Введены неверные данные','Перепроверьте введенные данные и попробуйте еще раз')
        //     }else if (er.request) {
        //         notificationPopUp('error','Проблемы с сервером','Попробуйте позже')
        //     } else {
        //         console.log('another');
        //     }
        //     setIsLoad(false)
        // });
    };
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.title}>
                    <h1>Авторизация</h1>
                </div>
                <form className={classes.form_wrapper} onSubmit={handleSubmitForm}>
                    <div className={classes.form_wrapper__item}>
                        <div>
                            <OtherInput onFocus={focusInput} value={data.username} setValue={handleChangeInput} danger={!isEmpty(error)} label={'введите login'} name={'username'} type={'text'} />
                            {inputError&&<span className={classes.warning_text}>Не правильно заполнен Login</span>}
                        </div>
                        <div>
                            <OtherInput onFocus={focusInput} value={data.password} setValue={handleChangeInput} danger={!isEmpty(error)} label={'введите пароль'} name={'password'} type={'password'} />
                            {inputError&&<span className={classes.warning_text}>Не правильно заполнен Пароль</span>}
                        </div>
                    </div>
                    <div className={classes.form_wrapper__send}>
                        <Button factor={'success'} size={"auto"} disabled={!data.username || !data.password} text={'Войти'} type={'submit'} />
                    </div>
                </form>
            </div>
        </>
    );
};