import React from 'react';
import classes from '../../add.module.css';
import Select from 'utils/FromAnt/Select/Select';
import { useSelector } from 'react-redux';

const data = [
	{ id: 1, name: 'some 1' },
	{ id: 2, name: 'some 2' },
	{ id: 3, name: 'some 3' },
	{ id: 4, name: 'some 4' },
	{ id: 5, name: 'some 5' },
	{ id: 6, name: 'some 6' },
	{ id: 7, name: 'some 7' },
];

/**
 * компонент визуализации ввода данных источника откуда узнал о клубе
 *
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
