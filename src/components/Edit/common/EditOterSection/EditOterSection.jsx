import React from 'react';
import classes from '../../edit.module.css';
import Select from 'utils/FromAnt/Select/Select';
import { useSelector } from 'react-redux';

/**
 * компонент визуализации ввода данных источника откуда узнал о клубе
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const EditOterSection = ({ personal_data }) => {
	const data = useSelector(state => state.profile);
	return (
		<div className={classes.block_info}>
			<h3 className={classes.block_info__title}>Прочее</h3>
			<div className={classes.block_info__item}>
				<div className={classes.sale}>
					<Select
						value={personal_data.state.ad_source_id && personal_data.state.ad_source_id}
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
