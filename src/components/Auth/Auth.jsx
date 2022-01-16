import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './auth.module.css';
import { authSameDate, isEmpty, replaceDateforFront } from 'helpers/common';
import { Button } from 'utils/Buttons/Button';
import { log_in, log_out } from 'store/Actions/userActions';
import Api from '../../Api/Api';
import moment from 'moment';
import { set_date } from 'store/Actions/generalPageActions';
import { notification } from 'antd';
import { useInputOnObject } from 'hooks';
import Input from '../../utils/FromAnt/Input/Input';

/**
 * компонент для авторизации менеджера
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const Auth = () => {
	const { error } = useSelector(state => state.user);
	const { current_date } = useSelector(state => state.general_page);
	const [load, setLoad] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [inputError, setIError] = useState(!isEmpty(error));
	const [errorDate, setErrorDate] = useState(false);
	/**
	 * константа и метод ее изменения, для переключения индикатора загрузки
	 */

	const dispatch = useDispatch();

	const admin = useInputOnObject({});

	// /**
	//  * стейт для полей ввода
	//  */
	// const [data, setData] = useState({
	// 	username: '',
	// 	password: '',
	// });

	// /**
	//  * метод для изменения полей ввода
	//  * @param e
	//  */
	// const handleChangeInput = e => {
	// 	setData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
	// };

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
				description:
					'Установлена неверная дата на компьютере. Исправьте чтобы войти в систему',
			});
			dispatch(log_out());
		} else {
			dispatch(log_in({ ...admin.state }));
		}
	};

	useEffect(() => {
		setLoad(true);
		(async () => {
			await Api.getTimeZone()
				.then(r => {
					dispatch(
						set_date(replaceDateforFront(new Date(r.data.datetime).toISOString()))
					);
					console.log(current_date);
					if (!authSameDate(current_date)) {
						setErrorDate(!authSameDate(current_date));
						dispatch(log_out());
					}
				})
				.catch(e => {
					console.log(e);
				});
			setLoad(false);
		})();
	}, [current_date, dispatch]);

	/**
	 * моковые данные для тестов отчетов
	 * TODO потом удалить
	 * @param startDate
	 * @param stopDate
	 * @returns {*[]}
	 */
	function getDates(startDate, stopDate) {
		let dateArray = [];
		let currentDate = moment(startDate);
		let stop = moment(stopDate);
		while (currentDate <= stop) {
			dateArray.push({
				date: moment(currentDate).format('YYYY-MM-DD '),
				value: 2 + Math.ceil(Math.random() * (800 - 2)),
			});
			currentDate = moment(currentDate).add(1, 'days');
		}
		console.log(dateArray);
		return dateArray;
	}

	// getDates('2000-10-11', moment().format('YYYY-MM-DD'));

	return (
		<div className={classes.wrapper}>
			<div className={classes.title}>
				<h1>Авторизация</h1>
			</div>
			<form className={classes.form_wrapper} onSubmit={handleSubmitForm}>
				<div className={classes.form_wrapper__item}>
					<div>
						<Input
							onFocus={focusInput}
							setValue={admin.onChange}
							error={!isEmpty(error)}
							label={'введите логин'}
							name={'username'}
						/>
						{/*{inputError && (*/}
						{/*	<span className={classes.warning_text}>Не правильно заполнен Login</span>*/}
						{/*)}*/}
					</div>
					<div>
						<Input
							onFocus={focusInput}
							setValue={admin.onChange}
							error={!isEmpty(error)}
							label={'введите пароль'}
							name={'password'}
							type={'password'}
						/>
						{/*{inputError && (*/}
						{/*	<span className={classes.warning_text}>Не правильно заполнен Пароль</span>*/}
						{/*)}*/}
					</div>
				</div>
				<div className={classes.form_wrapper__send}>
					<Button
						factor={'success'}
						size={'auto'}
						disabled={!admin.state.username || !admin.state.password || load}
						text={'Войти'}
						type={'submit'}
					/>
				</div>
			</form>
		</div>
	);
};
