import React from 'react';
import cn from "classnames";
import classes from "../../stuffs.module.css";
import imageBirthDay from "../../../../assets/images/clientsListCard/giftbox.svg";
import { ageToString} from "../../../../../../../../next.js/with-redux-thunk-app/components/halpers/common";
import imagePhone from "../../../../assets/images/clientsListCard/phone.svg";
import { NavLink } from "react-router-dom";

export const StuffsRow = ({ clients }) => {
    return (
            <div className={cn( classes.list_row)}>
                {clients.map(client => {
                    // let rowBlock = client.status <= 0 ? classes.item_block_not_status : classes.item_block;
                    return (
                        <NavLink key={client.id} className={classes.wr_card_row} to={`/profile/${client.id}`}>

                            <div className={classes.list_row__item}>
                                <div className={classes.item_name_and_notif}>
                                    {client.is_archive ?
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.8188 4.24097H3.18025C2.2164 4.24097 1.44531 5.01205 1.44531 5.9759V14.265C1.44531 15.2289 2.2164 16 3.18025 16H12.8188C13.7827 16 14.5537 15.2289 14.5537 14.265V5.9759C14.5537 5.01205 13.7827 4.24097 12.8188 4.24097ZM10.7562 8.92529C10.7562 9.253 10.5056 9.5036 10.1778 9.5036H5.82122C5.49351 9.5036 5.2429 9.253 5.2429 8.92529V7.46024C5.2429 7.13253 5.49351 6.88192 5.82122 6.88192C6.14893 6.88192 6.39953 7.13253 6.39953 7.46024V8.34698H9.59953V7.46024C9.59953 7.13253 9.85013 6.88192 10.1778 6.88192C10.5056 6.88192 10.7562 7.13253 10.7562 7.46024V8.92529Z"
                                                fill="#BFC5D2" />
                                            <path
                                                d="M12.8184 2.12048H3.17988C2.85216 2.12048 2.60156 2.37109 2.60156 2.6988C2.60156 3.02651 2.85216 3.27711 3.17988 3.27711H12.8184C13.1461 3.27711 13.3967 3.02651 13.3967 2.6988C13.3967 2.37109 13.1461 2.12048 12.8184 2.12048Z"
                                                fill="#BFC5D2" />
                                            <path
                                                d="M11.8556 0H4.14472C3.81701 0 3.56641 0.250603 3.56641 0.578314C3.56641 0.906026 3.81701 1.15663 4.14472 1.15663H11.8556C12.1833 1.15663 12.4339 0.906026 12.4339 0.578314C12.4339 0.250603 12.1833 0 11.8556 0Z"
                                                fill="#BFC5D2" />
                                        </svg>
                                        // :
                                        // client.call ?
                                        //     <img width={16} height={16} src={IMageCall} alt=""/>
                                        : null
                                    }

                                    <p className={classes.item_name}>
                                        {client.last_name} {client.first_name} {client.middle_name}
                                    </p>

                                </div>
                                <div className={classes.item_birth_and_phone}>
                                    <div className={classes.group_block}>
                                        <img src={imageBirthDay} alt={clients.date_of_birth} />
                                        <span
                                            className={classes.item_text}>{client.date_of_birth} ({ageToString(client.date_of_birth)})</span>
                                    </div>
                                    <div className={classes.group_block}>
                                        {client.phone_number ?
                                            <>
                                                <img src={imagePhone} alt={'phone'} />
                                                <span
                                                    className={classes.item_text}>{client.phone_number}</span>
                                            </> : null
                                        }
                                    </div>

                                </div>

                                {/* <div className={classes.item_other_info}> */}
                                    {/* <div className={classes.item_block}>
                                        <div className={classes.group_block}>
                                            <img src={imageCourse} alt="course" />
                                            <span className={classes.item_text}>{client.course}</span>

                                        </div> */}
                                        {/* {
                                            client.status<=0?null:
                                                <div className={classes.pay}>
                                                    <div className={classes.group_block}>
                                                        <img src={imageCountAbiniment} alt="count"/>
                                                        <span className={classes.item_text}>{client.status}</span>
                                                    </div>
                                                    <div className={classes.group_block}>
                                                        <img src={imageCash} alt="cash"/>
                                                        <span className={classes.item_text}>{client.totalPay}&#8381;</span>
                                                    </div>
                                                </div>
                                        } */}
                                    {/* </div> */}

                                    {/* <div className={rowBlock}>
                                        <div className={classes.group_block}>
                                            <img src={imageCouch} alt="couch"/>
                                            <span className={classes.item_text}>{client.coach}</span>
                                        </div>

                                        {!client.is_Adult && client.health ?
                                            <div className={classes.group_block}>
                                                <img src={imageHealth} alt="справка"/>
                                                <span className={classes.item_text}>до {client.healthExpire}</span>
                                            </div>
                                            :null
                                        }
                                    </div> */}
                                    {/* {
                                        client.status <= 0 ? null :
                                            <div className={classes.item_block}>
                                                <div className={classes.group_block}>
                                                    <img src={client.img} alt="card" />
                                                    <span className={classes.item_text}>{client.abonement.name} {client.statusName.name} клиент</span>
                                                </div>
                                                <div className={classes.group_block}>
                                                    <img src={imageTime} alt="time" />
                                                    <span className={classes.item_text}><b>{client.abonement.lessons}</b> {declOfLessonsNum(client.abonement.lessons)} до <b>{client.cardTo}</b></span>
                                                </div>
                                            </div>

                                    } */}
                                {/* </div> */}

                            </div>
                        </NavLink>

                    );
                })}
            </div>
    );
};

