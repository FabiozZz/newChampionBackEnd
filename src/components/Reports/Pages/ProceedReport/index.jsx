import React from 'react';
import NavigateReports from 'components/Reports/NavigateReports';
import { Redirect } from 'components/common/Redirect';
import HeaderNav from 'components/common/HeaderNav';
import classes from './index.module.css';
import cn from 'classnames';
import DatePickerRange from 'utils/FromAnt/DatePickerRange/DatePickerRange';
import Select from 'utils/FromAnt/Select/Select';
import { Pie } from 'react-chartjs-2';

var options = {
	plugins: {
		datalabels: {
			formatter: (value, ctx) => {
				let datasets = ctx.chart.data.datasets;

				if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
					let sum = datasets[0].data.reduce((a, b) => a + b, 0);
					let percentage = Math.round((value / sum) * 100) + '%';
					return percentage;
				}
			},
			color: 'red',
		},
		legend: {
			display: false,
		},
		tooltip: {
			displayColors: false,
			padding: 10,
			bodyFont: 'Montherrat',
			callbacks: {
				label: label => label.label + ': ' + label.formattedValue + '₽',
			},
		},
	},
	maintainAspectRatio: false,
};

function makeMoney(n) {
	return parseFloat(n)
		.toFixed(2)
		.replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
}

function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const Index = () => {
	const left_chart = [
		{ id: 1, name: 'Продано абонементов', value: '300 987', color: getRandomColor() },
		{ id: 1, name: 'Разовые тренировки', value: '6 980', color: getRandomColor() },
		{ id: 1, name: 'Персональные тренировки', value: '12 914', color: getRandomColor() },
	];
	const right_chart = [
		{ id: 1, name: 'Наличными', value: '125 569', color: getRandomColor() },
		{ id: 1, name: 'Безналичными', value: '987 463', color: getRandomColor() },
	];
	const initial_data = array => {
		const labels = array.map(_ => _.name);
		const data = array.map(_ => Number(_.value.replace(/\s/gi, '')));
		const colors = array.map(_ => _.color);
		return {
			labels,
			datasets: [
				{
					data,
					backgroundColor: colors,
					borderColor: colors,
					borderWidth: 1,
				},
			],
		};
	};
	left_chart.forEach(_ => console.log());
	return (
		<>
			<HeaderNav />
			<Redirect padding={true} title={'Отчеты'} to={'/reports'} />
			<div className={'gcol-md-12 gcol-lg-12'}>
				<NavigateReports />
			</div>
			<div className={cn('gcol-md-12 gcol-lg-11', classes.wrapper)}>
				<div className={cn('block ')}>
					<p className={cn(classes.header, 'gcol-md-12 gcol-lg-11')}>some text</p>
					<div className={cn(classes.btn_group, 'gcol-md-6')}>
						<button>some</button>
						<button>some</button>
						<button>some</button>
					</div>
					<div className={'gcol-md-6'}>
						<DatePickerRange />
					</div>
					<div className={'gcol-md-6'}>
						<Select label={'возрастная группа'} />
					</div>
					<div className={'gcol-md-6'}>
						<Select label={'единоборства'} />
					</div>
					<div className={'gcol-md-4'}>
						<Select label={'филиал'} />
					</div>
					<div className={'gcol-md-4'}>
						<Select label={'сотрудник'} />
					</div>
					<div className={'gcol-md-4'}>
						<Select label={'источник рекламы'} />
					</div>
					<div className={cn(classes.chart_container, 'gcol-md-12')}>
						<dir className="gcol-md-6">
							<Pie
								data={() => initial_data(left_chart)}
								height={191}
								width={191}
								options={options}
							/>
						</dir>
						<dir className="gcol-md-6">
							<Pie
								data={() => initial_data(right_chart)}
								height={191}
								width={191}
								options={options}
							/>
						</dir>
						<div className="gcol-md-12 container-g">
							<p className={'gcol-md-12 gcol-lg-11'}>
								Общая выручка:{' '}
								{makeMoney(
									left_chart.reduce(
										(acc, _) => (acc += +_.value.replace(/\s/gi, '')),
										0
									) +
										right_chart.reduce(
											(acc, _) => (acc += +_.value.replace(/\s/gi, '')),
											0
										)
								)}{' '}
								₽
							</p>
							<div className={'gcol-md-6 flex flex-column '}>
								{left_chart.map(_ => (
									<div className={'flex align-center gap-10'}>
										<div
											style={{
												width: 8,
												height: 8,
												borderRadius: '50%',
												backgroundColor: _.color,
											}}
										/>
										<p> {_.name}: </p>
										<p>{_.value}</p>
									</div>
								))}
							</div>
							<div className={'gcol-md-6 flex flex-column flex -flex-start'}>
								{right_chart.map(_ => (
									<div className={'flex align-center gap-10'}>
										<div
											style={{
												width: 8,
												height: 8,
												borderRadius: '50%',
												backgroundColor: _.color,
											}}
										/>
										<p> {_.name}: </p>
										<p>{_.value}</p>
									</div>
								))}
							</div>
						</div>
						<p className="gcol-md-6">
							Общая выручка:{' '}
							{makeMoney(
								right_chart.reduce((acc, _) => (acc += +_.value.replace(/\s/gi, '')), 0)
							)}{' '}
							₽
						</p>
						<div className={cn(classes.chart_container, 'gcol-md-6')}></div>
						<div className="gcol-md-6"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
