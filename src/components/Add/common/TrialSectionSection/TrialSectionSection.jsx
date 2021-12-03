import React, { useContext } from 'react';
import classes from '../../add.module.css';
import { ContextCommon } from '../../Add';
import Select from 'utils/FromAnt/Select/Select';

/**
 * Компонент визуализации ввода данных о пробной тренировке
 *
 * @returns {JSX.Element}
 * @constructor
 */
const TrialSectionSection = () => {
	const { personal_data, groups, agesGroup, errorInput } = useContext(ContextCommon);
	console.log('TrialSection', errorInput);
	console.log(errorInput && errorInput.age_group_id && errorInput.age_group_id.join());
	return (
		<div className={classes.block_info}>
			<h3 className={classes.block_info__title}>Пробное занятие</h3>
			<div className={classes.block_info__item}>
				<div className={classes.ages_group}>
					<Select
						name={'age_group_id'}
						label={'возрастная группа'}
						error={
							errorInput && errorInput.age_group_id && errorInput.age_group_id.join()
						}
						// setValue={handleChangeValueAgesGroupTestLesson}
						setValue={personal_data.onChange}
						data={agesGroup}
						field={'label'}
					/>
					{/*<SelectAgesGroup*/}
					{/*	name={'age_group_id'}*/}
					{/*	danger={errorInput && errorInput.age_group_id}*/}
					{/*	// setValue={handleChangeValueAgesGroupTestLesson}*/}
					{/*	setValue={personal_data.onChange}*/}
					{/*	data={agesGroup}*/}
					{/*/>*/}
					{/*{errorInput && errorInput.age_group_id && (*/}
					{/*	<span className={classes.warning_text}>{errorInput.age_group_id.join()}</span>*/}
					{/*)}*/}
				</div>
				<div className={classes.group}>
					<Select
						name={'training_group_id'}
						disabled={!personal_data.state.age_group_id}
						setValue={personal_data.onChange}
						label={'группа'}
						data={groups.filter(
							group => group.age_group.id === personal_data.state.age_group_id
						)}
						field={'name'}
					/>
					{/*<SelectGroup*/}
					{/*	name={'training_group_id'}*/}
					{/*	disabled={!personal_data.state.age_group_id}*/}
					{/*	setValue={personal_data.onChange}*/}
					{/*	label={'группа'}*/}
					{/*	data={groups.filter(group => group.age_group.id === personal_data.state.age_group_id)}*/}
					{/*/>*/}
				</div>
				{/* <div className={classes.filial}>
					<SelectGroup value={{ name: '' }} label={'филиал'} />
				</div>
				<div className={classes.picker}>
					<DataPicker
						label={'дата пробного занятия'}
						value={testData.dateTest}
						setValue={handleChangeValueDateTestLesson}
					/>
				</div> */}
			</div>
		</div>
	);
};

export default TrialSectionSection;
