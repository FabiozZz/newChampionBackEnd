// import React, { useState } from 'react';
// import HeaderNav from 'components/common/HeaderNav';
// import { Redirect } from 'components/common/Redirect';
// import cn from 'classnames';
// import classes from 'components/Profile/profile.module.css';
// import Input from 'utils/FromAnt/Input/Input';
// import Select from 'utils/FromAnt/Select/Select';
// import DatePicker from 'utils/FromAnt/DatePicker/DatePicker';
// import { Button } from 'utils/Buttons/Button';
// import { declOfLessonsNum, replaceDateforBack } from 'helpers/common';
// import success_edit from 'assets/images/successAbonement.svg';
// import edit from 'assets/images/editAboniment.svg';
// import { usePrice } from 'hooks';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
//
// const AbonementOnce = () => {
// 	const dispatch = useDispatch();
// 	const history = useHistory();
// 	const profile = useSelector(store => store.profile);
// 	const { ages_group, couch, group, status, typeAboniment, user } = profile;
// 	const { current_date } = useSelector(state => state.general_page);
//
// 	/**
// 	 * стэйт хранит количество покупаемых абонементов
// 	 */
// 	// eslint-disable-next-line no-unused-vars
// 	const [countCard, setCount] = useState(1);
// 	/**
// 	 * кастомный хук хранит:
// 	 * @param editPrice {price:number,edit:boolean} price - цена абонемента, edit - Переключение режима редактирования
// 	 * @param setEditPrice {function} - функция для изменения значений editPrice
// 	 * @param handleChangePriceAbonement {function} - функция для изменения значений editPrice {price}
// 	 * @param toggleEdit {function} - функция для изменения значений editPrice {edit}
// 	 */
// 	// eslint-disable-next-line no-unused-vars
// 	const { editPrice, setEditPrice, handleChangePriceAbonement, toggleEdit } =
// 		usePrice(500);
//
// 	// let uploadData = {
// 	// 	date: current_date,
// 	// 	abonement: {
// 	// 		id: user.id,
// 	// 		payment_method: 'cashless',
// 	// 		...(editPrice.price && { price: editPrice.price }),
// 	// 		...(data.state && data.state),
// 	// 		purchase_date: replaceDateforBack(current_date),
// 	// 	},
// 	// 	client: { lesson_id, client_id: user.id },
// 	// };
// 	return (
// 		<>
// 			<HeaderNav />
// 			<Redirect padding={true} title={'Разовая тренировка'} />
// 			<div className={'pb100 container-g gcol-md-12 gcol-lg-12'}>
// 				<form className={'block gcol-md-12 gcol-lg-11 -margin-16'}>
// 					<p className={cn('gcol-md-12 gcol-lg-11', classes.block_info__title_wr_text)}>
// 						Разовая тренировка
// 					</p>
// 					<div className={'gcol-md-12 gcol-lg-11'}>
// 						<Input label={'Номер карточки'} />
// 					</div>
// 					<div className={'gcol-md-6 gcol-lg-11'}>
// 						<Select data={[]} label={'филиал'} />
// 					</div>
// 					<div className={'gcol-md-6 gcol-lg-11'}>
// 						<Select data={[]} label={'возрастная группа'} />
// 					</div>
// 					<div className={'gcol-md-6 gcol-lg-11'}>
// 						<Select data={[]} label={'группа занятий'} />
// 					</div>
// 					<div className={'gcol-md-6 gcol-lg-11'}>
// 						<DatePicker label={'Дата пробного занятия'} />
// 					</div>
//
// 					<div className={classes.add_aboniment}>
// 						<div className={classes.sales_card}>
// 							{/*<div className={classes.procent}>*/}
// 							{/*    <OtherInput label={'скидка'}/>*/}
// 							{/*</div>*/}
// 							<div className={`${classes.sale_count}`}>
// 								<span className={`${classes.sale_count_text}`}>
// 									1 {declOfLessonsNum(1)}
// 								</span>
// 								<span></span>
// 								{/*<span className={`${classes.sale_count_text}`}>0 {declOfDay(0)}</span>*/}
// 								{/*<img className={classes.sale_count_img} src={devider} alt="devider"/>*/}
// 								<svg
// 									className={classes.sale_count_img}
// 									width="1428"
// 									height="2"
// 									viewBox="0 0 1428 2"
// 									fill="none"
// 									xmlns="http://www.w3.org/2000/svg">
// 									<line
// 										y1="1"
// 										x2="1428"
// 										y2="1"
// 										stroke="#BFC5D2"
// 										strokeLinejoin="round"
// 										strokeDasharray="5 5"
// 									/>
// 								</svg>
//
// 								{editPrice.edit ? (
// 									<div onClick={toggleEdit} className={classes.edit_block}>
// 										<input
// 											autoFocus
// 											className={classes.edit_price}
// 											style={{
// 												width: String(editPrice.price).length * 10 + 'px',
// 											}}
// 											value={editPrice.price * countCard}
// 											onChange={handleChangePriceAbonement}
// 											type="number"
// 										/>
// 										<span className={classes.edit_block_text}>&#8381;</span>
// 										<img className={classes.img_edit} src={success_edit} alt="edit" />
// 									</div>
// 								) : (
// 									<div onClick={toggleEdit} className={classes.edit_block}>
// 										<span className={`${classes.edit_block_text}`}>
// 											{editPrice.price * countCard}
// 											&#8381;
// 										</span>
// 										<img className={classes.img_edit} src={edit} alt="edit" />
// 									</div>
// 								)}
// 							</div>
// 							{/*<div className={`${classes.success}`}>*/}
// 							{/*    <Button click={handleSubmitAboniment} text={'применить'} size={"auto"} factor={"success"}/>*/}
// 							{/*</div>*/}
// 						</div>
// 					</div>
//
// 					<div className={'gcol-md-12'}>
// 						<Input type={'textarea'} label={'Комментарий'} />
// 					</div>
//
// 					<div className={'gcol-md-12 flex flex-center'}>
// 						<Button text={'сохранить'} factor={'success'} />
// 					</div>
// 				</form>
// 			</div>
// 		</>
// 	);
// };
//
// export default AbonementOnce;
