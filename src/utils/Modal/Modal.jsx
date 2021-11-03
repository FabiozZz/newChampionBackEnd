import React, { useEffect } from 'react';
import classes from './modal.module.css';
import close from '../../assets/images/close_modal.svg';

/**
 * @param hide - принимает булевое зщначение, открыта модалка или нет
 * @param toggle - принимает функцию для смнены hide
 * @param children - то что должна скрывать модалка
 * @returns JSX
 */
export const Modal = ({ toggle, children, size = 'sm' }) => {
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
				{children}
			</div>
		</div>
	);
};
