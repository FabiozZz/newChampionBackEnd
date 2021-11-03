import React from 'react';
import classes from '../../../profile.module.css';
import card from 'assets/images/statusFilter/BrilClient.svg';
import refresh from 'assets/images/refresh.svg';
import remove from 'assets/images/remove.svg';
import edit from 'assets/images/edit.svg';
import moment from 'moment';
import { declOfLessonsNum } from 'helpers/common';

export const AbonementInfo = ({ user }) => {
	const { subscription, level } = user;
	console.log(user);

	return (
		<div className={classes.abonemet_block}>
			<div className={classes.abonement_block_wrapper}>
				<img src={card} alt="card" className={classes.abonement_block_status} />
				<div className={classes.abonement_block_info}>
					<p className={classes.abonement_block_title}>
						{subscription.rate.name} {level && `со статусом ${level.name} клиент`}
					</p>
					<div className={classes.abonement_block_expire}>
						<p className={classes.abonement_block_date}>
							Срок действия{' '}
							<span className={classes.abonement_block_bold}>
								{moment(subscription.valid_from).format('DD.MM.YYYY')} &#8212;
								{moment(subscription.valid_until).format('DD.MM.YYYY')}
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
				<img src={edit} alt="редактировать" className={classes.abonement_btn} />
				<img src={remove} alt="удалить" className={classes.abonement_btn} />
			</div>
		</div>
	);
};
