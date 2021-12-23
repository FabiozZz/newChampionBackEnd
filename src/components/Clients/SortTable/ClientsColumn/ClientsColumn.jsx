import React from 'react';
import cn from 'classnames';
import classes from '../../clients.module.css';
import imageBirthDay from '../../../../assets/images/clientsListCard/giftbox.svg';
import imagePhone from '../../../../assets/images/clientsListCard/phone.svg';
import { NavLink } from 'react-router-dom';
import { ageToString, declOfLessonsNum, replaceDateforFront } from 'helpers/common';
import moment from 'moment';

/**
 * Компонент отображения списка клиентов в виде столбиков
 *
 * @param clients {Array} массив клиентов
 * @returns {JSX.Element}
 * @constructor
 */
export const ClientsColumn = ({ clients }) => {
	return (
		<div className={cn(classes.list_col)}>
			{clients.map(client => {
				return (
					<NavLink
						key={client.id}
						className={classes.wr_card_col}
						to={`/profile/${client.id}`}>
						<div className={classes.list_col__item}>
							<p className={classes.list_col__item_name}>
								{client.last_name} {client.first_name} {client.middle_name}
							</p>
							{client.is_archive ? (
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M12.8188 4.24097H3.18025C2.2164 4.24097 1.44531 5.01205 1.44531 5.9759V14.265C1.44531 15.2289 2.2164 16 3.18025 16H12.8188C13.7827 16 14.5537 15.2289 14.5537 14.265V5.9759C14.5537 5.01205 13.7827 4.24097 12.8188 4.24097ZM10.7562 8.92529C10.7562 9.253 10.5056 9.5036 10.1778 9.5036H5.82122C5.49351 9.5036 5.2429 9.253 5.2429 8.92529V7.46024C5.2429 7.13253 5.49351 6.88192 5.82122 6.88192C6.14893 6.88192 6.39953 7.13253 6.39953 7.46024V8.34698H9.59953V7.46024C9.59953 7.13253 9.85013 6.88192 10.1778 6.88192C10.5056 6.88192 10.7562 7.13253 10.7562 7.46024V8.92529Z"
										fill="#BFC5D2"
									/>
									<path
										d="M12.8184 2.12048H3.17988C2.85216 2.12048 2.60156 2.37109 2.60156 2.6988C2.60156 3.02651 2.85216 3.27711 3.17988 3.27711H12.8184C13.1461 3.27711 13.3967 3.02651 13.3967 2.6988C13.3967 2.37109 13.1461 2.12048 12.8184 2.12048Z"
										fill="#BFC5D2"
									/>
									<path
										d="M11.8556 0H4.14472C3.81701 0 3.56641 0.250603 3.56641 0.578314C3.56641 0.906026 3.81701 1.15663 4.14472 1.15663H11.8556C12.1833 1.15663 12.4339 0.906026 12.4339 0.578314C12.4339 0.250603 12.1833 0 11.8556 0Z"
										fill="#BFC5D2"
									/>
								</svg>
							) : // :
							// client.call?
							//     <img src={IMageCall} alt=""/>
							null}
							<div className={classes.list_col__item_block}>
								<svg
									width="187"
									height="1"
									viewBox="0 0 187 1"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<line
										y1="0.5"
										x2="187"
										y2="0.5"
										stroke="#EEF3F5"
										strokeDasharray="12 12"
									/>
								</svg>
							</div>

							<div className={classes.list_col__item_block}>
								<img src={imageBirthDay} alt="birthday" />
								<p className={classes.list_col__item_block_text}>
									{replaceDateforFront(client.date_of_birth)} (
									{ageToString(client.date_of_birth)})
								</p>
							</div>
							{client.phone_number ? (
								<div className={classes.list_col__item_block}>
									<img src={imagePhone} alt="phone" />
									<span className={classes.list_col__item_block_text}>
										{client.phone_number}
									</span>
								</div>
							) : null}

							{/* {client.status !== 0 ?
                                        <>
                                            <div className={classes.list_col__item_block}>
                                                <svg width="187" height="1" viewBox="0 0 187 1" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <line y1="0.5" x2="187" y2="0.5" stroke="#EEF3F5"
                                                        strokeDasharray="12 12"/>
                                                </svg>
                                            </div>
                                            <div className={classes.list_col__item_block}>
                                                <img src={client.img} alt=""/>
                                                <span
                                                    className={classes.list_col__item_block_text}>{client.statusName.name} клиент</span>
                                            </div>

                                            <div className={classes.list_col__item_block}>
                                                <img src={imageTime} alt="time"/>
                                                <span className={classes.list_col__item_block_text}><b>{client.abonement.lessons>20?'U+267E':client.abonement.lessons}</b> {declOfLessonsNum(client.abonement.lessons)} до <b>{client.cardTo}</b></span>
                                            </div>
                                        </> : null
                                    } */}
							{/* {
                                        !client.is_adult && client.health ?
                                            <>
                                                <div className={classes.list_col__item_block}>
                                                    <svg width="187" height="1" viewBox="0 0 187 1" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="0.5" x2="187" y2="0.5" stroke="#EEF3F5"
                                                              strokeDasharray="12 12"/>
                                                    </svg>
                                                </div>
                                                <div className={classes.list_col__item_block}>
                                                    <img src={imageHealth} alt="health"/>
                                                    <span
                                                        className={classes.list_col__item_block_text}>до {client.healthExpire}</span>
                                                </div>

                                            </> : null

                                    } */}
							<div className={classes.list_col__item_block}>
								<svg
									width="187"
									height="1"
									viewBox="0 0 187 1"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<line
										y1="0.5"
										x2="187"
										y2="0.5"
										stroke="#EEF3F5"
										strokeDasharray="12 12"
									/>
								</svg>
							</div>
							{client.subscription && (
								<div className={classes.list_col__item_block}>
									{client.level ? (
										<>
											<svg
												width="15"
												height="10"
												viewBox="0 0 15 10"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M14.1667 2.35795V1.59091C14.1667 0.712273 13.4729 0 12.6172 0H1.54948C0.693724 0 0 0.712273 0 1.59091V2.35795C0 2.43639 0.0619515 2.5 0.138346 2.5H14.0283C14.1047 2.5 14.1667 2.43639 14.1667 2.35795Z"
													fill={client.level.color}
												/>
												<path
													d="M0.125 3.26705V8.125C0.125 9.00364 0.818724 9.71591 1.67448 9.71591H12.7422C13.5979 9.71591 14.2917 9.00364 14.2917 8.125V3.26705C14.2917 3.18861 14.2297 3.125 14.1533 3.125H0.263346C0.186951 3.125 0.125 3.18861 0.125 3.26705Z"
													fill={client.level.color}
												/>
											</svg>

											<p className={classes.list_col__item_block_text}>
												{client.subscription.rate.name}. {client.level.name} клиент
											</p>
										</>
									) : (
										<>
											<svg
												width="12"
												height="14"
												viewBox="0 0 12 14"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M2.27713 1.52556C3.52591 0.626439 5.00443 0.333252 6 0.333252C8.35061 0.333252 9.88409 1.32761 10.8077 2.61038C11.7068 3.85916 12 5.33768 12 6.33325V12.3333C12 12.6029 11.8376 12.846 11.5885 12.9492C11.3393 13.0524 11.0526 12.9953 10.8619 12.8047L10 11.9427L8.94281 12.9999C8.42211 13.5206 7.57789 13.5206 7.05719 12.9999L6 11.9427L4.94281 12.9999C4.42211 13.5206 3.57789 13.5206 3.05719 12.9999L2 11.9427L1.13807 12.8047C0.947406 12.9953 0.660661 13.0524 0.411544 12.9492C0.162428 12.846 0 12.6029 0 12.3333V6.33325C0 3.98264 0.994355 2.44916 2.27713 1.52556ZM2.66667 5.66658C2.66667 4.93021 3.26362 4.33325 4 4.33325C4.73638 4.33325 5.33333 4.93021 5.33333 5.66658C5.33333 6.40296 4.73638 6.99992 4 6.99992C3.26362 6.99992 2.66667 6.40296 2.66667 5.66658ZM6.66667 5.66658C6.66667 4.93021 7.26362 4.33325 8 4.33325C8.73638 4.33325 9.33333 4.93021 9.33333 5.66658C9.33333 6.40296 8.73638 6.99992 8 6.99992C7.26362 6.99992 6.66667 6.40296 6.66667 5.66658Z"
													fill="#43BF41"
												/>
											</svg>

											<p className={classes.list_col__item_block_text}>
												{client.subscription?.rate.name}.
											</p>
										</>
									)}
								</div>
							)}
							{client.subscription && (
								<div className={classes.list_col__item_block}>
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0.333008 7.00016C0.333008 3.31826 3.31778 0.333496 6.99967 0.333496C10.6816 0.333496 13.6663 3.31826 13.6663 7.00016C13.6663 10.6821 10.6816 13.6668 6.99967 13.6668C3.31778 13.6668 0.333008 10.6821 0.333008 7.00016ZM7.66634 3.66683C7.66634 3.29864 7.36786 3.00016 6.99967 3.00016C6.63148 3.00016 6.33301 3.29864 6.33301 3.66683V6.17612C6.33301 6.93366 6.76101 7.62619 7.43858 7.96497L9.3682 8.92978C9.69752 9.09444 10.098 8.96096 10.2626 8.63164C10.4273 8.30232 10.2938 7.90187 9.96448 7.73721L8.03487 6.7724C7.80901 6.65947 7.66634 6.42863 7.66634 6.17612V3.66683Z"
											fill="#8798AD"
										/>
									</svg>
									<p className={classes.list_col__item_block_text}>
										<span style={{ fontWeight: 900 }}>
											{client.subscription.train_balance > 999 ? (
												<span dangerouslySetInnerHTML={{ __html: '&#8734;' }} />
											) : (
												client.subscription.train_balance
											)}
										</span>{' '}
										{declOfLessonsNum(client.subscription.train_balance)} до{' '}
										<span style={{ fontWeight: 900 }}>
											{moment(client.subscription.valid_until)
												.subtract(1, 'day')
												.format('DD.MM.YYYY')}
										</span>
									</p>
								</div>
							)}
							<div className={classes.list_col__item_block}>
								<svg
									width="187"
									height="1"
									viewBox="0 0 187 1"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<line
										y1="0.5"
										x2="187"
										y2="0.5"
										stroke="#EEF3F5"
										strokeDasharray="12 12"
									/>
								</svg>
							</div>
							<div className={classes.list_col__item_block}>
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M1.99967 6.66504C2.92015 6.66504 3.66634 5.91885 3.66634 4.99837C3.66634 4.0779 2.92015 3.33171 1.99967 3.33171C1.0792 3.33171 0.333008 4.0779 0.333008 4.99837C0.333008 5.91885 1.0792 6.66504 1.99967 6.66504Z"
										fill="#8798AD"
									/>
									<path
										d="M4.99967 3.99837C5.92015 3.99837 6.66634 3.25218 6.66634 2.33171C6.66634 1.41123 5.92015 0.665039 4.99967 0.665039C4.0792 0.665039 3.33301 1.41123 3.33301 2.33171C3.33301 3.25218 4.0792 3.99837 4.99967 3.99837Z"
										fill="#8798AD"
									/>
									<path
										d="M8.99967 3.99837C9.92015 3.99837 10.6663 3.25218 10.6663 2.33171C10.6663 1.41123 9.92015 0.665039 8.99967 0.665039C8.0792 0.665039 7.33301 1.41123 7.33301 2.33171C7.33301 3.25218 8.0792 3.99837 8.99967 3.99837Z"
										fill="#8798AD"
									/>
									<path
										d="M11.9997 6.66504C12.9201 6.66504 13.6663 5.91885 13.6663 4.99837C13.6663 4.0779 12.9201 3.33171 11.9997 3.33171C11.0792 3.33171 10.333 4.0779 10.333 4.99837C10.333 5.91885 11.0792 6.66504 11.9997 6.66504Z"
										fill="#8798AD"
									/>
									<path
										d="M10.5597 8.5717C9.97968 7.89171 9.49301 7.31171 8.90634 6.63171C8.59967 6.27171 8.20634 5.91171 7.73967 5.75171C7.66634 5.72504 7.59301 5.70504 7.51967 5.69171C7.35301 5.66504 7.17301 5.66504 6.99967 5.66504C6.82634 5.66504 6.64634 5.66504 6.47301 5.69837C6.39967 5.71171 6.32634 5.73171 6.25301 5.75837C5.78634 5.91837 5.39967 6.27837 5.08634 6.63837C4.50634 7.31837 4.01967 7.89837 3.43301 8.57837C2.55967 9.4517 1.48634 10.4184 1.68634 11.7717C1.87967 12.4517 2.36634 13.125 3.23967 13.3184C3.72634 13.4184 5.27967 13.025 6.93301 13.025H7.05301C8.70634 13.025 10.2597 13.4117 10.7463 13.3184C11.6197 13.125 12.1063 12.445 12.2997 11.7717C12.5063 10.4117 11.433 9.44504 10.5597 8.5717Z"
										fill="#8798AD"
									/>
								</svg>

								<p className={classes.list_col__item_block_text}>
									{client.age_group.label}
								</p>
							</div>
							{client.subscription && client.subscription.training_group && (
								<div className={classes.list_col__item_block}>
									<svg
										width="14"
										height="12"
										viewBox="0 0 14 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M6.67591 0.0838952C6.87726 -0.0279651 7.12209 -0.0279651 7.32344 0.0838952L13.3234 3.41723C13.5351 3.53481 13.6663 3.75789 13.6663 4V8.66667C13.6663 9.03486 13.3679 9.33333 12.9997 9.33333C12.6315 9.33333 12.333 9.03486 12.333 8.66667V5.13301L11.6663 5.50338V5.50599L7.93271 7.362C7.34792 7.6527 6.65804 7.63959 6.08472 7.32687L0.570728 4.31923C0.509973 4.2861 0.44633 4.26339 0.381861 4.25052C0.350088 4.1722 0.333008 4.08734 0.333008 4C0.333008 3.75789 0.464269 3.53481 0.675913 3.41723L6.67591 0.0838952ZM2.33301 6.79926V9.33333C2.33301 9.58585 2.47568 9.81669 2.70153 9.92962L6.70153 11.9296C6.88922 12.0235 7.11013 12.0235 7.29782 11.9296L11.2978 9.92962C11.5237 9.81669 11.6663 9.58585 11.6663 9.33333V7.16241L7.91615 8.91605C7.33987 9.18552 6.66976 9.16476 6.11127 8.86013L2.33301 6.79926Z"
											fill="#8798AD"
										/>
									</svg>

									<p className={classes.list_col__item_block_text}>
										{client.subscription.training_group.name}
									</p>
								</div>
							)}
							{/* <div className={classes.list_col__item_block}>
                                        <img src={imageCourse} alt="time"/>
                                        <span className={classes.list_col__item_block_text}>{client.course}</span>
                                    </div>
                                    <div className={classes.list_col__item_block}>
                                        <img src={imageCouch} alt="time"/>
                                        <span className={classes.list_col__item_block_text}>{client.coach}</span>
                                    </div> */}

							{/* {client.statusName.name !== (null || '') ?
                                        <div className={classes.list_col__item_last_block}>
                                            <div className={classes.last_block__grid}>
                                                <img src={imageCountAbiniment} alt="time"/>
                                                <span className={classes.list_col__item_block_text}>{client.status}</span>
                                            </div>
                                            <div className={classes.last_block__grid}>
                                                <img src={imageCash} alt="time"/>
                                                <span
                                                    className={classes.list_col__item_block_text}>{client.totalPay}&#8381;</span>
                                            </div>
                                        </div> : null
                                    } */}
						</div>
					</NavLink>
				);
			})}
		</div>
	);
};
