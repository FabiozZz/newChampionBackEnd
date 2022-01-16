import React, { useEffect, useState } from 'react';
import HeaderNav from 'components/common/HeaderNav';
import { Redirect } from 'components/common/Redirect';
import cn from 'classnames';
import classes from 'components/Profile/profile.module.css';
import Input from 'utils/FromAnt/Input/Input';
import Select from 'utils/FromAnt/Select/Select';
import DatePicker from 'utils/FromAnt/DatePicker/DatePicker';
import { Button } from 'utils/Buttons/Button';
import {
	declOfLessonsNum,
	presence_of_variables,
	replaceDateforBack,
	replaceDateforFront,
} from 'helpers/common';
import success_edit from 'assets/images/successAbonement.svg';
import edit from 'assets/images/editAboniment.svg';
import { useInputOnObject, usePrice } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Api from 'Api/Api';
import { createOnceTrainForCourse } from 'store/Actions/generalPageActions';

const AbonementOnce = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const profile = useSelector(store => store.profile);
	const { ages_group, couch, group, status, typeAboniment, user } = profile;
	const { current_date } = useSelector(state => state.general_page);

	const upload = useInputOnObject({
		date: current_date | '',
	});

	const [trainings, setTrainings] = useState([]);

	console.log('current_date>> ', current_date);

	useEffect(() => {
		upload.onChange({ date: current_date });
	}, [current_date]);

	useEffect(() => {
		(async () => {
			console.log('data', upload.state.date);
			if (upload.state && upload.state.date) {
				let response = await Api.getGeneralPageDataWithDate(
					replaceDateforBack(upload.state.date)
				);
				setTrainings(
					response.data.map(_ => ({
						id: _.id,
						name: `${_.group.name} ${replaceDateforFront(_.date, 'DD.MM.YYYY HH:mm')}`,
					}))
				);
			}
		})();
	}, [upload.state?.date]);
	/**
	 * стэйт хранит количество покупаемых абонементов
	 */
	// eslint-disable-next-line no-unused-vars
	const [countCard, setCount] = useState(1);
	/**
	 * кастомный хук хранит:
	 * @param editPrice {price:number,edit:boolean} price - цена абонемента, edit - Переключение режима редактирования
	 * @param setEditPrice {function} - функция для изменения значений editPrice
	 * @param handleChangePriceAbonement {function} - функция для изменения значений editPrice {price}
	 * @param toggleEdit {function} - функция для изменения значений editPrice {edit}
	 */
	// eslint-disable-next-line no-unused-vars
	const { editPrice, setEditPrice, handleChangePriceAbonement, toggleEdit } =
		usePrice(500);
	const createOnceTraining_cash = () => {
		const upload_data = {
			...upload.state,
			date: replaceDateforBack(upload.state.date),
			client_id: user.id,
			payment_method: 'cash',
			price: editPrice.price,
		};
		if (upload.state && upload.state.date && upload.state.lesson_id && user.id) {
		}
		dispatch(createOnceTrainForCourse({ ...upload_data }));
		history.goBack();
	};
	const createOnceTraining_cashless = () => {
		/**
		 * Функция отправки на сервер данных при покупке разового посещения
		 */
		const upload_data = {
			...upload.state,
			date: replaceDateforBack(upload.state.date),
			client_id: user.id,
			payment_method: 'cashless',
			price: editPrice.price,
		};
		dispatch(createOnceTrainForCourse({ ...upload_data }));
		history.goBack();
	};
	/**
	 * Функция отправки на сервер данных при покупке разового посещения
	 */
	return (
		<>
			<HeaderNav />
			<Redirect padding={true} title={'Разовая тренировка'} />
			<div className={'pb100 container-g gcol-md-12 gcol-lg-12'}>
				<form className={'block gcol-md-12 gcol-lg-11 -margin-16'}>
					<p className={cn('gcol-md-12 gcol-lg-11', classes.block_info__title_wr_text)}>
						Разовая тренировка
					</p>

					<div className={'gcol-md-6 gcol-lg-11'}>
						<Select data={[]} label={'филиал'} />
					</div>
					<div className={'gcol-md-6 gcol-lg-11'}>
						<DatePicker
							name={'date'}
							setValue={upload.onChange}
							label={'Дата занятия'}
							value={upload.state?.date && replaceDateforBack(upload.state.date)}
						/>
					</div>
					<div className={'gcol-md-12 gcol-lg-11'}>
						<Select
							disabled={!trainings.length}
							label={'выбрать тренировку'}
							data={trainings}
							field={'name'}
							name={'lesson_id'}
							setValue={upload.onChange}
						/>
					</div>
					<div className={classes.add_aboniment}>
						<div className={classes.sales_card}>
							<div className={`${classes.sale_count}`}>
								<span className={`${classes.sale_count_text}`}>
									1 {declOfLessonsNum(1)}
								</span>
								<span />
								<svg
									className={classes.sale_count_img}
									width="1428"
									height="2"
									viewBox="0 0 1428 2"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<line
										y1="1"
										x2="1428"
										y2="1"
										stroke="#BFC5D2"
										strokeLinejoin="round"
										strokeDasharray="5 5"
									/>
								</svg>

								{editPrice.edit ? (
									<div onClick={toggleEdit} className={classes.edit_block}>
										<input
											autoFocus
											className={classes.edit_price}
											style={{
												width: String(editPrice.price).length * 10 + 'px',
											}}
											value={editPrice.price * countCard}
											onChange={handleChangePriceAbonement}
											type="number"
										/>
										<span className={classes.edit_block_text}>&#8381;</span>
										<img className={classes.img_edit} src={success_edit} alt="edit" />
									</div>
								) : (
									<div onClick={toggleEdit} className={classes.edit_block}>
										<span className={`${classes.edit_block_text}`}>
											{editPrice.price * countCard}
											&#8381;
										</span>
										<img className={classes.img_edit} src={edit} alt="edit" />
									</div>
								)}
							</div>
							{/*<div className={`${classes.success}`}>*/}
							{/*    <Button click={handleSubmitAboniment} text={'применить'} size={"auto"} factor={"success"}/>*/}
							{/*</div>*/}
						</div>
					</div>

					<div className={'gcol-md-12'}>
						<Input type={'textarea'} label={'Комментарий'} />
					</div>

					<div className={'gcol-md-12 gap-24 flex flex-center'}>
						<Button
							disabled={presence_of_variables(
								upload.state,
								upload.state.date,
								upload.state.lesson_id,
								user.id,
								editPrice.price
							)}
							click={createOnceTraining_cash}
							text={'оплатить наличными'}
							factor={'success'}
						/>
						<Button
							disabled={presence_of_variables(
								upload.state,
								upload.state.date,
								upload.state.lesson_id,
								user.id,
								editPrice.price
							)}
							click={createOnceTraining_cashless}
							text={'безналичная оплата'}
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default AbonementOnce;
