import React from 'react';
import classes from './nav.module.css';
import { NavLink } from 'react-router-dom';

const Index = () => {
	return (
		<div className={classes.nav_block}>
			<NavLink
				to={'/reports/proceeds'}
				className={classes.nav_block__item}
				activeClassName={classes.nav_block__item_active}>
				Выручка
			</NavLink>

			<NavLink
				to={'/reports/visited'}
				className={classes.nav_block__item}
				activeClassName={classes.nav_block__item_active}>
				Посещения
			</NavLink>

			<NavLink
				to={'/reports/abonement'}
				className={classes.nav_block__item}
				activeClassName={classes.nav_block__item_active}>
				Абонементы
			</NavLink>

			<NavLink
				to={'/reports/client'}
				className={classes.nav_block__item}
				activeClassName={classes.nav_block__item_active}>
				Клиенты
			</NavLink>
		</div>
	);
};

export default Index;
