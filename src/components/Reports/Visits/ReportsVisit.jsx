// import { Line, Chart } from 'react-chartjs-2';
// import zoom from 'chartjs-plugin-zoom';
// import 'chartjs-adapter-moment';
// import data from './data.json';
// import 'moment/locale/ru';
// import moment from 'moment';
// import { useEffect, useState } from 'react';
// import React from 'react';
// import { Checkbox, Select } from 'antd';
// import { CheckboxBtn } from 'utils/CheckboxBtn/CheckboxBtn';
// import { SelectCheckBox } from 'utils/SelectCheckBox/SelectCheckBox';
//
// // const getOrCreateTooltip = ({ chart }) => {
// // 	let tooltipEl = chart.canvas.parentNode.querySelector('div');
// //
// // 	if (!tooltipEl) {
// // 		tooltipEl = document.createElement('div');
// // 		tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
// // 		tooltipEl.style.borderRadius = '3px';
// // 		tooltipEl.style.color = 'white';
// // 		tooltipEl.style.opacity = 1;
// // 		tooltipEl.style.pointerEvents = 'none';
// // 		tooltipEl.style.position = 'absolute';
// // 		tooltipEl.style.transform = 'translate(-50%, 0)';
// // 		tooltipEl.style.transition = 'all .1s ease';
// //
// // 		const table = document.createElement('table');
// // 		table.style.margin = '0px';
// //
// // 		tooltipEl.appendChild(table);
// // 		chart.canvas.parentNode.appendChild(tooltipEl);
// // 	}
// // 	return tooltipEl;
// // };
//
// // const externalTooltipHandler = context => {
// // 	// Tooltip Element
// // 	const { chart, tooltip } = context;
// // 	const tooltipEl = getOrCreateTooltip(chart);
// //
// // 	// Hide if no tooltip
// // 	if (tooltip.opacity === 0) {
// // 		tooltipEl.style.opacity = 0;
// // 		return;
// // 	}
// //
// // 	// Set Text
// // 	if (tooltip.body) {
// // 		const titleLines = tooltip.title || [];
// // 		const bodyLines = tooltip.body.map(b => b.lines);
// //
// // 		const tableHead = document.createElement('thead');
// //
// // 		titleLines.forEach(title => {
// // 			const tr = document.createElement('tr');
// // 			tr.style.borderWidth = 0;
// //
// // 			const th = document.createElement('th');
// // 			th.style.borderWidth = 0;
// // 			const text = document.createTextNode(title);
// //
// // 			th.appendChild(text);
// // 			tr.appendChild(th);
// // 			tableHead.appendChild(tr);
// // 		});
// //
// // 		const tableBody = document.createElement('tbody');
// // 		bodyLines.forEach((body, i) => {
// // 			const colors = tooltip.labelColors[i];
// //
// // 			const span = document.createElement('span');
// // 			span.style.background = colors.backgroundColor;
// // 			span.style.borderColor = colors.borderColor;
// // 			span.style.borderWidth = '2px';
// // 			span.style.marginRight = '10px';
// // 			span.style.height = '10px';
// // 			span.style.width = '10px';
// // 			span.style.display = 'inline-block';
// //
// // 			const tr = document.createElement('tr');
// // 			tr.style.backgroundColor = 'inherit';
// // 			tr.style.borderWidth = 0;
// //
// // 			const td = document.createElement('td');
// // 			td.style.borderWidth = 0;
// //
// // 			const text = document.createTextNode(body);
// //
// // 			td.appendChild(span);
// // 			td.appendChild(text);
// // 			tr.appendChild(td);
// // 			tableBody.appendChild(tr);
// // 		});
// //
// // 		const tableRoot = tooltipEl.querySelector('table');
// //
// // 		// Remove old children
// // 		while (tableRoot.firstChild) {
// // 			tableRoot.firstChild.remove();
// // 		}
// //
// // 		// Add new children
// // 		tableRoot.appendChild(tableHead);
// // 		tableRoot.appendChild(tableBody);
// // 	}
// //
// // 	const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;
// //
// // 	// Display, position, and set styles for font
// // 	tooltipEl.style.opacity = 1;
// // 	tooltipEl.style.left = positionX + tooltip.caretX + 'px';
// // 	tooltipEl.style.top = positionY + tooltip.caretY + 'px';
// // 	tooltipEl.style.font = tooltip.options.bodyFont.string;
// // 	tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
// // };
//
// const { Option, OptGroup } = Select;
// // Chart.register([
// //   zoom,
// //   {
// //     id: "afterDraw",
// //     afterDraw: (chart) => {
// //       console.log(chart);
// //       // eslint-disable-next-line no-underscore-dangle
// //       if (chart.tooltip._active && chart.tooltip._active.length) {
// //         // find coordinates of tooltip
// //         const activePoint = chart.tooltip._active[0];
// //         const { ctx } = chart;
// //         const { x } = activePoint.element;
//
// //         const topY = chart.scales.y;
// //         const bottomY = chart.scales.y;
//
// //         // draw vertical line
// //         ctx.save();
// //         ctx.beginPath();
// //         ctx.moveTo(x, topY);
// //         ctx.lineTo(x, bottomY);
// //         ctx.lineWidth = 1;
// //         ctx.strokeStyle = "#1C2128";
// //         ctx.stroke();
// //         ctx.restore();
// //       }
// //     }
// //   }
// // ]);
// // Chart.register({
// //   id: "some",
// //   afterDraw: function (chart, easing) {
// //     console.log(chart);
// //     if (chart.tooltip._active && chart.tooltip._active.length) {
// //       //   const activePoint = chart.controller.tooltip._active[0];
// //       //   const ctx = chart.ctx;
// //       //   const x = activePoint.tooltipPosition().x;
// //       //   const topY = chart.scales["y-axis-1"].top;
// //       //   const bottomY = chart.scales["y-axis-1"].bottom;
// //       //   ctx.save();
// //       //   ctx.beginPath();
// //       //   ctx.moveTo(x, topY);
// //       //   ctx.lineTo(x, bottomY);
// //       //   ctx.lineWidth = 2;
// //       //   ctx.strokeStyle = "#e23fa9";
// //       //   ctx.stroke();
// //       //   ctx.restore();
// //     }
// //   }
// // });
// export const ReportsVisit = () => {
// 	const getData = canvas => {
// 		const ctx = canvas.getContext('2d');
// 		var grad = ctx.createLinearGradient(0, 0, 0, 800);
//
// 		grad.addColorStop(0.2, 'rgba(67, 191, 65, 0.35)');
// 		grad.addColorStop(0.49, 'rgba(67, 191, 65, 0.30)');
// 		grad.addColorStop(0.85, 'rgba(67, 191, 65, 0)');
//
// 		return {
// 			labels: data.map(e => e.date),
// 			datasets: [
// 				{
// 					data: data.map(e => e.value),
// 					fill: true,
// 					backgroundColor: grad,
// 					pointHitRadius: 15,
// 					borderColor: 'rgb(67,191,65)',
// 					pointBorderColor: 'transparent',
// 					pointBackgroundColor: 'transparent',
// 					tension: 0.4,
// 				},
// 			],
// 		};
// 	};
//
// 	let start_date = moment(data[data.length - 30].date, 'YYYY-MM-DD');
// 	let end_date = moment(data[data.length - 1].date, 'YYYY-MM-DD');
//
// 	let range_min = moment(data[0].date, 'YYYY-MM-DD'); //start date
//
// 	let range_max = moment(data[data.length - 1].date, 'YYYY-MM-DD'); //end date
//
// 	useEffect(() => {
// 		Chart.register();
// 		Chart.register([
// 			zoom,
// 			{
// 				id: 'afterDraw',
// 				afterDraw: function (chart, easing) {
// 					// console.log(chart);
// 					if (chart.tooltip._active && chart.tooltip._active.length) {
// 						const activePoint = chart._active[0];
// 						const ctx = chart.ctx;
// 						if (activePoint) {
// 							const x = activePoint.element.x;
// 							const topY = chart.scales.yAxes.top;
// 							const bottomY = chart.scales.yAxes.bottom;
// 							ctx.save();
// 							ctx.beginPath();
// 							ctx.moveTo(x, topY);
// 							ctx.lineTo(x, bottomY);
// 							ctx.lineWidth = 2;
// 							ctx.strokeStyle = '#e23fa9';
// 							ctx.stroke();
// 							ctx.restore();
// 						}
// 					}
// 				},
// 			},
// 		]);
// 	}, []);
// 	const lineChart = (
// 		<Line
// 			type={'line'}
// 			data={getData}
// 			options={{
// 				tooltips: {},
// 				hover: {
// 					mode: 'x',
// 					responsive: true,
// 					intersect: false,
// 				},
// 				// scaleShowVerticalLines: true,
// 				transitions: {
// 					zoom: {
// 						animation: {
// 							duration: 1000,
// 							easing: 'easeOutCubic',
// 						},
// 					},
// 				},
// 				// tooltips: {
// 				// 	mode: 'x',
// 				// 	// responsive: true,
// 				// 	// yAlign: 'center',
// 				// },
//
// 				// title: { display: true, text: 'My Chart' },
// 				// maintainAspectRatio: true,
// 				// responsive: false,
// 				// interaction: {
// 				//   mode: "index"
// 				// },
// 				elements: {
// 					point: {
// 						radius: 0,
// 					},
// 					line: {
// 						borderWidth: 1.5,
// 					},
// 				},
// 				scales: {
// 					yAxes: {
// 						max: [...data].map(e => e.value).reduce((acc, val) => (acc > val ? acc : val)) + 100,
// 						type: 'linear',
// 						ticks: {
// 							beginAtZero: true,
// 						},
// 						grid: {
// 							display: false,
// 						},
// 					},
// 					xAxes: {
// 						bounds: 'data',
// 						distribution: 'linear',
// 						// sampleSize: 1,
// 						type: 'time',
// 						min: start_date,
// 						max: end_date,
// 						time: {
// 							parser: 'YYYY-MM-DD',
// 							// unit:'day',
// 							minUnit: 'day',
// 							// unit: 'day',
// 							tooltipFormat: 'DD MMMM YYYY',
// 							displayFormats: {
// 								day: 'DD.MM',
// 								// quarter: "[Q]Q - YYYY",
// 								month: 'MMMM YYYY',
// 								year: 'YYYY',
// 							},
// 							stepSize: '1',
// 						},
// 						ticks: {
// 							source: 'labels',
// 							autoSkip: true,
// 							autoSkipPadding: 20,
// 							maxRotation: 0,
// 						},
// 						// ticks: {
// 						//   source: "labels",
// 						//   fontSize: 13
// 						//   // callback: (value, index, values) => {
// 						//   //   const date = moment(value);
// 						//   //   return [date.format("M/DD"), date.format("(ddd)")];
// 						//   // }
// 						// }
// 						callbacks: {
// 							afterFit: function (some) {
// 								console.log(some);
// 							},
// 						},
// 					},
// 				},
//
// 				plugins: {
// 					legend: {
// 						display: false,
// 					},
// 					tooltip: {
// 						x: 50,
// 						y: 50,
// 						responsive: false,
// 						mode: 'x',
// 						interaction: {
// 							intersect: false,
// 						},
// 						displayColors: false,
// 						// enabled: false,
// 						// custom: getOrCreateTooltip,
// 					},
// 					zoom: {
// 						// limits: {
// 						// 	x: { min: -200, max: 200, minRange: 50 },
// 						// },
// 						pan: {
// 							enabled: true,
// 							mode: 'x',
// 							// modifierKey: "alt",
// 							rangeMin: {
// 								x: range_min,
// 							},
// 							rangeMax: {
// 								x: range_max,
// 							},
// 							sensitivity: 0.25,
// 							// threshold: 22
// 						},
// 						limits: {
// 							x: { min: range_min, max: range_max },
// 						},
// 						zoom: {
// 							wheel: {
// 								enabled: true,
// 								speed: 0.4,
// 							},
// 							mode: 'x',
// 							threshold: 10,
// 							rangeMin: {
// 								x: range_min,
// 							},
// 							rangeMax: {
// 								x: range_max,
// 							},
// 						},
// 					},
// 				},
// 			}}
// 		/>
// 	);
// 	const [checkbox_list, setCheckboxList] = useState({
// 		all_visits: { value: false, label: 'Все посещения' },
// 		visits_train: { value: false, label: 'Посещено тренировок' },
// 		missing_visits: { value: false, label: 'Пропущено тренировок' },
// 		freeze_train: { value: false, label: 'Заморожено тренировок' },
// 		personal_train: { value: false, label: 'Персональные тренировки' },
// 	});
// 	const change_value = e => {
// 		const name = e.target.name;
// 		const checked = e.target.checked;
// 		setCheckboxList(prevState => ({
// 			...prevState,
// 			[name]: { ...prevState[name], value: checked },
// 		}));
// 	};
// 	console.log(checkbox_list);
//
// 	return (
// 		<>
// 			<div className={'gcol-6'} style={{ paddingBottom: 100 }}>
// 				<SelectCheckBox label={'некое описание'} data={checkbox_list} click={change_value} />
// 			</div>
// 			<div className="gcol-12">{lineChart}</div>
// 		</>
// 	);
// };
//
