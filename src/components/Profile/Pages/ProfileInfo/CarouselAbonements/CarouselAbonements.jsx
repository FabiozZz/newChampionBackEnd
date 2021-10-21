import React from 'react';
import classes from '../../../profile.module.css';
import { AbonementInfo } from '../AbonementInfo/AbonementInfo';

export const CarouselAbonements = () => {
	return (
		<div className={classes.abonement_carousel_wrapper}>
			<p className={classes.abonement_carousel_title}>Активные абонементы</p>
			<div className={classes.abonement_carousel}>
				<AbonementInfo />
				<AbonementInfo />
				<AbonementInfo />
			</div>
		</div>
	);
};
