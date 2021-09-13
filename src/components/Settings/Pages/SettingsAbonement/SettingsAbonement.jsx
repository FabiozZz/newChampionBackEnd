import React from 'react';
import classes from './abonement.module.css';
import {Redirect} from "../../../common/Redirect";
import {Button} from "../../../../utils/Buttons/Button";
import {useSelector} from "react-redux";
import cn from "classnames";
import {forEach} from "react-bootstrap/ElementChildren";
import {useHistory} from "react-router";
import HeaderNav from "../../../common/HeaderNav";

export const SettingsAbonement = (children, func) => {
    const {abonements} = useSelector(state => state.settings_abonement);
    const history = useHistory();
    return (
        <>
            <HeaderNav/>

            <Redirect padding={true} title={'Тарифы'}/>
            <div className={classes.wrapper}>
                {abonements ?
                    <table cellSpacing={4} cellPadding={18} className={classes.table}>
                        <thead>
                        <tr>
                            <th>название</th>
                            <th>дни</th>
                            <th>занятия</th>
                            <th>филиал</th>
                            <th/>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {!!abonements.length&&abonements.map(item => {
                            const mouseMove = (e) => {
                                if (e.target.getAttribute('class') === classes.left) {
                                    for (let i = 0; i < e.currentTarget.children.length; i++) {
                                        let item = e.currentTarget.children[i];
                                        if (item.getAttribute('class') === classes.left) {
                                            item.style.backgroundColor = '#E0E3E9';
                                        }
                                    }
                                }
                            };
                            const mouseOut = (e) => {
                                if (e.target.getAttribute('class') === classes.left)
                                for (let i = 0; i < e.currentTarget.children.length;i++) {
                                    let item = e.currentTarget.children[i];
                                    if (item.getAttribute('class') === classes.left) {
                                        item.style.backgroundColor = null;
                                    }
                                }

                            };
                            return(
                                <tr onClick={()=> {
                                    history.push(`/settings/abonement/${item.id}`);
                                }} key={item.id} onMouseMove={mouseMove} onMouseOut={mouseOut}>
                                    <td className={classes.left}>{item.name}{item.is_personal?' (персональный)':null}</td>
                                    <td className={classes.left}>{item.days_duration>9998?<span
                                        dangerouslySetInnerHTML={{__html: '&#8734;'}}/>:item.days_duration}</td>
                                    <td className={classes.left}>{item.train_quantity>9998?<span
                                        dangerouslySetInnerHTML={{__html: '&#8734;'}}/>:item.train_quantity}</td>
                                    <td className={classes.left}>vjcrjdcrfz 130</td>
                                    <td onClick={(e)=> {
                                        e.stopPropagation();
                                        history.push(`/settings/abonement/edit/${item.id}`)
                                    }} className={classes.right}><svg  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.41845 4.00586L2.80893 10.6159C2.77568 10.6492 2.75167 10.6913 2.74023 10.7366L2.00763 13.6771C1.98572 13.7656 2.01173 13.8597 2.07633 13.9243C2.12521 13.9732 2.19181 14.0003 2.25993 14.0003C2.2808 14.0003 2.30214 13.9977 2.32291 13.9925L5.26342 13.2598C5.30925 13.2483 5.35088 13.2244 5.38414 13.1912L11.9942 6.58164L9.41845 4.00586Z" fill="#BFC5D2"/><path d="M13.6332 3.10437L12.8974 2.36862C12.4057 1.87689 11.5487 1.87736 11.0575 2.36862L10.1562 3.26987L12.7319 5.84555L13.6332 4.94431C13.8788 4.69877 14.0141 4.37196 14.0141 4.02439C14.0141 3.67681 13.8788 3.35 13.6332 3.10437Z" fill="#BFC5D2"/></svg></td>
                                    <td onClick={(e)=>e.stopPropagation()} className={classes.right}><svg  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5 4.00033C5 2.71166 6.04467 1.66699 7.33333 1.66699H8.66667C9.95533 1.66699 11 2.71166 11 4.00033L13.3333 4.00033C13.7015 4.00033 14 4.2988 14 4.66699C14 5.03518 13.7015 5.33366 13.3333 5.33366H12.6667V12.0003C12.6667 13.1049 11.7712 14.0003 10.6667 14.0003H5.33333C4.22876 14.0003 3.33333 13.1049 3.33333 12.0003V5.33366H2.66667C2.29848 5.33366 2 5.03518 2 4.66699C2 4.2988 2.29848 4.00033 2.66667 4.00033L5 4.00033ZM7.33333 7.33366C7.33333 6.96547 7.03486 6.66699 6.66667 6.66699C6.29848 6.66699 6 6.96547 6 7.33366V10.667C6 11.0352 6.29848 11.3337 6.66667 11.3337C7.03486 11.3337 7.33333 11.0352 7.33333 10.667V7.33366ZM10 7.33366C10 6.96547 9.70152 6.66699 9.33333 6.66699C8.96514 6.66699 8.66667 6.96547 8.66667 7.33366V10.667C8.66667 11.0352 8.96514 11.3337 9.33333 11.3337C9.70152 11.3337 10 11.0352 10 10.667V7.33366Z" fill="#BFC5D2"/></svg></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    :
                    <span className={classes.empty_data}>Вы ещё не добавили не одного тарифного плана</span>
                }
                <div className={classes.btn_add}>
                    <Button click={(e)=> {
                        e.stopPropagation();
                        history.push('/settings/abonement/create');
                    }} factor={'success'} size={"auto"} text={"Добавить тариф"}/>
                </div>
            </div>
        </>
    );
};