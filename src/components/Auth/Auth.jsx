import React, { useState } from 'react';
import { OtherInput } from "../../utils/OtherInput/OtherInput";
import { Button } from "../../utils/Buttons/Button";
import Api from "../../Api/Api";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { log_in } from "../../Actions/userActions";
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
            console.log(er)
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
                    <OtherInput value={data.username} setValue={handleChangeInput} label={'введите login'} name={'username'} type={'text'} />
                    <OtherInput value={data.password} setValue={handleChangeInput} label={'введите пароль'} name={'password'} type={'password'} />
                </div>
                <div className={classes.form_wrapper__send}>
                    <Button factor={'success'} size={"auto"} disabled={!data.username || !data.password || isLoad} text={'Войти'} type={'submit'} />
                </div>
            </form>
        </div>
    );
};