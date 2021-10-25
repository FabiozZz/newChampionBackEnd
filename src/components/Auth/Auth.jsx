import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './auth.module.css';
import { authSameDate, isEmpty } from '../../helpers/common';
import { OtherInput } from '../../utils/OtherInput/OtherInput';
import { Button } from '../../utils/Buttons/Button';
import { log_in, log_out } from '../../store/Actions/userActions';
import Api from '../../Api/Api';
import moment from 'moment';
import { change_date } from '../../store/Actions/generalPageActions';
import { notification } from 'antd';

/**
 * компонент для авторизации менеджера
 * @returns {JSX.Element}
 * @constructor
 */
export const Auth = () => {
	const { error, success } = useSelector(state => state.user);
	const { current_date } = useSelector(state => state.general_page);
	const [load, setLoad] = useState(false);
	const [inputError, setIError] = useState(!isEmpty(error));
	const [errorDate, setErrorDate] = useState(false);
	/**
	 * константа и метод ее изменения, для переключения индикатора загрузки
	 */

	const dispatch = useDispatch();

	/**
	 * стейт для полей ввода
	 */
	const [data, setData] = useState({
		username: '',
		password: '',
	});

	/**
	 * метод для изменения полей ввода
	 * @param e
	 */
	const handleChangeInput = e => {
		setData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const focusInput = () => {
		setIError(false);
	};

	/**
	 * прослушивание события отправки формы авторизации
	 * тут идет запрос на сервер
	 * @param e
	 */
	const handleSubmitForm = async e => {
		e.preventDefault();
		if (errorDate) {
			notification.error({
				message: 'Ошибка',
				description: 'Установлена неверная дата на компьютере. Исправьте чтобы войти в систему',
			});
			dispatch(log_out());
		} else {
			dispatch(log_in(data));
		}
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

	useEffect(() => {
		setLoad(true);
		(async () => {
			await Api.getTimeZone()
				.then(r => {
					dispatch(change_date(new Date(r.data.datetime).toLocaleDateString()));
					console.log(current_date);
					if (!authSameDate(current_date)) {
						setErrorDate(!authSameDate(current_date));
						dispatch(log_out());
					}
					setLoad(false);
				})
				.catch(e => {
					console.log(e);
					setLoad(false);
				});
		})();
	}, [current_date, dispatch]);
	return (
		<div className={classes.wrapper}>
			<div className={classes.title}>
				<h1>Авторизация</h1>
			</div>
			<form className={classes.form_wrapper} onSubmit={handleSubmitForm}>
				<div className={classes.form_wrapper__item}>
					<div>
						<OtherInput
							onFocus={focusInput}
							value={data.username}
							setValue={handleChangeInput}
							danger={!isEmpty(error)}
							label={'введите login'}
							name={'username'}
							type={'text'}
						/>
						{inputError && (
							<span className={classes.warning_text}>Не правильно заполнен Login</span>
						)}
					</div>
					<div>
						<OtherInput
							onFocus={focusInput}
							value={data.password}
							setValue={handleChangeInput}
							danger={!isEmpty(error)}
							label={'введите пароль'}
							name={'password'}
							type={'password'}
						/>
						{inputError && (
							<span className={classes.warning_text}>Не правильно заполнен Пароль</span>
						)}
					</div>
				</div>
				<div className={classes.form_wrapper__send}>
					<Button
						factor={'success'}
						size={'auto'}
						disabled={!data.username || !data.password || load}
						text={'Войти'}
						type={'submit'}
					/>
				</div>
			</form>
		</div>
	);
};
