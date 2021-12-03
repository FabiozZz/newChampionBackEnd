import React from 'react';
import classes from '../../add.module.css';
import Select from 'utils/FromAnt/Select/Select';
import { useSelector } from 'react-redux';

/**
 * компонент визуализации ввода данных источника откуда узнал о клубе
 *
 * @param personal_data {object} объект изначально пустой, поля появляются при помощи метода onChange в объекте
 * @returns {JSX.Element}
 * @constructor
 */
export const OterSection = ({ personal_data }) => {
	const data = useSelector(state => state.addClient);
	return (
		<div className={classes.block_info}>
			<h3 className={classes.block_info__title}>Прочее</h3>
			<div className={classes.block_info__item}>
				<div className={classes.sale}>
					<Select
						field={'name'}
						name={'ad_source_id'}
						setValue={personal_data.onChange}
						showSearch={true}
						data={data.source}
						label={'Источник рекламы'}
					/>
				</div>
			</div>
		</div>
	);
};
