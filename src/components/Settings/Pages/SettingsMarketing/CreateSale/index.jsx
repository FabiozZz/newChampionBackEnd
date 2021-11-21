import React from 'react';
import HeaderNav from 'components/common/HeaderNav';
import { Redirect } from 'components/common/Redirect';
import classes from '../index.module.css';
import cn from 'classnames';
import Input from 'utils/FromAnt/Input/Input';
import { Button } from 'utils/Buttons/Button';
import { useInputOnObject } from 'hooks';
import { useDispatch } from 'react-redux';
import { create_source_for_CRM } from 'store/Actions/settingsSourcePageActions';
import { useHistory } from 'react-router';

const Index = () => {
	const source = useInputOnObject({});
	const history = useHistory();
	const dispatch = useDispatch();
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(create_source_for_CRM({ ...source.state }));
		history.goBack();
	};
	return (
		<>
			<HeaderNav />
			<Redirect padding={true} title={'Добавить источник рекламы'} />
			<div className={cn('gcol-12', classes.wrapper)}>
				<div className={cn('gcol-12')}>
					<Input name={'name'} setValue={source.onChange} label={'Название источника рекламы'} />
				</div>
				<div className={cn('gcol-4', classes.btn)}>
					<Button click={handleSubmit} factor={'success'} size={'auto'} text={'Создать источник'} />
				</div>
			</div>
		</>
	);
};

export default Index;
