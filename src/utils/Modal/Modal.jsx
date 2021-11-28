import React, { useEffect } from 'react';
import classes from './modal.module.css';
import close from '../../assets/images/close_modal.svg';

/**
 * @param hide - принимает булевое зщначение, открыта модалка или нет
 * @param toggle - принимает функцию для смнены hide
 * @param children - то что должна скрывать модалка
 * @returns JSX
 */
export const Modal = ({ toggle, children, size = 'sm', edit = false, onEdit = () => {} }) => {
	const sizeWindow =
		size === 'lg' ? classes.wrapper_lg : size === 'md' ? classes.wrapper_md : classes.wrapper_sm;

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => (document.body.style.overflow = 'auto');
	}, []);
	return (
		<div className={classes.back} onClick={() => toggle(false)}>
			<div className={sizeWindow} onClick={e => e.stopPropagation()}>
				<img onClick={() => toggle(false)} className={classes.close} src={close} alt="close" />
				{edit && (
					<div className={classes.svg} onClick={onEdit}>
						<svg
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.89127 2.67407L1.07857 11.4874C1.03424 11.5319 1.00222 11.588 0.986977 11.6484L0.0101744 15.569C-0.0190446 15.6871 0.0156371 15.8126 0.10177 15.8987C0.166941 15.9639 0.255741 16 0.346574 16C0.374395 16 0.402852 15.9965 0.430546 15.9895L4.35122 15.0126C4.41233 14.9974 4.46785 14.9655 4.51218 14.9211L13.3256 6.10844L9.89127 2.67407Z"
								fill="#BFC5D2"
							/>
							<path
								d="M15.5109 1.47249L14.5299 0.491498C13.8743 -0.16415 12.7315 -0.163515 12.0767 0.491498L10.875 1.69316L14.3092 5.12741L15.5109 3.92574C15.8384 3.59836 16.0188 3.16262 16.0188 2.69918C16.0188 2.23574 15.8384 1.8 15.5109 1.47249Z"
								fill="#BFC5D2"
							/>
						</svg>
					</div>
				)}

				{children}
			</div>
		</div>
	);
};
