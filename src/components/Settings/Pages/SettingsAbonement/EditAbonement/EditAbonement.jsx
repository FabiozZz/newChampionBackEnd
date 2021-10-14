import React, { useEffect, useLayoutEffect, useState } from 'react';
import classes from './edit.module.css';
import { Redirect } from '../../../../common/Redirect';
import { Radio } from 'antd';
import HeaderNav from '../../../../common/HeaderNav';
import { useDispatch, useSelector } from 'react-redux';
import {
	edit_abonement_data,
	start_load_data_settings_abonement,
	upload_abonement_data,
} from '../../../../../store/Actions/settingsAbonementActions';
import { useHistory } from 'react-router';
import { SwitchBtn } from '../../../../../utils/SwitchBtn/SwitchBtn';
import { OtherInput } from '../../../../../utils/OtherInput/OtherInput';
import { Button } from '../../../../../utils/Buttons/Button';

function useSome(download, result = []) {}

export const EditAbonement = () => {
	const settings = useSelector(state => state.settings_abonement);
	const { current_abonement, loading } = settings;
	const dispatch = useDispatch();
	const history = useHistory();
	const [is_personalUser, setIsPersonal] = useState(0);
	const [in_active, setInActive] = useState(true);
	const changeIsPersonal = e => {
		setIsPersonal(e.target.value);
	};
	const [data, setData] = useState({
		name: '',
		train_quantity: '',
		days_duration: '',
	});
	const handleChangeInput = e => {
		let name = e.target.name;
		let symbol = e.target.value;
		if (name !== 'name') {
			setData(prevState => ({
				...prevState,
				[name]: symbol.replace(/\D/gi, ''),
			}));
		} else {
			setData(prevState => ({ ...prevState, [name]: symbol }));
		}
	};

	const [prices, setPrices] = useState([]);

	const handleChangePrice = (e, age, status) => {
		setPrices(prevState => {
			let newArr = [...prevState];
			let age_group = newArr[age];
			let abonements = newArr[age].abonements;
			age_group.abonements[status] = {
				...abonements[status],
				price: e.target.value,
			};

			return newArr;
		});
	};

	useLayoutEffect(() => {
		if (current_abonement) {
			let arr = [];
			let newJbj = {};
			for (let i = 0; i < settings.ages.length; i++) {
				newJbj = { ...newJbj, ...settings.ages[i], abonements: [] };
				for (let k = 0; k < current_abonement.prices.length; k++) {
					if (current_abonement.prices[k].age_group.label === settings.ages[i].label) {
						newJbj = {
							...newJbj,
							abonements: [
								...newJbj.abonements,
								{
									...current_abonement.prices[k].level,
									price: Number(current_abonement.prices[k].price || 0),
								},
							],
						};
					}
				}
				arr.push(newJbj);
			}
			setPrices(arr);
			setIsPersonal(current_abonement.rate_type);
			setData({
				name: current_abonement.name,
				train_quantity: current_abonement.train_quantity,
				days_duration: current_abonement.days_duration,
			});
			setInActive(!current_abonement.in_archive);
		}
	}, [current_abonement, settings]);

	const submitForm = e => {
		e.preventDefault();
		const arrPrice = [];
		let newObj = {};
		for (let ages = 0; ages < prices.length; ages++) {
			newObj = { age_group_id: prices[ages].id };
			for (let abonement = 0; abonement < prices[ages].abonements.length; abonement++) {
				newObj = {
					...newObj,
					level_id: prices[ages].abonements[abonement].id,
					price: Number(prices[ages].abonements[abonement].price),
				};
				arrPrice.push(newObj);
			}
		}
		const uploadData = {
			id: current_abonement.id,
			...data,
			rate_type: is_personalUser,
			in_archive: !in_active,
			prices: arrPrice,
		};

		try {
			console.log(uploadData);
			dispatch(edit_abonement_data(uploadData));
			history.goBack();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<HeaderNav />

			<Redirect padding={true} title={'Редактировать тариф'} />

			<div className={classes.wrapper}>
				<form className={classes.block} onSubmit={submitForm}>
					<div className={classes.switch}>
						<SwitchBtn isChecked={in_active} setIsChecked={setInActive} size={'small'} />
						<label>Активный тариф</label>
					</div>

					<div className={classes.create_section}>
						<div className={classes.fields}>
							<OtherInput label={'название тарифа'} name={'name'} setValue={handleChangeInput} value={data.name} />
							{/*<OtherInput label={'филиалы'}/>*/}
							<OtherInput
								label={'продолжительность в днях'}
								name={'days_duration'}
								setValue={handleChangeInput}
								value={data.days_duration}
							/>
							<OtherInput
								label={'Количество тренировок'}
								name={'train_quantity'}
								setValue={handleChangeInput}
								value={data.train_quantity}
							/>
						</div>

						<Radio.Group className={classes.radio_field} onChange={changeIsPersonal} value={is_personalUser}>
							<Radio value={1}>Персональный тариф</Radio>
							<Radio value={2}>Тариф для групповых тренировок</Radio>
						</Radio.Group>
					</div>

					{prices
						.sort((a, b) => (a.id > b.id ? 1 : -1))
						.map((item, age) => {
							return (
								<div key={age} className={classes.wrapper_price}>
									<h3 className={classes.header}>
										цены для возрастной группы &laquo;
										{item.label}&raquo;
									</h3>

									{item.abonements.map((abonement, status) => {
										return (
											<div key={status} className={classes.prices_block}>
												<div className={classes.card}>
													<img width={22.87} height={15.55} alt="" />
													<p className={classes.text}>{abonement.name}</p>
												</div>
												<div className={classes.field}>
													<OtherInput
														label={'цена в рублях'}
														name={'price'}
														setValue={e => handleChangePrice(e, age, status)}
														value={abonement.price}
													/>
												</div>
											</div>
										);
									})}
								</div>
							);
						})}

					<div className={classes.submit}>
						<Button factor={'success'} type={'submit'} text={'Сохранить тариф'} size={'auto'} />
					</div>
				</form>
			</div>
		</>
	);
};
