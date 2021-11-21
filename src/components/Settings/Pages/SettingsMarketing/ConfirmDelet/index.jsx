import React from 'react';
import cn from 'classnames';
import classes from './confirm.module.css';
import { Button } from 'utils/Buttons/Button';

const Index = ({ show, remove }) => {
	return (
		<>
			<div className={classes.wrapper}>
				<p className={cn('gcol-12', classes.text)}>Вы действительно хотите удалить источник</p>
				<div className={'gcol-6'}>
					<Button
						click={() => {
							remove();
							show(false);
						}}
						factor={'success'}
						text={'Да'}
						size={'auto'}
					/>
				</div>
				<div className={'gcol-6'}>
					<Button click={() => show(false)} factor={'danger'} text={'Нет'} size={'auto'} />
				</div>
			</div>
		</>
	);
};

export default Index;
