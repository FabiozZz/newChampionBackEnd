import React, { useEffect, useState } from 'react';
import classes from '../../../Add/add.module.css';
import { MaskInputTel } from '../../../../utils/MaskInputTel/MaskInputTel';
import { isEmpty } from '../../../../helpers/common';
import Input from '../../../../utils/FromAnt/Input/Input';

/**
 * компонент визуализация ввода данных
 *
 * @param {object} data пустой объект, приходит от компонента Kid
 * @param {function} change функция замены пустого массива на измененный
 * @param {number} index порядковый номер объекта в массива parents
 * @param {object} passport если есть паспорт, в локальный стейт добавляется поля для пасспорта
 * @returns {JSX.Element}
 * @constructor
 */
export const AddParent = ({ error, data = {}, change, index }) => {
	/**
	 * локальный стейт, в случае если объект data приходит не пустой, заполняется данными из data
	 */
	const [userDate, setUserDate] = useState({});

	// useEffect(() => {
	//     if (!isEmpty(data)) {
	//         setUserDate({...data});
	//     }
	// }, [data]);

	const changeInputs = e => {
		setUserDate({ ...data, [e.target.name]: e.target.value });
	};

	/**
	 * эффект отрабатывает один раз при отрисовке компонента,
	 * проверяет, если объект data пустой, то в нем появляются свойства из локальной стейта компонента,
	 */

	useEffect(() => {
		if (!isEmpty(data)) {
			setUserDate({
				...(!!data.id && { id: data.id }),
				...(!!data.last_name && { last_name: data.last_name }),
				...(!!data.first_name && { first_name: data.first_name }),
				...(!!data.middle_name && { middle_name: data.middle_name }),
				...(!!data.phone_number && { phone_number: data.phone_number }),
				...(!!data.who && { who: data.who }),
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		data.first_name,
		data.last_name,
		data.middle_name,
		data.phone_number,
		data.who,
		data.id,
	]);

	/**
	 * эффект отрабатывает каждый раз при вводе пользователем
	 * запускает функцию change, которая заменяет пустой массив на новый, с новыми введенными данными
	 */
	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		change(index, userDate);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userDate]);

	return (
		<div className={classes.block_info__item}>
			<div className={classes.last_name_parent}>
				<Input
					error={error && error.last_name && error.last_name.join()}
					value={data.last_name}
					setValue={changeInputs}
					name={'last_name'}
					label={'фамилия'}
					required={false}
				/>
				{/*<OtherInput danger={error&&error.last_name} value={data.last_name} setValue={changeInputs} name={'last_name'} label={'фамилия'} required={false}/>*/}
				{/*{error&&error.last_name&&<span className={classes.warning_text}>{error.last_name.join()}</span>}*/}
			</div>
			<div className={classes.first_name_parent}>
				<Input
					error={error && error.first_name && error.first_name.join()}
					value={data.first_name}
					setValue={changeInputs}
					name={'first_name'}
					label={'имя'}
					required={false}
				/>
				{/*<OtherInput danger={error&&error.first_name} value={data.first_name} setValue={changeInputs} name={'first_name'} label={'имя'} required={false}/>*/}
				{/*{error&&error.first_name&&<span className={classes.warning_text}>{error.first_name.join()}</span>}*/}
			</div>
			<div className={classes.middle_name_parent}>
				<Input
					error={error && error.middle_name && error.middle_name.join()}
					value={data.middle_name}
					setValue={changeInputs}
					name={'middle_name'}
					label={'отчество'}
				/>
				{/*<OtherInput danger={error&&error.middle_name} value={data.middle_name} setValue={changeInputs} name={'middle_name'} label={'отчество'}/>*/}
				{/*{error&&error.middle_name&&<span className={classes.warning_text}>{error.middle_name.join()}</span>}*/}
			</div>
			<div className={classes.ho_is}>
				<Input
					value={data.who}
					setValue={changeInputs}
					name={'who'}
					label={'кем приходитесь ребёнку'}
					required={false}
				/>
			</div>
			<div className={classes.phone_number_parent}>
				<MaskInputTel
					danger={error && error.phone_number}
					name={'phone_number'}
					value={data.phone_number}
					setValue={changeInputs}
					required={false}
					label={'номер телефона'}
				/>
				{error && error.phone_number && (
					<span className={classes.warning_text}>{error.phone_number.join()}</span>
				)}
			</div>
		</div>
	);
};
