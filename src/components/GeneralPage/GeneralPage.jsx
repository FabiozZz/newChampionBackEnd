import moment, { now } from 'moment';
import React, { useEffect, useState } from 'react';
import classes from './gen.module.css';
import HeaderNav from '../common/HeaderNav';
import ItemCourse from './ItemCourse/ItemCourse';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, maxThreeDay, replaceDate, sameDate, sameDateNow } from '../../helpers/common';
import { notification } from 'antd';
import { Button } from '../../utils/Buttons/Button';
import {
	change_date,
	get_lessons_with_date,
	load_general_page_data,
} from '../../store/Actions/generalPageActions';

export const GeneralPage = () => {
	const dispatch = useDispatch();

	const generalPage = useSelector(state => state.general_page);
	const { loading } = generalPage;
	const [renderList, setList] = useState([]);
	const [dateNow, setDateNow] = useState(generalPage.current_date);

	useEffect(() => {
		if (generalPage.error && generalPage.error.length) {
			for (let i = 0; i < generalPage.error.length; i++) {
				notification.error({ message: generalPage.error[i], duration: 2.5 });
			}
		}
	}, [generalPage.error]);

	const prevDay = () => {
		dispatch(change_date(moment(replaceDate(dateNow)).subtract(1, 'day').format('DD.MM.YYYY')));
		// setList([]);
	};
	const nextDay = () => {
		// setDateNow();
		// setList([]);
		dispatch(change_date(moment(replaceDate(dateNow)).add(1, 'day').format('DD.MM.YYYY')));
	};
	useEffect(() => {
		setDateNow(generalPage.current_date);
	}, [generalPage.current_date]);

	useEffect(() => {
		dispatch(get_lessons_with_date(replaceDate(dateNow)));
	}, [dateNow, dispatch]);

	useEffect(() => {
		setList(
			generalPage.groups.sort(function (a, b) {
				return moment(a.date).format('k:mm') > moment(b.date).format('k:mm') ? 1 : -1;
			})
		);
	}, [generalPage]);
	return (
		<>
			{loading && <div className="lds-dual-ring" />}
			<HeaderNav />
			<h1 className={classes.title}>Расписание</h1>
			<div className={classes.wrapper}>
				<span className={classes.time}>
					{maxThreeDay(dateNow) && (
						<>
							<span onClick={prevDay} className={classes.time_arrow}>
								&lt;
							</span>{' '}
						</>
					)}{' '}
					{dateNow}{' '}
					{sameDate(dateNow) && (
						<span onClick={nextDay} className={classes.time_arrow}>
							&gt;
						</span>
					)}
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
