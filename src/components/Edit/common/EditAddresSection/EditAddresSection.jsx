import React from 'react';
import classes from '../../edit.module.css';
import { OtherInput } from '../../../../utils/OtherInput/OtherInput';

/**
 * компонент визуализации ввода данных адреса
 *
 * @returns {JSX.Element}  jsx
 * @constructor
 */
export const EditAddresSection = ({ change }) => {
	return (
		<div className={classes.block_info}>
			<h3 className={classes.block_info__title}>Адресс</h3>
			<div className={classes.block_info__item}>
				<div className={classes.street}>
					<OtherInput name={'street'} setValue={change} label={'улица'} />
				</div>
				<div className={classes.house}>
					<OtherInput name={'house'} placeholder={''} setValue={change} label={'дом'} />
				</div>
				<div className={classes.corspus}>
					<OtherInput name={'building'} placeholder={''} setValue={change} label={'корпус'} />
				</div>
				<div className={classes.room}>
					<OtherInput name={'apartments'} placeholder={''} setValue={change} label={'картира'} />
				</div>
			</div>
		</div>
	);
};
