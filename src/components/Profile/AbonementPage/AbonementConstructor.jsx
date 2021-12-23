import React, { useEffect, useState } from 'react';
import HeaderNav from 'components/common/HeaderNav';
import { Redirect } from 'components/common/Redirect';
import cn from 'classnames';
import classes from 'components/Profile/profile.module.css';
import Input from 'utils/FromAnt/Input/Input';
import Select from 'utils/FromAnt/Select/Select';
import { Counter } from 'utils/Counter/Counter';
import { Button } from 'utils/Buttons/Button';
import { useInputOnObject, usePrice } from 'hooks';
import DatePickerRange from 'utils/FromAnt/DatePickerRange/DatePickerRange';
import {
	countDaysbetweenTwoDate,
	declOfDay,
	declOfLessonsNum,
	isEmpty,
	replaceDateforBack,
} from 'helpers/common';
import success_edit from 'assets/images/successAbonement.svg';
import edit from 'assets/images/editAboniment.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { buy_abonement_configure } from 'store/Actions/profileActions';

const AbonementConstructor = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const profile = useSelector(store => store.profile);
	const { ages_group, group, status, typeAboniment, user } = profile;
	const client_data = useInputOnObject({});
	const subscription_data = useInputOnObject({});
	const [train_quantity, setTrainQuantity] = useState(0);
	// const filter_aboneemnts = typeAboniment.filter(item => item.rate_type !== 0);
	const filter_group = client_data.state.age_group_id
		? group.filter(item => item.age_group.id === client_data.state.age_group_id)
		: [];
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
	const { editPrice, handleChangePriceAbonement, toggleEdit } = usePrice();
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
		if (subscription_data.state.date_range) {
			setTrainQuantity(countDaysbetweenTwoDate(subscription_data.state.date_range));
		}
		// eslint-disable-next-line
	}, [subscription_data.state]);
	// const submit = () => {
	// 	const { date_range, ...rest } = subscription_data.state;
	// 	console.log(rest);
	// 	console.log({
	// 		subscription_data: {
	// 			trainings_quantity: countCard,
	// 			...rest,
	// 			...(date_range &&
	// 				date_range.length && {
	// 					valid_from: replaceDateforBack(date_range[0]),
	// 					valid_untill: replaceDateforBack(date_range[1]),
	// 				}),
	// 		},
	// 		client_data: { ...client_data.state },
	// 		payment_info: {
	// 			total: editPrice.price,
	// 		},
	// 	});
	// };

	const handleSubmitAbonimentCash = () => {
		const { date_range, ...rest } = subscription_data.state;
		let uploadData = {
			id: user.id,
			subscription_data: {
				train_balance: countCard,
				...rest,
				...(date_range &&
					date_range.length && {
						valid_from: replaceDateforBack(date_range[0]),
						valid_until: replaceDateforBack(date_range[1]),
					}),
			},
			client_data: { ...client_data.state },
			payment_info: {
				payment_method: 'cash',
				total: editPrice.price,
			},
		};
		console.log('buy abonement', uploadData);
		dispatch(buy_abonement_configure(uploadData));
		history.goBack();
	};

	const handleSubmitAbonimentCashLess = () => {
		const { date_range, ...rest } = subscription_data.state;
		let uploadData = {
			id: user.id,
			subscription_data: {
				train_balance: countCard,
				...rest,
				...(date_range &&
					date_range.length && {
						valid_from: replaceDateforBack(date_range[0]),
						valid_until: replaceDateforBack(date_range[1]),
					}),
			},
			client_data: { ...client_data.state },
			payment_info: {
				payment_method: 'cashless',
				total: editPrice.price,
			},
		};
		console.log('buy abonement', uploadData);
		dispatch(buy_abonement_configure(uploadData));
		history.goBack();
	};
	return (
		<>
			<HeaderNav />
			<Redirect padding={true} title={'Конфигуратор абонемента'} />
			<div className={'pb100 container-g gcol-md-12 gcol-lg-12'}>
				<form className={'block gcol-md-12 gcol-lg-11 -margin-16'}>
					<p className={cn('gcol-md-12 gcol-lg-11', classes.block_info__title_wr_text)}>
						Конфигуратор абонемента
					</p>
					<div className={'gcol-md-12 gcol-lg-3'}>
						<Input label={'Номер карточки'} />
					</div>
					<div className={'gcol-md-4 gcol-lg-2'}>
						<Select data={[]} label={'филиал'} />
					</div>
					<div className={'gcol-md-4 gcol-lg-2'}>
						<Select
							data={ages_group}
							name={'age_group_id'}
							setValue={client_data.onChange}
							field={'label'}
							value={client_data.state.age_group_id && client_data.state.age_group_id}
							label={'возрастная группа'}
						/>
					</div>
					<div className={'gcol-md-4 gcol-lg-3'}>
						<Select
							data={filter_group}
							name={'training_group_id'}
							setValue={subscription_data.onChange}
							field={'name'}
							value={
								subscription_data.state.training_group_id &&
								subscription_data.state.training_group_id
							}
							label={'группа занятий'}
						/>
					</div>
					<div className={'gcol-md-6 gcol-lg-2'}>
						<Select
							data={typeAboniment}
							name={'rate_id'}
							setValue={subscription_data.onChange}
							field={'name'}
							value={subscription_data.state.rate_id && subscription_data.state.rate_id}
							label={'тип абонемента'}
						/>
					</div>
					<div className={'gcol-md-6 gcol-lg-2'}>
						<Select
							data={status}
							name={'level_id'}
							setValue={client_data.onChange}
							field={'name'}
							value={client_data.state.level_id && client_data.state.level_id}
							label={'статус'}
						/>
					</div>
					<div className={'gcol-md-4 gcol-lg-2'}>
						{/*<Select data={[]} label={'группа занятий'} />*/}
						<Counter
							value={countCard}
							decrement={handleDecrementCount}
							increment={handleIncrementCount}
							setValue={handleChangeCountCard}
							label={'количество тренировок'}
						/>
					</div>
					<div className={'gcol-md-8 gcol-lg-4'}>
						<DatePickerRange
							limit={false}
							name={'date_range'}
							setValue={subscription_data.onChange}
							label={'Период действия абонемента'}
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
											{countCard} {declOfLessonsNum(countCard)}
										</span>
										{/*<span></span>*/}
										<span className={`${classes.sale_count_text}`}>
											{train_quantity} {declOfDay(train_quantity)}
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
													value={editPrice.price}
													onChange={handleChangePriceAbonement}
													type="number"
												/>
												<span className={classes.edit_block_text}>&#8381;</span>
												<img className={classes.img_edit} src={success_edit} alt="edit" />
											</div>
										) : (
											<div onClick={toggleEdit} className={classes.edit_block}>
												<span className={`${classes.edit_block_text}`}>
													{editPrice.price}
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
					</div>{' '}
				</form>
			</div>
		</>
	);
};

export default AbonementConstructor;
