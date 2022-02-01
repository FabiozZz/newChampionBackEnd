import React, {useEffect, useState} from 'react';
import Chart, {Chart as CChart} from "react-chartjs-2";
import zoom from "chartjs-plugin-zoom";
import {getRandomColor} from "../../../../../helpers/common";
import moment from "moment";
import {useInputOnObject} from "../../../../../hooks";

const ChartActiveAbonements = ({data}) => {

    const option_dates = useInputOnObject({
        start_date:null,
        end_date:null,
        range_min:null,
        range_max:null
    })

    useEffect(() => {
        let start_date, end_date;
        if (data.dates.length >= 30) {
            start_date = moment(data.dates[data.dates.length - 30], 'YYYY-MM-DDTHH:mm');
            end_date = moment(data.dates[data.dates.length - 1], 'YYYY-MM-DDTHH:mm');
        } else {
            start_date = moment(data.dates[0], 'YYYY-MM-DDTHH:mm');
            end_date = moment(data.dates[data.dates.length - 1], 'YYYY-MM-DD');
        }

        let range_min = moment(data.dates[0], 'YYYY-MM-DDTHH:mm'); //start date

        let range_max = moment(data.dates[data.dates.length - 1], 'YYYY-MM-DDTHH:mm'); //end date
        option_dates.onChange({
            start_date,
            end_date,
            range_max,
            range_min
        })
    },[data]);

    // useEffect(() => {
    //     CChart.register([
    //         zoom,
    //         {
    //             id: 'some',
    //             afterDraw: function (chart, easing) {
    //                 // console.log(chart);
    //                 if (
    //                     chart._active &&
    //                     chart._active.length &&
    //                     chart.config._config.type !== 'pie' &&
    //                     chart.config._config.type !== 'bar'
    //                 ) {
    //                     const activePoint = chart.tooltip._active[0];
    //                     // console.log(activePoint);
    //                     const ctx = chart.ctx;
    //                     const x = activePoint.element.x;
    //                     // console.log(chart.scales.yAxes.top);
    //                     const topY = chart.scales.yAxes.top;
    //                     const bottomY = chart.scales.yAxes.bottom;
    //                     ctx.save();
    //                     ctx.beginPath();
    //                     ctx.moveTo(x, topY);
    //                     ctx.lineTo(x, bottomY);
    //                     ctx.lineWidth = 1;
    //                     ctx.strokeStyle = '#69707F';
    //                     ctx.fillStyle = '#69707F';
    //                     ctx.stroke();
    //                     ctx.fill();
    //                     ctx.restore();
    //                 }
    //             },
    //         },
    //     ]);
    //
    // },[]);
    const getData = (canvas, data) => {
        const ctx = canvas.getContext('2d');
        let datasets = [];
        console.log('active abonements',data.data);
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
                distribution: 'linear',
                bounds: 'data',
                sampleSize: 1,
                type: 'time',
                min: option_dates.state.start_date,
                max: option_dates.state.end_date,
                time: {
                    parser: 'YYYY-MM-DDThh:mm',
                    // minUnit: 'day',
                    // unit: 'year',
                    tooltipFormat: 'DD MMMM YYYY',
                    displayFormats: {
                        day: 'DD MMMM',
                        month: 'MMMM YYYY',
                        year: 'YYYY',
                    },
                    stepSize: 2,
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
                        x: option_dates.state.range_min,
                    },
                    rangeMax: {
                        x: option_dates.state.range_max,
                    },
                },
                limits: {
                    x: { min: option_dates.state.range_min, max: option_dates.state.range_max },
                },

                zoom: {
                    wheel: {
                        enabled: true,
                        speed: 0.05,
                    },
                    mode: 'x',
                    threshold: 10,
                    rangeMin: {
                        x: option_dates.state.range_min,
                    },
                    rangeMax: {
                        x: option_dates.state.range_max,
                    },
                },
            },
        },
    };
    console.log(option)
    return (
        <>
            <Chart
                type={'line'}
                data={canvas => getData(canvas, data)}
                height={232}
                width={640}
                options={option}
            />
        </>
    );
};

export default ChartActiveAbonements;