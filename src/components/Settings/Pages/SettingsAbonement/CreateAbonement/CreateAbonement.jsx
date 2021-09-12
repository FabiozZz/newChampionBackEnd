import React, {useEffect, useState} from 'react';
import classes from './create.module.css';
import {Redirect} from "../../../../common/Redirect";
import {OtherInput} from "../../../../../utils/OtherInput/OtherInput";
import {Radio} from "antd";
import './radio.css';
import {Button} from "../../../../../utils/Buttons/Button";
import HeaderNav from "../../../../common/HeaderNav";
import {useDispatch, useSelector} from "react-redux";
import {start_load_data_settings_abonement} from "../../../../../store/Actions/settingsAbonementActions";

export const CreateAbonement = () => {
    const settings = useSelector(state=>state.settings_aboniment)
    console.log(settings)
    const dispatch = useDispatch();
    if (!settings) {
        dispatch(start_load_data_settings_abonement());
    }
    const [is_personal, setIsPersonal] = useState(null);
    const changeIsPersonal = (e) => {
        setIsPersonal(e.target.value)
    };
    const [data, setData] = useState({
        name:'',
        train_quantity:'',
        days_duration:'',
    });
    const [prices, setPrices] = useState([]);

    const handleChangeInput = (e) =>{
        let name = e.target.name;
        setData(prevState => ({...prevState,[name]:e.target.value}))
    }
    let array = [];
    if (settings) {
        if (settings.ages && settings.statuses) {

            let newJbj = {};
            for (let i = 0; i < settings.ages; i++) {
                newJbj = {...newJbj, ...settings.ages[i]};
                for (let k = 0; k < settings.statuses; k++) {
                    newJbj = {...newJbj, ...settings.statuses[k], price: ''};
                }
                array.push(newJbj);
            }
            setPrices(array)
        }

    }
    console.log(prices)

    return (
        <>
            <HeaderNav/>

            <Redirect padding={true} title={'Добавить тариф'}/>

            <div className={classes.wrapper}>
                <form className={classes.block}>

                    <div className={classes.create_section}>

                        <div className={classes.fields}>
                            <OtherInput label={'название тарифа'} name={'name'} setValue={handleChangeInput} value={data.name}/>
                            {/*<OtherInput label={'филиалы'}/>*/}
                            <OtherInput label={'продолжительность в днях'} type={'number'} name={'days_duration'} setValue={handleChangeInput} value={data.days_duration}/>
                            <OtherInput label={'не заполнено'} type={'number'} name={'train_quantity'} setValue={handleChangeInput} value={data.train_quantity}/>
                        </div>

                        <Radio.Group className={classes.radio_field} onChange={changeIsPersonal} value={is_personal}>
                            <Radio  value={false}>Первональная тариф</Radio>
                            <Radio value={true}>Тариф для групповых тренировок</Radio>
                        </Radio.Group>

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
                        <Button factor={'success'} click={()=>console.log(data)} text={'Сохранить тариф'} size={'auto'}/>
                    </div>

                </form>
            </div>
        </>
    );
};