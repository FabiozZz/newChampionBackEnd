import React from 'react';
import classes from '../../../profile.module.css';
import remove_img from 'assets/images/remove.svg';
import edit from 'assets/images/edit.svg';
import moment from 'moment';
import { declOfLessonsNum } from 'helpers/common';

export const AbonementInfo = ({ user, showModal, remove }) => {
	const { subscription, level } = user;
	console.log(user);

	return (
		<div className={classes.abonemet_block}>
			<div className={classes.abonement_block_wrapper}>
				{level ? (
					<svg
						className={classes.abonement_block_status}
						width="38"
						height="26"
						viewBox="0 0 38 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M37.6341 6.13068V4.13636C37.6341 1.85191 35.8304 0 33.6055 0H4.82943C2.60446 0 0.800781 1.85191 0.800781 4.13636V6.13068C0.800781 6.33462 0.961855 6.5 1.16048 6.5H37.2744C37.473 6.5 37.6341 6.33462 37.6341 6.13068Z"
							fill={level.color}
						/>
						<path
							d="M1.125 8.49432V21.125C1.125 23.4095 2.92868 25.2614 5.15365 25.2614H33.9297C36.1547 25.2614 37.9583 23.4095 37.9583 21.125V8.49432C37.9583 8.29038 37.7973 8.125 37.5986 8.125H1.4847C1.28607 8.125 1.125 8.29038 1.125 8.49432Z"
							fill={level.color}
						/>
					</svg>
				) : (
					<svg
						className={classes.abonement_block_status}
						width="38"
						height="26"
						viewBox="0 0 18 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M3.4157 1.78847C5.28887 0.439781 7.50664 0 9 0C12.5259 0 14.8261 1.49153 16.2115 3.4157C17.5602 5.28887 18 7.50664 18 9V18C18 18.4045 17.7564 18.7691 17.3827 18.9239C17.009 19.0787 16.5789 18.9931 16.2929 18.7071L15 17.4142L13.4142 19C12.6332 19.7811 11.3668 19.781 10.5858 19L9 17.4142L7.41421 19C6.63316 19.7811 5.36683 19.781 4.58579 19L3 17.4142L1.70711 18.7071C1.42111 18.9931 0.990991 19.0787 0.617316 18.9239C0.243642 18.7691 0 18.4045 0 18V9C0 5.47408 1.49153 3.17386 3.4157 1.78847ZM4 8C4 6.89543 4.89543 6 6 6C7.10457 6 8 6.89543 8 8C8 9.10457 7.10457 10 6 10C4.89543 10 4 9.10457 4 8ZM10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8Z"
							fill="#43BF41"
						/>
					</svg>
				)}
				{/*<img src={card} alt="card"  />*/}

				<div className={classes.abonement_block_info}>
					<p className={classes.abonement_block_title}>
						{subscription.rate.name} {level && `со статусом ${level.name} клиент`}
					</p>
					<div className={classes.abonement_block_expire}>
						<p className={classes.abonement_block_date}>
							Срок действия{' '}
									<span className={classes.abonement_block_bold}>
							{subscription.valid_from !== null?
								( `${moment(subscription.valid_from).format('DD.MM.YYYY')} -
										${moment(subscription.valid_until).subtract(1, 'day').format('DD.MM.YYYY')}`
								):
								'не активен'
							}
									</span>
						</p>
						<p className={classes.abonement_block_date}>
							Доступно{' '}
							<span className={classes.abonement_block_bold}>
								{subscription.train_balance > 999 ? (
									<span dangerouslySetInnerHTML={{ __html: '&#8734;' }} />
								) : (
									subscription.train_balance
								)}
							</span>{' '}
							{declOfLessonsNum(subscription.train_balance)}
						</p>
					</div>
				</div>
			</div>
			<div className={classes.abonement_block_trainings}>
				<img
					onClick={showModal}
					src={edit}
					alt="редактировать"
					className={classes.abonement_btn}
				/>
				<img
					onClick={remove}
					src={remove_img}
					alt="удалить"
					className={classes.abonement_btn}
				/>
			</div>
		</div>
	);
};
