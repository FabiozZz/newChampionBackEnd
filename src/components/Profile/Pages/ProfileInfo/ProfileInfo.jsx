import React, { useEffect, useState } from 'react';
import classes from '../../profile.module.css';
import moment from 'moment';
import devider from '../../../../assets/images/deviderParent.svg';
import addCard from '../../../../assets/images/cardAdd.svg';
import { AbonimentInfo } from './AbonimentInfo';
import { AddAboniment } from './AddAboniment/AddAboniment';
import edit_profile from '../../../../assets/images/edit_profile.svg';
import { NavLink } from 'react-router-dom';
import { SuccessContext } from '../../SuccessContext';
import { SuccessAdd } from './SuccessAdd/SuccessAdd';
import { Modal } from 'utils/Modal/Modal';
import { ModalChangeAbonement } from './ModalChangeClient/ModalChangeAbonement';
import avatar from './avatar.png';
import { open_edit_page } from 'store/Actions/profileActions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { isEmpty } from 'helpers/common';
import { AbonementInfo } from './AbonementInfo/AbonementInfo';
import { CarouselAbonements } from './CarouselAbonements/CarouselAbonements';
import { ModalEditAbonement } from './ModalEditAbonement/ModalEditAbonement';

/**
 * вывод основной информации о польлзователе
 * @param {object} profile профиль порльзователя
 * @returns {JSX.Element}
 * @constructor
 */
export const ProfileInfo = ({ profile }) => {
	const { user } = profile;
	const [success, setSuccess] = useState(false);
	const handleChangeSuccess = () => {
		setSuccess(!success);
	};
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		if (isEmpty(user)) {
			dispatch(open_edit_page(id));
		}
	}, [dispatch, id, user]);

	const [age, setAge] = useState('');
	const [whatsApp, setWhatsApp] = useState(false);

	const handleToggleWhatsApp = () => {
		setWhatsApp(!whatsApp);
	};
	useEffect(() => {
		let dateNow = moment();
		let dateBirth = moment(user.date_of_birth);
		let mathAge = Math.floor(dateNow.diff(dateBirth, 'year'));
		mathAge +=
			mathAge % 100 < 21 ||
			mathAge % 10 < 1 ||
			(mathAge % 10 > 4 && mathAge % 10 <= 9) ||
			mathAge % 10 === 0
				? ' лет'
				: mathAge % 10 === 1
				? ' год'
				: ' года';
		setAge(mathAge);
	}, [user.date_of_birth]);

	const [modal, toggleModal] = useState({
		show: false,
		type: 'edit',
	});
	const showModal = () => {
		toggleModal(prevState => ({ ...prevState, show: !modal.show }));
	};
	const clearType = () => {
		toggleModal(prevState => ({ ...prevState, type: '' }));
	};
	const showAndChangeTypeModalEdit = () => {
		toggleModal(prevState => ({ ...prevState, show: !modal.show, type: 'edit' }));
	};
	const showAndChangeTypeModalChange = () => {
		toggleModal(prevState => ({ ...prevState, show: !modal.show, type: 'create' }));
	};
	return (
		<>
			{modal.show && (
				<Modal size={'lg'} toggle={showModal}>
					{modal.type === 'edit' ? (
						<ModalEditAbonement
							toggleModal={showModal}
							change={clearType}
							type={modal.type}
							profile={profile}
						/>
					) : (
						<ModalChangeAbonement toggleModal={showModal} profile={profile} type={modal.type} />
					)}
				</Modal>
			)}
			{/*<CarouselAbonements />*/}

			<div className={classes.abonement_carousel_wrapper}>
				<p className={classes.abonement_carousel_title}>Активные абонементы</p>
				<div className={classes.abonement_carousel}>
					<div onClick={showAndChangeTypeModalChange}>
						<svg
							width="72"
							height="82"
							viewBox="0 0 72 82"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_3343:23727)">
								<path
									d="M0 14C0 11.7909 1.79086 10 4 10H48C50.2091 10 52 11.7909 52 14V58C52 60.2091 50.2091 62 48 62H4C1.79086 62 0 60.2091 0 58V14Z"
									fill="black"
									fillOpacity="0.01"
								/>
								<path
									d="M0 14C0 11.7909 1.79086 10 4 10H48C50.2091 10 52 11.7909 52 14V58C52 60.2091 50.2091 62 48 62H4C1.79086 62 0 60.2091 0 58V14Z"
									fill="white"
								/>
								<path
									d="M14 25C14 24.4477 14.4477 24 15 24H37C37.5523 24 38 24.4477 38 25V47C38 47.5523 37.5523 48 37 48H15C14.4477 48 14 47.5523 14 47V25Z"
									fill="black"
									fillOpacity="0.01"
								/>
								<path
									d="M14 25C14 24.4477 14.4477 24 15 24H37C37.5523 24 38 24.4477 38 25V47C38 47.5523 37.5523 48 37 48H15C14.4477 48 14 47.5523 14 47V25Z"
									fill="white"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M27.1969 30C27.1969 29.3372 26.6596 28.8 25.9969 28.8C25.3341 28.8 24.7969 29.3372 24.7969 30V34.8H19.9969C19.3341 34.8 18.7969 35.3373 18.7969 36C18.7969 36.6628 19.3341 37.2 19.9969 37.2H24.7969V42C24.7969 42.6627 25.3341 43.2 25.9969 43.2C26.6596 43.2 27.1969 42.6627 27.1969 42V37.2H31.9969C32.6596 37.2 33.1969 36.6628 33.1969 36C33.1969 35.3373 32.6596 34.8 31.9969 34.8H27.1969V30Z"
									fill="#8798AD"
								/>
								<path
									d="M4 11H48V9H4V11ZM51 14V58H53V14H51ZM48 61H4V63H48V61ZM1 58V14H-1V58H1ZM4 61C2.34315 61 1 59.6569 1 58H-1C-1 60.7614 1.23858 63 4 63V61ZM51 58C51 59.6569 49.6569 61 48 61V63C50.7614 63 53 60.7614 53 58H51ZM48 11C49.6569 11 51 12.3431 51 14H53C53 11.2386 50.7614 9 48 9V11ZM4 9C1.23858 9 -1 11.2386 -1 14H1C1 12.3431 2.34315 11 4 11V9Z"
									fill="#8798AD"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_3343:23727"
									x="-20"
									y="0"
									width="92"
									height="92"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="10" />
									<feGaussianBlur stdDeviation="10" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0.180392 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.07 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_3343:23727"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_3343:23727"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					</div>
					{user.subscription && user.subscription.rate && (
						<>
							<AbonementInfo user={user} showModal={showAndChangeTypeModalEdit} />
							{/*<AbonementInfo user={user} />*/}
							{/*<AbonementInfo user={user} />*/}
						</>
					)}
				</div>
			</div>

			<div className={classes.block_info_f}>
				<div className={classes.block_foto}>
					<img src={avatar} alt="" />
				</div>

				<div className={classes.block_info}>
					<div className={classes.block_info__header}>
						<h3 className={classes.block_info__title}>
							{user.age_group.id === 1 || user.age_group.id === 2
								? 'Информация о ребёнке'
								: 'личная информация'}
						</h3>
						<NavLink
							className={classes.block_info__header_img_link}
							to={`/profile/${user.id}/edit`}>
							<img src={edit_profile} alt="edit_profile" />
						</NavLink>
					</div>

					<div className={`${classes.block_info__item}`}>
						<p className={classes.block_info__item_label}>Фамилия:</p>
						<span className={classes.block_info__item_label__text}>{user.last_name}</span>

						<p className={classes.block_info__item_label}>Имя:</p>
						<span className={classes.block_info__item_label__text}>{user.first_name}</span>
						{user.middle_name && (
							<>
								<p className={classes.block_info__item_label}>Отчество:</p>
								<span className={classes.block_info__item_label__text}>{user.middle_name}</span>
							</>
						)}

						<p className={classes.block_info__item_label}>Дата рождения:</p>
						<span className={classes.block_info__item_label__text}>
							{moment(user.date_of_birth).format('DD.MM.YYYY')} ({age})
						</span>

						{user.phone_number && (
							<>
								<p className={classes.block_info__item_label}>Номер телефона</p>
								<span className={classes.block_info__item_label__text}>{user.phone_number}</span>
							</>
						)}
					</div>
				</div>
			</div>
			{!!user.parents.length && (
				<div className={classes.block_info}>
					<div className={classes.block_info__header}>
						<h3 className={classes.block_info__title}>Информация о родителях</h3>
						<NavLink
							className={classes.block_info__header_img_link}
							to={`/profile/${user.id}/edit`}>
							<img src={edit_profile} alt="edit_profile" />
						</NavLink>
					</div>

					{user.parents.map((parent, index) => {
						return (
							<div
								key={index}
								className={`${classes.block_info__item} ${classes.block_info__item_parent}`}>
								{index > 0 && (
									<img className={classes.block_info__parent_devider} src={devider} alt="devider" />
								)}

								<p className={classes.block_info__item_label}>Фамилия:</p>
								<span className={classes.block_info__item_label__text}>{parent.last_name}</span>

								<p className={classes.block_info__item_label}>Имя:</p>
								<span className={classes.block_info__item_label__text}>{parent.first_name}</span>

								<p className={classes.block_info__item_label}>Отчество:</p>
								<span className={classes.block_info__item_label__text}>{parent.middle_name}</span>

								<p className={classes.block_info__item_label}>Кем приходится:</p>
								<span className={classes.block_info__item_label__text}>{parent.who}</span>

								<p className={classes.block_info__item_label}>Номер телефона:</p>
								<span className={classes.block_info__item_label__text}>{parent.phone_number}</span>
							</div>
						);
					})}
				</div>
			)}
			{(user.street || user.house || user.building || user.apartments) && (
				<div className={classes.block_info}>
					<div className={classes.block_info__header}>
						<h3 className={classes.block_info__title}>Адрес проживания</h3>
						<NavLink
							className={classes.block_info__header_img_link}
							to={`/profile/${user.id}/edit`}>
							<img src={edit_profile} alt="edit_profile" />
						</NavLink>
					</div>

					<div className={`${classes.block_info__item_small}`}>
						{/*<p className={classes.block_info__item_label}>Адрес</p>*/}
						{/*<span className={classes.block_info__item_label__text}>{user.address}</span>*/}
						{user.street && (
							<>
								<p className={classes.block_info__item_label}>Улица:</p>
								<span className={classes.block_info__item_label__text}>{user.street}</span>
							</>
						)}
						{user.house && (
							<>
								<p className={classes.block_info__item_label}>Дом:</p>
								<span className={classes.block_info__item_label__text}>{user.house}</span>
							</>
						)}
						{user.building && (
							<>
								<p className={classes.block_info__item_label}>Корпус:</p>
								<span className={classes.block_info__item_label__text}>{user.building}</span>
							</>
						)}
						{user.apartments && (
							<>
								<p className={classes.block_info__item_label}>Квартира:</p>
								<span className={classes.block_info__item_label__text}>{user.apartments}</span>
							</>
						)}
					</div>
				</div>
			)}
			{user.ad_source && (
				<div className={classes.block_info}>
					<div className={classes.block_info__header}>
						<h3 className={classes.block_info__title}>прочее</h3>
						<NavLink
							className={classes.block_info__header_img_link}
							to={`/profile/${user.id}/edit`}>
							<img src={edit_profile} alt="edit_profile" />
						</NavLink>
					</div>
					<div className={`${classes.block_info__item_small}`}>
						<p className={classes.block_info__item_label}>Источник:</p>
						<span className={classes.block_info__item_label__text}>{user.ad_source.name}</span>
					</div>
				</div>
			)}
			{/*<div className={classes.block_info}>*/}
			{/*    <div className={classes.block_info__header}>*/}
			{/*        <h3 className={classes.block_info__title}>Оценка качества</h3>*/}
			{/*    </div>*/}
			{/*    <div className={classes.block_info__ball}>*/}
			{/*        <div className={classes.ball_group}>*/}
			{/*            <div className={classes.ball_group_inputs}>*/}
			{/*                <label><input type="radio" name={'ball'} value="1"/>1</label><label><input type="radio" name={'ball'} value="2"/>2</label><label><input type="radio" name={'ball'} value="3"/>3</label><label><input type="radio" name={'ball'} value="4"/>4</label><label><input type="radio" name={'ball'} value="5"/>5</label><label><input type="radio" name={'ball'} value="6"/>6</label><label><input type="radio" name={'ball'} value="7"/>7</label><label><input type="radio" name={'ball'} value="8"/>8</label><label><input type="radio" name={'ball'} value="9"/>9</label><label><input type="radio" name={'ball'} value="10"/>10</label>*/}
			{/*            </div>*/}
			{/*            <div><Button text={'сохранить'} size={'small'} factor={'success'}/></div>*/}
			{/*        </div>*/}
			{/*        <div className={classes.ball_history}>*/}
			{/*            <div className={classes.block_info__header}>*/}
			{/*                <h4 className={classes.block_info__title}>История оценок</h4>*/}
			{/*            </div>*/}
			{/*            <div className={classes.ball_history_table}>*/}
			{/*                <span className={classes.date}>12.12.2020:</span>*/}
			{/*                <span className={classes.ball}>10</span>*/}
			{/*                <span className={classes.date}>12.12.2020:</span>*/}
			{/*                <span className={classes.ball}>10</span>*/}
			{/*                <span className={classes.date}>12.12.2020:</span>*/}
			{/*                <span className={classes.ball}>10</span>*/}
			{/*            </div>*/}
			{/*        </div>*/}
			{/*    </div>*/}
			{/*</div>*/}
		</>
	);
};
