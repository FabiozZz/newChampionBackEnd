import React, {useEffect} from 'react';
import {useInputOnObject} from "../../../../../hooks";
import moment from "moment";
import {getRandomColor} from "../../../../../helpers/common";
import Chart from "react-chartjs-2";

const ChartRetentionRate = ({data}) => {
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


    const getData = (canvas, data) => {
        const ctx = canvas.getContext('2d');
        console.log('retention rate',data.data);
        let datasets = data.data.map(_ => {
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
        return {
            labels: data.dates,
            datasets,
        };
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
                max:100,
                type: 'linear',
                ticks: {
                    beginAtZero: true,
                    callback: (some)=>some + '%'
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
                // callbacks:{
                //     label:(_)=>_.dataset.label+': '+ _.formattedValue + '%'
                // }
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
                type={'bar'}
                data={canvas => getData(canvas, data)}
                height={232}
                width={640}
                options={option}
            />
        </>
    );
};

export default ChartRetentionRate;