import React, { useEffect, useState } from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import classes from './modal_edit.module.css';
import separate from '../../../../../assets/images/deviderParent.svg';
import success_edit from '../../../../../assets/images/successAbonement.svg';
import edit from '../../../../../assets/images/editAboniment.svg';
import { DataPicker } from '../../../../../utils/DataPicker/DataPicker';
import { declOfDay, declOfLessonsNum } from '../../../../../helpers/common';
import { Button } from '../../../../../utils/Buttons/Button';
import { useInitialStateOnUser, useInputOnObject, usePrice } from '../../../../../hooks';
import Select from 'utils/FromAnt/Select/Select';
import { useDispatch, useSelector } from 'react-redux';
import { buy_abonement } from 'store/Actions/profileActions';
import Input from 'utils/FromAnt/Input/Input';

export const ModalEditAbonement = ({ profile, type, change, toggleModal }) => {
	const dispatch = useDispatch();
	const { user } = profile;
	// eslint-disable-next-line no-unused-vars
	const { ages_group, couch, group, status, typeAboniment } = useSelector(
		state => state.profile
	);

	const filter_aboneemnts = typeAboniment.filter(item => item.rate_type !== 0);

	const data = useInputOnObject({});
	const [selectAboniment, setAboniment] = useState({});

	const [filter_group, setFilter] = useState([]);

	const [countCard, setCount] = useState(1);
	// eslint-disable-next-line no-unused-vars
	const handleChangeCountCard = e => {
		let symbol = e.target.value;
		setCount(Number(symbol) > 999 ? 999 : Number(symbol) < 1 ? 1 : Number(symbol));
	};
	// eslint-disable-next-line no-unused-vars
	const handleIncrementCount = () => {
		setCount(countCard < 999 ? countCard + 1 : 999);
	};
	// eslint-disable-next-line no-unused-vars
	const handleDecrementCount = () => {
		setCount(countCard <= 1 ? 1 : countCard - 1);
	};
	const { editPrice, setEditPrice, handleChangePriceAbonement, toggleEdit } = usePrice();

	useEffect(() => {
		setFilter(group.filter(group => group.age_group.id === data.state.age_group_id));
	}, [data.state.age_group_id, group]);

	useInitialStateOnUser(user, data, setAboniment, typeAboniment);

	useEffect(() => {
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
	}, [
		data.state,
		data.state.level_id,
		data.state.rate_id,
		selectAboniment,
		setEditPrice,
		user.age_group.id,
	]);

	// eslint-disable-next-line no-unused-vars
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
		};

		console.log('покупаемый абонемент', uploadData);
		dispatch(buy_abonement(uploadData));
		toggleModal();
	};

	// eslint-disable-next-line no-unused-vars
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
		};

		console.log('покупаемый абонемент', uploadData);
		dispatch(buy_abonement(uploadData));
		toggleModal();
	};
	return (
		<>
			<p className={classes.wrapper__label}>Редактирование абонемента</p>

			<UserInfo type={type} change={change} user={user} />
			<div className={classes.block_form}>
				<div className={classes.block_two}>
					<Input label={'перенести абонемент'} placeholder={'ФИО нового владельца'} />
					<Select label={'филиал'} />
					{/*<SelectFilial value={selectFilial.name} setValue={handleChangeFilialForUser} label={'филиал'} data={profile.profile} />*/}
				</div>
				{/*<img width={550} src={separate} alt="separate" />*/}
				<svg width="100%" height="1" viewBox="0 0 100% 1" fill="none">
					<line y1="0.5" x2="100%" y2="0.5" stroke="#EEF3F5" strokeDasharray="12 12" />
				</svg>

				<div className={classes.block_two}>
					<Select
						label={'тип абонемента'}
						name={'rate_id'}
						setValue={data.onChange}
						field={'name'}
						value={data.state.rate_id && data.state.rate_id}
						data={filter_aboneemnts}
					/>
					{/*<AbonimentType*/}
					{/*	label={'тип абонемента'}*/}
					{/*	setValue={handleChangeAbonementForUser}*/}
					{/*	value={selectAbonement.name}*/}
					{/*	data={profile.typeAboniment}*/}
					{/*/>*/}
					<Select
						value={data.state.level_id && data.state.level_id}
						setValue={data.onChange}
						data={status}
						name={'level_id'}
						label={'статус'}
						field={'name'}
					/>
					{/*<SelectStatus*/}
					{/*	label={'статус'}*/}
					{/*	value={selectStatus.name}*/}
					{/*	setValue={handleChangeStatusForUser}*/}
					{/*	data={profile.status}*/}
					{/*/>*/}
				</div>
				<div>
					<span className={classes.label_cash}>Нужно доплатить</span>
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

						{/*<span className={`${classes.sale_count_text}`}>*/}
						{/*	{selectAbonement.train_quantity > 20 ? (*/}
						{/*		<span dangerouslySetInnerHTML={{ __html: '&#8734;' }} />*/}
						{/*	) : (*/}
						{/*		selectAbonement.train_quantity*/}
						{/*	)}{' '}*/}
						{/*	{declOfLessonsNum(selectAbonement.train_quantity)}*/}
						{/*</span>*/}
						{/*<span className={`${classes.sale_count_text}`}>*/}
						{/*	{selectAbonement.days_duration / 7 > 8 ? (*/}
						{/*		<span dangerouslySetInnerHTML={{ __html: '&#8734;' }} />*/}
						{/*	) : (*/}
						{/*		selectAbonement.days_duration / 7*/}
						{/*	)}{' '}*/}
						{/*	{declOfWeekNum(selectAbonement.days_duration / 7)}*/}
						{/*</span>*/}
						{/*<img className={classes.sale_count_img} src={devider} alt="devider"/>*/}
						<div className={classes.flex}>
							{/*<img className={classes.sale_count_img} src={modal_devider} alt="devider" />*/}

							{editPrice.edit ? (
								<div onClick={toggleEdit} className={classes.edit_block}>
									<input
										autoFocus
										className={classes.edit_price}
										style={{ width: String(editPrice.price).length * 10 + 'px' }}
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
					</div>
				</div>
				<svg width="100%" height="1" viewBox="0 0 100% 1" fill="none">
					<line y1="0.5" x2="100%" y2="0.5" stroke="#EEF3F5" strokeDasharray="12 12" />
				</svg>
				<div className={classes.block_two}>
					<Select label={'возростная группа'} field={'label'} data={ages_group} />
					<Select label={'группа'} field={'name'} data={filter_group} />
					{/*{!selectAbonement.is_personal ? (*/}
					{/*	<Select label={'поменять группу'} data={profile.group} />*/}
					{/*) : selectAbonement.is_personal ? (*/}
					{/*	<Select*/}
					{/*		label={'поменять тренера'}*/}
					{/*		// value={selectCouch}*/}
					{/*		// setValue={handleChangeCouchForUser}*/}
					{/*		data={profile.couch}*/}
					{/*	/>*/}
					{/*) : null}*/}
					{/*<SelectGroup label={'возростная группа'} value={{ name: '' }} data={{}} />*/}
					{/*{!selectAbonement.is_personal ? (*/}
					{/*	<SelectGroup*/}
					{/*		label={'поменять группу'}*/}
					{/*		value={selectGroup}*/}
					{/*		setValue={handleChangeGroupForUser}*/}
					{/*		data={profile.group}*/}
					{/*	/>*/}
					{/*) : selectAbonement.is_personal ? (*/}
					{/*	<SelectCouch*/}
					{/*		label={'поменять тренера'}*/}
					{/*		// value={selectCouch}*/}
					{/*		// setValue={handleChangeCouchForUser}*/}
					{/*		data={profile.couch}*/}
					{/*	/>*/}
					{/*) : null}*/}
				</div>
				<img width={500} src={separate} alt="separate" />
				<div className={classes.block_one}>
					<DataPicker label={'Заморозить абонемент'} />
					<span className={classes.freeze_text_mute}>
						Доступно <b>3</b> заморозки тренеровок
					</span>
				</div>
				<div className={classes.end_btn}>
					<Button click={() => toggleModal(false)} factor={'danger'} text={'отменить'} />
					<Button factor={'success'} text={'сохранить'} />
				</div>
			</div>
		</>
	);
};
