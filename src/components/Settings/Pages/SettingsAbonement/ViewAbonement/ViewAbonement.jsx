import React from 'react';
import classes from './view.module.css';
import {Redirect} from "../../../../common/Redirect";
import {NavLink} from "react-router-dom";
import edit_profile from "../../../../../assets/images/edit_profile.svg";
import HeaderNav from "../../../../common/HeaderNav";

export const ViewAbonement = () => {
    return (
        <>
            <HeaderNav/>

            <Redirect title={'Стандарт'} padding={true}/>

            <div className={classes.wrapper}>
                <div className={classes.block}>
                    <div className={classes.info_abonement}>
                        <div className={classes.line}>
                            <p className={classes.label}>филиал: <span className={classes.res}>Все</span></p>
                            <p className={classes.label}>продолжительность в днях: <span className={classes.res}>30</span></p>
                        </div>
                        <div className={classes.line}>
                            <p className={classes.label}>количество тренировок: <span className={classes.res}>Все</span></p>
                            <p className={classes.label}>продолжительность в днях: <span className={classes.res}>30</span></p>
                        </div>
                        <NavLink className={classes.edit} to={`/settings/abonement/edit/1`}>
                            <img src={edit_profile} alt="edit_profile"/>
                        </NavLink>
                    </div>

                    <div className={classes.info_prices}>
                        <h3 className={classes.header}>цены для возрастной группы &laquo;дети&raquo;</h3>
                        <div className={classes.table}>

                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>новый</p>
                            </div>
                            <p className={classes.price}>3900&#8381;</p>

                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>бронзовый</p>
                            </div>
                            <p className={classes.price}>3500&#8381;</p>

                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>золотой</p>
                            </div>
                            <p className={classes.price}>3200&#8381;</p>

                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>рубиновый</p>
                            </div>
                            <p className={classes.price}>3100&#8381;</p>

                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>сапфировый</p>
                            </div>
                            <p className={classes.price}>3000&#8381;</p>

                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>брилиантовый</p>
                            </div>
                            <p className={classes.price}>3900&#8381;</p>

                        </div>
                    </div>

                    <div className={classes.info_prices}>
                        <h3 className={classes.header}>цены для возрастной группы &laquo;подростки&raquo;</h3>

                        <div className={classes.table}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>новый</p>
                            </div>
                            <p className={classes.price}>3900&#8381;</p>

                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>бронзовый</p>
                            </div>
                            <p className={classes.price}>3500&#8381;</p>

                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>золотой</p>
                            </div>
                            <p className={classes.price}>3200&#8381;</p>

                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>рубиновый</p>
                            </div>
                            <p className={classes.price}>3100&#8381;</p>

                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>сапфировый</p>
                            </div>
                            <p className={classes.price}>3000&#8381;</p>

                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>брилиантовый</p>
                            </div>
                            <p className={classes.price}>3900&#8381;</p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};