import React, { createContext, useEffect, useRef, useState } from 'react';
import classes from './add.module.css';
import camera from './camera (1) 1.png';
import { Redirect } from '../common/Redirect';
import moment from 'moment';
import TrialSectionSection from './common/TrialSectionSection/TrialSectionSection';
import { AddresSection } from './common/AddresSection/AddresSection';
import { RulesSection } from './common/RulesSection/RulesSection';
import { useHistory } from 'react-router';
import { Modal } from '../../utils/Modal/Modal';
import ModalPhoto from './ModalPhoto/ModalPhoto';
import PhoneSection from './PhoneSection/PhoneSection';
import { EndBtnGroup } from '../common/EndBtnGroup/EndBtnGroup';
import { ParentsBlock } from '../common/ParentsBlock/ParentsBlock';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, replaceDateforBack } from '../../helpers/common';
import { Button } from '../../utils/Buttons/Button';
import { useInputOnObject } from '../../hooks';
import { add_client_on_CRM } from '../../store/Actions/addClientsActions';
import Input from '../../utils/FromAnt/Input/Input';
import DatePicker from '../../utils/FromAnt/DatePicker/DatePicker';

export const ContextCommon = createContext();

function isEmptyArray(arr) {
	if (arr.length) {
		for (let i = 0; i < arr.length; i++) {
			return isEmpty(arr[i]);
		}
	}
	return false;
}

export const Add = () => {
	const { groups, couches, agesGroup, loading, error } = useSelector(state => state.addClient);

	const dispatch = useDispatch();

	/* common */

	const [errorInput, setIsError] = useState(null);
	useEffect(() => {
		setIsError(error);
	}, [error]);

	const [image, setImage] = useState(null);
	const handleChangeImage = data => setImage(data);

	const [modal, setModal] = useState(false);

	const personal_data = useInputOnObject({});
	const address = useInputOnObject({});
	/**
	 * локальный стейт для храниения/установки персональных данных клиента для PersonalData
	 */
	// const [personalData, setPersonalData] = useState({});

	const [age, setAge] = useState(0);

	/**
	 * локальный стейт для хранения/установки для Sale
	 */
	const [sale, setSale] = useState('');

	/**
	 * прослушивание ввода данных для Sale
	 * @param e
	 */
	const handleChangeValueSale = e => {
		setSale(e.target.value);
	};

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

	const history = useHistory();

	/**
	 * функция для вохврата в компонент с которого переключились
	 */
	const goBack = () => {
		history.goBack();
	};

	/**
	 * локальный стейт для хранения/установки данных для TestLesson
	 */
	const [testData, setTestData] = useState({
		filial: { name: '' },
		group: {},
		dateTest: '',
		agesGroup: { label: '' },
	});

	/**/

	/* child */
	const refFile = useRef(null);

	/**
	 * локальный стейт для хранения/установки массива данных о родителях клиента
	 */
	const [parents, setParents] = useState([{}]);

	/**
	 * функция для обновления объекта
	 * @param i индекс объекта в массиве
	 * @param object новый массив для обновления предидущего
	 */
	const handleChangeItemParentsBlock = (i, object) => {
		setParents(prevState => [...prevState.slice(0, i), object, ...prevState.slice(i + 1)]);
	};

	/**
	 * функция добавления нового поустого объекта в массив родителей
	 */
	const addParentsData = () => {
		setParents(prevState => [...prevState, {}]);
	};

	/**
	 * удаление объекта из массива
	 * @param i индекс объекта в массиве который нужно удалить
	 */
	const removeParentsData = i => {
		setParents(parents.filter((e, index) => index !== i));
	};

	useEffect(() => {
		if (personal_data.state.date_of_birth) {
			const { date_of_birth } = personal_data.state;
			if (/\d{2}\.\d{2}\.\d{4}/g.test(date_of_birth)) {
				let dateNow = moment();
				let dateBirth = replaceDateforBack(date_of_birth);
				let mathAge = Math.floor(dateNow.diff(dateBirth, 'year'));

				setAge(mathAge);
			}
		}
	}, [age, error, personal_data.state]);

	const submitForm = e => {
		e.preventDefault();

		const upload_client_data = {
			...personal_data.state,
			...(personal_data.state.date_of_birth && {
				date_of_birth: replaceDateforBack(personal_data.state.date_of_birth),
			}),
			...address.state,
			...(!isEmptyArray(parents) && { parents }),
		};
		console.log(upload_client_data);
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
			<form onSubmit={submitForm} className={classes.wrapper}>
				<div className={classes.block_info_f}>
					<div onClick={() => setModal(true)} className={classes.block_f}>
						<img src={image || camera} alt={'avatar'} />
						{!image && <span>Добавить фото</span>}
					</div>

					<div className={classes.block_personal}>
						<h3 className={classes.block_info__title}>личная информация</h3>
						<div className={classes.block_info__item}>
							<div className={classes.last_name}>
								<Input
									error={errorInput && errorInput.last_name && errorInput.last_name.join()}
									setValue={personal_data.onChange}
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
									error={errorInput && errorInput.first_name && errorInput.first_name.join()}
									setValue={personal_data.onChange}
									name={'first_name'}
									label={'имя'}
									required={true}
								/>
								{/*{errorInput && errorInput.first_name && (*/}
								{/*	<span className={classes.warning_text}>{errorInput.first_name.join()}</span>*/}
								{/*)}*/}
							</div>
							<div className={classes.middle_name}>
								<Input setValue={personal_data.onChange} name={'middle_name'} label={'отчество'} />
							</div>
							<div className={classes.date_of_birth}>
								<DatePicker
									name={'date_of_birth'}
									setValue={personal_data.onChange}
									label={'дата рождения'}
								/>
							</div>
						</div>
					</div>
				</div>
				{age > 0 ? (
					<>
						<ContextCommon.Provider
							value={{
								errorInput,
								personal_data,
								groups,
								couches,
								agesGroup,
							}}>
							{age > 0 && age < 16 ? (
								<>
									<div className={classes.button}>
										<Button
											size={'default'}
											text={'добавить справку'}
											click={() => {
												refFile.current.click();
											}}
										/>
										<input ref={refFile} name={'health'} type="file" hidden={true} />
									</div>
									<PhoneSection />
									<TrialSectionSection />
									<ParentsBlock
										parents={parents}
										error={errorInput}
										change={handleChangeItemParentsBlock}
										addParents={addParentsData}
										removeParents={removeParentsData}
									/>
								</>
							) : age >= 16 ? (
								<>
									<PhoneSection />
									<TrialSectionSection />
								</>
							) : null}
						</ContextCommon.Provider>

						<AddresSection error={errorInput} change={address.onChange} address={address} />

						{/*<OterSection sale={sale} setSale={handleChangeValueSale}/>*/}

						<RulesSection
							rules={rules}
							setRules={handleToggleRules}
							personal={personal}
							setPersonal={handleTogglePersonal}
						/>
						{!loading && <EndBtnGroup goBack={goBack} personal={personal} rules={rules} />}
					</>
				) : null}
			</form>
		</>
	);
};
