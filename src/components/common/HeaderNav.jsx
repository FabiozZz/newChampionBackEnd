import React from 'react';
import classes from '../general.module.css';
import { NavLink } from 'react-router-dom';
import { SearchBox } from 'utils/SearchBox/SearchBox';
import { Button } from 'utils/Buttons/Button';

// eslint-disable-next-line no-unused-vars
const paths = [
	{ id: '/create_with_abonement', name: 'Создать с абонементом' },
	{ id: '/create_none_abonement', name: 'Создать без абонементом' },
	{ id: '/create_with_one_pay', name: 'Создать с разовым посещением' },
	{ id: '/create_with_probe', name: 'Создать с пробным абонементом' },
];

/**
 * Компонент верхнего меню с поиском и кнопкой создания клиента
 *
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderNav = () => {
	return (
		<div className={classes.btn_group}>
			<div className={classes.create_adult}>
				<NavLink to={'/add_client'}>
					<Button size={'auto'} text={'добавить клиента'} factor={'success'} />
				</NavLink>
			</div>
			<div className={classes.search}>
				<SearchBox />
			</div>
		</div>
	);
};

export default HeaderNav;
