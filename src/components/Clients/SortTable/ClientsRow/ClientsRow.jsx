import React from 'react';
import cn from 'classnames';
import classes from '../../clients.module.css';
import imageBirthDay from '../../../../assets/images/clientsListCard/giftbox.svg';
import imagePhone from '../../../../assets/images/clientsListCard/phone.svg';
import { NavLink } from 'react-router-dom';
import { ageToString, declOfLessonsNum, replaceDateforFront } from '../../../../helpers/common';
import moment from 'moment';

export const ClientsRow = ({ clients }) => {
	return (
		<div className={cn(classes.list_row)}>
			{clients.map(client => {
				// let rowBlock = client.status <= 0 ? classes.item_block_not_status : classes.item_block;
				return (
					<NavLink key={client.id} className={classes.wr_card_row} to={`/profile/${client.id}`}>
						<div className={classes.list_row__item}>
							<div className={classes.item_name_and_notif}>
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
								// client.call ?
								//     <img width={16} height={16} src={IMageCall} alt=""/>
								null}

								<p className={classes.item_name}>
									{client.last_name} {client.first_name} {client.middle_name}
								</p>
							</div>
							<div className={classes.item_birth_and_phone}>
								<div className={classes.group_block}>
									<img src={imageBirthDay} alt={clients.date_of_birth} />
									<span className={classes.item_text}>
										{replaceDateforFront(client.date_of_birth)} ({ageToString(client.date_of_birth)}
										)
									</span>
								</div>
								<div className={classes.group_block}>
									{client.phone_number ? (
										<>
											<img src={imagePhone} alt={'phone'} />
											<span className={classes.item_text}>{client.phone_number}</span>
										</>
									) : null}
								</div>
							</div>

							<div className={classes.block_three}>
								<div className={classes.item}>
									{client.subscription.training_group && (
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
									<div className={classes.list_col__item_block}>
										<svg
											width="14"
											height="16"
											viewBox="0 0 14 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M12.727 2.19138C10.6253 2.19138 8.59735 1.42088 7.0304 0.0270312L7 0L6.9696 0.0270312C5.40262 1.42088 3.37462 2.19138 1.27298 2.19138H0V5.56844C0 9.95397 2.55503 13.9417 6.55038 15.7917L7 16L7.44962 15.7918C11.445 13.9417 14 9.95397 14 5.56847V2.19138H12.727ZM11.6667 9.44209H8.50861V12.8H5.49139V9.44209H2.33333V6.43938H5.49139V3.2H8.50861V6.43938H11.6667V9.44209Z"
												fill="#8798AD"
											/>
										</svg>

										<p className={classes.list_col__item_block_text}>тут должна быть справка</p>
									</div>
								</div>
								<div className={classes.item}>
									<div className={classes.list_col__item_block}>
										<svg
											width="16"
											height="10"
											viewBox="0 0 16 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M15.8179 6.96947L8.64613 1.89774C8.638 1.89198 8.62965 1.88649 8.62125 1.88137C7.89778 1.37332 7.04875 1.10503 6.16359 1.10503C5.21318 1.10503 4.33437 1.41672 3.62317 1.94264C3.52082 1.03686 2.75024 0.330566 1.81748 0.330566C0.815326 0.330566 0 1.14589 0 2.14816C0 3.15037 0.815326 3.96575 1.81748 3.96575C1.92571 3.96575 2.03156 3.95568 2.13467 3.93748C1.97115 4.39051 1.88155 4.87864 1.88155 5.38733C1.88155 7.7484 3.80252 9.66921 6.16365 9.66921C7.07023 9.66921 8.02662 9.44765 9.03912 9.21301C10.0762 8.97276 11.1486 8.72428 12.1808 8.72428C13.1095 8.72428 13.8987 8.92894 14.5938 9.34987C14.6991 9.41373 14.8268 9.42945 14.9444 9.39289C15.062 9.35644 15.1585 9.27142 15.2093 9.15922L15.9616 7.49895C16.0468 7.31083 15.9865 7.08868 15.8179 6.96947ZM0.861468 2.14816C0.861468 1.62094 1.29032 1.19203 1.81748 1.19203C2.34476 1.19203 2.77371 1.62094 2.77371 2.14816C2.77371 2.67538 2.34476 3.10428 1.81748 3.10428C1.29032 3.10428 0.861468 2.67538 0.861468 2.14816Z"
												fill="#8798AD"
											/>
										</svg>

										<p className={classes.list_col__item_block_text}>тут должен быть тренер</p>
									</div>
								</div>
								<div className={classes.item}>
									{client.level ? (
										<div className={classes.list_col__item_block}>
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
										</div>
									) : (
										<div className={classes.list_col__item_block}>
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
												{client.subscription.rate.name}
											</p>
										</div>
									)}
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
											<span style={{ fontWeight: 900 }}>{client.subscription.train_balance > 999 ? (
												<span dangerouslySetInnerHTML={{ __html: '&#8734;' }} />
											) : (
												client.subscription.train_balance
											)}</span>{' '}
											{declOfLessonsNum(client.subscription.train_balance)} до{' '}
											<span style={{ fontWeight: 900 }}>
												{moment(client.subscription.valid_until)
													.subtract(1, 'day')
													.format('DD.MM.YYYY')}
											</span>
											{/*{client.subscription.rate.name}*/}
										</p>
									</div>
								</div>
							</div>
						</div>
					</NavLink>
				);
			})}
		</div>
	);
};
