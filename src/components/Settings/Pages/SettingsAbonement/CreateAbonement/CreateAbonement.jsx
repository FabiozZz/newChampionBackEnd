import React, { useEffect, useLayoutEffect, useState } from 'react';
import classes from './create.module.css';
import { Redirect } from '../../../../common/Redirect';
import { Radio } from 'antd';
import HeaderNav from '../../../../common/HeaderNav';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { upload_abonement_data } from '../../../../../store/Actions/settingsAbonementActions';
import { useHistory } from 'react-router';
import { OtherInput } from '../../../../../utils/OtherInput/OtherInput';
import { Button } from '../../../../../utils/Buttons/Button';

export const CreateAbonement = () => {
	const settings = useSelector(state => state.settings_abonement);
	const dispatch = useDispatch();
	const history = useHistory();
	const [rate_type, setRateType] = useState(0);
	const changeIsPersonal = e => {
		setRateType(e.target.value);
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
			setData(prevState => ({ ...prevState, [name]: symbol.replace(/\D/gi, '') }));
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
			age_group.abonements[status] = { ...abonements[status], price: e.target.value };

			return newArr;
		});
	};

	useLayoutEffect(() => {
		let arr = [];
		let newJbj = {};
		for (let i = 0; i < settings.ages.length; i++) {
			newJbj = { ...newJbj, ...settings.ages[i], abonements: [] };
			for (let k = 0; k < settings.statuses.length; k++) {
				newJbj = {
					...newJbj,
					abonements: [...newJbj.abonements, { ...settings.statuses[k], price: '' }],
				};
			}
			arr.push(newJbj);
		}
		setPrices(arr);
	}, [settings]);

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
					price: prices[ages].abonements[abonement].price,
				};
				arrPrice.push(newObj);
			}
		}
		const uploadData = {
			...data,
			rate_type,
			prices: arrPrice,
		};
		try {
			dispatch(upload_abonement_data(uploadData));
			history.goBack();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<HeaderNav />

			<Redirect padding={true} title={'Добавить тариф'} />

			<div className={classes.wrapper}>
				<form className={classes.block} onSubmit={submitForm}>
					<div className={classes.create_section}>
						<div className={classes.fields}>
							<OtherInput
								label={'название тарифа'}
								name={'name'}
								setValue={handleChangeInput}
								value={data.name}
							/>
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

						<Radio.Group
							className={classes.radio_field}
							onChange={changeIsPersonal}
							value={rate_type}>
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
										цены для возрастной группы &laquo;{item.label}&raquo;
									</h3>

									{item.abonements.map((abonement, status) => {
										console.log(abonement);
										return (
											<div key={status} className={classes.prices_block}>
												<div className={classes.card}>
													<svg
														width="24"
														height="16"
														viewBox="0 0 24 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M23.4674 3.77273V2.54545C23.4674 1.13964 22.3575 0 20.9883 0H3.27995C1.91074 0 0.800781 1.13964 0.800781 2.54545V3.77273C0.800781 3.89823 0.899904 4 1.02214 4H23.2461C23.3683 4 23.4674 3.89823 23.4674 3.77273Z"
															fill={abonement.color}
														/>
														<path
															d="M1 5.22727V13C1 14.4058 2.10996 15.5455 3.47917 15.5455H21.1875C22.5567 15.5455 23.6667 14.4058 23.6667 13V5.22727C23.6667 5.10177 23.5675 5 23.4453 5H1.22135C1.09912 5 1 5.10177 1 5.22727Z"
															fill={abonement.color}
														/>
													</svg>
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

					{/*<div className={classes.wrapper_price}>*/}
					{/*    <h3 className={classes.header}>цены для возрастной группы &laquo;дети&raquo;</h3>*/}

					{/*    <div className={classes.prices_block}>*/}
					{/*        <div className={classes.card}>*/}
					{/*            <img width={22.87} height={15.55} alt=""/>*/}
					{/*            <p className={classes.text}>Новый</p>*/}
					{/*        </div>*/}
					{/*        <div className={classes.field}>*/}
					{/*            <OtherInput label={'цена в рублях'}/>*/}
					{/*        </div>*/}
					{/*    </div>*/}

					{/*    <div className={classes.prices_block}>*/}
					{/*        <div className={classes.card}>*/}
					{/*            <img width={22.87} height={15.55} alt=""/>*/}
					{/*            <p className={classes.text}>Бронзовый</p>*/}
					{/*        </div>*/}
					{/*        <div className={classes.field}>*/}
					{/*            <OtherInput label={'цена в рублях'}/>*/}
					{/*        </div>*/}
					{/*    </div>*/}

					{/*    <div className={classes.prices_block}>*/}
					{/*        <div className={classes.card}>*/}
					{/*            <img width={22.87} height={15.55} alt=""/>*/}
					{/*            <p className={classes.text}>Золотой</p>*/}
					{/*        </div>*/}
					{/*        <div className={classes.field}>*/}
					{/*            <OtherInput label={'цена в рублях'}/>*/}
					{/*        </div>*/}
					{/*    </div>*/}

					{/*    <div className={classes.prices_block}>*/}
					{/*        <div className={classes.card}>*/}
					{/*            <img width={22.87} height={15.55} alt=""/>*/}
					{/*            <p className={classes.text}>Рубиновый</p>*/}
					{/*        </div>*/}
					{/*        <div className={classes.field}>*/}
					{/*            <OtherInput label={'цена в рублях'}/>*/}
					{/*        </div>*/}
					{/*    </div>*/}

					{/*    <div className={classes.prices_block}>*/}
					{/*        <div className={classes.card}>*/}
					{/*            <img width={22.87} height={15.55} alt=""/>*/}
					{/*            <p className={classes.text}>Сапфировый</p>*/}
					{/*        </div>*/}
					{/*        <div className={classes.field}>*/}
					{/*            <OtherInput label={'цена в рублях'}/>*/}
					{/*        </div>*/}
					{/*    </div>*/}

					{/*    <div className={classes.prices_block}>*/}
					{/*        <div className={classes.card}>*/}
					{/*            <img width={22.87} height={15.55} alt=""/>*/}
					{/*            <p className={classes.text}>Бриллиантовый</p>*/}
					{/*        </div>*/}
					{/*        <div className={classes.field}>*/}
					{/*            <OtherInput label={'цена в рублях'}/>*/}
					{/*        </div>*/}
					{/*    </div>*/}

					{/*</div>*/}

					{/*<div className={classes.wrapper_price}>*/}
					{/*    <h3 className={classes.header}>цены для возрастной группы &laquo;подростки&raquo;</h3>*/}

					{/*    <div className={classes.prices_block}>*/}
					{/*        <div className={classes.card}>*/}
					{/*            <img width={22.87} height={15.55} alt=""/>*/}
					{/*            <p className={classes.text}>Новый</p>*/}
					{/*        </div>*/}
					{/*        <div className={classes.field}>*/}
					{/*            <OtherInput label={'цена в рублях'}/>*/}
					{/*        </div>*/}
					{/*    </div>*/}

					{/*    <div className={classes.prices_block}>*/}
					{/*        <div className={classes.card}>*/}
					{/*            <img width={22.87} height={15.55} alt=""/>*/}
					{/*            <p className={classes.text}>Бронзовый</p>*/}
					{/*        </div>*/}
					{/*        <div className={classes.field}>*/}
					{/*            <OtherInput label={'цена в рублях'}/>*/}
					{/*        </div>*/}
					{/*    </div>*/}

					{/*    <div className={classes.prices_block}>*/}
					{/*        <div className={classes.card}>*/}
					{/*            <img width={22.87} height={15.55} alt=""/>*/}
					{/*            <p className={classes.text}>Золотой</p>*/}
					{/*        </div>*/}
					{/*        <div className={classes.field}>*/}
					{/*            <OtherInput label={'цена в рублях'}/>*/}
					{/*        </div>*/}
					{/*    </div>*/}

					{/*    <div className={classes.prices_block}>*/}
					{/*        <div className={classes.card}>*/}
					{/*            <img width={22.87} height={15.55} alt=""/>*/}
					{/*            <p className={classes.text}>Рубиновый</p>*/}
					{/*        </div>*/}
					{/*        <div className={classes.field}>*/}
					{/*            <OtherInput label={'цена в рублях'}/>*/}
					{/*        </div>*/}
					{/*    </div>*/}

					{/*    <div className={classes.prices_block}>*/}
					{/*        <div className={classes.card}>*/}
					{/*            <img width={22.87} height={15.55} alt=""/>*/}
					{/*            <p className={classes.text}>Сапфировый</p>*/}
					{/*        </div>*/}
					{/*        <div className={classes.field}>*/}
					{/*            <OtherInput label={'цена в рублях'}/>*/}
					{/*        </div>*/}
					{/*    </div>*/}

					{/*    <div className={classes.prices_block}>*/}
					{/*        <div className={classes.card}>*/}
					{/*            <img width={22.87} height={15.55} alt=""/>*/}
					{/*            <p className={classes.text}>Бриллиантовый</p>*/}
					{/*        </div>*/}
					{/*        <div className={classes.field}>*/}
					{/*            <OtherInput label={'цена в рублях'}/>*/}
					{/*        </div>*/}
					{/*    </div>*/}

					{/*</div>*/}

					<div className={classes.submit}>
						<Button factor={'success'} type={'submit'} text={'Сохранить тариф'} size={'auto'} />
					</div>
				</form>
			</div>
		</>
	);
};
