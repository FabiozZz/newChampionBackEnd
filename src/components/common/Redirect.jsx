import React from 'react';
import classes from './common.module.css';
import { useHistory } from 'react-router';

export const Redirect = ({ title, padding = false, to }) => {
	const history = useHistory();

	const goBack = () => {
		if (to) {
			history.push(to);
		} else {
			history.goBack();
		}
	};

	return (
		<div className={`${padding ? classes.wrapper_redirect_p : classes.wrapper_redirect}`}>
			<div onClick={goBack} className={classes.wrapper_redirect__svg}>
				<svg
					width="16"
					height="24"
					viewBox="0 0 16 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1.48618 10.2947C1.608 10.1733 1.74016 10.0709 1.8792 9.98177L11.1808 0.680602C12.0882 -0.226398 13.5604 -0.226829 14.4683 0.681033C15.3762 1.58846 15.3762 3.06024 14.4683 3.96853L6.45768 11.9792L14.5096 20.0315C15.4175 20.939 15.4175 22.4103 14.5096 23.319C14.0555 23.7736 13.4601 24 12.8661 24C12.272 24 11.6763 23.7736 11.2226 23.319L1.8792 13.9748C1.74016 13.8857 1.60714 13.7833 1.48618 13.6619C1.02213 13.1978 0.798289 12.5865 0.809482 11.9783C0.798289 11.37 1.02213 10.7592 1.48618 10.2947Z"
						fill="#69707F"
					/>
				</svg>
			</div>
			<h1 className={classes.wrapper_redirect__title}>{title}</h1>
		</div>
	);
};
