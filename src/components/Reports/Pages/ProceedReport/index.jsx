import React, { useEffect, useState } from 'react';
import NavigateReports from 'components/Reports/NavigateReports';
import { Redirect } from 'components/common/Redirect';
import HeaderNav from 'components/common/HeaderNav';
import classes from './index.module.css';
import cn from 'classnames';
import DatePickerRange from 'utils/FromAnt/DatePickerRange/DatePickerRange';
import Select from 'utils/FromAnt/Select/Select';
import { Chart, Line, Pie } from 'react-chartjs-2';
import Chips from 'utils/Chips';
import data from 'components/Reports/Visits/data.json';
import moment from 'moment';
import zoom from 'chartjs-plugin-zoom';
import 'chartjs-adapter-moment';
import { fake_data } from 'components/Reports/Visits/fake';

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

const ProceedReport = () => {
	let start_date, end_date;
	if (fake_data.length > 30) {
		start_date = moment(fake_data[fake_data.length - 30].date, 'YYYY-MM-DD');
		end_date = moment(fake_data[fake_data.length - 1].date, 'YYYY-MM-DD');
	} else {
		start_date = moment(fake_data[0].date, 'YYYY-MM-DD');
		end_date = moment(fake_data[fake_data.length - 1].date, 'YYYY-MM-DD');
	}

	let range_min = moment(fake_data[0].date, 'YYYY-MM-DD'); //start date

	let range_max = moment(fake_data[fake_data.length - 1].date, 'YYYY-MM-DD'); //end date

	const getData = canvas => {
		const ctx = canvas.getContext('2d');
		var grad = ctx.createLinearGradient(0, 0, 0, 800);

		grad.addColorStop(0.2, 'rgba(67, 191, 65, 0.35)');
		grad.addColorStop(0.49, 'rgba(67, 191, 65, 0.30)');
		grad.addColorStop(0.85, 'rgba(67, 191, 65, 0)');

		return {
			labels: fake_data.map(e => e.date),
			datasets: [
				{
					data: fake_data.map(e => Number(e.pay_info.total.replace(/\s/gi, ''))),
					fill: true,
					backgroundColor: grad,
					pointHitRadius: 15,
					borderColor: 'rgb(67,191,65)',
					pointBorderColor: 'transparent',
					pointBackgroundColor: 'transparent',
					tension: 0.4,
				},
			],
		};
	};
	const lineChart = (
		<Line
			type={'line'}
			data={getData}
			options={{
				tooltips: {},
				hover: {
					mode: 'x',
					responsive: true,
					intersect: false,
				},
				// scaleShowVerticalLines: true,
				transitions: {
					zoom: {
						animation: {
							duration: 1000,
							easing: 'easeOutCubic',
						},
					},
				},
				// tooltips: {
				// 	mode: 'x',
				// 	// responsive: true,
				// 	// yAlign: 'center',
				// },

				// title: { display: true, text: 'My Chart' },
				// maintainAspectRatio: true,
				// responsive: false,
				// interaction: {
				//   mode: "index"
				// },
				elements: {
					point: {
						radius: 0,
					},
					line: {
						borderWidth: 1.5,
					},
				},
				scales: {
					yAxes: {
						max:
							[...fake_data]
								.map(_ => Number(_.pay_info.total.replace(/\s/gi, '')))
								.reduce((acc, val) => (acc > val ? acc : val)) + 100,
						type: 'linear',
						ticks: {
							beginAtZero: true,
						},
						grid: {
							display: false,
						},
					},
					xAxes: {
						bounds: 'data',
						distribution: 'linear',
						// sampleSize: 1,
						type: 'time',
						min: start_date,
						max: end_date,
						time: {
							parser: 'YYYY-MM-DD',
							// unit:'day',
							minUnit: 'day',
							// unit: 'day',
							tooltipFormat: 'DD MMMM YYYY',
							displayFormats: {
								day: 'DD.MM',
								// quarter: "[Q]Q - YYYY",
								month: 'MMMM YYYY',
								year: 'YYYY',
							},
							stepSize: '1',
						},
						ticks: {
							source: 'labels',
							autoSkip: true,
							autoSkipPadding: 20,
							maxRotation: 0,
						},
						// ticks: {
						//   source: "labels",
						//   fontSize: 13
						//   // callback: (value, index, values) => {
						//   //   const date = moment(value);
						//   //   return [date.format("M/DD"), date.format("(ddd)")];
						//   // }
						// }
						callbacks: {
							afterFit: function (some) {
								console.log(some);
							},
						},
					},
				},

				plugins: {
					legend: {
						display: false,
					},
					tooltip: {
						x: 50,
						y: 50,
						responsive: false,
						mode: 'x',
						interaction: {
							intersect: false,
						},
						displayColors: false,
						// enabled: false,
						// custom: getOrCreateTooltip,
					},
					zoom: {
						// limits: {
						// 	x: { min: -200, max: 200, minRange: 50 },
						// },
						pan: {
							enabled: true,
							mode: 'x',
							// modifierKey: "alt",
							rangeMin: {
								x: range_min,
							},
							rangeMax: {
								x: range_max,
							},
							sensitivity: 0.25,
							// threshold: 22
						},
						limits: {
							x: { min: range_min, max: range_max },
						},
						zoom: {
							wheel: {
								enabled: true,
								speed: 0.4,
							},
							mode: 'x',
							threshold: 10,
							rangeMin: {
								x: range_min,
							},
							rangeMax: {
								x: range_max,
							},
						},
					},
				},
			}}
		/>
	);

	useEffect(() => {
		Chart.register([
			zoom,
			{
				id: 'some',
				afterDraw: function (chart, easing) {
					// console.log(chart);
					if (chart.tooltip._active && chart.tooltip._active.length) {
						const activePoint = chart.tooltip._active[0];
						// console.log(activePoint);
						const ctx = chart.ctx;
						const x = activePoint.element.x;
						const topY = chart.scales.yAxes.top;
						const bottomY = chart.scales.yAxes.bottom;
						ctx.save();
						ctx.beginPath();
						ctx.moveTo(x, topY);
						ctx.lineTo(x, bottomY);
						ctx.lineWidth = 1;
						ctx.strokeStyle = '#69707F';
						ctx.fillStyle = '#69707F';
						ctx.stroke();
						ctx.fill();
						ctx.restore();
					}
				},
			},
		]);
	}, []);

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
	const [active, setActive] = useState(false);
	const change_active = () => setActive(!active);
	return (
		<>
			<HeaderNav />
			<Redirect padding={true} title={'Отчеты'} to={'/reports'} />
			<div className={'gcol-md-12 gcol-lg-12'}>
				<NavigateReports />
			</div>
			<Chips active={active} click={change_active}>
				Some
			</Chips>
			<div className={cn('gcol-md-12 container-g', classes.wrapper)}>
				<div className={cn('gcol-md-12 gcol-lg-11')}>
					<div className={cn('block -margin-16')}>
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
								<div
									style={{ height: '100%' }}
									className={'gcol-md-6 flex flex-column flex-flex-start'}>
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
						</div>
					</div>
				</div>

				<div className={cn('gcol-md-12 gcol-lg-11 ', classes.wrapper)}>
					<div className={cn('block -margin-16')}>
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
							<dir className="gcol-md-12">{lineChart}</dir>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProceedReport;
