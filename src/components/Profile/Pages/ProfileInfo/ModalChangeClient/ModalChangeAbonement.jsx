import React, { useEffect, useState } from 'react';
import classes from './modal_change.module.css';
import { Counter } from 'utils/Counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'utils/Buttons/Button';
import { declOfDay, declOfLessonsNum, replaceDateforBack } from 'helpers/common';
import success_edit from 'assets/images/successAbonement.svg';
import edit from 'assets/images/editAboniment.svg';
import Input from 'utils/FromAnt/Input/Input';
import { useInitialStateOnUser, useInputOnObject, usePrice } from 'hooks';
import Select from 'utils/FromAnt/Select/Select';
import DatePicker from 'utils/FromAnt/DatePicker/DatePicker';
import { buy_abonement } from 'store/Actions/profileActions';
import moment from 'moment';

export const ModalChangeAbonement = ({ profile, toggleModal }) => {
	const dispatch = useDispatch();
	const { user } = profile;
	const { current_date } = useSelector(state => state.general_page);
	// eslint-disable-next-line no-unused-vars
	const { ages_group, couch, group, status, typeAboniment } = useSelector(
		state => state.profile
	);

	// eslint-disable-next-line no-unused-vars
	const [single, setSingle] = useState(false);

	const filter_aboneemnts = typeAboniment.filter(item => item.rate_type !== 0);
	const data = useInputOnObject({});
	const [selectAboniment, setAboniment] = useState({});

	const [filter_group, setFilter] = useState([]);

	const [countCard, setCount] = useState(1);
	const handleChangeCountCard = e => {
		let symbol = e.target.value;
		setCount(Number(symbol) > 999 ? 999 : Number(symbol) < 1 ? 1 : Number(symbol));
	};
	const handleIncrementCount = () => {
		setCount(countCard < 999 ? countCard + 1 : 999);
	};
	const handleDecrementCount = () => {
		setCount(countCard <= 1 ? 1 : countCard - 1);
	};
	const { editPrice, setEditPrice, handleChangePriceAbonement, toggleEdit } = usePrice();

	useEffect(() => {
		setFilter(group.filter(group => group.age_group.id === data.state.age_group_id));
	}, [data.state.age_group_id, group]);

	useInitialStateOnUser(user, data, setAboniment, typeAboniment);

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
					setEditPrice(prevState => ({ ...prevState, price: Number(price) }));
				}
			}
		} else {
			setEditPrice(prevState => ({ ...prevState, price: 500 }));
		}
	}, [
		data.state,
		data.state.level_id,
		data.state.rate_id,
		selectAboniment,
		setEditPrice,
		single,
		user.age_group.id,
	]);

	const handleSubmitAbonimentCash = () => {
		console.log(data.state);
		let copyAbonement = [...selectAboniment.prices];
		console.log(copyAbonement);
		let price = copyAbonement.find(
			item =>
				item.age_group.id === (data.state.age_group_id || user.age_group.id) &&
				item.level.id === data.state.level_id
		).price;
		const userPrice = editPrice.price !== Number(price) ? editPrice.price : false;
		let uploadData = {
			id: user.id,
			payment_method: 'cash',
			...(userPrice && { price: userPrice }),
			...(data.state && data.state),
			...(data.state.purchase_date && {
				purchase_date: replaceDateforBack(data.state.purchase_date),
			}),
		};

		console.log('покупаемый абонемент', uploadData);
		dispatch(buy_abonement(uploadData));
		toggleModal();
	};

	const handleSubmitAbonimentCashLess = () => {
		console.log(data.state);
		let copyAbonement = [...selectAboniment.prices];
		console.log(copyAbonement);
		let price = copyAbonement.find(
			item =>
				item.age_group.id === (data.state.age_group_id || user.age_group.id) &&
				item.level.id === data.state.level_id
		).price;
		const userPrice = editPrice.price !== Number(price) ? editPrice.price : false;
		let uploadData = {
			id: user.id,
			payment_method: 'cashless',
			...(userPrice && { price: userPrice }),
			...(data.state && data.state),
			...(data.state.purchase_date && {
				purchase_date: replaceDateforBack(data.state.purchase_date),
			}),
		};

		console.log('покупаемый абонемент', uploadData);
		dispatch(buy_abonement(uploadData));
		toggleModal();
	};

	// const createDebtTraining = () => {
	// 	// dispatch(createDebtTrainForCourse({ lesson_id, client_id: user.id, date: date }));
	// 	// close_modal();
	// };
	//
	// const createOnceTraining = () => {
	// 	// dispatch(createOnceTrainForCourse({ lesson_id, client_id: user.id, date: date }));
	// 	// close_modal();
	// };
	//
	// const buyAbonementHandler = () => {
	// 	console.log(data.state);
	// 	// single ? createOnceTraining() : handleSubmitAboniment();
	// };

	return (
		<div className={classes.wrapper}>
			<p className={classes.wrapper__label}>оформить абонемент</p>
			<div className={classes.add_aboniment}>
				{/*<div className={classes.switch_box}>*/}
				{/*	<span className={classes.switch_box_label}>ОПЛАТА</span>*/}
				{/*	<BtnGroup*/}
				{/*		is_Adult={single}*/}
				{/*		toggleActive={setSingle}*/}
				{/*		left={'Абонемент'}*/}
				{/*		right={'Разовая'}*/}
				{/*	/>*/}
				{/*</div>*/}
				{/*{!single && (*/}
				<>
					{/*<div className={classes.svg}>*/}
					{/*	<svg*/}
					{/*		width="582"*/}
					{/*		height="1"*/}
					{/*		viewBox="0 0 582 1"*/}
					{/*		fill="none"*/}
					{/*		xmlns="http://www.w3.org/2000/svg">*/}
					{/*		<line*/}
					{/*			x1="4.37114e-08"*/}
					{/*			y1="0.5"*/}
					{/*			x2="582"*/}
					{/*			y2="0.500051"*/}
					{/*			stroke="#E0E3E9"*/}
					{/*			strokeLinejoin="round"*/}
					{/*			strokeDasharray="12 12"*/}
					{/*		/>*/}
					{/*	</svg>*/}
					{/*</div>*/}
					<div className={classes.card_number}>
						<Input label={'номер карты'} disabled={single} />
					</div>
					<div className={classes.date_picker}>
						<DatePicker
							setValue={data.onChange}
							name={'purchase_date'}
							label={'дата тренировки'}
							defaultValue={moment(replaceDateforBack(current_date))}
						/>
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
							data={status}
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
							data={ages_group}
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
				{/*)}*/}
			</div>
			<>
				{/*<h3 className={classes.block_info__title_aboniment}>*/}
				{/*	{selectAboniment.name} для {selectStatus.name.replace(/[а-я]{2}$/gi, 'ых')} клиентов*/}
				{/*</h3>*/}
				{/*{single ? (*/}
				{/*	<div className={classes.add_aboniment}>*/}
				{/*		<div className={classes.sales_card}>*/}
				{/*			/!*<div className={classes.procent}>*!/*/}
				{/*			/!*    <OtherInput label={'скидка'}/>*!/*/}
				{/*			/!*</div>*!/*/}
				{/*			<div className={`${classes.sale_count}`}>*/}
				{/*				<span className={`${classes.sale_count_text}`}>1 {declOfLessonsNum(1)}</span>*/}
				{/*				<span className={`${classes.sale_count_text}`}>0 {declOfDay(0)}</span>*/}
				{/*				/!*<img className={classes.sale_count_img} src={devider} alt="devider"/>*!/*/}
				{/*				<svg*/}
				{/*					className={classes.sale_count_img}*/}
				{/*					width="1428"*/}
				{/*					height="2"*/}
				{/*					viewBox="0 0 1428 2"*/}
				{/*					fill="none"*/}
				{/*					xmlns="http://www.w3.org/2000/svg">*/}
				{/*					<line*/}
				{/*						y1="1"*/}
				{/*						x2="1428"*/}
				{/*						y2="1"*/}
				{/*						stroke="#BFC5D2"*/}
				{/*						strokeLinejoin="round"*/}
				{/*						strokeDasharray="5 5"*/}
				{/*					/>*/}
				{/*				</svg>*/}

				{/*				{editPrice.edit ? (*/}
				{/*					<div onClick={toggleEdit} className={classes.edit_block}>*/}
				{/*						<input*/}
				{/*							autoFocus*/}
				{/*							className={classes.edit_price}*/}
				{/*							style={{*/}
				{/*								width: String(editPrice.price).length * 10 + 'px',*/}
				{/*							}}*/}
				{/*							value={editPrice.price * countCard}*/}
				{/*							onChange={handleChangePriceAbonement}*/}
				{/*							type="number"*/}
				{/*						/>*/}
				{/*						<span className={classes.edit_block_text}>&#8381;</span>*/}
				{/*						<img className={classes.img_edit} src={success_edit} alt="edit" />*/}
				{/*					</div>*/}
				{/*				) : (*/}
				{/*					<div onClick={toggleEdit} className={classes.edit_block}>*/}
				{/*						<span className={`${classes.edit_block_text}`}>*/}
				{/*							{editPrice.price * countCard}*/}
				{/*							&#8381;*/}
				{/*						</span>*/}
				{/*						<img className={classes.img_edit} src={edit} alt="edit" />*/}
				{/*					</div>*/}
				{/*				)}*/}
				{/*			</div>*/}
				{/*			/!*<div className={`${classes.success}`}>*!/*/}
				{/*			/!*    <Button click={handleSubmitAboniment} text={'применить'} size={"auto"} factor={"success"}/>*!/*/}
				{/*			/!*</div>*!/*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{data.state.rate_id && data.state.level_id ? (
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
									width="100%"
									height="1"
									viewBox="0 0 100% 1"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<line
										x1="4.37114e-08"
										y1="0.5"
										x2="100%"
										y2="0.500022"
										stroke="#BFC5D2"
										strokeLinejoin="round"
										strokeDasharray="3 3"
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
					click={handleSubmitAbonimentCashLess}
					disabled={
						single
							? !single
							: !(data.state.rate_id && data.state.level_id && data.state.age_group_id)
					}
					text={'безналичная оплата'}
					factor={'default'}
				/>
				<Button
					click={handleSubmitAbonimentCash}
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
