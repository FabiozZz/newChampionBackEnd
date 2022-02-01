import React from 'react';
import NavigateReports from 'components/Reports/NavigateReports';
import { Redirect } from 'components/common/Redirect';
import HeaderNav from 'components/common/HeaderNav';
import classes from './index.module.css';
import cn from 'classnames';
import DatePickerRange from 'utils/FromAnt/DatePickerRange/DatePickerRange';
import Select from 'utils/FromAnt/Select/Select';
import Chart, { Chart as CChart } from 'react-chartjs-2';
import {
	fake_abonements_active_abonements,
	fake_abonements_average_subscription_abonements,
	fake_abonements_average_subscription_price,
	fake_abonements_proceed,
	fake_abonements_retention_rate,
	fake_abonements_average_visit_in_group_abonements,
	fake_new_visits,
} from 'components/Reports/fake/fake';
import moment from 'moment';
import Chips from 'utils/Chips';
import ChartProceedAbonements from "./ChartProceedAbonements";
import {getRandomColor} from "../../../../helpers/common";
import ChartActiveAbonements from "./ChartActiveAbonements";
import ChartRetentionRate from "./ChartRetentionRate";
import ChartAverageSubscriptionsAbonements from "./ChartAverageSubscriptionsAbonements";
import ChartAverageSubscriptionPriceAbonements from "./ChartAverageSubscriptionPriceAbonements";
import ChartAverageVisitsInGroup from "./ChartAverageVisitsInGroup";




const AbonementReport = () => {
	const getOptionWithDates = (array, zoom_enabled = false) => {
		let start_date, end_date;
		if (array.dates.length >= 30) {
			start_date = moment(array.dates[array.dates.length - 30], 'YYYY-MM-DDTHH:mm');
			end_date = moment(array.dates[array.dates.length - 1], 'YYYY-MM-DDTHH:mm');
		} else {
			start_date = moment(array.dates[0], 'YYYY-MM-DDTHH:mm');
			end_date = moment(array.dates[array.dates.length - 1], 'YYYY-MM-DD');
		}

		let range_min = moment(array.dates[0], 'YYYY-MM-DDTHH:mm'); //start date

		let range_max = moment(array.dates[array.dates.length - 1], 'YYYY-MM-DDTHH:mm'); //end date
		const option = {
			// maintainAspectRatio: false,
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
					type: 'linear',
					ticks: {
						beginAtZero: true,
					},
					grid: {
						display: false,
					},
				},
				xAxes: {
					distribution: 'linear',
					bounds: 'data',
					sampleSize: 1,
					type: 'time',
					min: start_date,
					max: end_date,
					time: {
					parser: 'YYYY-MM-DDTHH:mm',
					minUnit: 'day',
					// unit: 'day',
					tooltipFormat: 'DD MMMM YYYY',
					displayFormats: {
						hour: 'DD hh:mm',
						day: 'DD MMMM',
						quarter: 'Q DD.MM.YY',
						month: 'MMMM YYYY',
						year: 'YYYY',
					},
					stepSize: 2,
					},
					ticks: {
						source: 'labels',
						autoSkip: false,
						autoSkipPadding: 20,
						maxRotation: 0,
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
					padding: 12,
					bodyFont: {
						family: "'Roboto',sans-serif",
						lineHeight: '16px',
					},
				},
							zoom: {
								pan: {
									enabled: true,
									mode: 'x',
									rangeMin: {
										x: range_min,
									},
									rangeMax: {
										x: range_max,
									},
								},
								limits: {
									x: { min: range_min, max: range_max },
								},

								zoom: {
									wheel: {
										enabled: false,
										speed: 0.05,
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
		};
		return option;
	};
	// const options_line = {};
	// const options_bar = {
	// 	// maintainAspectRatio: false,
	// 	tooltips: {},
	// 	hover: {
	// 		mode: 'x',
	// 		responsive: true,
	// 		intersect: false,
	// 	},
	// 	// scaleShowVerticalLines: true,
	// 	transitions: {
	// 		zoom: {
	// 			animation: {
	// 				duration: 1000,
	// 				easing: 'easeOutCubic',
	// 			},
	// 		},
	// 	},
	// 	elements: {
	// 		point: {
	// 			radius: 0,
	// 		},
	// 		line: {
	// 			borderWidth: 1.5,
	// 		},
	// 	},
	// 	scales: {
	// 		yAxes: {
	// 			type: 'linear',
	// 			ticks: {
	// 				beginAtZero: true,
	// 			},
	// 			grid: {
	// 				display: false,
	// 			},
	// 		},
	// 		xAxes: {
	// 			// stacked: true,
	// 			bounds: 'data',
	// 			distribution: 'linear',
	// 			// sampleSize: 1,
	// 			type: 'time',
	// 			min: start_date,
	// 			max: end_date,
	// 			time: {
	// 				parser: 'YYYY-MM-DDTHH:mm',
	// 				// unit:'day',
	// 				minUnit: 'hour',
	// 				// unit: 'day',
	// 				tooltipFormat: 'DD MMMM YYYY HH:mm',
	// 				displayFormats: {
	// 					hour: 'DD.MM hh:mm',
	// 					// day: '',
	// 					// quarter: 'DD.MM',
	// 					month: 'MMMM YYYY',
	// 					year: 'YYYY',
	// 				},
	// 				stepSize: 2,
	// 			},
	// 			ticks: {
	// 				source: 'labels',
	// 				autoSkip: true,
	// 				autoSkipPadding: 20,
	// 				maxRotation: 0,
	// 			},
	// 		},
	// 	},
	//
	// 	plugins: {
	// 		legend: {
	// 			display: false,
	// 		},
	// 		tooltip: {
	// 			x: 50,
	// 			y: 50,
	// 			responsive: false,
	// 			mode: 'x',
	// 			interaction: {
	// 				intersect: false,
	// 			},
	// 			displayColors: false,
	// 			// callbacks: {
	// 			// 	label: ctx => ctx.dataset.label + ': ' + ctx.formattedValue + ' ₽',
	// 			// 	// afterLabel: ctx => '₽',
	// 			// },
	// 			padding: 12,
	// 			bodyFont: {
	// 				family: "'Roboto',sans-serif",
	// 				lineHeight: '16px',
	// 			},
	// 		},
	// 		zoom: {
	// 			pan: {
	// 				enabled: true,
	// 				mode: 'x',
	// 				rangeMin: {
	// 					x: range_min,
	// 				},
	// 				rangeMax: {
	// 					x: range_max,
	// 				},
	// 				sensitivity: 0.25,
	// 			},
	// 			limits: {
	// 				x: { min: range_min, max: range_max },
	// 			},
	// 			zoom: {
	// 				wheel: {
	// 					enabled: true,
	// 					speed: 0.05,
	// 				},
	// 				mode: 'x',
	// 				threshold: 10,
	// 				rangeMin: {
	// 					x: range_min,
	// 				},
	// 				rangeMax: {
	// 					x: range_max,
	// 				},
	// 			},
	// 		},
	// 	},
	// };
	const getData = (canvas, data) => {
		const ctx = canvas.getContext('2d');
		let datasets = [];
		console.log(data.data);
		datasets = data.data.map(_ => {
			let color = getRandomColor();
			let grad = ctx.createLinearGradient(0, 0, 0, 800);
			grad.addColorStop(0.2, `${color}59`);
			grad.addColorStop(0.49, `${color}4D`);
			grad.addColorStop(0.85, `${color}00`);

			return {
				label: _.name,
				data: _.total,
				fill: true,
				backgroundColor: grad,
				pointHitRadius: 15,
				borderColor: color,
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'transparent',
				tension: 0.4,
			};
		});
		//
		// 	console.log();
		return {
			labels: data.dates,
			datasets,
		};
		// });

		// console.log(datasets);

		// return {
		// 	datasets,
		// };
	};

	const option = {
		// maintainAspectRatio: false,
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
				type: 'linear',
				ticks: {
					beginAtZero: true,
				},
				grid: {
					display: false,
				},
			},
			xAxes: {

				ticks: {
					source: 'labels',
					autoSkip: false,
					autoSkipPadding: 20,
					maxRotation: 0,
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
				padding: 12,
				bodyFont: {
					family: "'Roboto',sans-serif",
					lineHeight: '16px',
				},
			},
		}
	};
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
							Продажи абонементов
						</p>
						<div className={'gcol-md-6 gcol-lg-6'}>
							<DatePickerRange />
						</div>
						<div className={'gcol-md-6 gcol-lg-5'} />
						<div className={'gcol-md-4 gcol-lg-5'}>
							<Select label={'филиал'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-5'}>
							<Select label={'тренер'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-5'}>
							<Select label={'тип абонемента'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Select label={'возрастная группа'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-3'}>
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
							<Chips active={false}>Новые</Chips>
							<Chips active={false}>Бронзовые</Chips>
							<Chips active={false}>Золотые</Chips>
							<Chips active={false}>Рубиновые</Chips>
							<Chips active={false}>Сапфировые</Chips>
							<Chips active={false}>Бриллиантовые</Chips>
						</div>
						<div className={cn(classes.chart_container, 'gcol-md-12 gcol-lg-11')}>
							<dir className="gcol-md-12 gcol-lg-12">
								<ChartProceedAbonements data={fake_abonements_proceed}/>
							</dir>
						</div>
					</div>
				</div>
				<div className={cn('gcol-md-12 gcol-lg-11')}>
					<div className={cn('block -margin-16 py-32')}>
						<p className={cn(classes.header, 'gcol-md-12 gcol-lg-11')}>
							Действующие абонементы
						</p>
						<div className={cn(classes.btn_group_two, 'gcol-md-6 gcol-lg-5')}>
							<button>вчера</button>
							<button>сегодня</button>
						</div>
						<div className={'gcol-md-6 gcol-lg-6'}>
							<DatePickerRange />
						</div>

						<div className={'gcol-md-4 gcol-lg-5'}>
							<Select label={'филиал'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-5'}>
							<Select label={'тренер'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-5'}>
							<Select label={'тип абонемента'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Select label={'возрастная группа'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-3'}>
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
							<Chips active={false}>Новые</Chips>
							<Chips active={false}>Бронзовые</Chips>
							<Chips active={false}>Золотые</Chips>
							<Chips active={false}>Рубиновые</Chips>
							<Chips active={false}>Сапфировые</Chips>
							<Chips active={false}>Бриллиантовые</Chips>
						</div>

						<div className={cn(classes.chart_container, 'gcol-md-12 gcol-lg-11')}>
							<dir className="gcol-md-12 gcol-lg-12">
								<ChartActiveAbonements data={fake_abonements_active_abonements}/>
							</dir>
						</div>
					</div>
				</div>
				<div className={cn('gcol-md-12 gcol-lg-11')}>
					<div className={cn('block -margin-16 py-32')}>
						<p className={cn(classes.header, 'gcol-md-12 gcol-lg-11')}>
							Retention Rate (Коэффициент удержания)
						</p>
						<div className={cn(classes.btn_group_three, 'gcol-md-6 gcol-lg-5')}>
							<button>неделя</button>
							<button>вчера</button>
							<button>сегодня</button>
						</div>
						<div className={'gcol-md-6 gcol-lg-6'}>
							<DatePickerRange />
						</div>

						<div className={'gcol-md-4 gcol-lg-5'}>
							<Select label={'филиал'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-5'}>
							<Select label={'тренер'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-5'}>
							<Select label={'тип абонемента'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Select label={'возрастная группа'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-3'}>
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
							<Chips active={false}>Новые</Chips>
							<Chips active={false}>Бронзовые</Chips>
							<Chips active={false}>Золотые</Chips>
							<Chips active={false}>Рубиновые</Chips>
							<Chips active={false}>Сапфировые</Chips>
							<Chips active={false}>Бриллиантовые</Chips>
						</div>

						<div className={cn(classes.chart_container, 'gcol-md-12 gcol-lg-11')}>
							<dir className="gcol-md-12 gcol-lg-12">
								<ChartRetentionRate data={fake_abonements_retention_rate}/>
							</dir>
						</div>
					</div>
				</div>
				<div className={cn('gcol-md-12 gcol-lg-11')}>
					<div className={cn('block -margin-16 py-32')}>
						<p className={cn(classes.header, 'gcol-md-12 gcol-lg-11')}>
							Среднее количество абонементов на одного клиента
						</p>
						<div className={cn(classes.btn_group_three, 'gcol-md-6 gcol-lg-5')}>
							<button>неделя</button>
							<button>вчера</button>
							<button>сегодня</button>
						</div>
						<div className={'gcol-md-6 gcol-lg-6'}>
							<DatePickerRange />
						</div>

						<div className={'gcol-md-6 gcol-lg-5'}>
							<Select label={'филиал'} />
						</div>
						<div className={'gcol-md-6 gcol-lg-5'}>
							<Select label={'тренер'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Select label={'возрастная группа'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-3'}>
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
							<Chips active={false}>Новые</Chips>
							<Chips active={false}>Бронзовые</Chips>
							<Chips active={false}>Золотые</Chips>
							<Chips active={false}>Рубиновые</Chips>
							<Chips active={false}>Сапфировые</Chips>
							<Chips active={false}>Бриллиантовые</Chips>
						</div>

						<div className={cn(classes.chart_container, 'gcol-md-12 gcol-lg-11')}>
							<dir className="gcol-md-12 gcol-lg-12">
								<ChartAverageSubscriptionsAbonements data={fake_abonements_average_subscription_abonements}/>
							</dir>
						</div>
					</div>
				</div>
				<div className={cn('gcol-md-12 gcol-lg-11')}>
					<div className={cn('block -margin-16 py-32')}>
						<p className={cn(classes.header, 'gcol-md-12 gcol-lg-11')}>
							Средняя стоимость абонемента
						</p>
						<div className={cn(classes.btn_group_three, 'gcol-md-6 gcol-lg-5')}>
							<button>неделя</button>
							<button>вчера</button>
							<button>сегодня</button>
						</div>
						<div className={'gcol-md-6 gcol-lg-6'}>
							<DatePickerRange />
						</div>

						<div className={'gcol-md-6 gcol-lg-5'}>
							<Select label={'филиал'} />
						</div>
						<div className={'gcol-md-6 gcol-lg-5'}>
							<Select label={'тренер'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Select label={'возрастная группа'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-3'}>
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
							<Chips active={false}>Новые</Chips>
							<Chips active={false}>Бронзовые</Chips>
							<Chips active={false}>Золотые</Chips>
							<Chips active={false}>Рубиновые</Chips>
							<Chips active={false}>Сапфировые</Chips>
							<Chips active={false}>Бриллиантовые</Chips>
						</div>

						<div className={cn(classes.chart_container, 'gcol-md-12 gcol-lg-11')}>
							<dir className="gcol-md-12 gcol-lg-12">
								<ChartAverageSubscriptionPriceAbonements data={fake_abonements_average_subscription_price}/>
							</dir>
						</div>
					</div>
				</div>
				<div className={cn('gcol-md-12 gcol-lg-11')}>
					<div className={cn('block -margin-16 py-32')}>
						<p className={cn(classes.header, 'gcol-md-12 gcol-lg-11')}>
							Среднее количество посещений Клиента в одной группе
						</p>
						<div className={'gcol-md-6 gcol-lg-6'}>
							<DatePickerRange />
						</div>
						<div className={'gcol-md-6 gcol-lg-5'}/>
						<div className={'gcol-md-6 gcol-lg-5'}>
							<Select label={'филиал'} />
						</div>
						<div className={'gcol-md-6 gcol-lg-5'}>
							<Select label={'тренер'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Select label={'возрастная группа'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-3'}>
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
							<Chips active={false}>Новые</Chips>
							<Chips active={false}>Бронзовые</Chips>
							<Chips active={false}>Золотые</Chips>
							<Chips active={false}>Рубиновые</Chips>
							<Chips active={false}>Сапфировые</Chips>
							<Chips active={false}>Бриллиантовые</Chips>
						</div>

						<div className={cn(classes.chart_container, 'gcol-md-12 gcol-lg-11')}>
							<dir className="gcol-md-12 gcol-lg-12">
								<ChartAverageVisitsInGroup data={fake_abonements_average_visit_in_group_abonements}/>
							</dir>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AbonementReport;
