import React, { useEffect, useState } from 'react';
import HeaderNav from 'components/common/HeaderNav';
import { Redirect } from 'components/common/Redirect';
import cn from 'classnames';
import classes from 'components/Profile/profile.module.css';
import Input from 'utils/FromAnt/Input/Input';
import Select from 'utils/FromAnt/Select/Select';
import DatePicker from 'utils/FromAnt/DatePicker/DatePicker';
import { Button } from 'utils/Buttons/Button';
import { Counter } from 'utils/Counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { useInputOnObject, usePrice } from 'hooks';
import { declOfDay, declOfLessonsNum, isEmpty, replaceDateforBack } from 'helpers/common';
import { buy_abonement } from 'store/Actions/profileActions';
import success_edit from 'assets/images/successAbonement.svg';
import edit from 'assets/images/editAboniment.svg';
import { useHistory } from 'react-router-dom';

const Abonement = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const profile = useSelector(store => store.profile);
	const { ages_group, group, status, typeAboniment, user } = profile;
	const { current_date } = useSelector(state => state.general_page);
	const client_data = useInputOnObject({});
	const subscription_data = useInputOnObject({});
	console.log(profile);
	const filter_aboneemnts = typeAboniment.filter(item => item.rate_type !== 0);
	const [current_abonements,setCurrent] = useState(null)
	const filter_group = client_data.state.age_group_id
		? group.filter(item => item.age_group.id === client_data.state.age_group_id)
		: [];
	const [price, setPrice] = useState(0);
	const [countCard, setCount] = useState(1);
	const [train, setTrain] = useState(0);
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
	const { editPrice, setEditPrice, handleChangePriceAbonement, toggleEdit } =
		usePrice(price);
	useEffect(()=>{
		if(subscription_data.state &&subscription_data.state.rate_id){
			setCurrent(typeAboniment.find(_=>_.id === subscription_data.state.rate_id))
		}
	},[subscription_data.state.rate_id])
	console.log('current_abonements',current_abonements)
	useEffect(() => {
		if (user && !isEmpty(user)) {
			console.log(user);
			if (user.age_group && user.age_group.id) {
				client_data.onChange({ age_group_id: user.age_group.id });
			}
			if (user.level && user.level.id) {
				client_data.onChange({ level_id: user.level.id });
			}
			if (user.subscription && user.subscription.rate && user.subscription.rate.id) {
				subscription_data.onChange({ rate_id: user.subscription.rate.id });
			}
			if (
				user.subscription &&
				user.subscription.training_group &&
				user.subscription.training_group.id
			) {
				subscription_data.onChange({
					training_group_id: user.subscription.training_group.id,
				});
			}
		}
		// eslint-disable-next-line
	}, [user]);

	useEffect(() => {
		if (
			subscription_data.state.rate_id &&
			client_data.state.age_group_id &&
			client_data.state.level_id &&
			typeAboniment &&
			typeAboniment.length
		) {
			const prices = typeAboniment.find(
				_ => _.id === subscription_data.state.rate_id
			).prices;
			const price = prices.find(
				_ =>
					_.level.id === client_data.state.level_id &&
					_.age_group.id === client_data.state.age_group_id
			).price;
			if (price) {
				setPrice(price);
			}
			console.log('typeAboniment', price);
		}
		// eslint-disable-next-line
	}, [subscription_data.state, client_data.state]);

	useEffect(() => {
		setEditPrice(prevState => ({ ...prevState, price: Number(price) }));
		// eslint-disable-next-line
	}, [price]);
	// useEffect(() => {
	// 	if (current_date)
	// 		subscription_data.onChange({ purchase_date: replaceDateforBack(current_date) });
	// }, [current_date]);
	const handleSubmitAbonimentCash = () => {
		let uploadData = {
			id: user.id,
			...subscription_data.state,
			...(!subscription_data.state.purchase_date
				? { purchase_date: replaceDateforBack(current_date) }
				: {
						purchase_date: replaceDateforBack(subscription_data.state.purchase_date),
				  }),
			...client_data.state,
			...(editPrice.price && { price: editPrice.price * countCard }),
			payment_method: 'cash',
			quantity: countCard,
		};
		console.log('buy abonement', uploadData);
		dispatch(buy_abonement(uploadData));
		history.goBack();
	};

	const handleSubmitAbonimentCashLess = () => {
		let uploadData = {
			id: user.id,
			...subscription_data.state,
			...(!subscription_data.state.purchase_date
				? { purchase_date: replaceDateforBack(current_date) }
				: {
						purchase_date: replaceDateforBack(subscription_data.state.purchase_date),
				  }),
			...client_data.state,
			...(editPrice.price && { price: editPrice.price * countCard }),
			payment_method: 'cashless',
			quantity: countCard,
		};
		console.log('buy abonement', uploadData);
		dispatch(buy_abonement(uploadData));
		history.goBack();
	};
	useEffect(() => {
		if (subscription_data.state.rate_id && typeAboniment && typeAboniment.length) {
			setTrain(
				typeAboniment.find(_ => _.id === subscription_data.state.rate_id).train_quantity
			);
		}
	}, [subscription_data.state, typeAboniment]);
	//
	// const handleSubmitAbonimentCashLess = () => {
	// 	console.log(data.state);
	// 	let copyAbonement = [...selectAboniment.prices];
	// 	console.log(copyAbonement);
	// 	let price = copyAbonement.find(
	// 		item =>
	// 			item.age_group.id === (data.state.age_group_id || user.age_group.id) &&
	// 			item.level.id === data.state.level_id
	// 	).price;
	// 	const userPrice = editPrice.price !== Number(price) ? editPrice.price : false;
	// 	let uploadData = {
	// 		id: user.id,
	// 		payment_method: 'cashless',
	// 		...(userPrice && { price: userPrice }),
	// 		...(data.state && data.state),
	// 		...(data.state.purchase_date && {
	// 			purchase_date: replaceDateforBack(data.state.purchase_date),
	// 		}),
	// 	};
	//
	// 	console.log('покупаемый абонемент', uploadData);
	// 	dispatch(buy_abonement(uploadData));
	// };
	// const submit = () => {
	// 	console.log({
	// 		subscription_data: {
	// 			...subscription_data.state,
	// 			...(subscription_data.state.valid_from && {
	// 				valid_from: replaceDateforBack(subscription_data.state.valid_from),
	// 			}),
	// 		},
	// 		client_data: { ...client_data.state },
	// 	});
	// };
	return (
		<>
			<HeaderNav />
			<Redirect padding={true} title={'Покупка абонемента'} />
			<div className={'pb100 container-g gcol-md-12 gcol-lg-12 '}>
				<form className={'block gcol-md-12 gcol-lg-11 overflow-hidden -margin-16'}>
					<p className={cn('gcol-md-12 gcol-lg-11', classes.block_info__title_wr_text)}>
						Купить абонемент
					</p>
					<div className={'gcol-md-6 gcol-lg-5'}>
						<Input label={'Номер карточки'} />
					</div>
					<div className={'gcol-md-6 gcol-lg-4'}>
						<DatePicker
							limit={false}
							// value={
							// 	subscription_data.state.purchase_date &&
							// 	subscription_data.state.purchase_date
							// }
							name={'purchase_date'}
							setValue={subscription_data.onChange}
							label={'Дата оплаты'}
						/>
					</div>
					<div className={'gcol-md-4 gcol-lg-3'}>
						<Select data={[]} label={'филиал'} />
					</div>
					<div className={'gcol-md-4 gcol-lg-3'}>
						<Select
							data={ages_group}
							field={'label'}
							name={'age_group_id'}
							value={client_data.state.age_group_id && client_data.state.age_group_id}
							setValue={client_data.onChange}
							label={'возрастная группа'}
						/>
					</div>
					<div className={'gcol-md-4 gcol-lg-3'}>
						<Select
							disabled={!client_data.state.age_group_id}
							data={filter_group}
							field={'name'}
							name={'training_group_id'}
							value={
								subscription_data.state.training_group_id &&
								subscription_data.state.training_group_id
							}
							setValue={subscription_data.onChange}
							label={'группа занятий'}
						/>
					</div>{' '}
					<div className={'gcol-md-5 gcol-lg-3'}>
						<Select
							data={filter_aboneemnts}
							field={'name'}
							name={'rate_id'}
							value={subscription_data.state.rate_id && subscription_data.state.rate_id}
							setValue={subscription_data.onChange}
							label={'тип абонемента'}
						/>
					</div>
					<div className={'gcol-md-5 gcol-lg-3'}>
						<Select
							data={status}
							field={'name'}
							value={client_data.state.level_id && client_data.state.level_id}
							name={'level_id'}
							setValue={client_data.onChange}
							label={'статус'}
						/>
					</div>
					<div className={'gcol-md-2 gcol-lg-2'}>
						{/*<Select data={[]} label={'группа занятий'} />*/}
						<Counter
							value={countCard}
							decrement={handleDecrementCount}
							increment={handleIncrementCount}
							setValue={handleChangeCountCard}
							label={'количество'}
						/>
					</div>
					{subscription_data.state.rate_id &&
						client_data.state.age_group_id &&
						client_data.state.level_id && (
							<div className={classes.add_aboniment}>
								<div className={classes.sales_card}>
									{/*<div className={classes.procent}>*/}
									{/*    <OtherInput label={'скидка'}/>*/}
									{/*</div>*/}
									<div className={`${classes.sale_count}`}>
										<span className={`${classes.sale_count_text}`}>
											{(current_abonements&&current_abonements.train_quantity)?current_abonements.train_quantity:0} {declOfLessonsNum((current_abonements&&current_abonements.train_quantity)?current_abonements.train_quantity:0)}
										</span>
										{/*<span></span>*/}
										<span className={`${classes.sale_count_text}`}>
											{train * countCard} {declOfDay(train * countCard)}
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
						)}
					<div className={'gcol-md-12 gcol-lg-11 container-g'}>
						<span className={'gcol-md-2'} />
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Button
								click={handleSubmitAbonimentCash}
								text={'оплатить наличными'}
								size={'auto'}
								factor={'success'}
							/>
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Button
								click={handleSubmitAbonimentCashLess}
								text={'безналичная оплата'}
								size={'auto'}
							/>
						</div>
						<span className={'gcol-md-2'} />
					</div>
				</form>
			</div>
		</>
	);
};

export default Abonement;
