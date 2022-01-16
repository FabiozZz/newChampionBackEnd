import React, { useEffect, useState } from 'react';
import NavigateReports from 'components/Reports/NavigateReports';
import { Redirect } from 'components/common/Redirect';
import HeaderNav from 'components/common/HeaderNav';
import classes from './index.module.css';
import cn from 'classnames';
import DatePickerRange from 'utils/FromAnt/DatePickerRange/DatePickerRange';
import Select from 'utils/FromAnt/Select/Select';
import Chart, { Chart as CChart } from 'react-chartjs-2';
import data from 'components/Reports/fake/data.json';
import moment from 'moment';
import zoom from 'chartjs-plugin-zoom';
import 'chartjs-adapter-moment';
import { fake_new_data, generateColorOnArray } from 'components/Reports/fake/fake';
import Chips from 'utils/Chips';

CChart.register([
	zoom,
	{
		id: 'some',
		afterDraw: function (chart, easing) {
			// console.log(chart);
			if (
				chart._active &&
				chart._active.length &&
				chart.config._config.type !== 'pie' &&
				chart.config._config.type !== 'bar'
			) {
				const activePoint = chart.tooltip._active[0];
				// console.log(activePoint);
				const ctx = chart.ctx;
				const x = activePoint.element.x;
				// console.log(chart.scales.yAxes.top);
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

const options_pie = {
	plugins: {
		datalabels: {
			formatter: (value, ctx) => {
				let datasets = ctx.chart.data.datasets;

				if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
					let sum = datasets[0].data.reduce((a, b) => a + b, 0);
					return Math.round((value / sum) * 100) + '%';
				}
			},
			color: 'red',
		},
		legend: {
			display: false,
		},
		tooltip: {
			displayColors: false,
			padding: 12,

			bodyFont: {
				font: {
					size: 12,
					family: "'Roboto',sans-serif",
				},
			},
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
const types_pay = [
	{ id: 1, type: 'cash', name: 'Наличными' },
	{ id: 2, type: 'cashless', name: 'Безналичными' },
];
const method_pay = [
	{ id: 1, type: 'once', name: 'Наличными' },
	{ id: 2, type: 'subscription_buy', name: 'Безналичными' },
];
const getOrCreateTooltip = chart => {
	let tooltipEl = chart.canvas.parentNode.querySelector('div');

	if (!tooltipEl) {
		tooltipEl = document.createElement('div');
		tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
		tooltipEl.style.borderRadius = '5px';
		tooltipEl.style.color = 'white';
		tooltipEl.style.opacity = 1;
		tooltipEl.style.pointerEvents = 'none';
		// tooltipEl.style.position = 'absolute';
		tooltipEl.style.transform = 'translate(-50%, 0)';
		tooltipEl.style.transition = 'all .3s ease';
		tooltipEl.style.width = '320px';

		const table = document.createElement('table');
		table.style.margin = '0px';
		table.style.margin = '12px';

		tooltipEl.appendChild(table);
		chart.canvas.parentNode.appendChild(tooltipEl);
	}

	return tooltipEl;
};
const ProceedReport = () => {
	const [pie_chart_data, set_pie_chart_data] = useState([]);

	useEffect(() => {
		if (fake_new_data && fake_new_data.data && fake_new_data.pie) {
			set_pie_chart_data(prevState => {
				const pay_array = fake_new_data.data.map(_ => ({
					label: _.name,
					data:
						typeof _.total === 'object'
							? _.total.reduce(
									(acc, price) =>
										typeof price === 'string'
											? (acc += Number(price.replace(/\s/gi, '')))
											: (acc += price),
									0
							  )
							: typeof _.total === 'string'
							? Number(_.total.replace(/\s/gi, ''))
							: _.total,
					color: getRandomColor(),
				}));
				const type_array = fake_new_data.pie.map(_ => ({
					label: _.name,
					data:
						typeof _.total === 'object'
							? _.total.reduce(
									(acc, price) =>
										typeof price === 'string'
											? (acc += Number(price.replace(/\s/gi, '')))
											: (acc += price),
									0
							  )
							: typeof _.total === 'string'
							? Number(_.total.replace(/\s/gi, ''))
							: _.total,
					color: getRandomColor(),
				}));
				return [type_array, pay_array];
			});
			set_pie_chart_data(prevState => [...prevState]);
		}
	}, [fake_new_data]);

	console.log('state', pie_chart_data);
	const [chips_type_pay, set_types_chips] = useState(
		[...types_pay, { id: 0, type: 'all', name: 'Все' }].map(_ => ({
			..._,
			active: _.id === 0,
		}))
	);
	const getOptionLine = () => {};
	let start_date, end_date;
	if (fake_new_data.dates.length >= 30) {
		start_date = moment(
			fake_new_data.dates[fake_new_data.dates.length - 30],
			'YYYY-MM-DD'
		);
		end_date = moment(fake_new_data.dates[fake_new_data.dates.length - 1], 'YYYY-MM-DD');
	} else {
		start_date = moment(fake_new_data.dates[0], 'YYYY-MM-DD');
		end_date = moment(fake_new_data.dates[fake_new_data.dates.length - 1], 'YYYY-MM-DD');
	}

	let range_min = moment(fake_new_data.dates[0], 'YYYY-MM-DD'); //start date

	let range_max = moment(
		fake_new_data.dates[fake_new_data.dates.length - 1],
		'YYYY-MM-DD'
	); //end date

	const getData = canvas => {
		const ctx = canvas.getContext('2d');
		let datasets = [];
		console.log(fake_new_data.data);
		datasets = fake_new_data.data.map(_ => {
			let grad = ctx.createLinearGradient(0, 0, 0, 800);
			let color = getRandomColor();
			grad.addColorStop(0.2, `${color}59`);
			grad.addColorStop(0.49, `${color}4D`);
			grad.addColorStop(0.85, `${color}00`);

			console.log();
			return {
				label: _.name,
				data: _.total.map(price =>
					typeof price === 'number' ? price : Number(price.replace(/\s/gi, ''))
				),
				fill: true,
				backgroundColor: grad,
				pointHitRadius: 15,
				borderColor: color,
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'transparent',
				tension: 0.4,
			};
		});

		console.log(datasets);

		return {
			labels: fake_new_data.dates,
			datasets,
		};
	};
	console.log();
	const options_line = {
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
				// stacked: true,
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
				callbacks: {
					label: ctx => ctx.dataset.label + ': ' + ctx.formattedValue + ' ₽',
					// afterLabel: ctx => '₽',
				},
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
					sensitivity: 0.25,
				},
				limits: {
					x: { min: range_min, max: range_max },
				},
				zoom: {
					wheel: {
						enabled: true,
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

	useEffect(() => {}, []);

	const initial_data = array => {
		console.log('pie_data', array);
		const labels = array.map(_ => _.label);
		const data = array.map(_ => _.data);
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
	const initial_data_bar = array => {
		//
		// 	backgroundColor: _.total >= 67 ? '#43BF41' : _.total >= 34 ? '#E9E238' : '#E50E0F',
		// 	borderColor: _.total >= 67 ? '#43BF41' : _.total >= 34 ? '#E9E238' : '#E50E0F',
		// 	borderWidth: 1,
		// }));
		// console.log('datasets bar', datasets);
		const colors = getRandomColor();
		return {
			labels: [
				'Январь',
				'Февраль',
				'Март',
				'Апрель',
				'Май',
				'Июнь',
				'Июль',
				'Август',
				'Сентябрь',
				'Октябрь',
				'Ноябрь',
				'Декабрь',
			],
			datasets: [
				{
					data: array,
					label: 'Потребительская лояльность',
					backgroundColor: generateColorOnArray(array),
					borderColor: generateColorOnArray(array),
					borderWidth: 1,
				},
			],
		};
	};

	const [active, setActive] = useState(false);
	const change_active = () => setActive(!active);
	return (
		<>
			<HeaderNav />
			<Redirect padding={true} title={'Отчеты'} to={'/reports'} />
			<div className={'gcol-md-12 gcol-lg-12'}>
				<NavigateReports />
			</div>
			{/*<Chips active={active} click={change_active}>*/}
			{/*	Some*/}
			{/*</Chips>*/}
			<div className={cn('gcol-md-12 gcol-lg-11 container-g', classes.wrapper)}>
				<div className={cn('gcol-md-12 gcol-lg-11')}>
					<div className={cn('block -margin-16 py-32')}>
						<p className={cn(classes.header, 'gcol-md-12 gcol-lg-11')}>some text</p>
						<div className={cn(classes.btn_group, 'gcol-md-6 gcol-lg-6')}>
							<button>some</button>
							<button>some</button>
							<button>some</button>
						</div>
						<div className={'gcol-md-6 gcol-lg-5'}>
							<DatePickerRange />
						</div>
						<div className={'gcol-md-6 gcol-lg-5'}>
							<Select label={'возрастная группа'} />
						</div>
						<div className={'gcol-md-6 gcol-lg-6'}>
							<Select label={'единоборства'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Select label={'филиал'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Select label={'сотрудник'} />
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
							{pie_chart_data.map((_, i) => (
								<dir className="gcol-md-6 gcol-lg-6" key={i}>
									<Chart
										type={'pie'}
										data={() => initial_data(_)}
										height={191}
										width={191}
										options={options_pie}
									/>
								</dir>
							))}
							{/*<dir className="gcol-md-6 gcol-lg-6">*/}
							{/*	<Chart*/}
							{/*		type={'pie'}*/}
							{/*		data={() => initial_data(fake_new_data.data)}*/}
							{/*		height={191}*/}
							{/*		width={191}*/}
							{/*		options={options_pie}*/}
							{/*	/>*/}
							{/*</dir>*/}
							<div className="gcol-md-12 gcol-lg-12 container-g">
								<p className={'gcol-md-12 gcol-lg-11'}>
									Общая выручка:{' '}
									{makeMoney(
										fake_new_data.data
											.map(_ =>
												_.total.reduce(
													(acc, price) =>
														typeof price === 'string'
															? (acc += +price.replace(/\s/gi, ''))
															: (acc += price),
													0
												)
											)
											.reduce((acc, price) => (acc += price), 0)
									)}{' '}
									₽
								</p>
								{pie_chart_data.map(_ => (
									<div
										style={{ height: '100%' }}
										className={'gcol-md-6 gcol-lg-5 flex flex-column flex-flex-start'}>
										{_.map((item, i) => (
											<div key={i} className={'flex align-center gap-10'}>
												<div
													style={{
														width: 8,
														height: 8,
														borderRadius: '50%',
														backgroundColor: item.color,
													}}
												/>
												<p> {item.label}: </p>
												<p>{makeMoney(item.data)} ₽</p>
											</div>
										))}
									</div>
								))}
							</div>
							<div className={'gcol-md-12 gcol-lg-11 flex flex-flex-start gap-16'}>
								{/*{types_pay.map(_ => (*/}
								{/*	<>*/}
								{/*		<Chips active={true}>some</Chips>*/}
								{/*	</>*/}
								{/*))}*/}
							</div>
						</div>
					</div>
				</div>

				<div className={cn('gcol-md-12 gcol-lg-11 ', classes.wrapper)}>
					<div className={cn('block -margin-16 py-32')}>
						<p className={cn(classes.header, 'gcol-md-12 gcol-lg-11')}>some text</p>
						<div className={cn(classes.btn_group, 'gcol-md-6 gcol-lg-6')}>
							<button>some</button>
							<button>some</button>
							<button>some</button>
						</div>
						<div className={'gcol-md-6 gcol-lg-5'}>
							<DatePickerRange />
						</div>
						<div className={'gcol-md-6 gcol-lg-5'}>
							<Select label={'возрастная группа'} />
						</div>
						<div className={'gcol-md-6 gcol-lg-6'}>
							<Select label={'единоборства'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Select label={'филиал'} />
						</div>
						<div className={'gcol-md-4 gcol-lg-4'}>
							<Select label={'сотрудник'} />
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
								<Chart type={'line'} data={getData} options={options_line} />
							</dir>
						</div>
						<div className={'flex gap-12 gcol-md-12 gcol-lg-11'}>
							<Chips active={false}>Все</Chips>
							<Chips active={false}>Наличные</Chips>
							<Chips active={false}>Безнал</Chips>
						</div>
						{/*<div className={cn(classes.chart_container, 'gcol-md-12')}>*/}
						{/*	<dir className="gcol-md-12">*/}
						{/*		<Chart*/}
						{/*			type={'bar'}*/}
						{/*			data={() => initial_data_bar(fake_nps)}*/}
						{/*			options={{*/}
						{/*				hover: {*/}
						{/*					mode: 'x',*/}
						{/*					responsive: true,*/}
						{/*					intersect: false,*/}
						{/*				},*/}
						{/*				parsing: {*/}
						{/*					// key: 'value',*/}
						{/*					xAxisKey: 'total',*/}
						{/*					yAxisKey: 'total',*/}
						{/*					// yAxis: 'value',*/}
						{/*				},*/}
						{/*				plugins: {*/}
						{/*					legend: {*/}
						{/*						display: false,*/}
						{/*					},*/}
						{/*					tooltip: {*/}
						{/*						x: 50,*/}
						{/*						y: 50,*/}
						{/*						enabled: true,*/}
						{/*						external: context => {*/}
						{/*							// console.log(context);*/}
						{/*							// // Tooltip Element*/}
						{/*							// const { chart, tooltip } = context;*/}
						{/*							// const tooltipEl = getOrCreateTooltip(chart);*/}
						{/*							//*/}
						{/*							// // Hide if no tooltip*/}
						{/*							// if (tooltip.opacity === 0) {*/}
						{/*							// 	tooltipEl.style.opacity = 0;*/}
						{/*							// 	return;*/}
						{/*							// }*/}
						{/*							// tooltipEl.classList.remove(*/}
						{/*							// 	'top',*/}
						{/*							// 	'bottom',*/}
						{/*							// 	'center',*/}
						{/*							// 	'left',*/}
						{/*							// 	'right'*/}
						{/*							// );*/}
						{/*							// // if (tooltipModel.yAlign || tooltipModel.xAlign) {*/}
						{/*							// tooltipEl.classList.add(context.tooltip.yAlign);*/}
						{/*							// tooltipEl.classList.add(context.tooltip.xAlign);*/}
						{/*							//*/}
						{/*							// // Set Text*/}
						{/*							// if (tooltip.body) {*/}
						{/*							// 	const titleLines = tooltip.title || [];*/}
						{/*							// 	const bodyLines = tooltip.body.map(b => b.lines);*/}
						{/*							//*/}
						{/*							// 	// const tableHead = document.createElement('thead');*/}
						{/*							//*/}
						{/*							// 	// titleLines.forEach(title => {*/}
						{/*							// 	// 	const tr = document.createElement('tr');*/}
						{/*							// 	// 	tr.style.borderWidth = 0;*/}
						{/*							// 	//*/}
						{/*							// 	// 	const th = document.createElement('th');*/}
						{/*							// 	// 	th.style.borderWidth = 0;*/}
						{/*							// 	// 	const text = document.createTextNode(title);*/}
						{/*							// 	//*/}
						{/*							// 	// 	th.appendChild(text);*/}
						{/*							// 	// 	tr.appendChild(th);*/}
						{/*							// 	// 	tableHead.appendChild(tr);*/}
						{/*							// 	// });*/}
						{/*							//*/}
						{/*							// 	const tableBody = document.createElement('tbody');*/}
						{/*							// 	console.log(context);*/}
						{/*							// 	bodyLines.forEach((body, i) => {*/}
						{/*							// 		const dataLine = context.tooltip.dataPoints[0].raw.data;*/}
						{/*							// 		const span = document.createElement('span');*/}
						{/*							// 		// span.style.background = colors.backgroundColor;*/}
						{/*							// 		// span.style.borderColor = colors.borderColor;*/}
						{/*							// 		span.style.borderWidth = '2px';*/}
						{/*							// 		// span.style.marginRight = '10px';*/}
						{/*							// 		span.style.height = '10px';*/}
						{/*							// 		span.style.width = '10px';*/}
						{/*							// 		span.style.display = 'inline-block';*/}
						{/*							//*/}
						{/*							// 		const tr = document.createElement('tr');*/}
						{/*							// 		tr.style.backgroundColor = 'inherit';*/}
						{/*							// 		tr.style.borderWidth = '0';*/}
						{/*							//*/}
						{/*							// 		const td = document.createElement('td');*/}
						{/*							// 		td.style.borderWidth = '0';*/}
						{/*							//*/}
						{/*							// 		const text = document.createTextNode(body + '%');*/}
						{/*							// 		console.log(body);*/}
						{/*							//*/}
						{/*							// 		td.appendChild(span);*/}
						{/*							// 		td.appendChild(text);*/}
						{/*							// 		tr.appendChild(td);*/}
						{/*							// 		tableBody.appendChild(tr);*/}
						{/*							// 		dataLine.forEach((item, i) => {*/}
						{/*							// 			console.log(item);*/}
						{/*							// 			const span = document.createElement('span');*/}
						{/*							// 			// span.style.background = colors.backgroundColor;*/}
						{/*							// 			// span.style.borderColor = colors.borderColor;*/}
						{/*							// 			span.style.borderWidth = '2px';*/}
						{/*							// 			// span.style.marginRight = '10px';*/}
						{/*							// 			span.style.height = '10px';*/}
						{/*							// 			span.style.width = '10px';*/}
						{/*							// 			span.style.display = 'inline-block';*/}
						{/*							//*/}
						{/*							// 			const tr = document.createElement('tr');*/}
						{/*							// 			tr.style.backgroundColor = 'inherit';*/}
						{/*							// 			tr.style.borderWidth = '0';*/}
						{/*							//*/}
						{/*							// 			const td = document.createElement('td');*/}
						{/*							// 			td.style.borderWidth = '0';*/}
						{/*							//*/}
						{/*							// 			const text = document.createTextNode(*/}
						{/*							// 				item.label + ': ' + item.value*/}
						{/*							// 			);*/}
						{/*							//*/}
						{/*							// 			td.appendChild(span);*/}
						{/*							// 			td.appendChild(text);*/}
						{/*							// 			tr.appendChild(td);*/}
						{/*							// 			tableBody.appendChild(tr);*/}
						{/*							// 		});*/}
						{/*							// 	});*/}
						{/*							//*/}
						{/*							// 	const tableRoot = tooltipEl.querySelector('table');*/}
						{/*							// 	// Remove old children*/}
						{/*							// 	while (tableRoot.firstChild) {*/}
						{/*							// 		tableRoot.firstChild.remove();*/}
						{/*							// 	}*/}
						{/*							//*/}
						{/*							// 	// Add new children*/}
						{/*							// 	// tableRoot.appendChild(tableHead);*/}
						{/*							// 	tableRoot.appendChild(tableBody);*/}
						{/*							// }*/}
						{/*							//*/}
						{/*							// const { offsetLeft: positionX, offsetTop: positionY } =*/}
						{/*							// 	chart.canvas;*/}
						{/*							// console.log(*/}
						{/*							// 	'tooltip client right',*/}
						{/*							// 	tooltipEl.getBoundingClientRect().right*/}
						{/*							// );*/}
						{/*							// console.log(*/}
						{/*							// 	'chart client right',*/}
						{/*							// 	chart.canvas.getBoundingClientRect().right*/}
						{/*							// );*/}
						{/*							// console.log(*/}
						{/*							// 	'tooltip client left',*/}
						{/*							// 	tooltipEl.getBoundingClientRect().left*/}
						{/*							// );*/}
						{/*							// console.log(*/}
						{/*							// 	'chart client right',*/}
						{/*							// 	chart.canvas.getBoundingClientRect().left*/}
						{/*							// );*/}
						{/*							// // Display, position, and set styles for font*/}
						{/*							// tooltipEl.style.opacity = 1;*/}
						{/*							// console.log(*/}
						{/*							// 	positionX,*/}
						{/*							// 	positionY,*/}
						{/*							// 	tooltip.caretX,*/}
						{/*							// 	tooltip.caretY,*/}
						{/*							// 	positionX + tooltip.caretX + 'px',*/}
						{/*							// 	positionY + tooltip.caretY + 'px'*/}
						{/*							// );*/}
						{/*							// let right =*/}
						{/*							// 	tooltipEl.getBoundingClientRect().right >=*/}
						{/*							// 	chart.canvas.getBoundingClientRect().right*/}
						{/*							// 		? chart.canvas.getBoundingClientRect().right +*/}
						{/*							// 		  'px !important'*/}
						{/*							// 		: 0 + 'px !important';*/}
						{/*							// console.log('right', right);*/}
						{/*							// // let left =*/}
						{/*							// // 	tooltipEl.getBoundingClientRect().left >=*/}
						{/*							// // 	chart.canvas.getBoundingClientRect().left*/}
						{/*							// // 		? chart.canvas.getBoundingClientRect().left + 'px'*/}
						{/*							// // 		: positionX + tooltip.caretX + 'px';*/}
						{/*							//*/}
						{/*							// // tooltipEl.style.left = positionX + tooltip.caretX + 'px';*/}
						{/*							// // tooltipEl.style.left = left;*/}
						{/*							// // tooltipEl.style.right =*/}
						{/*							// // 	chart.canvas.getBoundingClientRect().right + 'px';*/}
						{/*							// tooltipEl.style.top = positionY + tooltip.caretY + 'px';*/}
						{/*							// tooltipEl.style.font = tooltip.options.bodyFont.string;*/}
						{/*							// // tooltipEl.style.padding =*/}
						{/*							// // 	tooltip.options.padding +*/}
						{/*							// // 	'px ' +*/}
						{/*							// // 	tooltip.options.padding +*/}
						{/*							// // 	'px';*/}
						{/*						},*/}
						{/*						responsive: false,*/}
						{/*						mode: 'x',*/}
						{/*						interaction: {*/}
						{/*							intersect: false,*/}
						{/*						},*/}
						{/*						displayColors: false,*/}
						{/*						callbacks: {*/}
						{/*							title: ctx => {*/}
						{/*								// console.log(ctx[0]);*/}
						{/*								if (ctx[0]) {*/}
						{/*									console.log(*/}
						{/*										ctx[0].dataset.label + ctx[0].formattedValue + '%'*/}
						{/*									);*/}
						{/*									return (*/}
						{/*										ctx[0].dataset.label + ': ' + ctx[0].formattedValue + '%'*/}
						{/*									);*/}
						{/*								}*/}
						{/*							},*/}
						{/*							label: ctx => {*/}
						{/*								console.log(ctx);*/}
						{/*								const array_string =*/}
						{/*									ctx.raw.data && ctx.raw.data.length && ctx.raw.data;*/}
						{/*								if (array_string) {*/}
						{/*									return array_string.map(_ => `${_.label}: ${_.value}`);*/}
						{/*								}*/}
						{/*							},*/}
						{/*						},*/}
						{/*						// custom: getOrCreateTooltip,*/}
						{/*					},*/}
						{/*				},*/}
						{/*				scales: {*/}
						{/*					xAxes: {*/}
						{/*						stacked: true,*/}
						{/*					},*/}
						{/*					yAxes: {*/}
						{/*						stacked: true,*/}
						{/*						max: 100,*/}
						{/*					},*/}
						{/*				},*/}
						{/*				// maintainAspectRatio: fealse,*/}
						{/*			}}*/}
						{/*		/>*/}
						{/*	</dir>*/}
						{/*</div>*/}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProceedReport;
