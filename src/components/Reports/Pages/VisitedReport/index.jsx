import React from 'react';
import NavigateReports from 'components/Reports/NavigateReports';
import { Redirect } from 'components/common/Redirect';
import HeaderNav from 'components/common/HeaderNav';
import DatePickerRange from 'utils/FromAnt/DatePickerRange/DatePickerRange';
import Select from 'utils/FromAnt/Select/Select';
import cn from 'classnames';
import classes from './index.module.css';
import { fake_new_visits } from 'components/Reports/fake/fake';
import Chips from 'utils/Chips';
import ChartGeneralInfoLineVisited from "./ChartGeneralInfoLineVisited";

const VisitedReport = () => {
	return (
		<>
			<HeaderNav />
			<Redirect padding={true} title={'Отчеты'} to={'/reports'} />
			<div className={'gcol-md-12 gcol-lg-11'}>
				<NavigateReports />
			</div>
			<div className={cn('gcol-md-12 gcol-lg-11 container-g', classes.wrapper)}>
				<div className={cn('gcol-md-12 gcol-lg-11')}>
					<div className={cn('block -margin-16 py-32')}>
						<p className={cn(classes.header, 'gcol-md-12 gcol-lg-11')}>
							Оснавная информация
						</p>
						<div className={cn(classes.btn_group, 'gcol-md-6 gcol-lg-5')}>
							<button>some</button>
							<button>some</button>
							<button>some</button>
						</div>
						<div className={'gcol-md-6 gcol-lg-6'}>
							<DatePickerRange />
						</div>
						<div className={'gcol-md-6 gcol-lg-5'}>
							<Select label={'филиал'} />
						</div>
						<div className={'gcol-md-6 gcol-lg-6'}>
							<Select label={'тренер'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Select label={'возрастная группа'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Select label={'единоборство'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-3'}>
							<Select label={'источник рекламы'} />
						</div>
						<div
							className={cn(
								classes.carousel,
								'flex gcol-md-12 gcol-lg-11 gap-12 overflow-auto'
							)}>
							<Chips active={false}>Потенциальные уникальные</Chips>
							<Chips active={false}>Потенциальные с повторными</Chips>
							<Chips active={false}>Все кроме потенциальных</Chips>
							<Chips active={false}>Новые</Chips>
							<Chips active={false}>Бронзовые</Chips>
							<Chips active={false}>Золотые</Chips>
							<Chips active={false}>Рубиновые</Chips>
							<Chips active={false}>Сапфировые</Chips>
							<Chips active={false}>Бриллиантовые</Chips>
						</div>
						<div className={cn(classes.chart_container, 'gcol-md-12 gcol-lg-11')}>
							<dir className="gcol-md-12 gcol-lg-12">
								<ChartGeneralInfoLineVisited data={fake_new_visits}/>
							</dir>
						</div>
					</div>
				</div>
				{/*<div className={cn('gcol-md-12 gcol-lg-11')}>*/}
				{/*	<div className={cn('block -margin-16 py-32')}>*/}
				{/*		<p className={cn(classes.header, 'gcol-md-12 gcol-lg-11')}>some text</p>*/}
				{/*		<div className={'gcol-md-6 gcol-lg-5'}>*/}
				{/*			<DatePickerRange />*/}
				{/*		</div>*/}
				{/*		<div />*/}

				{/*		<div className={'gcol-md-6 gcol-lg-5'}>*/}
				{/*			<Select label={'филиал'} />*/}
				{/*		</div>*/}
				{/*		<div className={'gcol-md-6 gcol-lg-5'}>*/}
				{/*			<Select label={'тренер'} />*/}
				{/*		</div>*/}
				{/*		<div className={'gcol-md-4 gcol-lg-4'}>*/}
				{/*			<Select label={'возрастная группа'} />*/}
				{/*		</div>*/}
				{/*		<div className={'gcol-md-4 gcol-lg-3'}>*/}
				{/*			<Select label={'единоборство'} />*/}
				{/*		</div>*/}
				{/*		<div className={'gcol-md-4 gcol-lg-3'}>*/}
				{/*			<Select label={'источник рекламы'} />*/}
				{/*		</div>*/}
				{/*		<div className={cn(classes.chart_container, 'gcol-md-12 gcol-lg-11')}>*/}
				{/*			<dir className="gcol-md-12 gcol-lg-11">*/}
				{/*				<Chart*/}
				{/*					type={'line'}*/}
				{/*					data={getData}*/}
				{/*					height={232}*/}
				{/*					width={640}*/}
				{/*					options={options_line}*/}
				{/*				/>*/}
				{/*			</dir>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</div>*/}
			</div>
		</>
	);
};

export default VisitedReport;
