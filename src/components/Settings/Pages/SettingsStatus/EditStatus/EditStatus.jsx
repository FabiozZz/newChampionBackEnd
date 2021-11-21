import React, { useEffect, useRef, useState } from 'react';
import classes from './status.module.css';
import { Redirect } from 'components/common/Redirect';
import HeaderNav from 'components/common/HeaderNav';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'utils/Buttons/Button';
import { useInputOnObject } from 'hooks';
import Input from 'utils/FromAnt/Input/Input';
import { edit_level, exit_edit_page_status } from 'store/Actions/settingsAbonementActions';
import { fetch_new_age_group } from 'store/Actions/settingsGroupActions';
import { useHistory } from 'react-router';

export const EditStatus = () => {
	const { current_status } = useSelector(state => state.settings_abonement);
	const level = useInputOnObject({
		name: '',
		color: '',
	});

	const inputRef = useRef(null);

	const dispatch = useDispatch();

	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		console.log(level.state);
		dispatch(edit_level(level.state));
		history.goBack();
	};

	useEffect(() => {
		if (current_status) {
			level.onChange({ ...current_status });
		}
		return () => {
			dispatch(exit_edit_page_status());
		};
	}, [current_status]);

	return (
		<>
			<HeaderNav />

			<Redirect padding={true} title={'Редактировать статус'} />

			<div className={classes.form_wrapper}>
				<form className={classes.form} onSubmit={handleSubmit}>
					<div className={classes.svg}>
						<svg
							width="38"
							height="26"
							viewBox="0 0 38 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M37.6341 6.13068V4.13636C37.6341 1.85191 35.8304 0 33.6055 0H4.82943C2.60446 0 0.800781 1.85191 0.800781 4.13636V6.13068C0.800781 6.33462 0.961855 6.5 1.16048 6.5H37.2744C37.473 6.5 37.6341 6.33462 37.6341 6.13068Z"
								fill={level.state.color ? level.state.color : '#E0E0E0'}
							/>
							<path
								d="M1.125 8.49432V21.125C1.125 23.4095 2.92868 25.2614 5.15365 25.2614H33.9297C36.1547 25.2614 37.9583 23.4095 37.9583 21.125V8.49432C37.9583 8.29038 37.7973 8.125 37.5986 8.125H1.4847C1.28607 8.125 1.125 8.29038 1.125 8.49432Z"
								fill={level.state.color ? level.state.color : '#E0E0E0'}
							/>
						</svg>
					</div>
					<div className={classes.svg_color}>
						<input
							name={'color'}
							onChange={level.onChange}
							ref={inputRef}
							type="color"
							hidden={true}
						/>
						<Button
							text={'Выберете цвет иконки'}
							size={'auto'}
							click={e => inputRef.current.click()}
						/>
					</div>
					<div className={classes.label_group}>
						<Input
							setValue={level.onChange}
							value={level.state.name}
							name={'name'}
							label={'название статуса'}
						/>
					</div>
					<div className={classes.send_btn}>
						<Button
							disabled={!level.state.name.length}
							text={'Сохранить возрастную группу'}
							type={'submit'}
							factor={'success'}
							size={'auto'}
						/>
					</div>
				</form>
			</div>
		</>
	);
};
