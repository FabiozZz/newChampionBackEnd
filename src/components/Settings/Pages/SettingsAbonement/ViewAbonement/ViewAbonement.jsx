import React, { useEffect, useLayoutEffect, useState } from 'react';
import classes from './view.module.css';
import { Redirect } from '../../../../common/Redirect';
import { NavLink } from 'react-router-dom';
import edit_profile from '../../../../../assets/images/edit_profile.svg';
import HeaderNav from '../../../../common/HeaderNav';
import { useDispatch, useSelector } from 'react-redux';
import { clear_current_abonement } from '../../../../../store/Actions/settingsAbonementActions';

export const ViewAbonement = () => {
	const abonement = useSelector(state => state.settings_abonement);
	const { current_abonement, ages, loading } = abonement;
	const [renderList, setRender] = useState([]);
	console.log(ages);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (current_abonement?.prices.length) {
			console.log(current_abonement.prices);
			let newArr = [];
			for (let age_g = 0; age_g < ages.length; age_g++) {
				let tempObj = {};
				let tempArr = [];
				tempObj = { id: ages[age_g].id, name: ages[age_g].label, price: [] };
				for (let dataPrice = 0; dataPrice < current_abonement.prices.length; dataPrice++) {
					if (tempObj.id === current_abonement.prices[dataPrice].age_group.id) {
						tempArr.push({
							id: current_abonement.prices[dataPrice].level.id,
							name: current_abonement.prices[dataPrice].level.name,
							color: current_abonement.prices[dataPrice].level.color,
							price: current_abonement.prices[dataPrice].price || 0,
						});
					}
				}
				tempObj = {
					...tempObj,
					price: tempArr,
				};
				newArr.push(tempObj);
			}
			setRender(newArr);
		}
	}, [abonement, ages, current_abonement, dispatch]);

	useEffect(() => {
		return () => dispatch(clear_current_abonement());
	}, [dispatch]);

	return (
		<>
			<HeaderNav />

			<Redirect title={`${current_abonement?.name}`} padding={true} />

			<div className={classes.wrapper}>
				<div className={classes.block}>
					<div className={classes.info_abonement}>
						<div className={classes.line}>
							<p className={classes.label}>
								филиал: <span className={classes.res}>Все</span>
							</p>
							<p className={classes.label}>
								продолжительность в днях:{' '}
								<span className={classes.res}>
									{current_abonement?.days_duration > 9998 ? (
										<span dangerouslySetInnerHTML={{ __html: '&#8734;' }} />
									) : (
										current_abonement?.days_duration
									)}
								</span>
							</p>
						</div>
						<div className={classes.line}>
							<p className={classes.label}>
								количество тренировок:{' '}
								<span className={classes.res}>
									{current_abonement?.train_quantity > 9998 ? (
										<span dangerouslySetInnerHTML={{ __html: '&#8734;' }} />
									) : (
										current_abonement?.train_quantity
									)}
								</span>
							</p>
							<p className={classes.label}>
								{current_abonement?.rate_type === 1
									? 'Персональный тариф'
									: current_abonement?.rate_type === 2
									? 'Тариф для групповых тренировок'
									: 'Пробный тариф'}
							</p>
						</div>
						<NavLink
							className={classes.edit}
							to={`/settings/abonement/edit/${current_abonement?.id}`}>
							<img src={edit_profile} alt="edit_profile" />
						</NavLink>
					</div>

					{renderList.map(price => {
						return (
							<div key={price.id} className={classes.info_prices}>
								<h3 className={classes.header}>
									цены для возрастной группы &laquo;{price.name}&raquo;
								</h3>
								<div className={classes.table}>
									{price.price.map(item => {
										console.log(item);
										return (
											<React.Fragment key={item.id}>
												<div className={classes.card}>
													<svg
														width="24"
														height="16"
														viewBox="0 0 24 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M23.4674 3.77273V2.54545C23.4674 1.13964 22.3575 0 20.9883 0H3.27995C1.91074 0 0.800781 1.13964 0.800781 2.54545V3.77273C0.800781 3.89823 0.899904 4 1.02214 4H23.2461C23.3683 4 23.4674 3.89823 23.4674 3.77273Z"
															fill={item.color}
														/>
														<path
															d="M1 5.22727V13C1 14.4058 2.10996 15.5455 3.47917 15.5455H21.1875C22.5567 15.5455 23.6667 14.4058 23.6667 13V5.22727C23.6667 5.10177 23.5675 5 23.4453 5H1.22135C1.09912 5 1 5.10177 1 5.22727Z"
															fill={item.color}
														/>
													</svg>
													<p className={classes.text}>{item.name}</p>
												</div>
												<p className={classes.price}>{item.price}&#8381;</p>
											</React.Fragment>
										);
									})}

									{/*<div className={classes.card}>*/}
									{/*    <img width={22.87} height={15.55} alt=""/>*/}
									{/*    <p className={classes.text}>бронзовый</p>*/}
									{/*</div>*/}
									{/*<p className={classes.price}>3500&#8381;</p>*/}

									{/*<div className={classes.card}>*/}
									{/*    <img width={22.87} height={15.55} alt=""/>*/}
									{/*    <p className={classes.text}>золотой</p>*/}
									{/*</div>*/}
									{/*<p className={classes.price}>3200&#8381;</p>*/}

									{/*<div className={classes.card}>*/}
									{/*    <img width={22.87} height={15.55} alt=""/>*/}
									{/*    <p className={classes.text}>рубиновый</p>*/}
									{/*</div>*/}
									{/*<p className={classes.price}>3100&#8381;</p>*/}

									{/*<div className={classes.card}>*/}
									{/*    <img width={22.87} height={15.55} alt=""/>*/}
									{/*    <p className={classes.text}>сапфировый</p>*/}
									{/*</div>*/}
									{/*<p className={classes.price}>3000&#8381;</p>*/}

									{/*<div className={classes.card}>*/}
									{/*    <img width={22.87} height={15.55} alt=""/>*/}
									{/*    <p className={classes.text}>брилиантовый</p>*/}
									{/*</div>*/}
									{/*<p className={classes.price}>3900&#8381;</p>*/}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
