import moment, { now } from 'moment';
import React, { useEffect, useState } from 'react';
import classes from './gen.module.css';
import HeaderNav from '../common/HeaderNav';
import ItemCourse from './ItemCourse/ItemCourse';
import { useDispatch, useSelector } from 'react-redux';
import {
	isEmpty,
	maxThreeDay,
	replaceDateforBack,
	sameDate,
	sameDateNow,
} from '../../helpers/common';
import { notification } from 'antd';
import { Button } from '../../utils/Buttons/Button';
import {
	change_date,
	get_lessons_with_date,
	load_general_page_data,
} from '../../store/Actions/generalPageActions';
import DatePicker from '../../utils/FromAnt/DatePicker/DatePicker';

export const GeneralPage = () => {
	const dispatch = useDispatch();

	const generalPage = useSelector(state => state.general_page);
	const { loading } = generalPage;
	const [renderList, setList] = useState([]);
	const [dateNow, setDateNow] = useState(generalPage.current_date);

	useEffect(() => {
		if (generalPage.error && generalPage.error.length) {
			for (let i = 0; i < generalPage.error.length; i++) {
				notification.error({
					message: generalPage.error[i],
					duration: 2.5,
					style: { zIndex: 999 },
				});
			}
		}
	}, [generalPage.error]);

	const change_current_date = e => {
		dispatch(change_date(moment(replaceDateforBack(e)).format('DD.MM.YYYY')));
	};

	// const prevDay = () => {};
	// const nextDay = () => {
	// 	dispatch(change_date(moment(replaceDateforBack(dateNow)).add(1, 'day').format('DD.MM.YYYY')));
	// };
	useEffect(() => {
		setList(
			generalPage.groups.sort(function (a, b) {
				return moment(a.date).format('k:mm') > moment(b.date).format('k:mm') ? 1 : -1;
			})
		);
		setDateNow(generalPage.current_date);
	}, [generalPage.current_date, generalPage.groups]);

	useEffect(() => {
		dispatch(get_lessons_with_date(replaceDateforBack(dateNow)));
	}, [dateNow, dispatch]);

	return (
		<>
			{loading && <div className="lds-dual-ring" />}
			<HeaderNav />
			<h1 className={classes.title}>Расписание</h1>
			<div className={classes.wrapper}>
				<span className={classes.time}>
					<DatePicker
						toDay={true}
						value={moment(replaceDateforBack(dateNow))}
						setValue={change_current_date}
					/>
				</span>
				{renderList.length ? (
					<>
						<div className={classes.course_list}>
							{renderList
								.sort((course, nextCourse) => (course.id > nextCourse.id ? 1 : -1))
								.map(course => (
									<ItemCourse key={course.id} course={course} couches={generalPage.couches} />
								))}
						</div>
					</>
				) : (
					<div className={classes.no_lessons}>
						<span className={classes.no_lessons__text}>Расписание еще не создано</span>
						<div className={classes.no_lessons__btn}>
							<Button text={'создать расписание'} factor={'success'} />
						</div>
					</div>
				)}
			</div>
		</>
	);
};
