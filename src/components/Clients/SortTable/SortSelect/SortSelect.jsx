import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getKeyByValue } from 'helpers/sortSelect/sort';
import classes from '../sort.module.css';

/**
 * Компонент выборки по статусам
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const SortSelect = () => {
	// const dispatch = useDispatch();
	// const refInput = useRef(null);

	const clientsLIst = useSelector(state => state.clientsList);
	const { sortSection /*,allClients,filterClients*/ } = clientsLIst;
	const [sortVariable, setSortVariable] = useState({
		name: '',
		type: '',
		field: '',
	});
	useEffect(() => {
		if (sortSection.length) {
			setSortVariable({
				name: sortSection[0].name,
				type: sortSection[0].type,
				field: getKeyByValue(sortSection[0], sortSection[0].name),
			});
		}
	}, [sortSection]);
	const [hide, setHide] = useState(false);
	const toggleHideOption = () => {
		setHide(!hide);
	};
	// const selectOpion = (e)=>{
	//     setSortVariable(e.target.value);
	// };
	return (
		<>
			<span onClick={toggleHideOption} className={classes.sort_select}>
				<span className={classes.sort_select__text}>{sortVariable.name}</span>

				{sortVariable.type === '' ? null : sortVariable.type === 'asc' ? (
					<svg
						className={classes.sort_select__img}
						width="8"
						height="4"
						viewBox="0 0 8 4"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.10958 0.168401C0.834393 -0.076211 0.413012 -0.0514238 0.168401 0.223764C-0.076211 0.498952 -0.0514238 0.920333 0.223764 1.16494L3.22376 3.83161C3.47635 4.05613 3.85699 4.05613 4.10958 3.83161L7.10957 1.16494C7.38476 0.920333 7.40955 0.498952 7.16493 0.223764C6.92032 -0.0514238 6.49894 -0.076211 6.22375 0.168401L3.66667 2.44137L1.10958 0.168401Z"
							fill="#43BF41"
						/>
					</svg>
				) : (
					<svg
						className={classes.sort_select__img}
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
				)}
				{hide && (
					<>
						<div className={classes.arrow} />
						<div className={classes.wrapper_option}>
							{sortSection.map(item => {
								return (
									<div key={item.index} className={classes.sort_select__item}>
										<option
											onClick={() => {
												setSortVariable({
													name: item.name,
													type: item.type,
													field: getKeyByValue(item, item.name),
												});
												setHide(false);
											}}>
											{item.name}
										</option>
										{item.img && <img src={item.img} alt="some" />}
									</div>
								);
							})}
						</div>
					</>
				)}
			</span>
		</>
	);
};
