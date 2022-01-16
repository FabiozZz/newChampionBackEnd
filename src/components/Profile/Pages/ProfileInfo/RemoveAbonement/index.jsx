import React, { useState } from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import classes from '../ModalEditAbonement/modal_edit.module.css';
import { Button } from 'utils/Buttons/Button';
import { useInputOnObject } from 'hooks';
import cn from 'classnames';

const RemoveAbonement = ({ profile, type }) => {
	const { user } = profile;
	const edit_price = useInputOnObject({ price: 3200, edit: false });
	const change_edit = () => {
		edit_price.onChange({ edit: !edit_price.state.edit });
	};
	return (
		<>
			<p className={classes.wrapper__label}>Закрыть абонемент</p>

			<UserInfo type={type} user={user} />
			<div
				style={{
					padding: '24px',
					display: 'grid',
					gridTemplateColumns: '1fr',
					gridAutoRows: 'min-content',
					gridGap: '12px',
					justifyItems: 'center',
				}}>
				<span className={classes.wrapper__label} style={{ paddingLeft: 0 }}>
					сумма возврата
				</span>
				<div className={cn(classes.flex, 'gap-6')}>
					{!edit_price.state.edit ? (
						<span className={classes.remove_edit_price}>{edit_price.state.price}₽</span>
					) : (
						<>
							<input
								autoFocus
								className={classes.remove_edit_price}
								style={{ width: String(edit_price.state.price).length * 10 + 'px' }}
								value={edit_price.state.price}
								name={'price'}
								onChange={edit_price.onChange}
								type="number"
							/>
							₽
						</>
					)}{' '}
					<svg
						onClick={change_edit}
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
							fill="#8798AD"
						/>
						<path
							d="M13.4138 8.01237L6.81538 14.6112C6.78218 14.6445 6.75821 14.6866 6.7468 14.7317L6.01543 17.6673C5.99355 17.7557 6.01952 17.8496 6.08401 17.9141C6.13281 17.9629 6.19929 17.9899 6.2673 17.9899C6.28814 17.9899 6.30944 17.9874 6.33018 17.9821L9.26573 17.2507C9.31148 17.2393 9.35305 17.2154 9.38624 17.1822L15.9852 10.5838L13.4138 8.01237Z"
							fill="white"
						/>
						<path
							d="M17.6195 7.11262L16.885 6.37811C16.3941 5.88721 15.5385 5.88768 15.0482 6.37811L14.1484 7.27784L16.7198 9.84918L17.6195 8.94946C17.8647 8.70434 17.9998 8.37808 17.9998 8.03109C17.9998 7.68409 17.8647 7.35784 17.6195 7.11262Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
			<div
				style={{
					marginTop: 20,
					display: 'grid',
					gridTemplateColumns: '1fr',
					gridAutoRows: 'min-content',
					gridGap: '12px',
					justifyItems: 'center',
				}}>
				<Button text={'применить'} factor={'success'} />
			</div>
		</>
	);
};

export default RemoveAbonement;
