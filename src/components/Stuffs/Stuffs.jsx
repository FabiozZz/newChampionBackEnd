import React, { useEffect, useState } from 'react';
import { Redirect } from '../common/Redirect';
import './stuff.css';
import { FilterStuffSection } from './FilterStuffSection/FilterStuffSection';
import { useSelector } from 'react-redux';
import { StuffSortTable } from './StuffSortTable/StuffSortTable';
import { StuffsColumn } from './StuffSortTable/StuffsColumn/StuffsColumn';
import { StuffsRow } from './StuffSortTable/StuffsRow/StuffsRow';
import classes from './stuffs.module.css';
import HeaderNav from '../common/HeaderNav';
import { Skeleton } from 'antd';
import ErrorsGroup from '../common/ErrorsGroup';
import Input from '../../utils/FromAnt/Input/Input';
import Select from '../../utils/FromAnt/Select/Select';

/**
 * @returns {React.Element}
 * @constructor
 */
export const Stuffs = () => {
	const [activeFactor, setActiveFactor] = useState(true);
	const toggleColumn = () => {
		setActiveFactor(true);
	};
	const toggleRow = () => {
		setActiveFactor(false);
	};

	const { error, loading, stuffList } = useSelector(state => state.stuffs);
	// const stuff = stuffList.filterClients.length ? stuffList.filterClients : stuffList.allClients;
	const [renderError, setError] = useState([]);

	useEffect(() => {
		if (error.length) {
			setError(ErrorsGroup(error));
		}
	}, [error]);

	return (
		<>
			{error.length
				? // <></>
				  renderError
				: null}
			<HeaderNav />
			<Redirect padding={true} title={'Список сотрудников'} />

			<div className={'stuff-page col-12'}>
				<div className={'stuff-page__filter block-container'}>
					<div className="col-12">
						<Input label={'Поиск'} />
					</div>
					<div className="col-6">
						<Select label={'филиалы'} />
					</div>
					<div className="col-6">
						<Select label={'должность'} />
					</div>
					<div className="block-container__clear col-12">
						<span className={'block-container__clear-text'}>Очистить</span>
					</div>
				</div>
				<div className="stuff-page__info-stuff"></div>
				<div className="stuff-page__add-stuff"></div>
				<div className="staff-page__list list-container"></div>
			</div>

			{/*<div className={classes.wrapper}>*/}
			{/*    <FilterStuffSection/>*/}
			{/*    <StuffSortTable stuffs={stuffList} active={activeFactor} row={toggleRow} column={toggleColumn}/>*/}
			{/*    <Skeleton loading={loading} paragraph={{rows: 4, width: "100%"}} active={true}>*/}
			{/*        {(!stuffList?.length || false) ?*/}
			{/*            <p className={classes.text_none_data}>Данных нет</p> :*/}
			{/*            activeFactor ?*/}
			{/*                <StuffsColumn clients={stuffList}/> :*/}
			{/*                <StuffsRow clients={stuffList}/>*/}
			{/*        }*/}
			{/*    </Skeleton>*/}
			{/*</div>*/}
		</>
	);
};
