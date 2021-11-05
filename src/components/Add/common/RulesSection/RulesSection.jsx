import React from 'react';
import classes from '../../add.module.css';
import { CheckboxBtn } from '../../../../utils/CheckboxBtn/CheckboxBtn';

/**
 * компонент визуализации установки флагов принятия правил клуба
 *
 * @param personal флаг принятия обработки персональных данных
 * @param setPersonal функция установки/снятии флага personal
 * @param rules флаг принятия правил посещения и зачисления в клуб
 * @param setRules функция установки/снятия флага rules
 * @returns {JSX.Element}
 * @constructor
 */
export const RulesSection = ({ personal, setPersonal, rules, setRules }) => {
	return (
		<div className={`${classes.polytic}`}>
			<div className={`${classes.polytic__block}`}>
				<CheckboxBtn isChecked={personal} setIsChecked={setPersonal} />
				<p className={classes.polytic__text}>
					Согласен на обработку моих{' '}
					<span className={classes.polytic__sub_text}>персональных данных</span>
				</p>
			</div>

			<div className={`${classes.polytic__block}`}>
				<CheckboxBtn isChecked={rules} setIsChecked={setRules} />
				<p className={classes.polytic__text}>
					С{' '}
					<span className={classes.polytic__sub_text}>
						правилами зачисления и посещения спортивного клуба RUSH
					</span>{' '}
					ознакомлен
				</p>
			</div>
		</div>
	);
};
