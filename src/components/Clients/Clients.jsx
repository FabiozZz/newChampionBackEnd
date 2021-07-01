import React, {useEffect} from 'react';
import classes from "./clients.module.css";
import HeaderNav from "../common/HeaderNav";
import {Redirect} from "../common/Redirect";
import {FilterClientsSection} from "./FilterClientSection/FilterClientsSection";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Api from "../../Api/Api";
import {error} from "../TimeTable/TimeTable";
import {
    load_abonement_for_all, load_clients_for_all, load_couch_for_all, load_filial_for_all,
    load_group_for_all,
    load_sort_list_for_all,
    load_status_list_for_all,
    load_types_list_for_all
} from "../../Acnions/clientsActions";
import cn from "classnames";

import imageBirthDay from '../../assets/images/clientsListCard/giftbox.svg'
import imageCash from '../../assets/images/clientsListCard/cash.svg'
import imageTime from '../../assets/images/clientsListCard/clock.svg'
import imageCouch from '../../assets/images/clientsListCard/couch.svg'
import imageCourse from '../../assets/images/clientsListCard/course.svg'
import imageCountAbiniment from '../../assets/images/clientsListCard/countAbiniment.svg'
import imagePhone from '../../assets/images/clientsListCard/phone.svg'
import imageHealth from '../../assets/images/clientsListCard/health.svg'
import {ageToString} from "../../helpers/common";
import { SortTable } from './SortTable/SortTable';


export const Clients = () => {

    const clientsList = useSelector(state => state.clientsList);
    const clients = clientsList.filterClients.length?clientsList.filterClients:clientsList.allClients;
    const dispatch = useDispatch();

    useEffect(() => {
        let source = axios.CancelToken.source();
        (async () => {
            await Api.getAllClients(source.token).then(r => {
                dispatch(load_clients_for_all(r.data));
            });
            await Api.getTypeList(source.token).then(r => {
                dispatch(load_types_list_for_all(r.data));
                console.log(r.data)
            });
            await Api.getGroupList(source.token).then(r => {
                dispatch(load_group_for_all(r.data));
            });
            await Api.getStatusListForClients(source.token).then(r => {
                dispatch(load_status_list_for_all(r.data));
            });
            await Api.getAbonimentList(source.token).then(r => {
                dispatch(load_abonement_for_all(r.data));
            });
            await Api.getCouchList(source.token).then(r => {
                dispatch(load_couch_for_all(r.data));
            });
            await Api.getFilialList(source.token).then(r => {
                dispatch(load_filial_for_all(r.data));
            });
            await Api.getSortListForClients(source.token).then(r => {
                dispatch(load_sort_list_for_all(r.data));
            });
        })().catch(e => {
            if (axios.isCancel(e)) {
                error(e.message);
            }
        });
        return () => source.cancel('Операция прервана');
    }, [dispatch]);

    return (
        <>
            <div className="col-12">
                <HeaderNav/>
            </div>
            <div className="col-12">
                <Redirect title={"Список клиентов"}/>
            </div>
            <div className="col-12">
                <FilterClientsSection/>
            </div>
            <div className={'col-12'}>
                <SortTable clients={clients}/>
            </div>
            <div className={cn('col-12', classes.list_col)}>
                {clients.map(client=>{
                    return(
                        <div key={client.id} className={classes.wr_card_col}>

                            <div className={classes.list_col__item}>

                                <p className={classes.list_col__item_name}>
                                    {client.lastName} {client.name} {client.middleName}
                                </p>

                                <div className={classes.list_col__item_block}>
                                    <svg width="187" height="1" viewBox="0 0 187 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="0.5" x2="187" y2="0.5" stroke="#EEF3F5" strokeDasharray="12 12"/>
                                    </svg>
                                </div>

                                <div className={classes.list_col__item_block}>
                                    <img src={imageBirthDay} alt="birthday"/>
                                    <p className={classes.list_col__item_block_text}>{client.birthdayDate} ({ageToString(client.birthdayDate)})</p>
                                </div>
                                {client.phone?
                                    <div className={classes.list_col__item_block}>
                                        <img src={imagePhone} alt="phone"/>
                                        <span className={classes.list_col__item_block_text}>{client.phone}</span>
                                    </div>:null
                                }

                                {client.status !== 0    ?
                                    <>
                                    <div className={classes.list_col__item_block}>
                                        <svg width="187" height="1" viewBox="0 0 187 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="187" y2="0.5" stroke="#EEF3F5" strokeDasharray="12 12"/>
                                        </svg>
                                    </div>
                                    <div className={classes.list_col__item_block}>
                                        <img src={client.img} alt=""/>
                                        <span className={classes.list_col__item_block_text}>{client.statusName} клиент</span>
                                    </div>

                                    <div className={classes.list_col__item_block}>
                                        <img src={imageTime} alt="time"/>
                                        <span className={classes.list_col__item_block_text}><b>{client.lessons}</b> занятий до <b>{client.cardTo}</b></span>
                                    </div>
                                    </>:null
                                }
                                {
                                    !client.is_Adult && client.health?
                                        <>
                                        <div className={classes.list_col__item_block}>
                                            <svg width="187" height="1" viewBox="0 0 187 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line y1="0.5" x2="187" y2="0.5" stroke="#EEF3F5" strokeDasharray="12 12"/>
                                            </svg>
                                        </div>
                                            <div className={classes.list_col__item_block}>
                                                <img src={imageHealth} alt="health"/>
                                                <span className={classes.list_col__item_block_text}>до {client.healthExpire}</span>
                                            </div>

                                        </>:null

                                }
                                <div className={classes.list_col__item_block}>
                                    <svg width="187" height="1" viewBox="0 0 187 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="0.5" x2="187" y2="0.5" stroke="#EEF3F5" strokeDasharray="12 12"/>
                                    </svg>
                                </div>

                                <div className={classes.list_col__item_block}>
                                    <img src={imageCourse} alt="time"/>
                                    <span className={classes.list_col__item_block_text}>{client.course}</span>
                                </div>
                                <div className={classes.list_col__item_block}>
                                    <img src={imageCouch} alt="time"/>
                                    <span className={classes.list_col__item_block_text}>{client.coach}</span>
                                </div>

                                {client.statusName !== (null||'')?
                                    <div className={classes.list_col__item_last_block}>
                                        <div className={classes.last_block__grid}>
                                            <img src={imageCountAbiniment} alt="time"/>
                                            <span className={classes.list_col__item_block_text}>{client.status}</span>
                                        </div>
                                        <div className={classes.last_block__grid}>
                                            <img src={imageCash} alt="time"/>
                                            <span className={classes.list_col__item_block_text}>{client.totalPay}&#8381;</span>
                                        </div>
                                    </div>:null
                                }


                            </div>
                        </div>

                    )
                })}
                {/*<div className={classes.list_col__item}></div>*/}
                {/*<div className={classes.list_col__item}></div>*/}
                {/*<div className={classes.list_col__item}></div>*/}
                {/*<div className={classes.list_col__item}></div>*/}
                {/*<div className={classes.list_col__item}></div>*/}
            </div>
        </>
    );
};