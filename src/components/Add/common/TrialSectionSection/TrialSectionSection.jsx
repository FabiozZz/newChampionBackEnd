import React, { useContext, useEffect, useState } from 'react';
import classes from '../../add.module.css';
import { ContextCommon } from '../../Add';
import Select from 'utils/FromAnt/Select/Select';
import DatePicker from 'utils/FromAnt/DatePicker/DatePicker';
import Input from 'utils/FromAnt/Input/Input';
import { SwitchBtn } from 'utils/SwitchBtn/SwitchBtn';
import success_edit from 'assets/images/successAbonement.svg';
import edit from 'assets/images/editAboniment.svg';
import { usePrice } from 'hooks';
import { Counter } from 'utils/Counter/Counter';
import { declOfDay, declOfLessonsNum, isEmpty } from 'helpers/common';

/**
 * Компонент визуализации ввода данных о пробной тренировке
 *
 * @returns {JSX.Element}
 * @constructor
 */
const TrialSectionSection = () => {
	const {
		client_data_local,
		groups,
		agesGroup,
		errorInput,
		buy_abonement,
		set_buy_abonement,
		subscription_data_local,
		abonements,
		countCard,
		handleDecrementCount,
		handleIncrementCount,
		handleChangeCountCard,
		statuses,
	} = useContext(ContextCommon);

	const { editPrice, setEditPrice, handleChangePriceAbonement, toggleEdit } = usePrice();

	const [select_abonement, set_select_abonement] = useState(null);

	useEffect(() => {
		if (
			subscription_data_local.state &&
			client_data_local.state.age_group_id &&
			subscription_data_local.state.level_id &&
			subscription_data_local.state.rate_id
		) {
			let { rate_id } = subscription_data_local.state;
			set_select_abonement(abonements.find(_ => _.id === rate_id));
		}
		if (!isEmpty(select_abonement)) {
			let { age_group_id } = client_data_local.state;
			let { level_id } = subscription_data_local.state;
			setEditPrice(prevState => ({
				...prevState,
				price: Number(
					select_abonement.prices.find(
						_ => _.level.id === level_id && _.age_group.id === age_group_id
					).price
				),
			}));
		}
		if (editPrice.price) {
		}
	}, [
		client_data_local.state,
		editPrice.price,
		select_abonement,
		setEditPrice,
		subscription_data_local.state,
	]);

	console.log('TrialSection', errorInput);
	return (
		<>
			<div className={classes.block_info}>
				<div className={classes.header}>
					<h3 className={classes.block_info__title}>Пробное занятие</h3>
					<SwitchBtn isChecked={buy_abonement} setIsChecked={set_buy_abonement} />
				</div>
				<div className={classes.block_info__item}>
					<div className={classes.card_num}>
						<Input disabled={!buy_abonement} label={'Номер карты'} />
					</div>
					<div className={classes.filial}>
						<Select disabled={!buy_abonement} label={'филиал'} />
					</div>
					<div className={classes.ages_group}>
						<Select
							disabled={!buy_abonement}
							name={'age_group_id'}
							label={'возрастная группа'}
							value={
								client_data_local.state.age_group_id &&
								client_data_local.state.age_group_id
							}
							error={
								errorInput && errorInput.age_group_id && errorInput.age_group_id.join()
							}
							// setValue={handleChangeValueAgesGroupTestLesson}
							setValue={client_data_local.onChange}
							data={agesGroup}
							field={'label'}
						/>
					</div>
					<div className={classes.group}>
						<Select
							name={'training_group_id'}
							disabled={!client_data_local.state.age_group_id || !buy_abonement}
							setValue={subscription_data_local.onChange}
							value={
								subscription_data_local.state.training_group_id &&
								subscription_data_local.state.training_group_id
							}
							label={'группа занятий'}
							data={groups.filter(
								group => group.age_group.id === client_data_local.state.age_group_id
							)}
							field={'name'}
						/>
					</div>
					<div className={classes.picker}>
						<DatePicker disabled={!buy_abonement} label={'дата пробного занятия'} />
					</div>
				</div>
			</div>
			{!buy_abonement && (
				<div className={classes.block_info}>
					<h3 className={classes.block_info__title}>Покупка абонемента</h3>
					<div className={classes.block_info__item}>
						<div className={'gcol-6'}>
							<Input label={'номер карточки'} />
						</div>
						<div className={'gcol-6'}>
							<DatePicker
								label={'Дата оплаты'}
								setValue={subscription_data_local.onChange}
								value={
									subscription_data_local.state.valid_from &&
									subscription_data_local.state.valid_from
								}
								name={'valid_from'}
							/>
						</div>
						<div className={'gcol-5'}>
							<Select
								data={abonements.filter(_ => _.rate_type !== 0)}
								field={['name']}
								name={'rate_id'}
								value={
									subscription_data_local.state.rate_id &&
									subscription_data_local.state.rate_id
								}
								setValue={subscription_data_local.onChange}
								label={'тип абонемента'}
							/>
						</div>
						<div className={'gcol-5'}>
							<Select
								data={statuses}
								field={['name']}
								name={'level_id'}
								value={
									subscription_data_local.state.level_id &&
									subscription_data_local.state.level_id
								}
								setValue={subscription_data_local.onChange}
								label={'статус'}
							/>
						</div>
						<div className={'gcol-2'}>
							<Counter
								value={countCard}
								decrement={handleDecrementCount}
								increment={handleIncrementCount}
								setValue={handleChangeCountCard}
								label={'количество'}
							/>
						</div>
						<div className={'gcol-4'}>
							<Select label={'филиал'} />
						</div>
						<div className={'gcol-4'}>
							<Select
								name={'age_group_id'}
								label={'возрастная группа'}
								value={
									client_data_local.state.age_group_id &&
									client_data_local.state.age_group_id
								}
								error={
									errorInput && errorInput.age_group_id && errorInput.age_group_id.join()
								}
								// setValue={handleChangeValueAgesGroupTestLesson}
								setValue={client_data_local.onChange}
								data={agesGroup}
								field={'label'}
							/>
						</div>
						<div className={'gcol-4'}>
							<Select
								name={'training_group_id'}
								disabled={!client_data_local.state.age_group_id}
								setValue={subscription_data_local.onChange}
								value={
									subscription_data_local.state.training_group_id &&
									subscription_data_local.state.training_group_id
								}
								label={'группа занятий'}
								data={groups.filter(
									group => group.age_group.id === client_data_local.state.age_group_id
								)}
								field={'name'}
							/>
						</div>

						{subscription_data_local.state.rate_id &&
						subscription_data_local.state.level_id &&
						client_data_local.state.age_group_id ? (
							<div className={classes.add_aboniment}>
								<div className={classes.sales_card}>
									{/*<div className={classes.procent}>*/}
									{/*    <OtherInput label={'скидка'}/>*/}
									{/*</div>*/}
									<div className={`${classes.sale_count}`}>
										<span className={`${classes.sale_count_text}`}>
											{select_abonement?.train_quantity > 9990 ? (
												<span dangerouslySetInnerHTML={{ __html: '&#8734;' }} />
											) : (
												select_abonement?.train_quantity
											)}{' '}
											{declOfLessonsNum(select_abonement?.train_quantity)}
										</span>
										<span className={`${classes.sale_count_text}`}>
											{select_abonement?.days_duration > 9990 ? (
												<span dangerouslySetInnerHTML={{ __html: '&#8734;' }} />
											) : (
												select_abonement?.days_duration
											)}{' '}
											{declOfDay(select_abonement?.days_duration)}
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

						{/*{editPrice.price ? (*/}
						{/*	<div className={classes.flex}>*/}
						{/*		/!*<img className={classes.sale_count_img} src={modal_devider} alt="devider" />*!/*/}

						{/*		{editPrice.edit ? (*/}
						{/*			<div onClick={toggleEdit} className={classes.edit_block}>*/}
						{/*				<input*/}
						{/*					autoFocus*/}
						{/*					className={classes.edit_price}*/}
						{/*					style={{ width: String(editPrice.price).length * 10 + 'px' }}*/}
						{/*					value={editPrice.price}*/}
						{/*					onChange={handleChangePriceAbonement}*/}
						{/*					type="number"*/}
						{/*				/>*/}
						{/*				<span className={classes.edit_block_text}>&#8381;</span>*/}
						{/*				<img className={classes.img_edit} src={success_edit} alt="edit" />*/}
						{/*			</div>*/}
						{/*		) : (*/}
						{/*			<div onClick={toggleEdit} className={classes.edit_block}>*/}
						{/*				<span className={`${classes.edit_block_text}`}>*/}
						{/*					{editPrice.price}*/}
						{/*					&#8381;*/}
						{/*				</span>*/}
						{/*				<img className={classes.img_edit} src={edit} alt="edit" />*/}
						{/*			</div>*/}
						{/*		)}*/}
						{/*	</div>*/}
						{/*) : null}*/}
					</div>
				</div>
			)}
		</>
	);
};

export default TrialSectionSection;
