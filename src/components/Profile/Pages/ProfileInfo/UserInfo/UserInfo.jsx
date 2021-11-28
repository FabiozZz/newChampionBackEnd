import React from 'react';
import classes from './info.module.css';
import separate from '../../../../../assets/images/lineModalDevider.svg';
import prolongation_aboniment from '../../../../../assets/images/prolongationAbon.svg';
import return_cash from '../../../../../assets/images/returnCash.svg';
import moment from 'moment';
import { declOfLessonsNum } from '../../../../../helpers/common';

export const UserInfo = ({ user, change, type }) => {
	console.log('edit modal >>>', user);
	return (
		<div className={classes.wrapper}>
			{/*<img className={classes.top_separate} src={separate} alt="separate" />*/}
			<svg
				className={classes.top_separate}
				width="100%"
				height="1"
				viewBox="0 0 100% 1"
				fill="none">
				<line y1="0.5" x2="100%" y2="0.5" stroke="#BFC5D2" strokeDasharray="12 12" />
			</svg>

			<div className={classes.block_card}>
				{/*<img className={classes.block_card__img} src="" alt={'card'} />*/}
				{user.level && user.level.color ? (
					<svg
						width="36"
						height="24"
						viewBox="0 0 36 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M37.6341 6.13068V4.13636C37.6341 1.85191 35.8304 0 33.6055 0H4.82943C2.60446 0 0.800781 1.85191 0.800781 4.13636V6.13068C0.800781 6.33462 0.961855 6.5 1.16048 6.5H37.2744C37.473 6.5 37.6341 6.33462 37.6341 6.13068Z"
							fill={user.level.color}
						/>
						<path
							d="M0.800781 9.23294V21.8636C0.800781 24.1481 2.60446 26 4.82943 26H33.6055C35.8304 26 37.6341 24.1481 37.6341 21.8636V9.23294C37.6341 9.029 37.473 8.86362 37.2744 8.86362H1.16048C0.961855 8.86362 0.800781 9.029 0.800781 9.23294Z"
							fill={user.level.color}
						/>
					</svg>
				) : (
					<svg
						width="36"
						height="32"
						viewBox="0 0 240 240"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M64.157 37.8847C82.8887 24.3978 105.066 20 120 20C155.259 20 178.261 34.9153 192.115 54.157C205.602 72.8887 210 95.0664 210 110V200C210 204.045 207.564 207.691 203.827 209.239C200.09 210.787 195.789 209.931 192.929 207.071L180 194.142L164.142 210C156.332 217.811 143.668 217.81 135.858 210L120 194.142L104.142 210C96.3316 217.811 83.6683 217.81 75.8579 210L60 194.142L47.0711 207.071C44.2111 209.931 39.9099 210.787 36.1732 209.239C32.4364 207.691 30 204.045 30 200V110C30 74.7408 44.9153 51.7386 64.157 37.8847ZM70 100C70 88.9543 78.9543 80 90 80C101.046 80 110 88.9543 110 100C110 111.046 101.046 120 90 120C78.9543 120 70 111.046 70 100ZM130 100C130 88.9543 138.954 80 150 80C161.046 80 170 88.9543 170 100C170 111.046 161.046 120 150 120C138.954 120 130 111.046 130 100Z"
							fill="#43BF41"
						/>
					</svg>
				)}
			</div>
			<div className={classes.block_info}>
				<div className={classes.block_info__client}>
					<p className={classes.block_info__text}>
						{user.subscription.rate.name} со статусом {user.level && user.level.name} клиент
					</p>
					<p className={classes.block_info__mute}>
						Срок действия:{' '}
						<b>
							{moment(user.subscription.valid_from).format('DD.MM.YYYY')} &mdash;{' '}
							{moment(user.subscription.valid_until).format('DD.MM.YYYY')}.
						</b>{' '}
						Доступно{' '}
						<b>
							{user.subscription.train_balance > 20 ? (
								<span dangerouslySetInnerHTML={{ __html: '&#8734;' }} />
							) : (
								user.subscription.train_balance
							)}
						</b>{' '}
						{declOfLessonsNum(user.subscription.train_balance)}
					</p>
				</div>
				{type === 'edit' ? (
					<div className={classes.block_info__images}>
						<img onClick={change} src={prolongation_aboniment} alt="продление абонемента" />
						<img src={return_cash} alt="возврат ДС" />
					</div>
				) : null}
			</div>
			{/*<img className={classes.bottom_separate} src={separate} alt="separate" />*/}
			<svg
				className={classes.bottom_separate}
				width="100%"
				height="1"
				viewBox="0 0 100% 1"
				fill="none">
				<line y1="0.5" x2="100%" y2="0.5" stroke="#BFC5D2" strokeDasharray="12 12" />
			</svg>
		</div>
	);
};
