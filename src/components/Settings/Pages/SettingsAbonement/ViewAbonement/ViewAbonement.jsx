import React, {useEffect, useLayoutEffect, useState} from 'react';
import classes from './view.module.css';
import {Redirect} from "../../../../common/Redirect";
import {NavLink} from "react-router-dom";
import edit_profile from "../../../../../assets/images/edit_profile.svg";
import HeaderNav from "../../../../common/HeaderNav";
import {useDispatch, useSelector} from "react-redux";
import {clear_current_abonement} from "../../../../../store/Actions/settingsAbonementActions";

export const ViewAbonement = () => {
    const abonement = useSelector(state => state.settings_abonement);
    const {current_abonement, ages,loading} = abonement;
    const [renderList, setRender] = useState([]);

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (current_abonement?.prices.length) {
            console.log(current_abonement.prices);
            let newArr = [];
            for (let age_g = 0; age_g < ages.length; age_g++) {
                let tempObj = {};
                let tempArr = [];
                tempObj = {id: ages[age_g].id, name: ages[age_g].label, price: []};
                for (let dataPrice = 0; dataPrice < current_abonement.prices.length; dataPrice++) {

                    if (tempObj.id === current_abonement.prices[dataPrice].age_group.id) {
                        tempArr.push({
                            id: current_abonement.prices[dataPrice].level.id,
                            name: current_abonement.prices[dataPrice].level.name,
                            price: current_abonement.prices[dataPrice].price
                        });
                    }

                }
                tempObj = {
                    ...tempObj, price: tempArr
                };
                newArr.push(tempObj);
            }
            setRender(newArr);
        }
    },[abonement, ages, current_abonement, dispatch]);

    useEffect(() => {
        return () => dispatch(clear_current_abonement());
    },[dispatch]);

    return (
        <>
            <HeaderNav/>

            <Redirect title={`${current_abonement?.name}`} padding={true}/>

            <div className={classes.wrapper}>
                <div className={classes.block}>
                    <div className={classes.info_abonement}>
                        <div className={classes.line}>
                            <p className={classes.label}>филиал: <span className={classes.res}>Все</span></p>
                            <p className={classes.label}>продолжительность в днях: <span
                                className={classes.res}>{current_abonement?.days_duration>9998?<span
                                dangerouslySetInnerHTML={{__html: '&#8734;'}}/>:current_abonement?.days_duration}</span></p>
                        </div>
                        <div className={classes.line}>
                            <p className={classes.label}>количество тренировок: <span
                                className={classes.res}>{current_abonement?.train_quantity>9998?<span
                                dangerouslySetInnerHTML={{__html: '&#8734;'}}/>:current_abonement?.train_quantity}</span></p>
                            <p className={classes.label}>{current_abonement?.is_personal ? 'Персональный тариф' : 'Тариф для групповых тренировок'}</p>
                        </div>
                        <NavLink className={classes.edit} to={`/settings/abonement/edit/1`}>
                            <img src={edit_profile} alt="edit_profile"/>
                        </NavLink>
                    </div>

                    {renderList.map(price => {
                        return (
                            <div key={price.id} className={classes.info_prices}>
                                <h3 className={classes.header}>цены для возрастной
                                    группы &laquo;{price.name}&raquo;</h3>
                                <div className={classes.table}>
                                    {price.price.map(item => {
                                        return (
                                            <React.Fragment key={item.id}>
                                                <div className={classes.card}>
                                                    <img width={22.87} height={15.55} alt=""/>
                                                    <p className={classes.text}>{item.name}</p>
                                                </div>
                                                <p className={classes.price}>{item.price}&#8381;</p>
                                            </React.Fragment>
                                        );
                                    })}

                                    {/*<div className={classes.card}>*/}
                                    {/*    <img width={22.87} height={15.55} alt=""/>*/}
                                    {/*    <p className={classes.text}>бронзовый</p>*/}
                                    {/*</div>*/}
                                    {/*<p className={classes.price}>3500&#8381;</p>*/}

                                    {/*<div className={classes.card}>*/}
                                    {/*    <img width={22.87} height={15.55} alt=""/>*/}
                                    {/*    <p className={classes.text}>золотой</p>*/}
                                    {/*</div>*/}
                                    {/*<p className={classes.price}>3200&#8381;</p>*/}

                                    {/*<div className={classes.card}>*/}
                                    {/*    <img width={22.87} height={15.55} alt=""/>*/}
                                    {/*    <p className={classes.text}>рубиновый</p>*/}
                                    {/*</div>*/}
                                    {/*<p className={classes.price}>3100&#8381;</p>*/}

                                    {/*<div className={classes.card}>*/}
                                    {/*    <img width={22.87} height={15.55} alt=""/>*/}
                                    {/*    <p className={classes.text}>сапфировый</p>*/}
                                    {/*</div>*/}
                                    {/*<p className={classes.price}>3000&#8381;</p>*/}

                                    {/*<div className={classes.card}>*/}
                                    {/*    <img width={22.87} height={15.55} alt=""/>*/}
                                    {/*    <p className={classes.text}>брилиантовый</p>*/}
                                    {/*</div>*/}
                                    {/*<p className={classes.price}>3900&#8381;</p>*/}

                                </div>
                            </div>

                        );
                    })}


                </div>
            </div>
        </>
    );
};