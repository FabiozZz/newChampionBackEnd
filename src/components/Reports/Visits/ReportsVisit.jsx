import { Line, Chart } from 'react-chartjs-2';
import zoom from 'chartjs-plugin-zoom';
import 'chartjs-adapter-moment';
import data from './data.json';
import 'moment/locale/ru';
import moment from 'moment';
import { useEffect } from 'react';
// Chart.register([
//   zoom,
//   {
//     id: "afterDraw",
//     afterDraw: (chart) => {
//       console.log(chart);
//       // eslint-disable-next-line no-underscore-dangle
//       if (chart.tooltip._active && chart.tooltip._active.length) {
//         // find coordinates of tooltip
//         const activePoint = chart.tooltip._active[0];
//         const { ctx } = chart;
//         const { x } = activePoint.element;

//         const topY = chart.scales.y;
//         const bottomY = chart.scales.y;

//         // draw vertical line
//         ctx.save();
//         ctx.beginPath();
//         ctx.moveTo(x, topY);
//         ctx.lineTo(x, bottomY);
//         ctx.lineWidth = 1;
//         ctx.strokeStyle = "#1C2128";
//         ctx.stroke();
//         ctx.restore();
//       }
//     }
//   }
// ]);
// Chart.register({
//   id: "some",
//   afterDraw: function (chart, easing) {
//     console.log(chart);
//     if (chart.tooltip._active && chart.tooltip._active.length) {
//       //   const activePoint = chart.controller.tooltip._active[0];
//       //   const ctx = chart.ctx;
//       //   const x = activePoint.tooltipPosition().x;
//       //   const topY = chart.scales["y-axis-1"].top;
//       //   const bottomY = chart.scales["y-axis-1"].bottom;
//       //   ctx.save();
//       //   ctx.beginPath();
//       //   ctx.moveTo(x, topY);
//       //   ctx.lineTo(x, bottomY);
//       //   ctx.lineWidth = 2;
//       //   ctx.strokeStyle = "#e23fa9";
//       //   ctx.stroke();
//       //   ctx.restore();
//     }
//   }
// });
export const ReportsVisit = () => {
	let start_date = moment(data[0].date, 'YYYY-MM-DD');
	let end_date = moment(data[data.length - 1].date, 'YYYY-MM-DD');

	let range_min = moment(data[0].date).subtract(10, 'day').format('YYYY-MM-DD'); //start date

	let range_max = moment(data[data.length - 1].date)
		.add(10, 'day')
		.format('YYYY-MM-DD'); //end date

	useEffect(() => {
		Chart.register(zoom);
	}, []);
	const lineChart = (
		<Line
			data={{
				labels: data.map(e => e.date),
				datasets: [
					{
						data: data.map(e => e.value),
						label: 'First data set',
						borderColor: 'rgb(67,191,65)',
						fill: true,
						tension: 0.5,
					},
				],
			}}
			options={{
				scaleShowVerticalLines: true,
				transitions: {
					zoom: {
						animation: {
							duration: 1000,
							easing: 'easeOutCubic',
						},
					},
				},
				tooltips: {
					responsive: true,
					yAlign: 'center',
				},
				// title: { display: true, text: "My Chart" },
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
						max: [...data].map(e => e.value).reduce((acc, val) => (acc > val ? acc : val)) + 100,
						type: 'linear',
						ticks: {
							beginAtZero: true,
						},
						grid: {
							display: false,
						},
					},
					xAxes: {
						// bounds: 'data',
						distribution: 'linear',
						// sampleSize: 1,
						type: 'time',
						time: {
							parser: 'YYYY-MM-DD',
							// unit:'day',
							minUnit: 'day',
							min: start_date,
							max: end_date,
							// unit: "day",
							tooltipFormat: 'DD MMMM YYYY',
							displayFormats: {
								day: 'DD.MM',
								// quarter: "[Q]Q - YYYY",
								month: 'MMMM YYYY',
								year: 'YYYY',
							},
							// stepSize: "1"
						},
						ticks: {
							source:'data',
							autoSkip: true,
							autoSkipPadding: 50,
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
					},
				},

				plugins: {
					legend: {
						display: false,
					},
					tooltip: {
						interaction: {
							intersect: false,
						},
					},
					zoom: {
						pan: {
							enabled: true,
							mode: 'x',
							// modifierKey: "alt",
							rangeMin: {
							  x: range_min
							},
							rangeMax: {
							  x: range_max
							},
							sensitivity: 0.25,
							// threshold: 22
						},
						limits: {
							// x: { min: range_min, max: "original" }
						},
						zoom: {
							wheel: {
								enabled: true,
								speed: 0.2,
							},
							mode: 'x',
							threshold: 10,
							rangeMin: {
							  x: range_min
							},
							rangeMax: {
							  x: range_max
							}
						},
					},
				},
			}}
		/>
	);

	return <div className="gcol-12">{lineChart}</div>;
};
