import React from 'react';
import HeaderNav from 'components/common/HeaderNav';
import { Redirect } from 'components/common/Redirect';
import Input from 'utils/FromAnt/Input/Input';
import Select from 'utils/FromAnt/Select/Select';
import DatePicker from 'utils/FromAnt/DatePicker/DatePicker';
import { Button } from 'utils/Buttons/Button';
import classes from '../profile.module.css';
import cn from 'classnames';

const AbonementTrial = () => {
	return (
		<>
			<HeaderNav />
			<Redirect padding={true} title={'Пробное занятие'} />
			<div className={'pb100 container-g gcol-md-12 gcol-lg-12'}>
				<form className={'block gcol-md-12 gcol-lg-11 -margin-16'}>
					<p className={cn('gcol-md-12 gcol-lg-11', classes.block_info__title_wr_text)}>
						Пробное занятие
					</p>
					<div className={'gcol-md-12 gcol-lg-11'}>
						<Input label={'Номер карточки'} />
					</div>
					<div className={'gcol-md-6 gcol-lg-11'}>
						<Select data={[]} label={'филиал'} />
					</div>
					<div className={'gcol-md-6 gcol-lg-11'}>
						<Select data={[]} label={'возрастная группа'} />
					</div>
					<div className={'gcol-md-6 gcol-lg-11'}>
						<Select data={[]} label={'группа занятий'} />
					</div>
					<div className={'gcol-md-6 gcol-lg-11'}>
						<DatePicker label={'Дата пробного занятия'} />
					</div>
					<div className={'gcol-md-12 flex flex-center'}>
						<Button text={'сохранить'} factor={'success'} />
					</div>
				</form>
			</div>
		</>
	);
};

export default AbonementTrial;
