import React, { createContext, useEffect, useState } from 'react';
import classes from './add.module.css';
import camera from './camera (1) 1.png';
import { Redirect } from '../common/Redirect';
import { RulesSection } from './common/RulesSection/RulesSection';
import { Modal } from 'utils/Modal/Modal';
import ModalPhoto from './ModalPhoto/ModalPhoto';
import PhoneSection from './PhoneSection/PhoneSection';
import { EndBtnGroup } from 'components/common/EndBtnGroup/EndBtnGroup';
import { useDispatch, useSelector } from 'react-redux';
import { replaceDateforBack } from 'helpers/common';
import { useInputOnObject } from 'hooks';
import { add_client_on_CRM } from 'store/Actions/addClientsActions';
import Input from 'utils/FromAnt/Input/Input';
import DatePicker from 'utils/FromAnt/DatePicker/DatePicker';
import { OterSection } from 'components/Add/common/OterSection/OterSection';
import cn from 'classnames';
import Select from 'utils/FromAnt/Select/Select';

export const ContextCommon = createContext();

// function isEmptyArray(arr) {
// 	if (arr.length) {
// 		for (let i = 0; i < arr.length; i++) {
// 			return isEmpty(arr[i]);
// 		}
// 	}
// 	return false;
// }

/*
 */
/**
 * Добавляет учетную карту нового клиента
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const Add = () => {
	const { groups, couches, agesGroup, error } = useSelector(state => state.addClient);

	const dispatch = useDispatch();

	/* common */

	const [errorInput, setIsError] = useState(null);
	useEffect(() => {
		setIsError(error);
	}, [error]);

	const [image, setImage] = useState(null);

	const handleChangeImage = data => setImage(data);

	const [modal, setModal] = useState(false);

	/**
	 * локальный стейт для храниения/установки персональных данных клиента для PersonalData
	 */
	const client_data_local = useInputOnObject({});

	// const subscription_data_local = useInputOnObject({});

	// const address = useInputOnObject({});
	//
	// const [countCard, setCount] = useState(1);
	// const handleChangeCountCard = async e => {
	// 	let symbol = e.target.value;
	// 	await setCount(Number(symbol) > 999 ? 999 : Number(symbol) < 1 ? 1 : Number(symbol));
	// 	await subscription_data_local.onChange({ trainings_quantity: countCard });
	// };
	// const handleIncrementCount = async () => {
	// 	await setCount(countCard < 999 ? countCard + 1 : 999);
	// 	await subscription_data_local.onChange({ trainings_quantity: countCard });
	// };
	// const handleDecrementCount = async () => {
	// 	await setCount(countCard <= 1 ? 1 : countCard - 1);
	// 	await subscription_data_local.onChange({ trainings_quantity: countCard });
	// };
	//
	// const [buy_abonement, set_buy_abonement] = useState(true);
	//
	// const change_buy = () => {
	// 	set_buy_abonement(!buy_abonement);
	// };

	// const [age, setAge] = useState(0);

	/**
	 * локальный стейт для установки/снятии флага о том что клиент принял
	 * правила посещения клуба для Rules
	 */
	const [rules, setRules] = useState(true);

	/**
	 * прослушивание клика для переключения флага для Rules
	 */
	const handleToggleRules = () => {
		setRules(!rules);
	};

	/**
	 * локальный стейт для установки/снятии флага о том что клиент принял
	 * правилазачисления и посещения клуба для Rules
	 */
	const [personal, setPersonal] = useState(true);

	/**
	 * прослушивание клика для переключения флага для Rules
	 */
	const handleTogglePersonal = () => {
		setPersonal(!personal);
	};

	// const history = useHistory();

	/**
	 * функция для вохврата в компонент с которого переключились
	 */
	// const goBack = () => {
	// 	history.goBack();
	// };

	/* child */

	// const refFile = useRef(null);

	// /**
	//  * локальный стейт для хранения/установки массива данных о родителях клиента
	//  */
	// const [parents, setParents] = useState([{}]);
	//
	// /**\
	//  * функция для обновления объекта
	//  * @param i индекс объекта в массиве
	//  * @param object новый массив для обновления предидущего
	//  */
	// const handleChangeItemParentsBlock = (i, object) => {
	// 	setParents(prevState => [
	// 		...prevState.slice(0, i),
	// 		object,
	// 		...prevState.slice(i + 1),
	// 	]);
	// };
	//
	// /**
	//  * функция добавления нового поустого объекта в массив родителей
	//  */
	// const addParentsData = () => {
	// 	setParents(prevState => [...prevState, {}]);
	// };
	//
	// /**
	//  * удаление объекта из массива
	//  * @param i индекс объекта в массиве который нужно удалить
	//  */
	// const removeParentsData = i => {
	// 	setParents(parents.filter((e, index) => index !== i));
	// };

	// /**
	//  * ловит изменение в переменной personal_data
	//  * берет из нее свойство date_of_birth
	//  * и рассчитывает возраст
	//  */
	// useEffect(() => {
	// 	if (client_data_local.state.date_of_birth) {
	// 		const { date_of_birth } = client_data_local.state;
	// 		if (/\d{2}\.\d{2}\.\d{4}/g.test(date_of_birth)) {
	// 			let dateNow = moment();
	// 			let dateBirth = replaceDateforBack(date_of_birth);
	// 			let mathAge = Math.floor(dateNow.diff(dateBirth, 'year'));
	//
	// 			setAge(mathAge);
	// 		}
	// 	}
	// }, [age, error, client_data_local.state]);

	/**
	 * Отправка данных на сервер
	 *
	 * @param cash метод покупки применяется если передан
	 */
	const submitForm = cash => {
		console.log(cash);
		const upload_client_data = {
			client_data: {
				...client_data_local.state,
				...(client_data_local.state.date_of_birth && {
					date_of_birth: replaceDateforBack(client_data_local.state.date_of_birth),
				}),
				// ...address.state,
				// ...(!isEmptyArray(parents) && { parents }),
			},
			// subscription_data: {
			// 	...(buy_abonement && {
			// 		training_group_id: subscription_data_local.state.training_group_id,
			// 		rate_id: abonements.find(_ => _.rate_type === 0).id,
			// 	}),
			// 	...(cash && { payment_method: cash }),
			// },
		};
		// console.log(upload_client_data);
		dispatch(add_client_on_CRM(upload_client_data));
	};

	return (
		<>
			{modal && (
				<Modal size={'lg'} toggle={setModal}>
					<ModalPhoto
						toggleModal={setModal}
						modal={modal}
						image={image}
						setImage={handleChangeImage}
					/>
				</Modal>
			)}
			<div style={{ marginTop: '32px', gridColumn: '1/11' }}>
				<Redirect title={'Регистрация клиента'} padding={true} />
			</div>
			<form className={classes.wrapper}>
				<div className={cn(classes.block_info_f, 'gcol-md-12 gcol-lg-11')}>
					<div
						onClick={() => setModal(true)}
						className={cn('gcol-md-3 gcol-lg-2', classes.block_f)}>
						<img src={image || camera} alt={'avatar'} />
						{!image && <span>Добавить фото</span>}
					</div>

					<div className={classes.block_personal}>
						<h3 className={classes.block_info__title}>личная информация</h3>
						<div className={classes.block_info__item}>
							<div className={classes.last_name}>
								<Input
									error={
										errorInput && errorInput.last_name && errorInput.last_name.join()
									}
									setValue={client_data_local.onChange}
									name={'last_name'}
									label={'фамилия'}
									required={true}
								/>
								{/*{errorInput && errorInput.last_name && (*/}
								{/*	<span className={classes.warning_text}>{errorInput.last_name.join()}</span>*/}
								{/*)}*/}
							</div>
							<div className={classes.first_name}>
								<Input
									error={
										errorInput && errorInput.first_name && errorInput.first_name.join()
									}
									setValue={client_data_local.onChange}
									name={'first_name'}
									label={'имя'}
									required={true}
								/>
								{/*{errorInput && errorInput.first_name && (*/}
								{/*	<span className={classes.warning_text}>{errorInput.first_name.join()}</span>*/}
								{/*)}*/}
							</div>
							<div className={classes.middle_name}>
								<Input
									setValue={client_data_local.onChange}
									name={'middle_name'}
									label={'отчество'}
								/>
							</div>
							<div className={classes.date_of_birth}>
								<DatePicker
									name={'date_of_birth'}
									setValue={client_data_local.onChange}
									label={'дата рождения'}
								/>
							</div>
							<div className={'gcol-md-6 gcol-lg-3'}>
								<Select
									label={'возростная группа'}
									name={'age_group_id'}
									setValue={client_data_local.onChange}
									data={agesGroup}
									field={'label'}
								/>
							</div>
						</div>
					</div>
				</div>
				{/*{age > 0 ? (*/}
				<>
					<ContextCommon.Provider
						value={{
							errorInput,
							client_data_local,
							// subscription_data_local,
							groups,
							couches,
							agesGroup,
							// buy_abonement,
							// set_buy_abonement,
							// abonements,
							// statuses,
							// countCard,
							// handleChangeCountCard,
							// handleIncrementCount,
							// handleDecrementCount,
							// change_buy,
						}}>
						{/*{age > 0 && age < 16 ? (*/}
						<>
							{/*<div className={classes.button}>*/}
							{/*	<Button*/}
							{/*		size={'default'}*/}
							{/*		text={'добавить справку'}*/}
							{/*		click={() => {*/}
							{/*			refFile.current.click();*/}
							{/*		}}*/}
							{/*	/>*/}
							{/*	<input ref={refFile} name={'health'} type="file" hidden={true} />*/}
							{/*</div>*/}
							<PhoneSection />
							{/*<TrialSectionSection />*/}
							{/*<ParentsBlock*/}
							{/*	parents={parents}*/}
							{/*	error={errorInput}*/}
							{/*	change={handleChangeItemParentsBlock}*/}
							{/*	addParents={addParentsData}*/}
							{/*	removeParents={removeParentsData}*/}
							{/*/>*/}
						</>
						{/*) : age >= 16 ? (*/}
						{/*<>*/}
						{/*	<PhoneSection />*/}
						{/*	<TrialSectionSection />*/}
						{/*</>*/}
						{/*) : null}*/}
					</ContextCommon.Provider>

					{/*<AddresSection error={errorInput} change={address.onChange} address={address} />*/}

					<OterSection personal_data={client_data_local} />

					<RulesSection
						rules={rules}
						setRules={handleToggleRules}
						personal={personal}
						setPersonal={handleTogglePersonal}
					/>
					{/*{!loading ? (*/}
					{/*	<EndBtnGroupPay*/}
					{/*		submit_cash={() => submitForm('cash')}*/}
					{/*		submit_cashless={() => submitForm('cashless')}*/}
					{/*		personal={personal}*/}
					{/*		rules={rules}*/}
					{/*	/>*/}
					{/*) : (*/}
					<EndBtnGroup submit={() => submitForm()} personal={personal} rules={rules} />
					{/*)}*/}
				</>
				{/*) : null}*/}
			</form>
		</>
	);
};
