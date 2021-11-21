import React, { createContext, useEffect, useRef, useState } from 'react';
import classes from './edit.module.css';
import camera from './camera (1) 1.png';
import { Redirect } from '../common/Redirect';
import moment from 'moment';
import { useHistory, useParams } from 'react-router';
import { Modal } from '../../utils/Modal/Modal';
import EditModalPhoto from './EditModalPhoto/EditModalPhoto';
import EditPhoneSection from './EditPhoneSection/EditPhoneSection';
import { EndBtnGroup } from '../common/EndBtnGroup/EndBtnGroup';
import { useDispatch, useSelector } from 'react-redux';
import {
	create_profile_parents,
	edit_profile,
	edit_profile_parents,
	open_edit_page,
	remove_profile_parents,
} from '../../store/Actions/profileActions';
import { EditAddresSection } from './common/EditAddresSection/EditAddresSection';
import { ParentsBlock } from '../common/ParentsBlock/ParentsBlock';
import TrialSectionSection from '../Add/common/TrialSectionSection/TrialSectionSection';
import { isEmpty, replaceDateforBack, replaceDateforFront } from '../../helpers/common';
import { OtherInput } from '../../utils/OtherInput/OtherInput';
import { Button } from '../../utils/Buttons/Button';
import { update } from 'ink-docstrap/fixtures/documents/probe';
import { useInputOnObject } from '../../hooks';
import DatePicker from '../../utils/FromAnt/DatePicker/DatePicker';
import Input from '../../utils/FromAnt/Input/Input';
import { OterSection } from 'components/Add/common/OterSection/OterSection';

export const ContextCommonEdit = createContext();

export const Edit = () => {
	const { user, error } = useSelector(state => state.profile);
	console.log(error);
	const { id } = useParams();
	const dispatch = useDispatch();

	const personal_data = useInputOnObject({});
	const address = useInputOnObject({});
	console.log(personal_data);
	/* common */
	const [image, setImage] = useState(user?.avatar || null);
	const handleChangeImage = data => {
		console.log(data);
		setImage(data);
	};

	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};

	/**
	 * локальный стейт для храниения/установки персональных данных клиента для PersonalData
	 */
	const [personalData, setPersonalData] = useState({});

	const [age, setAge] = useState(0);

	/**
	 * прослушивание события ввода данных для PersonalData
	 * @param e
	 */
	const handleChangePersonalData = e => {
		let name = e.target.name;
		setPersonalData(prevState => ({ ...prevState, [name]: e.target.value }));
	};

	/**
	 * прослушивания события выбора даты персональных данных в DataPicker для PersonalData
	 * @param some
	 */
	const handleDataPickerPersonal = some => {
		setPersonalData({ ...personalData, date_of_birth: some });
	};

	/**
	 * локальный стейт для храниения/установки адреса клиента для Address
	 */
	const [addressEdit, setAddress] = useState({});

	// /**
	//  * прослушивание события ввода данных для Address
	//  * @param e
	//  */
	const handleChangeAddressComponent = e => {
		let name = e.target.name;
		let value = e.target.value;
		setAddress(prevState => ({ ...prevState, [name]: value }));
		console.log(
			'%c({[name]:[e.target.value]}&&[e.target.value]): ',
			'color: MidnightBlue; background: Aquamarine;',
			{ [name]: [e.target.value] } && [e.target.value]
		);
	};

	// /**
	//  * локальный стейт для хранения/установки для Sale
	//  */
	// const [sale, setSale] = useState(user.sale);
	//
	// /**
	//  * прослушивание ввода данных для Sale
	//  * @param e
	//  */
	// const handleChangeValueSale = (e) => {
	//     setSale(e.target.value);
	// };

	// /**
	//  * локальный стейт для установки/снятии флага о том что клиент принял
	//  * правила посещения клуба для Rules
	//  */
	// const [rules, setRules] = useState(true);
	//
	// /**
	//  * прослушивание клика для переключения флага для Rules
	//  */
	// const handleToggleRules = () => {
	//     setRules(!rules);
	// };
	//
	// /**
	//  * локальный стейт для установки/снятии флага о том что клиент принял
	//  * правилазачисления и посещения клуба для Rules
	//  */
	// const [personal, setPersonal] = useState(true);
	//
	// /**
	//  * прослушивание клика для переключения флага для Rules
	//  */
	// const handleTogglePersonal = () => {
	//     setPersonal(!personal);
	// };

	const history = useHistory();

	/**
	 * функция для вохврата в компонент с которого переключились
	 */
	const goBack = () => {
		history.goBack();
	};

	// /**
	//  * локальный стейт для хранения/установки данных для TestLesson
	//  */
	// const [testData, setTestData] = useState({
	//     filial: { name: '' },
	//     group: { name: '' },
	//     dateTest: ''
	// });
	// const [filialList, setFilialList] = useState([]);
	//
	// /**
	//  * прослушивание события ввода данных для TestLesson
	//  * @param e
	//  */
	// const handleChangeValueGroupTestLesson = (obj) => {
	//     setTestData({ ...testData, group: { ...obj } });
	// };
	//
	// /**
	//  * прослушивание события ввода данных для TestLesson
	//  * @param e
	//  */
	// const handleChangeValueFilialTestLesson = (obj) => {
	//     setTestData({ ...testData, filial: { ...obj } });
	// };
	//
	// /**
	//  * прослушиване события ввода и выбора дыты для TestLesson
	//  * @param data
	//  */
	// const handleChangeValueDateTestLesson = (data) => {
	//     setTestData({ ...testData, dateTest: data });
	// };

	/**/

	/* Adult */

	const [phone_number, setPhone] = useState('');

	const handleChangePhone = phone => {
		setPhone(phone.target.value);
	};

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
		if (parents[i].id !== undefined) {
			dispatch(remove_profile_parents({ id: user.id, parents: [parents[i].id] }));
		}
		setParents(parents.filter((e, index) => index !== i));
	};

	useEffect(() => {
		if (/\d{2}\.\d{2}\.\d{4}/g.test(personal_data.state.date_of_birth)) {
			let dateNow = moment();
			let dateBirth = moment(
				personal_data.state.date_of_birth.replace(/(\d+).(\d+).(\d+)/g, '$3-$2-$1')
			);
			let mathAge = Math.floor(dateNow.diff(dateBirth, 'year'));

			setAge(mathAge);
		}
	}, [personal_data.state.date_of_birth]);
	const handleSubmit = e => {
		e.preventDefault();

		const updateParents = parents.filter(parent => parent.id);
		const createParents = parents.filter(parent => parent.id === undefined);
		const uploadUser = {
			id: user.id,
			// age_group_id: personal_data.state.age_group.id,
			...personal_data.state,
			date_of_birth: replaceDateforBack(personal_data.state.date_of_birth),
			...(address.state && { ...address.state }),
		};
		if (parents.length) {
			if (updateParents.length) {
				console.log('parents update', updateParents);
			}
			if (createParents.length) {
				let uploadData = [];
				for (let i = 0; i < createParents.length; i++) {
					if (!isEmpty(createParents[i])) {
						uploadData.push(createParents[i]);
					}
				}
				if (uploadData.length) {
					console.log('create parents', uploadData);
				}
			}
		}
		try {
			if (updateParents.length) {
				dispatch(edit_profile_parents([...updateParents]));
			}
			if (createParents.length && !isEmpty(createParents[0])) {
				dispatch(create_profile_parents({ id: user.id, parents: createParents }));
			}
			dispatch(edit_profile(uploadUser));
		} catch (e) {
			console.log(e);
		} finally {
			history.goBack();
		}
	};
	useEffect(() => {
		if (isEmpty(user)) {
			dispatch(open_edit_page(id));
		} else {
			const {
				id,
				subscription,
				parents,
				date_of_birth,
				phone_number,
				balance,
				first_name,
				middle_name,
				last_name,
				age_group,
				...rest
			} = user;
			personal_data.onChange({
				...(last_name && { last_name }),
				...(first_name && { first_name }),
				...(middle_name && { middle_name }),
				...(age_group && { age_group_id: age_group.id }),
				...(date_of_birth && { date_of_birth: replaceDateforFront(date_of_birth) }),
				...(phone_number && phone_number.length && { phone_number: rest.phone_number }),
			});

			if (parents.length) {
				setParents(parents);
			}
			address.onChange({
				...(user.street && user.street.length && { street: user.street }),
				...(user.house && user.house.length && { house: user.house }),
				...(user.building && user.building.length && { building: user.building }),
				...(user.apartments && user.apartments.length && { apartments: user.apartments }),
			});
		}
	}, [dispatch, id, user]);
	return (
		<>
			{modal && (
				<Modal size={'sm'} toggle={setModal}>
					<EditModalPhoto
						toggleModal={setModal}
						modal={modal}
						image={image}
						setImage={handleChangeImage}
					/>
				</Modal>
			)}
			<div className={classes.redirect}>
				<Redirect title={'Редактирование профиля'} padding={true} />
			</div>
			<form onSubmit={handleSubmit} className={classes.wrapper}>
				<div className={classes.block_info_f}>
					<div onClick={toggleModal} className={classes.block_f}>
						<img src={image || camera} alt={'avatar'} />
						{!image && <span>Добавить фото</span>}
					</div>

					<div className={classes.block_personal}>
						<h3 className={classes.block_info__title}>личная информация</h3>
						<div className={classes.block_info__item}>
							<div className={classes.last_name}>
								<Input
									setValue={personal_data.onChange}
									name={'last_name'}
									value={personal_data.state?.last_name}
									label={'фамилия'}
								/>
							</div>
							<div className={classes.first_name}>
								<Input
									setValue={personal_data.onChange}
									name={'first_name'}
									value={personal_data.state?.first_name}
									label={'имя'}
								/>
							</div>
							<div className={classes.middle_name}>
								<Input
									setValue={personal_data.onChange}
									name={'middle_name'}
									value={personal_data.state?.middle_name}
									label={'отчество'}
								/>
							</div>
							<div className={classes.date_of_birth}>
								<DatePicker
									name={'date_of_birth'}
									value={
										personal_data.state.date_of_birth &&
										moment(replaceDateforBack(personal_data.state.date_of_birth))
									}
									setValue={personal_data.onChange}
									label={'дата рождения'}
								/>
							</div>
						</div>
					</div>
				</div>
				{age > 0 ? (
					<>
						<ContextCommonEdit.Provider
							value={{
								phone_number: personal_data.state.phone_number,
								handleChangePhone: personal_data.onChange,
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
									{/*<TrialSectionSection/>*/}
									{personal_data.state.phone_number ? <EditPhoneSection /> : null}
									<ParentsBlock
										parents={parents}
										change={handleChangeItemParentsBlock}
										addParents={addParentsData}
										removeParents={removeParentsData}
									/>
								</>
							) : age >= 16 ? (
								<>
									<EditPhoneSection />
									{user.parents && !!user.parents.length && (
										<ParentsBlock
											parents={parents}
											change={handleChangeItemParentsBlock}
											addParents={addParentsData}
											removeParents={removeParentsData}
										/>
									)}
									{/*<TrialSectionSection/>*/}
								</>
							) : null}
						</ContextCommonEdit.Provider>

						{/*<div className={classes.block_info}>*/}
						{/*    <h3 className={classes.block_info__title}>Адресс</h3>*/}
						{/*    <div className={classes.block_info__item}>*/}
						{/*        <div className={classes.street}>*/}
						{/*            <OtherInput name={'street'} value={user.address} label={'улица'}/>*/}
						{/*        </div>*/}
						{/*    </div>*/}
						{/*</div>*/}
						<EditAddresSection change={address.onChange} />

						{/*<OterSection />*/}

						{/*<RulesSection rules={rules} setRules={handleToggleRules} personal={personal} setPersonal={handleTogglePersonal}/>*/}

						<EndBtnGroup goBack={goBack} />
					</>
				) : null}
			</form>
		</>
	);
};
