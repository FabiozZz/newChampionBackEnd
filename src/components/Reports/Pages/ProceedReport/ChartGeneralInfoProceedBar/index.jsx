import React from 'react';
import Chart from "react-chartjs-2";
import {getRandomColor} from "../../../../../helpers/common";

const ChartGeneralInfoProceedBar = ({data}) => {
    const initial_data = array => {
        console.log('pie_data', array);
        const labels = array.map(_=>_.name);
        const data = array.map(_=>_.total);
        const colors = array.map((_)=>_.color);

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
    const options_pie = {
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    console.log('pie formatter',value,ctx)
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
    return (
        <>
            <Chart
                type={'pie'}
                data={() => initial_data(data)}
                height={191}
                width={191}
                options={options_pie}
            />
        </>
    );
};

export default ChartGeneralInfoProceedBar;