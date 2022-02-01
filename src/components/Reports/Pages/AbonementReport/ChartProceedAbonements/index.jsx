import React, {useEffect} from 'react';
import {fake_abonements_proceed} from "../../../fake/fake";
import Chart, {Chart as CChart} from "react-chartjs-2";
import moment from "moment";
import zoom from "chartjs-plugin-zoom";
import {getRandomColor} from "../../../../../helpers/common";

const ChartProceedAbonements = ({data}) => {
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

        return {
            labels: data.dates.map(_=>moment(_).format('MMMM')),
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

        },
    };
    return (
        <>
            <Chart
                type={'line'}
                data={canvas => getData(canvas, fake_abonements_proceed)}
                height={232}
                width={640}
                options={option}
            />
        </>
    );
};

export default ChartProceedAbonements;