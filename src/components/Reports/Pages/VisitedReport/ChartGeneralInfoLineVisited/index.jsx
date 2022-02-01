import React, {useEffect} from 'react';
import Chart from "react-chartjs-2";
import {getRandomColor} from "../../../../../helpers/common";
import {useInputOnObject} from "../../../../../hooks";
import moment from "moment";

const ChartGeneralInfoLineVisited = ({data}) => {
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

    const getData = (canvas,data) => {
        const ctx = canvas.getContext('2d');
        let datasets = [];
        console.log(data.data);
        let color = getRandomColor();
        // datasets = fake_new_visits.data.map(_ => {
        let grad = ctx.createLinearGradient(0, 0, 0, 800);
        grad.addColorStop(0.2, `${color}59`);
        grad.addColorStop(0.49, `${color}4D`);
        grad.addColorStop(0.85, `${color}00`);
        //
        // 	console.log();
        return {
            labels: data.dates,
            datasets: [
                {
                    label: 'Посещения',
                    data: data.data,
                    fill: true,
                    backgroundColor: grad,
                    pointHitRadius: 15,
                    borderColor: color,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    tension: 0.1,
                },
            ],
        };
    };
    const options_line = {
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
                // stacked: true,
                bounds: 'data',
                distribution: 'linear',
                // sampleSize: 1,
                type: 'time',
                min: option_dates.state.start_date,
                max: option_dates.state.end_date,
                time: {
                    parser: 'YYYY-MM-DDThh:mm:ss',
                    // unit:'day',
                    minUnit: 'hour',
                    // unit: 'day',
                    tooltipFormat: 'DD MMMM YYYY H:mm:ss',
                    displayFormats: {
                        hour: 'HH:mm',
                        // day: '',
                        // quarter: 'DD.MM',
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
                // callbacks: {
                // 	label: ctx => ctx.dataset.label + ': ' + ctx.formattedValue + ' ₽',
                // 	// afterLabel: ctx => '₽',
                // },
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
                    sensitivity: 0.25,
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
    return (
        <>
            <Chart
                type={'line'}
                data={(e)=>getData(e,data)}
                height={232}
                width={640}
                options={options_line}
            />
        </>
    );
};

export default ChartGeneralInfoLineVisited;