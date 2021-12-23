import React, { useEffect } from 'react';
import HeaderNav from 'components/common/HeaderNav';
import { Redirect } from 'components/common/Redirect';
import classes from '../index.module.css';
import cn from 'classnames';
import Input from 'utils/FromAnt/Input/Input';
import { Button } from 'utils/Buttons/Button';
import { useInputOnObject } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { edit_source_for_CRM } from 'store/Actions/settingsSourcePageActions';
import { useHistory } from 'react-router';

const Index = () => {
	const current_source = useSelector(state => state.marketing.current_source);
	const source = useInputOnObject({});
	const history = useHistory();
	const dispatch = useDispatch();
	useEffect(() => {
		if (current_source && current_source.name) {
			source.onChange({ name: current_source.name });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current_source]);
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(edit_source_for_CRM({ id: current_source.id, ...source.state }));
		history.goBack();
	};
	return (
		<>
			<HeaderNav />
			<Redirect padding={true} title={'Добавить источник рекламы'} />
			<div className={cn('gcol-12', classes.wrapper)}>
				<div className={cn('gcol-12')}>
					<Input
						value={source.state.name && source.state.name}
						name={'name'}
						setValue={source.onChange}
						label={'Название источника рекламы'}
					/>
				</div>
				<div className={cn('gcol-4', classes.btn)}>
					<Button
						click={handleSubmit}
						factor={'success'}
						size={'auto'}
						text={'Создать источник'}
					/>
				</div>
			</div>
		</>
	);
};

export default Index;
