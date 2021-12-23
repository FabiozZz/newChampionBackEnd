import React, { useEffect, useState } from 'react';
import { Counter } from 'utils/Counter/Counter';
import success_edit from 'assets/images/successAbonement.svg';
import edit from 'assets/images/editAboniment.svg';
import { useDispatch, useSelector } from 'react-redux';
import classes from './add.module.css';
import { BtnGroup } from '../../../Clients/FilterClientSection/BtnGroup/BtnGroup';
import { declOfDay, declOfLessonsNum, isEmpty, replaceDateforBack } from 'helpers/common';
import { Button } from 'utils/Buttons/Button';
import {
	buyAbonementAndCreateOnceTrainForCourse,
	createOnceTrainForCourse,
} from 'store/Actions/generalPageActions';
import { useInputOnObject, usePrice } from 'hooks';
import Input from 'utils/FromAnt/Input/Input';
import Select from 'utils/FromAnt/Select/Select';

/**
 * Компонент отвечает за покупку абонемента в модалке
 *
 * @param user {object} клиент для которого ведется покупка
 * @param close_modal {function} функция для закрытия модального окна
 * @param lesson_id {number} id занятия
 * @param date {string} дата на которую покупается абонемент
 * @returns {JSX.Element}
 * @constructor
 */
const AddedAbonementModal = ({ user, close_modal, lesson_id, date }) => {
	const [price, setPrice] = useState(0);
	const dispatch = useDispatch();

	/**
	 * Данные из redux = необходимые данные для покупки абонемента и выбранная дата
	 */
	const { added_client, current_date } = useSelector(state => state.general_page);

	/**
	 * Локальный стэйт для переключения разовой покупки
	 */
	const [single, setSingle] = useState(false);

	// eslint-disable-next-line no-unused-vars
	const { abonements, ages_groups, couches, groups, statuses } = added_client;

	/**
	 * фильтрация абонементов исключая пробный тариф
	 */
	const filter_aboneemnts = abonements.filter(item => item.rate_type !== 0);

	/**
	 * Локальный стейт для хранения заполненных данных
	 * @type {{onChange: function(*=): void, state: {}}}
	 */
	const data = useInputOnObject({});

	/**
	 * Временный локальный стэйт (передаточный) временно хранит выбранный абонемент для того чтобы вытянуть цену из объекта абонемента
	 */
	const [selectAboniment, setAboniment] = useState({});

	/**
	 * Стэйт хранит в себе фильтррованный массив групп
	 */
	const [filter_group, setFilter] = useState([]);

	/**
	 * стэйт хранит количество покупаемых абонементов
	 */
	const [countCard, setCount] = useState(1);

	/**
	 * Функция выставления значения количества покупаемых абонементов
	 * @param e
	 */
	const handleChangeCountCard = e => {
		let symbol = e.target.value;
		setCount(Number(symbol) > 999 ? 999 : Number(symbol) < 1 ? 1 : Number(symbol));
	};

	/**
	 * Прослушивание события клика для повышения количества покупаемых абонементов
	 */
	const handleIncrementCount = () => {
		setCount(countCard < 999 ? countCard + 1 : 999);
	};

	/**
	 * Прослушивание события клика для понижения количества покупаемых абонементов
	 */
	const handleDecrementCount = () => {
		setCount(countCard <= 1 ? 1 : countCard - 1);
	};

	/**
	 * кастомный хук хранит:
	 * @param editPrice {price:number,edit:boolean} price - цена абонемента, edit - Переключение режима редактирования
	 * @param setEditPrice {function} - функция для изменения значений editPrice
	 * @param handleChangePriceAbonement {function} - функция для изменения значений editPrice {price}
	 * @param toggleEdit {function} - функция для изменения значений editPrice {edit}
	 */
	const { editPrice, setEditPrice, handleChangePriceAbonement, toggleEdit } =
		usePrice(price);

	/**
	 * Эффект следит за возрастной группой и фильтрует группы в зависимости от значения
	 */
	useEffect(() => {
		setFilter(groups.filter(group => group.age_group.id === data.state.age_group_id));
	}, [data.state.age_group_id, groups]);

	/**
	 * Кастомный хук, не несет ничего кроме сокращения кода
	 */
	useEffect(() => {
		if (user && !isEmpty(user)) {
			console.log(user);
			if (user.age_group && user.age_group.id) {
				data.onChange({ age_group_id: user.age_group.id });
			}
			if (user.level && user.level.id) {
				data.onChange({ level_id: user.level.id });
			}
			if (user.subscription && user.subscription.rate && user.subscription.rate.id) {
				data.onChange({ rate_id: user.subscription.rate.id });
			}
			if (
				user.subscription &&
				user.subscription.training_group &&
				user.subscription.training_group.id
			) {
				data.onChange({
					training_group_id: user.subscription.training_group.id,
				});
			}
		}
		// eslint-disable-next-line
	}, [user]);
	useEffect(() => {
		if (data.state.rate_id) {
			const abonement = [...abonements].find(_ => _.id === data.state.rate_id);
			setAboniment(abonement);
		}
		// eslint-disable-next-line
	}, [data.state]);
	// useInitialStateOnUser(user, data, setAboniment, abonements);

	/**
	 * Эффект следит за выбранным абонементом и уровнем
	 * В зависимости от значения устанавливает цену в editPrice
	 */
	useEffect(() => {
		if (!single) {
			if (
				selectAboniment &&
				data.state &&
				data.state.level_id &&
				data.state.rate_id &&
				selectAboniment.prices &&
				selectAboniment.prices.length
			) {
				let copyAbonement = Object.assign({}, selectAboniment);
				let price = copyAbonement.prices.find(
					item =>
						item.age_group.id === (data.state.age_group_id || user.age_group.id) &&
						item.level.id === data.state.level_id
				).price;
				if (price) {
					setPrice(price);
					// setEditPrice(prevState => ({ ...prevState, price: Number(price) }));
				}
			}
		} else {
			setPrice(price);
			// setEditPrice(prevState => ({ ...prevState, price: 500 }));
		}
		// eslint-disable-next-line
	}, [data.state, selectAboniment, single, user.age_group.id]);

	/**
	 * Функция отправки данных на сервер при покупке наличными
	 */
	const handleSubmitAbonimentCash = () => {
		let copyAbonement = [...selectAboniment.prices];
		console.log(copyAbonement);
		let price = copyAbonement.find(
			item =>
				item.age_group.id === (data.state.age_group_id || user.age_group.id) &&
				item.level.id === data.state.level_id
		).price;
		const userPrice = editPrice.price !== Number(price) ? editPrice.price : false;
		let uploadData = {
			date: date,
			abonement: {
				id: user.id,
				payment_method: 'cash',
				...(userPrice && { price: userPrice }),
				...(data.state && data.state),
				purchase_date: replaceDateforBack(current_date),
			},
			client: { lesson_id, client_id: user.id },
		};

		console.log('покупаемый абонемент', {
			date: date,
			abonement: {
				id: user.id,
				...(userPrice && { price: userPrice }),
				...(data.state && data.state),
			},
			client: { lesson_id, client_id: user.id },
		});
		dispatch(buyAbonementAndCreateOnceTrainForCourse(uploadData));
		close_modal();
	};

	/**
	 * Функция отправки данных на сервер при покупке безналом
	 */
	const handleSubmitAbonimentCashLess = () => {
		let copyAbonement = [...selectAboniment.prices];
		console.log(copyAbonement);
		let price = copyAbonement.find(
			item =>
				item.age_group.id === (data.state.age_group_id || user.age_group.id) &&
				item.level.id === data.state.level_id
		).price;
		const userPrice = editPrice.price !== Number(price) ? editPrice.price : false;
		let uploadData = {
			date: date,
			abonement: {
				id: user.id,
				payment_method: 'cashless',
				...(userPrice && { price: userPrice }),
				...(data.state && data.state),
				purchase_date: replaceDateforBack(current_date),
			},
			client: { lesson_id, client_id: user.id },
		};

		console.log('покупаемый абонемент', {
			date: date,
			abonement: {
				id: user.id,
				...(userPrice && { price: userPrice }),
				...(data.state && data.state),
			},
			client: { lesson_id, client_id: user.id },
		});
		dispatch(buyAbonementAndCreateOnceTrainForCourse(uploadData));
		close_modal();
	};

	// const createDebtTraining = () => {
	// 	dispatch(createDebtTrainForCourse({ lesson_id, client_id: user.id, date: date }));
	// 	close_modal();
	// };

	/**
	 * Функция отправки на сервер данных при покупке разового посещения
	 */
	const createOnceTraining = () => {
		dispatch(createOnceTrainForCourse({ lesson_id, client_id: user.id, date: date }));
		close_modal();
	};

	/**
	 *
	 */
	const buyAbonementHandlerCash = () => {
		single ? createOnceTraining() : handleSubmitAbonimentCash();
	};

	const buyAbonementHandlerCashLess = () => {
		single ? createOnceTraining() : handleSubmitAbonimentCashLess();
	};
	useEffect(() => {
		setEditPrice(prevState => ({ ...prevState, price: Number(price) }));
		// eslint-disable-next-line
	}, [price]);
	return (
		<div className={classes.wrapper}>
			<p className={classes.wrapper__label}>Абонемента нет</p>
			<div className={classes.add_aboniment}>
				<div className={classes.switch_box}>
					<span className={classes.switch_box_label}>ОПЛАТА</span>
					<BtnGroup
						is_Adult={single}
						toggleActive={setSingle}
						left={'Абонемент'}
						right={'Разовая'}
					/>
				</div>
				{!single && (
					<>
						<div className={classes.svg}>
							<svg
								width="582"
								height="1"
								viewBox="0 0 582 1"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<line
									x1="4.37114e-08"
									y1="0.5"
									x2="582"
									y2="0.500051"
									stroke="#E0E3E9"
									strokeLinejoin="round"
									strokeDasharray="12 12"
								/>
							</svg>
						</div>
						<div className={classes.card_number}>
							<Input label={'номер карты'} disabled={single} />
						</div>
						<div className={classes.aboniment}>
							<Select
								value={data.state.rate_id && data.state.rate_id}
								setValue={data.onChange}
								name={'rate_id'}
								data={filter_aboneemnts}
								label={'тип абонемента'}
								disabled={single}
								field={'name'}
							/>
						</div>
						<div className={classes.status}>
							<Select
								value={data.state.level_id && data.state.level_id}
								setValue={data.onChange}
								data={statuses}
								name={'level_id'}
								label={'статус'}
								disabled={single}
								field={'name'}
							/>
						</div>
						<div className={classes.counter}>
							<Counter
								value={countCard}
								decrement={handleDecrementCount}
								increment={handleIncrementCount}
								setValue={handleChangeCountCard}
								label={'количество'}
								disabled={single}
							/>
						</div>
						<div className={classes.ages_group}>
							<Select
								label={'возростная группа'}
								value={data.state.age_group_id && data.state.age_group_id}
								setValue={data.onChange}
								name={'age_group_id'}
								field={'label'}
								data={ages_groups}
								disabled={single}
							/>
						</div>
						{/*{data.state.rate_id ? (*/}
						<div className={`${classes.group}`}>
							<Select
								field={'name'}
								label={'группа'}
								data={filter_group}
								value={data.state.training_group_id && data.state.training_group_id}
								name={'training_group_id'}
								setValue={data.onChange}
								disabled={single || !data.state.age_group_id}
							/>
						</div>
						{/*) : (*/}
						{/*	<div className={`${classes.group}`}>*/}
						{/*		<SelectCouch*/}
						{/*			data={couches}*/}
						{/*			value={selectCouch}*/}
						{/*			setValue={handleChangeCouch}*/}
						{/*			label={'тренер'}*/}
						{/*			disabled={single}*/}
						{/*		/>*/}
						{/*	</div>*/}
						{/*)}*/}
						<div className={classes.svg}>
							<svg
								width="582"
								height="1"
								viewBox="0 0 582 1"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<line
									x1="4.37114e-08"
									y1="0.5"
									x2="582"
									y2="0.500051"
									stroke="#E0E3E9"
									strokeLinejoin="round"
									strokeDasharray="12 12"
								/>
							</svg>
						</div>
					</>
				)}
			</div>
			<>
				{/*<h3 className={classes.block_info__title_aboniment}>*/}
				{/*	{selectAboniment.name} для {selectStatus.name.replace(/[а-я]{2}$/gi, 'ых')} клиентов*/}
				{/*</h3>*/}
				{single ? (
					<div className={classes.add_aboniment}>
						<div className={classes.sales_card}>
							{/*<div className={classes.procent}>*/}
							{/*    <OtherInput label={'скидка'}/>*/}
							{/*</div>*/}
							<div className={`${classes.sale_count}`}>
								<span className={`${classes.sale_count_text}`}>
									1 {declOfLessonsNum(1)}
								</span>
								<span className={`${classes.sale_count_text}`}>0 {declOfDay(0)}</span>
								{/*<img className={classes.sale_count_img} src={devider} alt="devider"/>*/}
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
				) : data.state.rate_id && data.state.level_id ? (
					<div className={classes.add_aboniment}>
						<div className={classes.sales_card}>
							{/*<div className={classes.procent}>*/}
							{/*    <OtherInput label={'скидка'}/>*/}
							{/*</div>*/}
							<div className={`${classes.sale_count}`}>
								<span className={`${classes.sale_count_text}`}>
									{selectAboniment?.train_quantity > 9990 ? (
										<span dangerouslySetInnerHTML={{ __html: '&#8734;' }} />
									) : (
										selectAboniment?.train_quantity
									)}{' '}
									{declOfLessonsNum(selectAboniment?.train_quantity)}
								</span>
								<span className={`${classes.sale_count_text}`}>
									{selectAboniment?.days_duration > 9990 ? (
										<span dangerouslySetInnerHTML={{ __html: '&#8734;' }} />
									) : (
										selectAboniment?.days_duration
									)}{' '}
									{declOfDay(selectAboniment?.days_duration)}
								</span>
								{/*<img className={classes.sale_count_img} src={devider} alt="devider"/>*/}
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
				) : null}
			</>
			{/* end module change price */}
			<div className={classes.btn_group}>
				<Button
					click={buyAbonementHandlerCashLess}
					disabled={
						single
							? !single
							: !(data.state.rate_id && data.state.level_id && data.state.age_group_id)
					}
					text={'безналичная оплата'}
					factor={'default'}
				/>
				<Button
					click={buyAbonementHandlerCash}
					disabled={
						single
							? !single
							: !(data.state.rate_id && data.state.level_id && data.state.age_group_id)
					}
					text={'оплата наличными'}
					factor={'success'}
				/>
				{/* <span onClick={createDebtTraining} className={classes.debt}>
					Отметить в долг
				</span> */}
			</div>
			{/*<input className={classes.sale_count__input}*/}
			{/*       type={'number'} size={editPrice.price.length}*/}
			{/*       value={editPrice.price} onChange={handleChangePriceAbonement}/>*/}
		</div>
	);
};

export default AddedAbonementModal;
