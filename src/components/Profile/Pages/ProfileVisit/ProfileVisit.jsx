import React, { useEffect, useState } from 'react';
import { DataPickerRange } from 'utils/DataPickerRange/DataPickerRange';
import classes from './visit.module.css';
import moment from 'moment';
import { OtherInput } from 'utils/OtherInput/OtherInput';
import cn from 'classnames';
import { Button } from 'utils/Buttons/Button';
import { Modal } from 'utils/Modal/Modal';
import Input from 'utils/FromAnt/Input/Input';
import { useInputOnObject } from 'hooks';
import { useDispatch } from 'react-redux';
import { create_comment, edit_comment } from 'store/Actions/profileActions';
import Api from 'Api/Api';

export const ProfileVisit = ({ profile }) => {
	const [type_table, setTypeTable] = useState('visit');
	const [modal, setModal] = useState(false);
	const comment = useInputOnObject({});
	const update_comment_text = useInputOnObject({});

	const [current_comment, setCurrentComment] = useState(null);

	const [type_modal, setTypeModal] = useState('create');

	const dispatch = useDispatch();

	const comment_list = () => {
		setTypeTable('comment');
	};
	const visit_list = () => {
		setTypeTable('visit');
	};
	const [date /*, setDate*/] = useState({
		from: '',
		to: '',
	});

	const select_comment = async item => {
		await Api.getComment(item).then(res => {
			setTypeModal('info');
			setCurrentComment(res.data);
			setModal(true);
		});
	};

	const submit_comment = e => {
		e.preventDefault();
		const uploadData = {
			client_id: profile.user.id,
			...comment.state,
		};
		dispatch(create_comment(uploadData));
		setTypeTable('comment');
		setModal(false);
	};

	const update_comment = e => {
		e.preventDefault();
		const uploadData = {
			id: current_comment.id,
			client_id: profile.user.id,
			...update_comment_text.state,
		};
		dispatch(edit_comment(uploadData));
		setModal(false);
	};

	useEffect(() => {
		if (!modal) {
			setCurrentComment(null);
		}
	}, [modal]);

	useEffect(() => {
		if (current_comment) {
			update_comment_text.onChange({ text: current_comment.text });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current_comment]);

	/**
	 * TODO ?????????????? ???????????? ???????????? ?? ?????????????????????? ???? ????????????????????
	 */
	// window.onresize = function () {
	// 	document.getElementById ("id").className = "new_class_name";
	// };
	return (
		<>
			{modal && (
				<Modal
					toggle={setModal}
					edit={type_modal === 'info'}
					onEdit={() => setTypeModal('edit')}>
					<div className={classes.modal}>
						{type_modal === 'create' ? (
							<>
								<span className={cn(classes.title, 'gcol-md-12 gcol-lg-12')}>
									???????????????? ??????????????????????
								</span>
								<div className={'gcol-md-12 gcol-lg-12'}>
									<Input
										autoFocus
										name={'text'}
										value={comment.state && comment.state.text && comment.state.text}
										setValue={comment.onChange}
										type={'textarea'}
										placeholder={'?????????????? ??????????????????????'}
									/>
								</div>
								<div className={cn('gcol-md-12 gcol-lg-12', classes.btn_group)}>
									<Button
										click={() => setModal(false)}
										text={'????????????????'}
										factor={'danger'}
									/>
									<Button click={submit_comment} text={'??????????????????'} factor={'success'} />
								</div>
							</>
						) : type_modal === 'edit' ? (
							<>
								<span className={cn(classes.title, 'gcol-md-12 gcol-lg-12')}>
									?????????????????????????? ??????????????????????
								</span>
								<div className={'gcol-md-12 gcol-lg-12'}>
									<Input
										autoFocus
										name={'text'}
										value={
											update_comment_text.state &&
											update_comment_text.state.text &&
											update_comment_text.state.text
										}
										setValue={update_comment_text.onChange}
										type={'textarea'}
										placeholder={'?????????????? ??????????????????????'}
									/>
								</div>
								<div className={cn('gcol-md-12 gcol-lg-12', classes.btn_group)}>
									<Button
										click={() => setModal(false)}
										text={'????????????????'}
										factor={'danger'}
									/>
									<Button click={update_comment} text={'??????????????????'} factor={'success'} />
								</div>
							</>
						) : type_modal === 'info' ? (
							<>
								<div className={cn(classes.info_comment, 'gcol-md-12 gcol-lg-12')}>
									<span className={cn(classes.info_date)}>
										{moment(current_comment.updated_at).format('DD.MM.YYYY HH:mm')}{' '}
										????????????????????????????
									</span>
									<span className={cn(classes.info_text)}>{current_comment.text}</span>
								</div>
							</>
						) : null}
					</div>
				</Modal>
			)}
			<div className={classes.wrapper_search}>
				<div className={classes.search_visit}>
					<OtherInput label={'????????????????????????'} />
				</div>
				<div className={classes.search_date}>
					<DataPickerRange value={date} label={'???? ????????????'} />
				</div>
			</div>
			<div className={classes.wrapper_result}>
				{type_table === 'visit' ? (
					<>
						<div className={classes.field_with_btn}>
							<p className={cn(classes.title, 'gcol-md-7 gcol-lg-9')}>
								?????????????? ??????????????????
							</p>
							<div className={'gcol-md-5 gcol-lg-3'}>
								<Button
									click={() => {
										setTypeModal('create');
										setModal(true);
									}}
									size={'auto'}
									text={'???????????????? ??????????????????????'}
								/>
							</div>
						</div>
						<div className={classes.wrapper_table}>
							{profile.visit_list && profile.visit_list.length ? (
								<>
									<div className={classes.change_field}>
										<p className={classes.table_caption}>
											?????????????? ??????????????????????:{' '}
											<span className={classes.table_period}>12</span>
										</p>
										{profile.comment_list && profile.comment_list.length ? (
											<span
												onClick={comment_list}
												className={cn(classes.table_caption, classes.text_change)}>
												???????????? ????????????????????????
											</span>
										) : null}
									</div>
									<table className={classes.table}>
										<thead>
											<tr>
												{/*<th>&#x2116;</th>*/}
												<th>??????????????</th>
												{/*<th>??????????????????</th>*/}
												{/*<th>????????????</th>*/}
												<th>???????? ?? ??????????</th>
											</tr>
										</thead>
										<tbody>
											{profile.visit_list.map(visit => {
												return (
													<tr key={visit.id}>
														{/*<td>1000</td>*/}
														<td>{visit.lesson.group.name}</td>
														{/*<td>NONSTOP</td>*/}
														{/*<td>????????????????????????</td>*/}
														<td>
															{moment(visit.lesson.date).format('DD.MM.YYYY HH:mm')}
														</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</>
							) : (
								<div className={classes.change_field}>
									<span className={classes.mute_text}>???????????? ?????? ???? ?????????????? ??????????????</span>
									{profile.comment_list && profile.comment_list.length ? (
										<span
											onClick={comment_list}
											className={cn(classes.table_caption, classes.text_change)}>
											???????????? ????????????????????????
										</span>
									) : null}
								</div>
							)}
						</div>
					</>
				) : type_table === 'comment' ? (
					<>
						<div className={classes.field_with_btn}>
							<p className={cn(classes.title, 'gcol-md-7 gcol-lg-9')}>
								???????????? ????????????????????????
							</p>
							<div className={'gcol-md-5 gcol-lg-3'}>
								<Button
									click={() => {
										setTypeModal('create');
										setModal(true);
									}}
									size={'auto'}
									text={'???????????????? ??????????????????????'}
								/>
							</div>
						</div>
						<div className={classes.wrapper_table}>
							{profile.comment_list && profile.comment_list.length ? (
								<>
									<div className={classes.change_field}>
										<p className={classes.table_caption}>
											?????????????? ??????????????????????:{' '}
											<span className={classes.table_period}>12</span>
										</p>
										<span
											onClick={visit_list}
											className={cn(classes.table_caption, classes.text_change)}>
											???????????? ??????????????????
										</span>
									</div>
									<table className={classes.comment_table}>
										<thead>
											<tr>
												{/*<th>&#x2116;</th>*/}
												<th>???????? ?? ??????????</th>
												{/*<th>??????????????????</th>*/}
												{/*<th>????????????</th>*/}
												<th>??????????????????????</th>
											</tr>
										</thead>
										<tbody className={classes.comment_list}>
											{profile.comment_list.map(comment => {
												return (
													<tr key={comment.id} onClick={() => select_comment(comment.id)}>
														{/*<td>1000</td>*/}
														<td>
															{moment(comment.created_at).format('DD.MM.YYYY HH:mm')}
														</td>
														{/*<td>NONSTOP</td>*/}
														<td style={{ textAlign: 'left', padding: '0 20px' }}>
															<div>
																<span>{comment.text}</span>
															</div>
														</td>
														{/*<td>????????????????????????</td>*/}
														{/*<td>{moment(visit.lesson.date).format('DD.MM.YYYY HH:mm')}</td>*/}
													</tr>
												);
											})}
										</tbody>
									</table>
								</>
							) : (
								<div className={classes.change_field}>
									<span className={classes.mute_text}>???????????????????????? ??????</span>
									<span
										onClick={visit_list}
										className={cn(classes.table_caption, classes.text_change)}>
										???????????? ??????????????????
									</span>
								</div>
							)}
						</div>
					</>
				) : null}
			</div>
		</>
	);
};
// {/*<tr>*/}
// {/*	<td>1000</td>*/}
// {/*	<td>?????????????????????? ????????-????????????</td>*/}
// {/*	<td>NONSTOP</td>*/}
// {/*	<td>????????????????????????</td>*/}
// {/*	<td>25.05.2021</td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*	<td colSpan={5}>*/}
// {/*		<div className={classes.comment}>*/}
// {/*			<span>12.05.2021 16:30</span>*/}
// {/*			/!*<span>?????????????? ??????????????</span>*!/*/}
// {/*			/!*<p>??????????????, ???????????? ??????????????????. ?????????? ???????????? ?????? ???? ????????</p>*!/*/}
// {/*			<p>*/}
// {/*				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis*/}
// {/*				doloribus fugiat impedit natus qui repellendus, rerum vero. Accusamus*/}
// {/*				adipisci cum doloribus eum fugit nihil nostrum quae quaerat totam, velit!*/}
// {/*				Ab ad ipsa molestias neque vero. Adipisci aspernatur corporis cupiditate*/}
// {/*				dolores et ipsa nesciunt quaerat quas quisquam rem, soluta tempore*/}
// {/*				voluptates.*/}
// {/*			</p>*/}
// {/*		</div>*/}
// {/*	</td>*/}
// {/*	<td />*/}
// {/*	<td />*/}
// {/*	<td />*/}
// {/*	<td />*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*	<td>1000</td>*/}
// {/*	<td>?????????????????????? ????????-????????????</td>*/}
// {/*	<td>NONSTOP</td>*/}
// {/*	<td>????????????????????????</td>*/}
// {/*	<td>25.05.2021</td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*	<td>1000</td>*/}
// {/*	<td>?????????????????????? ????????-????????????</td>*/}
// {/*	<td>NONSTOP</td>*/}
// {/*	<td>????????????????????????</td>*/}
// {/*	<td>25.05.2021</td>*/}
// {/*</tr>*/}
//
// {/*<tr>*/}
// {/*    <td>1000</td>*/}
// {/*    <td>?????????????????????? ????????-????????????</td>*/}
// {/*    <td>NONSTOP</td>*/}
// {/*    <td>????????????????????????</td>*/}
// {/*    <td>25.05.2021</td>*/}
// {/*    <td>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <g clipPath="url(#clip0)">*/}
// {/*                <path*/}
// {/*                    d="M6.00002 0.300049C2.69162 0.300049 1.61265e-05 2.72245 1.61265e-05 5.70005C1.61265e-05 6.74085 0.329216 7.74905 0.953616 8.62085C0.835416 9.92825 0.518616 10.8989 0.0586161 11.3587C-0.00218387 11.4194 -0.0173839 11.5125 0.0210161 11.5893C0.0550161 11.6579 0.125016 11.7001 0.200016 11.7001C0.209216 11.7001 0.218416 11.6995 0.227816 11.6981C0.308816 11.6867 2.19042 11.4159 3.55142 10.6303C4.32422 10.9421 5.14742 11.1001 6.00002 11.1001C9.30842 11.1001 12 8.67765 12 5.70005C12 2.72245 9.30842 0.300049 6.00002 0.300049Z"*/}
// {/*                    fill="#69707F"/>*/}
// {/*            </g>*/}
// {/*            <defs>*/}
// {/*                <clipPath id="clip0">*/}
// {/*                    <rect width="12" height="12" fill="white"/>*/}
// {/*                </clipPath>*/}
// {/*            </defs>*/}
// {/*        </svg>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <circle cx="6" cy="6" r="6" fill="#43BF41"/>*/}
// {/*        </svg>*/}
// {/*    </td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*    <td>1000</td>*/}
// {/*    <td>?????????????????????? ????????-????????????</td>*/}
// {/*    <td>NONSTOP</td>*/}
// {/*    <td>????????????????????????</td>*/}
// {/*    <td>25.05.2021</td>*/}
// {/*    <td>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <g clipPath="url(#clip0)">*/}
// {/*                <path*/}
// {/*                    d="M6.00002 0.300049C2.69162 0.300049 1.61265e-05 2.72245 1.61265e-05 5.70005C1.61265e-05 6.74085 0.329216 7.74905 0.953616 8.62085C0.835416 9.92825 0.518616 10.8989 0.0586161 11.3587C-0.00218387 11.4194 -0.0173839 11.5125 0.0210161 11.5893C0.0550161 11.6579 0.125016 11.7001 0.200016 11.7001C0.209216 11.7001 0.218416 11.6995 0.227816 11.6981C0.308816 11.6867 2.19042 11.4159 3.55142 10.6303C4.32422 10.9421 5.14742 11.1001 6.00002 11.1001C9.30842 11.1001 12 8.67765 12 5.70005C12 2.72245 9.30842 0.300049 6.00002 0.300049Z"*/}
// {/*                    fill="#69707F"/>*/}
// {/*            </g>*/}
// {/*            <defs>*/}
// {/*                <clipPath id="clip0">*/}
// {/*                    <rect width="12" height="12" fill="white"/>*/}
// {/*                </clipPath>*/}
// {/*            </defs>*/}
// {/*        </svg>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <circle cx="6" cy="6" r="6" fill="#43BF41"/>*/}
// {/*        </svg>*/}
// {/*    </td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*    <td>1000</td>*/}
// {/*    <td>?????????????????????? ????????-????????????</td>*/}
// {/*    <td>NONSTOP</td>*/}
// {/*    <td>????????????????????????</td>*/}
// {/*    <td>25.05.2021</td>*/}
// {/*    <td>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <g clipPath="url(#clip0)">*/}
// {/*                <path*/}
// {/*                    d="M6.00002 0.300049C2.69162 0.300049 1.61265e-05 2.72245 1.61265e-05 5.70005C1.61265e-05 6.74085 0.329216 7.74905 0.953616 8.62085C0.835416 9.92825 0.518616 10.8989 0.0586161 11.3587C-0.00218387 11.4194 -0.0173839 11.5125 0.0210161 11.5893C0.0550161 11.6579 0.125016 11.7001 0.200016 11.7001C0.209216 11.7001 0.218416 11.6995 0.227816 11.6981C0.308816 11.6867 2.19042 11.4159 3.55142 10.6303C4.32422 10.9421 5.14742 11.1001 6.00002 11.1001C9.30842 11.1001 12 8.67765 12 5.70005C12 2.72245 9.30842 0.300049 6.00002 0.300049Z"*/}
// {/*                    fill="#69707F"/>*/}
// {/*            </g>*/}
// {/*            <defs>*/}
// {/*                <clipPath id="clip0">*/}
// {/*                    <rect width="12" height="12" fill="white"/>*/}
// {/*                </clipPath>*/}
// {/*            </defs>*/}
// {/*        </svg>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <circle cx="6" cy="6" r="6" fill="#43BF41"/>*/}
// {/*        </svg>*/}
// {/*    </td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*    <td>1000</td>*/}
// {/*    <td>?????????????????????? ????????-????????????</td>*/}
// {/*    <td>NONSTOP</td>*/}
// {/*    <td>????????????????????????</td>*/}
// {/*    <td>25.05.2021</td>*/}
// {/*    <td>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <g clipPath="url(#clip0)">*/}
// {/*                <path*/}
// {/*                    d="M6.00002 0.300049C2.69162 0.300049 1.61265e-05 2.72245 1.61265e-05 5.70005C1.61265e-05 6.74085 0.329216 7.74905 0.953616 8.62085C0.835416 9.92825 0.518616 10.8989 0.0586161 11.3587C-0.00218387 11.4194 -0.0173839 11.5125 0.0210161 11.5893C0.0550161 11.6579 0.125016 11.7001 0.200016 11.7001C0.209216 11.7001 0.218416 11.6995 0.227816 11.6981C0.308816 11.6867 2.19042 11.4159 3.55142 10.6303C4.32422 10.9421 5.14742 11.1001 6.00002 11.1001C9.30842 11.1001 12 8.67765 12 5.70005C12 2.72245 9.30842 0.300049 6.00002 0.300049Z"*/}
// {/*                    fill="#69707F"/>*/}
// {/*            </g>*/}
// {/*            <defs>*/}
// {/*                <clipPath id="clip0">*/}
// {/*                    <rect width="12" height="12" fill="white"/>*/}
// {/*                </clipPath>*/}
// {/*            </defs>*/}
// {/*        </svg>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <circle cx="6" cy="6" r="6" fill="#43BF41"/>*/}
// {/*        </svg>*/}
// {/*    </td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*    <td>1000</td>*/}
// {/*    <td>?????????????????????? ????????-????????????</td>*/}
// {/*    <td>NONSTOP</td>*/}
// {/*    <td>????????????????????????</td>*/}
// {/*    <td>25.05.2021</td>*/}
// {/*    <td>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <g clipPath="url(#clip0)">*/}
// {/*                <path*/}
// {/*                    d="M6.00002 0.300049C2.69162 0.300049 1.61265e-05 2.72245 1.61265e-05 5.70005C1.61265e-05 6.74085 0.329216 7.74905 0.953616 8.62085C0.835416 9.92825 0.518616 10.8989 0.0586161 11.3587C-0.00218387 11.4194 -0.0173839 11.5125 0.0210161 11.5893C0.0550161 11.6579 0.125016 11.7001 0.200016 11.7001C0.209216 11.7001 0.218416 11.6995 0.227816 11.6981C0.308816 11.6867 2.19042 11.4159 3.55142 10.6303C4.32422 10.9421 5.14742 11.1001 6.00002 11.1001C9.30842 11.1001 12 8.67765 12 5.70005C12 2.72245 9.30842 0.300049 6.00002 0.300049Z"*/}
// {/*                    fill="#69707F"/>*/}
// {/*            </g>*/}
// {/*            <defs>*/}
// {/*                <clipPath id="clip0">*/}
// {/*                    <rect width="12" height="12" fill="white"/>*/}
// {/*                </clipPath>*/}
// {/*            </defs>*/}
// {/*        </svg>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <circle cx="6" cy="6" r="6" fill="#43BF41"/>*/}
// {/*        </svg>*/}
// {/*    </td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*    <td>1000</td>*/}
// {/*    <td>?????????????????????? ????????-????????????</td>*/}
// {/*    <td>NONSTOP</td>*/}
// {/*    <td>????????????????????????</td>*/}
// {/*    <td>25.05.2021</td>*/}
// {/*    <td>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <g clipPath="url(#clip0)">*/}
// {/*                <path*/}
// {/*                    d="M6.00002 0.300049C2.69162 0.300049 1.61265e-05 2.72245 1.61265e-05 5.70005C1.61265e-05 6.74085 0.329216 7.74905 0.953616 8.62085C0.835416 9.92825 0.518616 10.8989 0.0586161 11.3587C-0.00218387 11.4194 -0.0173839 11.5125 0.0210161 11.5893C0.0550161 11.6579 0.125016 11.7001 0.200016 11.7001C0.209216 11.7001 0.218416 11.6995 0.227816 11.6981C0.308816 11.6867 2.19042 11.4159 3.55142 10.6303C4.32422 10.9421 5.14742 11.1001 6.00002 11.1001C9.30842 11.1001 12 8.67765 12 5.70005C12 2.72245 9.30842 0.300049 6.00002 0.300049Z"*/}
// {/*                    fill="#69707F"/>*/}
// {/*            </g>*/}
// {/*            <defs>*/}
// {/*                <clipPath id="clip0">*/}
// {/*                    <rect width="12" height="12" fill="white"/>*/}
// {/*                </clipPath>*/}
// {/*            </defs>*/}
// {/*        </svg>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <circle cx="6" cy="6" r="6" fill="#43BF41"/>*/}
// {/*        </svg>*/}
// {/*    </td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*    <td>1000</td>*/}
// {/*    <td>?????????????????????? ????????-????????????</td>*/}
// {/*    <td>NONSTOP</td>*/}
// {/*    <td>????????????????????????</td>*/}
// {/*    <td>25.05.2021</td>*/}
// {/*    <td>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <g clipPath="url(#clip0)">*/}
// {/*                <path*/}
// {/*                    d="M6.00002 0.300049C2.69162 0.300049 1.61265e-05 2.72245 1.61265e-05 5.70005C1.61265e-05 6.74085 0.329216 7.74905 0.953616 8.62085C0.835416 9.92825 0.518616 10.8989 0.0586161 11.3587C-0.00218387 11.4194 -0.0173839 11.5125 0.0210161 11.5893C0.0550161 11.6579 0.125016 11.7001 0.200016 11.7001C0.209216 11.7001 0.218416 11.6995 0.227816 11.6981C0.308816 11.6867 2.19042 11.4159 3.55142 10.6303C4.32422 10.9421 5.14742 11.1001 6.00002 11.1001C9.30842 11.1001 12 8.67765 12 5.70005C12 2.72245 9.30842 0.300049 6.00002 0.300049Z"*/}
// {/*                    fill="#69707F"/>*/}
// {/*            </g>*/}
// {/*            <defs>*/}
// {/*                <clipPath id="clip0">*/}
// {/*                    <rect width="12" height="12" fill="white"/>*/}
// {/*                </clipPath>*/}
// {/*            </defs>*/}
// {/*        </svg>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <circle cx="6" cy="6" r="6" fill="#43BF41"/>*/}
// {/*        </svg>*/}
// {/*    </td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*    <td>1000</td>*/}
// {/*    <td>?????????????????????? ????????-????????????</td>*/}
// {/*    <td>NONSTOP</td>*/}
// {/*    <td>????????????????????????</td>*/}
// {/*    <td>25.05.2021</td>*/}
// {/*    <td>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <g clipPath="url(#clip0)">*/}
// {/*                <path*/}
// {/*                    d="M6.00002 0.300049C2.69162 0.300049 1.61265e-05 2.72245 1.61265e-05 5.70005C1.61265e-05 6.74085 0.329216 7.74905 0.953616 8.62085C0.835416 9.92825 0.518616 10.8989 0.0586161 11.3587C-0.00218387 11.4194 -0.0173839 11.5125 0.0210161 11.5893C0.0550161 11.6579 0.125016 11.7001 0.200016 11.7001C0.209216 11.7001 0.218416 11.6995 0.227816 11.6981C0.308816 11.6867 2.19042 11.4159 3.55142 10.6303C4.32422 10.9421 5.14742 11.1001 6.00002 11.1001C9.30842 11.1001 12 8.67765 12 5.70005C12 2.72245 9.30842 0.300049 6.00002 0.300049Z"*/}
// {/*                    fill="#69707F"/>*/}
// {/*            </g>*/}
// {/*            <defs>*/}
// {/*                <clipPath id="clip0">*/}
// {/*                    <rect width="12" height="12" fill="white"/>*/}
// {/*                </clipPath>*/}
// {/*            </defs>*/}
// {/*        </svg>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <circle cx="6" cy="6" r="6" fill="#43BF41"/>*/}
// {/*        </svg>*/}
// {/*    </td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*    <td>1000</td>*/}
// {/*    <td>?????????????????????? ????????-????????????</td>*/}
// {/*    <td>NONSTOP</td>*/}
// {/*    <td>????????????????????????</td>*/}
// {/*    <td>25.05.2021</td>*/}
// {/*    <td>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <g clipPath="url(#clip0)">*/}
// {/*                <path*/}
// {/*                    d="M6.00002 0.300049C2.69162 0.300049 1.61265e-05 2.72245 1.61265e-05 5.70005C1.61265e-05 6.74085 0.329216 7.74905 0.953616 8.62085C0.835416 9.92825 0.518616 10.8989 0.0586161 11.3587C-0.00218387 11.4194 -0.0173839 11.5125 0.0210161 11.5893C0.0550161 11.6579 0.125016 11.7001 0.200016 11.7001C0.209216 11.7001 0.218416 11.6995 0.227816 11.6981C0.308816 11.6867 2.19042 11.4159 3.55142 10.6303C4.32422 10.9421 5.14742 11.1001 6.00002 11.1001C9.30842 11.1001 12 8.67765 12 5.70005C12 2.72245 9.30842 0.300049 6.00002 0.300049Z"*/}
// {/*                    fill="#69707F"/>*/}
// {/*            </g>*/}
// {/*            <defs>*/}
// {/*                <clipPath id="clip0">*/}
// {/*                    <rect width="12" height="12" fill="white"/>*/}
// {/*                </clipPath>*/}
// {/*            </defs>*/}
// {/*        </svg>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <circle cx="6" cy="6" r="6" fill="#43BF41"/>*/}
// {/*        </svg>*/}
// {/*    </td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*    <td>1000</td>*/}
// {/*    <td>?????????????????????? ????????-????????????</td>*/}
// {/*    <td>NONSTOP</td>*/}
// {/*    <td>????????????????????????</td>*/}
// {/*    <td>25.05.2021</td>*/}
// {/*    <td>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <g clipPath="url(#clip0)">*/}
// {/*                <path*/}
// {/*                    d="M6.00002 0.300049C2.69162 0.300049 1.61265e-05 2.72245 1.61265e-05 5.70005C1.61265e-05 6.74085 0.329216 7.74905 0.953616 8.62085C0.835416 9.92825 0.518616 10.8989 0.0586161 11.3587C-0.00218387 11.4194 -0.0173839 11.5125 0.0210161 11.5893C0.0550161 11.6579 0.125016 11.7001 0.200016 11.7001C0.209216 11.7001 0.218416 11.6995 0.227816 11.6981C0.308816 11.6867 2.19042 11.4159 3.55142 10.6303C4.32422 10.9421 5.14742 11.1001 6.00002 11.1001C9.30842 11.1001 12 8.67765 12 5.70005C12 2.72245 9.30842 0.300049 6.00002 0.300049Z"*/}
// {/*                    fill="#69707F"/>*/}
// {/*            </g>*/}
// {/*            <defs>*/}
// {/*                <clipPath id="clip0">*/}
// {/*                    <rect width="12" height="12" fill="white"/>*/}
// {/*                </clipPath>*/}
// {/*            </defs>*/}
// {/*        </svg>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <circle cx="6" cy="6" r="6" fill="#43BF41"/>*/}
// {/*        </svg>*/}
// {/*    </td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*    <td>1000</td>*/}
// {/*    <td>?????????????????????? ????????-????????????</td>*/}
// {/*    <td>NONSTOP</td>*/}
// {/*    <td>????????????????????????</td>*/}
// {/*    <td>25.05.2021</td>*/}
// {/*    <td>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <g clipPath="url(#clip0)">*/}
// {/*                <path*/}
// {/*                    d="M6.00002 0.300049C2.69162 0.300049 1.61265e-05 2.72245 1.61265e-05 5.70005C1.61265e-05 6.74085 0.329216 7.74905 0.953616 8.62085C0.835416 9.92825 0.518616 10.8989 0.0586161 11.3587C-0.00218387 11.4194 -0.0173839 11.5125 0.0210161 11.5893C0.0550161 11.6579 0.125016 11.7001 0.200016 11.7001C0.209216 11.7001 0.218416 11.6995 0.227816 11.6981C0.308816 11.6867 2.19042 11.4159 3.55142 10.6303C4.32422 10.9421 5.14742 11.1001 6.00002 11.1001C9.30842 11.1001 12 8.67765 12 5.70005C12 2.72245 9.30842 0.300049 6.00002 0.300049Z"*/}
// {/*                    fill="#69707F"/>*/}
// {/*            </g>*/}
// {/*            <defs>*/}
// {/*                <clipPath id="clip0">*/}
// {/*                    <rect width="12" height="12" fill="white"/>*/}
// {/*                </clipPath>*/}
// {/*            </defs>*/}
// {/*        </svg>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <circle cx="6" cy="6" r="6" fill="#43BF41"/>*/}
// {/*        </svg>*/}
// {/*    </td>*/}
// {/*</tr>*/}
// {/*<tr>*/}
// {/*    <td>1000</td>*/}
// {/*    <td>?????????????????????? ????????-????????????</td>*/}
// {/*    <td>NONSTOP</td>*/}
// {/*    <td>????????????????????????</td>*/}
// {/*    <td>25.05.2021</td>*/}
// {/*    <td>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <g clipPath="url(#clip0)">*/}
// {/*                <path*/}
// {/*                    d="M6.00002 0.300049C2.69162 0.300049 1.61265e-05 2.72245 1.61265e-05 5.70005C1.61265e-05 6.74085 0.329216 7.74905 0.953616 8.62085C0.835416 9.92825 0.518616 10.8989 0.0586161 11.3587C-0.00218387 11.4194 -0.0173839 11.5125 0.0210161 11.5893C0.0550161 11.6579 0.125016 11.7001 0.200016 11.7001C0.209216 11.7001 0.218416 11.6995 0.227816 11.6981C0.308816 11.6867 2.19042 11.4159 3.55142 10.6303C4.32422 10.9421 5.14742 11.1001 6.00002 11.1001C9.30842 11.1001 12 8.67765 12 5.70005C12 2.72245 9.30842 0.300049 6.00002 0.300049Z"*/}
// {/*                    fill="#69707F"/>*/}
// {/*            </g>*/}
// {/*            <defs>*/}
// {/*                <clipPath id="clip0">*/}
// {/*                    <rect width="12" height="12" fill="white"/>*/}
// {/*                </clipPath>*/}
// {/*            </defs>*/}
// {/*        </svg>*/}
// {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
// {/*             xmlns="http://www.w3.org/2000/svg">*/}
// {/*            <circle cx="6" cy="6" r="6" fill="#43BF41"/>*/}
// {/*        </svg>*/}
// {/*    </td>*/}
// {/*</tr>*/}
