import React from 'react';
import cn from 'classnames';
import classes from '../clients.module.css';

/**
 * Компонент якоря при скролле страницы
 *
 * @param select
 * @param clear
 * @param ancor
 * @returns {JSX.Element}
 * @constructor
 */
export const AnchorBox = ({ select, clear, ancor }) => {
	return (
		<div
			className={cn(
				'col-12',
				{ [classes.ancor]: ancor && select },
				{ [classes.ancor_fixed]: !select }
			)}>
			<div className={cn('row', classes.ancor_wrapper)}>
				{ancor && (
					<div className={classes.ancor_box}>
						<a href="#filters" className={classes.ancor__link}>
							Показать фильтры
						</a>
						<svg
							width="8"
							height="4"
							viewBox="0 0 8 4"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M6.22373 3.8316C6.49892 4.07621 6.9203 4.05142 7.16491 3.77624C7.40952 3.50105 7.38474 3.07967 7.10955 2.83506L4.10955 0.168393C3.85696 -0.0561317 3.47633 -0.0561317 3.22374 0.168393L0.223743 2.83505C-0.0514454 3.07967 -0.0762329 3.50105 0.168379 3.77624C0.41299 4.05142 0.834372 4.07621 1.10956 3.8316L3.66665 1.55863L6.22373 3.8316Z"
								fill="#43BF41"
							/>
						</svg>
					</div>
				)}
				{select && (
					<div className={classes.ancor_clear} onClick={clear}>
						Очистить
					</div>
				)}
			</div>
		</div>
	);
};
