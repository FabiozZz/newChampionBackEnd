import moment from 'moment';

import React, { useEffect, useState } from 'react';
import classes from './gen.module.css';
import HeaderNav from '../common/HeaderNav';
import ItemCourse from './ItemCourse/ItemCourse';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../helpers/common';
import { notification } from 'antd';

export const GeneralPage = () => {
	const generalPage = useSelector(state => state.general_page);
	const [renderList, setList] = useState([]);

	useEffect(() => {
		if (generalPage.error && generalPage.error.length) {
			for (let i = 0; i < generalPage.error.length; i++) {
				notification.error({ message: generalPage.error[i], duration: 2.5 });
			}
		}
	}, [generalPage.error]);

	useEffect(() => {
		if (!isEmpty(generalPage.groups)) {
			setList(
				generalPage.groups.sort(function (a, b) {
					return moment(a.date).format('k:mm') > moment(b.date).format('k:mm') ? 1 : -1;
				})
			);
		}
	}, [generalPage]);
	return (
		<>
			<HeaderNav />
			<h1 className={classes.title}>Расписание</h1>
			<div className={classes.wrapper}>
				<span className={classes.time}>{moment().format('DD.MM.YYYY')}</span>
				<div className={classes.course_list}>
					{renderList.length ? (
						renderList
							.sort((course, nextCourse) => (course.id > nextCourse.id ? 1 : -1))
							.map(course => (
								<ItemCourse
									key={course.id}
									course={course}
									couches={generalPage.couches}
								/>
							))
					) : (
						<h2>Сегодня занятий нет</h2>
					)}
				</div>
			</div>
		</>
	);
};
