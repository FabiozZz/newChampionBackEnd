import React from 'react';
import classes from '../../Add/add.module.css';
import { Button } from 'utils/Buttons/Button';

/**
 * компонент визуализации группы кнопок для сохранения или отмены сохранения
 *
 * @property {boolean} save переменная отражает запрос
 * @property {function} goBack функция возврата на предидущую страницу
 * @property {boolean} personal флаг персональных данных
 * @property {boolean} rules флаг првил
 * @property {function} submit функция отправки данных на сервер
 * @returns {JSX.Element}
 * @constructor
 */
export const EndBtnGroupPay = ({
	submit_cash,
	submit_cashless,
	save,
	personal = true,
	rules = true,
}) => {
	return (
		<div className={`${classes.btn_group}`}>
			<span />
			<div className={`${classes.btn_group__item}`}>
				<Button
					size={'auto'}
					text={'сохранить и оплатить безналом'}
					click={submit_cashless}
					disabled={(!personal || !rules) && !save}
				/>
			</div>

			<div className={`${classes.btn_group__item}`}>
				<Button
					size={'auto'}
					disabled={(!personal || !rules) && !save}
					click={submit_cash}
					text={'Сохранить и оплатить наличными'}
					factor={'success'}
				/>
			</div>
			<span />
		</div>
	);
};
