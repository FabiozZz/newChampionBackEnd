import React from 'react';
import classes from '../../add.module.css';
import Input from 'utils/FromAnt/Input/Input';

/**
 * компонент визуализации ввода данных адреса
 *
 * @param error {Array} массив ошибок
 * @param change {function} функция для изменения стейта
 * @returns {JSX.Element}  jsx
 * @constructor
 */
export const AddresSection = ({ error, change }) => {
	return (
		<div className={classes.block_info}>
			<h3 className={classes.block_info__title}>Адресс</h3>
			<div className={classes.block_info__item}>
				<div className={classes.street}>
					<Input
						error={error && error.street && error.street.join()}
						name={'street'}
						setValue={change}
						label={'улица'}
					/>
				</div>
				<div className={classes.house}>
					<Input
						error={error && error.house && error.house.join()}
						name={'house'}
						placeholder={''}
						setValue={change}
						label={'дом'}
					/>
				</div>
				<div className={classes.corspus}>
					<Input
						error={error && error.building && error.building.join()}
						name={'building'}
						placeholder={''}
						setValue={change}
						label={'корпус'}
					/>
				</div>
				<div className={classes.room}>
					<Input
						error={error && error.apartments && error.apartments.join()}
						name={'apartments'}
						placeholder={''}
						setValue={change}
						label={'картира'}
					/>
				</div>
			</div>
		</div>
	);
};
