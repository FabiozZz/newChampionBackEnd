import { replaceDateforFront } from 'helpers/common';
import React, { useState } from 'react';
import { DataPickerRange } from '../../../../utils/DataPickerRange/DataPickerRange';
import classes from './pay.module.css';

export const ProfilePay = ({ profile }) => {
	const { pay_list } = profile;
	const data = [];
	console.log(profile);
	const [date /*, setDate*/] = useState({
		from: '',
		to: '',
	});

	return (
		<>
			<div className={classes.wrapper_search}>
				<div className={classes.search}>
					<DataPickerRange label={'за период'} value={date} />
				</div>
			</div>
			<div className={classes.wrapper_result}>
				<p className={classes.title}>история оплат</p>
				<div className={classes.wrapper_table}>
					{pay_list && pay_list.length ? (
						<>
							<p className={classes.table_caption}>
								Сумма оплаты за все время:{' '}
								<span className={classes.table_period}>
									{pay_list.reduce((acc, item) => (acc += +item.total), 0).toLocaleString('ru-RU')}{' '}
									&#8381;
								</span>
							</p>
							<table className={classes.table}>
								<thead>
									<tr>
										<th>дата</th>
										<th>покупка</th>
										<th>сумма</th>
										<th>скидка</th>
										<th>оплачено</th>
										<th>тип оплаты</th>
									</tr>
								</thead>
								<tbody>
									{pay_list.map(pay => {
										return (
											<tr>
												<td>{replaceDateforFront(pay.date)}</td>
												<td>
													{pay.info.rate.name} ({pay.info.client_level.name})
												</td>
												<td>{Number(pay.total).toLocaleString('ru-RU')} &#8381;</td>
												<td>пока нет</td>
												<td>{Number(pay.total).toLocaleString('ru-RU')} &#8381;</td>
												<td>{pay.info.payment_method}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</>
					) : (
						<span className={classes.mute_text}>Клиент ещё ничего не оплатил</span>
					)}
				</div>
			</div>
		</>
	);
};
