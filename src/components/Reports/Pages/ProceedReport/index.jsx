import React, {useEffect, useState} from 'react';
import NavigateReports from 'components/Reports/NavigateReports';
import {Redirect} from 'components/common/Redirect';
import HeaderNav from 'components/common/HeaderNav';
import classes from './index.module.css';
import cn from 'classnames';
import DatePickerRange from 'utils/FromAnt/DatePickerRange/DatePickerRange';
import {fake_new_data} from 'components/Reports/fake/fake';
import Chips from 'utils/Chips';
import ChartGeneralInfoProceedBar from "./ChartGeneralInfoProceedBar";
import {getRandomColor, makeMoney} from "helpers/common";
import ChartGeneralInfoProceedLine from "./ChartGeneralInfoProceedLine";
import {useSelector} from "react-redux";
import Select from "utils/FromAnt/Select/Select";
import SelectWithCheckBox from "utils/SelectWithCheckBox";
import {useSelectWithCheck} from "hooks";
import SelectWithChips from "../../../../utils/SelectWithChips";
import {Btn} from "../../../../utils/Btn/Btn";
// import {Button} from "../../../../utils/Buttons/Button";

// const types_pay = [
// 	{ id: 1, type: 'cash', name: 'Наличными' },
// 	{ id: 2, type: 'cashless', name: 'Безналичными' },
// ];
// const method_pay = [
// 	{ id: 1, type: 'once', name: 'Наличными' },
// 	{ id: 2, type: 'subscription_buy', name: 'Безналичными' },
// ];
// const getOrCreateTooltip = chart => {
// 	let tooltipEl = chart.canvas.parentNode.querySelector('div');
//
// 	if (!tooltipEl) {
// 		tooltipEl = document.createElement('div');
// 		tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
// 		tooltipEl.style.borderRadius = '5px';
// 		tooltipEl.style.color = 'white';
// 		tooltipEl.style.opacity = 1;
// 		tooltipEl.style.pointerEvents = 'none';
// 		// tooltipEl.style.position = 'absolute';
// 		tooltipEl.style.transform = 'translate(-50%, 0)';
// 		tooltipEl.style.transition = 'all .3s ease';
// 		tooltipEl.style.width = '320px';
//
// 		const table = document.createElement('table');
// 		table.style.margin = '0px';
// 		table.style.margin = '12px';
//
// 		tooltipEl.appendChild(table);
// 		chart.canvas.parentNode.appendChild(tooltipEl);
// 	}
//
// 	return tooltipEl;
// };

const ProceedReport = () => {

    const {ages_groups, couches, groups, levels, sources} = useSelector(state => state.reports_proceed)
    const [pie_chart_data, set_pie_chart_data] = useState([]);
    const [line_chart_data, set_line_chart_data] = useState({});

    useEffect(() => {
        if (fake_new_data.dates && fake_new_data.dates.length && fake_new_data.data && fake_new_data.data.length) {
            const data = {
                dates: fake_new_data.dates,
                data: fake_new_data.data.map(_ => ({..._, color: getRandomColor()}))
            };
            console.log(data)
            set_line_chart_data(data);
        }
    }, [fake_new_data.dates, fake_new_data.data]);

    useEffect(() => {
        if (fake_new_data.pie && fake_new_data.pie.length) {
            set_pie_chart_data(fake_new_data.pie.map(_ => {
                return _.map(item => ({...item, color: getRandomColor()}))
            }));
        }
    }, [fake_new_data.pie]);

    const select_level_pie = useSelectWithCheck(levels);
    const select_level_line = useSelectWithCheck(levels);
    const select_type_chart = useSelectWithCheck([{id: 'nal', name: 'Наличные'}, {id: 'bez', name: 'Безнал'}])

    const [active, setActive] = useState(false);
    const change_active = () => setActive(!active);

    const select_ages = useSelectWithCheck(ages_groups);
    const select_couches = useSelectWithCheck(couches);
    const select_groups = useSelectWithCheck(groups);
    const select_sources = useSelectWithCheck(sources);

    return (
        <>
            <HeaderNav/>
            <Redirect padding={true} title={'Отчеты'} to={'/reports'}/>
            <div className={'gcol-md-12 gcol-lg-12 -margin-16'}>
                <NavigateReports/>
            </div>
            <div className={cn('gcol-md-12 gcol-lg-11 container-g -margin-16', classes.wrapper)}>
                    <div className={cn('block gcol-md-12 gcol-lg-11  py-32')}>
                        <p className={cn(classes.header, 'gcol-md-12 gcol-lg-11')}>Основная информация</p>
                        <div className={cn(classes.btn_group_three, 'gcol-md-12 gcol-lg-11')}>
                            <Btn cn={'flex-grow-2'} isActive={false}>Прошлый месяц</Btn>
                            <Btn cn={'flex-grow-2'} isActive={true}>Этот месяц</Btn>
                            <Btn cn={'flex-grow-2'}>Сегодня</Btn>
                            <div style={{marginLeft:20}} className={'flex-grow-3'}>
                                <DatePickerRange label={'период'}/>
                            </div>
                        </div>
                        <div className={'gcol-md-6 gcol-lg-5'}>
                            <SelectWithCheckBox label={'возрастная группа'} clear={select_ages.clear} field={['label']}
                                                data={select_ages.state}
                                                check={select_ages.check}/>
                        </div>
                        <div className={'gcol-md-6 gcol-lg-6'}>
                            <SelectWithCheckBox label={'единоборства'} clear={select_groups.clear} field={['name']}
                                                data={select_groups.state} check={select_groups.check}/>
                        </div>
                        <div className={'gcol-md-4 gcol-lg-4'}>
                            <SelectWithCheckBox  label={'филиал'} data={[]}/>
                        </div>
                        <div className={'gcol-md-4 gcol-lg-4'}>
                            <SelectWithCheckBox label={'сотрудник'} data={select_couches.state}
                                                check={select_couches.check}
                                                field={['last_name', 'first_name', 'middle_name']}
                                                clear={select_couches.clear}/>
                        </div>
                        <div className={'gcol-md-4 gcol-lg-3'}>
                            <SelectWithCheckBox label={'источник рекламы'} data={select_sources.state}
                                                check={select_sources.check}
                                                field={['name']} clear={select_sources.clear}/>
                        </div>
                        <div
                            className={cn(
                                classes.carousel,
                                'flex gcol-md-12 gcol-lg-11 gap-12 overflow-auto'
                            )}>
                            <SelectWithChips data={select_level_pie.state} check={select_level_pie.check}
                                             field={['name']} clear={select_level_pie.clear}/>
                        </div>
                        <div className={cn(classes.chart_container, 'gcol-md-12 gcol-lg-11')}>
                            {pie_chart_data.map((_, i) => (
                                <div className="gcol-md-6 gcol-lg-6" key={i}>
                                    <ChartGeneralInfoProceedBar data={_}/>
                                </div>
                            ))}
                            <div className="gcol-md-12 gcol-lg-12 container-g">
                                <p className={cn(classes.total_price,'gcol-md-12 gcol-lg-11')}>
                                    Общая выручка:{' '}
                                    <span className={classes.small}>
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
                                    </span>
                                </p>
                                {pie_chart_data.map(_ => (
                                    <div
                                        style={{height: '100%'}}
                                        className={'gcol-md-6 gcol-lg-5 flex flex-column flex-flex-start gap-4'}>
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
                                                <p className={classes.total_price}> {item.name}: </p>
                                                <p className={classes.small}>{makeMoney(item.total)} ₽</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className={'gcol-md-12 gcol-lg-11 flex flex-flex-start gap-16'}>
                                {/*	<>*/}
                                {/*		<Chips active={true}>some</Chips>*/}
                                {/*	</>*/}
                                {/*))}*/}
                            </div>
                        </div>
                </div>

                <div className={cn('gcol-md-12 gcol-lg-11 ', classes.wrapper)}>
                    <div className={cn('block py-32')}>
                        <p className={cn(classes.header, 'gcol-md-12 gcol-lg-11')}>Основная информация детально</p>
                        <div className={cn(classes.btn_group_three, 'gcol-md-12 gcol-lg-11')}>
                            <Btn cn={'flex-grow-2'} isActive={false}>Прошлый месяц</Btn>
                            <Btn cn={'flex-grow-2'} isActive={true}>Этот месяц</Btn>
                            <Btn cn={'flex-grow-2'}>Сегодня</Btn>
                            <div style={{marginLeft:20}} className={'flex-grow-3'}>
                                <DatePickerRange label={'период'}/>
                            </div>
                        </div>
                        <div className={'gcol-md-6 gcol-lg-5'}>
                            <SelectWithCheckBox label={'возрастная группа'} clear={select_ages.clear} field={['label']}
                                                data={select_ages.state}
                                                check={select_ages.check}/>
                        </div>
                        <div className={'gcol-md-6 gcol-lg-6'}>
                            <SelectWithCheckBox label={'единоборства'} clear={select_groups.clear} field={['name']}
                                                data={select_groups.state} check={select_groups.check}/>
                        </div>
                        <div className={'gcol-md-4 gcol-lg-4'}>
                            <SelectWithCheckBox label={'филиал'}/>
                        </div>
                        <div className={'gcol-md-4 gcol-lg-4'}>
                            <SelectWithCheckBox label={'сотрудник'} data={select_couches.state}
                                                check={select_couches.check}
                                                field={['last_name', 'first_name', 'middle_name']}
                                                clear={select_couches.clear}/>
                        </div>
                        <div className={'gcol-md-4 gcol-lg-3'}>
                            <SelectWithCheckBox label={'источник рекламы'} data={select_sources.state}
                                                check={select_sources.check}
                                                field={['name']} clear={select_sources.clear}/>
                        </div>
                        <div
                            className={cn(
                                classes.carousel,
                                'flex gcol-md-12 gcol-lg-11 gap-12 overflow-auto'
                            )}>
                            <SelectWithChips data={select_level_line.state} check={select_level_line.check}
                                             field={['name']} clear={select_level_line.clear}/>
                        </div>
                        <div className={cn(classes.chart_container, 'gcol-md-12 gcol-lg-11')}>
                            <dir className="gcol-md-12 gcol-lg-12">
                                {line_chart_data.data && line_chart_data.data.length &&
                                <ChartGeneralInfoProceedLine data={line_chart_data}/>
                                }
                            </dir>
                        </div>
                        <div className={'flex gap-12 gcol-md-12 gcol-lg-11'}>
                            <SelectWithChips data={select_type_chart.state} field={['name']}
                                             clear={select_type_chart.clear} check={select_type_chart.check}/>
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
