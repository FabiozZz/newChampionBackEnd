import React, { useState } from 'react';
import { DataPickerRange } from '../../../../utils/DataPickerRange/DataPickerRange';
import { OtherInput } from '../../../../utils/OtherInput/OtherInput';
import classes from './pay.module.css';

export const ProfilePay = ({profile}) => {
    const [date, setDate] = useState({
        from: '',
        to: ''
    })
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
                    <p className={classes.table_caption}>Сумма оплаты за все время: <span className={classes.table_period}>999 999 &#8381;</span></p>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th>дата</th>
                                <th>абонимент</th>
                                <th>статус</th>
                                <th>сумма</th>
                                <th >скидка</th>
                                <th>оплачено</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10.02.2021</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.03.2021</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.04.2021</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.05.2021</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.06.2021</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.07.2021</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.08.2021</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.09.2021</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.10.2021</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.11.2021</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.12.2021</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.01.2022</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.02.2022</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.03.2022</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                            <tr>
                                <td>10.03.2022</td>
                                <td>NONSTOP</td>
                                <td>Брилиантовый</td>
                                <td>3200 &#8381;</td>
                                <td>10%</td>
                                <td>2 880 &#8381;</td>
                            </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
