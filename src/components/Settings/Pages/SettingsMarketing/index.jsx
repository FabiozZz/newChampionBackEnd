import React from 'react';
import PropTypes from 'prop-types';
import HeaderNav from 'components/common/HeaderNav';
import { Redirect } from 'components/common/Redirect';
import classes from './index.module.css';
import cn from 'classnames';
import { Button } from 'utils/Buttons/Button';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { remove_source_on_CRM } from 'store/Actions/settingsSourcePageActions';

const Index = props => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { sources } = useSelector(state => state.marketing);

	return (
		<>
			<HeaderNav />
			<Redirect padding={true} title={'Маркетинг'} />
			<div className={cn('gcol-12', classes.padding)}>
				<div className={cn('gcol-12', classes.wrapper)}>
					<p className={cn('gcol-12', classes.title, classes.text)}>Источники рекламы</p>
					{!!sources.length ? (
						<table cellSpacing={4} cellPadding={18} className={classes.table}>
							<tbody>
								{sources
									.sort((a, b) => (a.id < b.id ? -1 : 1))
									.map(item => {
										const mouseMove = e => {
											if (e.target.getAttribute('class') === classes.left) {
												for (let i = 0; i < e.currentTarget.children.length; i++) {
													let item = e.currentTarget.children[i];
													if (item.getAttribute('class') === classes.left) {
														item.style.backgroundColor = '#E0E3E9';
													}
												}
											}
										};
										const mouseOut = e => {
											if (e.target.getAttribute('class') === classes.left)
												for (let i = 0; i < e.currentTarget.children.length; i++) {
													let item = e.currentTarget.children[i];
													if (item.getAttribute('class') === classes.left) {
														item.style.backgroundColor = null;
													}
												}
										};
										return (
											<tr key={item.id} onMouseMove={mouseMove} onMouseOut={mouseOut}>
												<td className={classes.left}>{item.name}</td>
												<td
													onClick={() => {
														dispatch(remove_source_on_CRM(item.id));
													}}
													className={classes.right}>
													<svg
														width="16"
														height="16"
														viewBox="0 0 16 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg">
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M5 4.00033C5 2.71166 6.04467 1.66699 7.33333 1.66699H8.66667C9.95533 1.66699 11 2.71166 11 4.00033L13.3333 4.00033C13.7015 4.00033 14 4.2988 14 4.66699C14 5.03518 13.7015 5.33366 13.3333 5.33366H12.6667V12.0003C12.6667 13.1049 11.7712 14.0003 10.6667 14.0003H5.33333C4.22876 14.0003 3.33333 13.1049 3.33333 12.0003V5.33366H2.66667C2.29848 5.33366 2 5.03518 2 4.66699C2 4.2988 2.29848 4.00033 2.66667 4.00033L5 4.00033ZM7.33333 7.33366C7.33333 6.96547 7.03486 6.66699 6.66667 6.66699C6.29848 6.66699 6 6.96547 6 7.33366V10.667C6 11.0352 6.29848 11.3337 6.66667 11.3337C7.03486 11.3337 7.33333 11.0352 7.33333 10.667V7.33366ZM10 7.33366C10 6.96547 9.70152 6.66699 9.33333 6.66699C8.96514 6.66699 8.66667 6.96547 8.66667 7.33366V10.667C8.66667 11.0352 8.96514 11.3337 9.33333 11.3337C9.70152 11.3337 10 11.0352 10 10.667V7.33366Z"
															fill="#BFC5D2"
														/>
													</svg>
												</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					) : (
						<p className={cn('gcol-12', classes.sub_text, classes.text)}>
							Вы еще не добавили ни одного источника
						</p>
					)}

					<div className={cn('gcol-5', classes.btn)}>
						<Button
							factor={'success'}
							click={() => history.push('marketing/create_sale')}
							size={'auto'}
							text={'Добавить источник рекламы'}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

Index.propTypes = {};

export default Index;
