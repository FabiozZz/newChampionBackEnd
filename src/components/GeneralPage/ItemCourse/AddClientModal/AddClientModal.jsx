import React, { useEffect, useRef } from 'react';
import classes from './add_modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { search_clients } from '../../../../store/Actions/generalPageActions';
import AddedAbonementModal from '../AddedAbonementModal/AddedAbonementModal';
import { Select } from 'antd';
import { useInput } from '../../../../hooks';

export const AddClientModal = ({
	change_user,
	name,
	user,
	form,
	close_modal,
	lesson_id,
	date,
}) => {
	// eslint-disable-next-line no-unused-vars
	const { added_client, clients } = useSelector(state => state.general_page);
	const search = useInput('');
	const dispatch = useDispatch();
	const { filter_clients } = useSelector(state => state.general_page);

	useEffect(() => {
		dispatch(search_clients(search.state));
	}, [dispatch, search.state]);

	const refList = useRef(null);

	useEffect(() => {
		if (refList.current) {
			let height_list = refList.current.getBoundingClientRect().height;
			console.log(height_list);
			refList.current.style.bottom = `-${height_list + 8}px`;
		}
	}, [filter_clients]);

	const selectUser = id => {
		change_user(clients.find(client => (client.id === id[0] ? client : false)));
	};

	return (
		<div className={classes.wrapper}>
			{user && form ? (
				<AddedAbonementModal
					user={user}
					close_modal={close_modal}
					lesson_id={lesson_id}
					date={date}
				/>
			) : (
				<>
					<h3 className={classes.name}>Отметить клиента в группе {name}</h3>

					{/*<div className={classes.loader}>loading</div>*/}

					<div className={classes.change}>
						<span className={classes.placeholder}>
							Чтобы отметить клиента поднесите карточку к терминалу или напишите его
							фамилию ниже
						</span>
						<Select
							searchValue={search.state}
							mode={'multiple'}
							filterOption={false}
							dropdownStyle={{ zIndex: 99 }}
							onSearch={search.onChange}
							onChange={selectUser}
							autoFocus={true}
							placeholder={'Начните писать ФИО клиента'}
							options={filter_clients.map(client => ({
								value: client.id,
								label: `${client.last_name} ${client.first_name} ${
									client.middle_name && client.middle_name
								}`,
							}))}
						/>
						{/*<Input*/}
						{/*	autoFocus={true}*/}
						{/*	setValue={search.onChange}*/}
						{/*	placeholder={'Начните писать ФИО клиента'}*/}
						{/*/>*/}
						{/*{filter_clients.length ? (*/}
						{/*	<>*/}
						{/*		<span className={classes.arrow} />*/}
						{/*		<div ref={refList} className={classes.list}>*/}
						{/*			{filter_clients.map(client => (*/}
						{/*				<div*/}
						{/*					key={client.id}*/}
						{/*					onClick={() => change_user(client)}*/}
						{/*					className={classes.list_item}>*/}
						{/*					{client.last_name} {client.first_name} {client.middle_name}*/}
						{/*				</div>*/}
						{/*			))}*/}
						{/*		</div>*/}
						{/*	</>*/}
						{/*) : null}*/}
					</div>
				</>
			)}
		</div>
	);
};
