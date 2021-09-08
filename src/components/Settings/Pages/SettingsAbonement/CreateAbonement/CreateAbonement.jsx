import React from 'react';
import classes from './create.module.css';
import {Redirect} from "../../../../common/Redirect";
import {OtherInput} from "../../../../../utils/OtherInput/OtherInput";
import {Radio} from "antd";
import './radio.css';
import {Button} from "../../../../../utils/Buttons/Button";
import HeaderNav from "../../../../common/HeaderNav";

export const CreateAbonement = () => {
    return (
        <>
            <HeaderNav/>

            <Redirect padding={true} title={'Добавить тариф'}/>

            <div className={classes.wrapper}>
                <form className={classes.block}>

                    <div className={classes.create_section}>

                        <div className={classes.fields}>
                            <OtherInput label={'название тарифа'}/>
                            <OtherInput label={'филиалы'}/>
                            <OtherInput label={'продолжительность в днях'}/>
                            <OtherInput label={'не заполнено'}/>
                        </div>

                        <Radio.Group className={classes.radio_field}>
                            <Radio  value={false}>Первональная тариф</Radio>
                            <Radio value={true}>Тариф для групповых тренировок</Radio>

                        </Radio.Group>
                        {/*<div className={classes.check}>*/}
                        {/*    <RadioBtn name={'is_personal'}/>*/}
                        {/*    <span>Первональная тариф</span>*/}
                        {/*</div>*/}
                        {/*<div className={classes.check}>*/}
                        {/*    <RadioBtn name={'is_personal'}/>*/}
                        {/*    <span>Тариф для групповых тренировок</span>*/}
                        {/*</div>*/}

                    </div>

                    <div className={classes.wrapper_price}>
                        <h3 className={classes.header}>цены для возрастной группы &laquo;дети&raquo;</h3>

                        <div className={classes.prices_block}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>Новый</p>
                            </div>
                            <div className={classes.field}>
                                <OtherInput label={'цена в рублях'}/>
                            </div>
                        </div>

                        <div className={classes.prices_block}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>Бронзовый</p>
                            </div>
                            <div className={classes.field}>
                                <OtherInput label={'цена в рублях'}/>
                            </div>
                        </div>

                        <div className={classes.prices_block}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>Золотой</p>
                            </div>
                            <div className={classes.field}>
                                <OtherInput label={'цена в рублях'}/>
                            </div>
                        </div>

                        <div className={classes.prices_block}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>Рубиновый</p>
                            </div>
                            <div className={classes.field}>
                                <OtherInput label={'цена в рублях'}/>
                            </div>
                        </div>

                        <div className={classes.prices_block}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>Сапфировый</p>
                            </div>
                            <div className={classes.field}>
                                <OtherInput label={'цена в рублях'}/>
                            </div>
                        </div>

                        <div className={classes.prices_block}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>Бриллиантовый</p>
                            </div>
                            <div className={classes.field}>
                                <OtherInput label={'цена в рублях'}/>
                            </div>
                        </div>

                    </div>

                    <div className={classes.wrapper_price}>
                        <h3 className={classes.header}>цены для возрастной группы &laquo;подростки&raquo;</h3>

                        <div className={classes.prices_block}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>Новый</p>
                            </div>
                            <div className={classes.field}>
                                <OtherInput label={'цена в рублях'}/>
                            </div>
                        </div>

                        <div className={classes.prices_block}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>Бронзовый</p>
                            </div>
                            <div className={classes.field}>
                                <OtherInput label={'цена в рублях'}/>
                            </div>
                        </div>

                        <div className={classes.prices_block}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>Золотой</p>
                            </div>
                            <div className={classes.field}>
                                <OtherInput label={'цена в рублях'}/>
                            </div>
                        </div>

                        <div className={classes.prices_block}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>Рубиновый</p>
                            </div>
                            <div className={classes.field}>
                                <OtherInput label={'цена в рублях'}/>
                            </div>
                        </div>

                        <div className={classes.prices_block}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>Сапфировый</p>
                            </div>
                            <div className={classes.field}>
                                <OtherInput label={'цена в рублях'}/>
                            </div>
                        </div>

                        <div className={classes.prices_block}>
                            <div className={classes.card}>
                                <img width={22.87} height={15.55} alt=""/>
                                <p className={classes.text}>Бриллиантовый</p>
                            </div>
                            <div className={classes.field}>
                                <OtherInput label={'цена в рублях'}/>
                            </div>
                        </div>

                    </div>

                    <div className={classes.submit}>
                        <Button factor={'success'} text={'Сохранить тариф'} size={'auto'}/>
                    </div>

                </form>
            </div>
        </>
    );
};