import React, {useEffect, useLayoutEffect, useState} from 'react';
import classes from './create.module.css';
import {Redirect} from "../../../../common/Redirect";
import {OtherInput} from "../../../../../utils/OtherInput/OtherInput";
import {Radio} from "antd";
import './radio.css';
import {Button} from "../../../../../utils/Buttons/Button";
import HeaderNav from "../../../../common/HeaderNav";
import {useDispatch, useSelector} from "react-redux";
import {
    start_load_data_settings_abonement,
    upload_abonement_data
} from "../../../../../store/Actions/settingsAbonementActions";
import {useHistory} from "react-router";

function useSome(download,result=[]) {

}

export const CreateAbonement = () => {
    const settings = useSelector(state => state.settings_abonement);
    const dispatch = useDispatch();
    const history = useHistory();
    const [is_personal, setIsPersonal] = useState(null);
    const changeIsPersonal = (e) => {
        setIsPersonal(e.target.value)
    };
    const [data, setData] = useState({
        name:'',
        train_quantity:'',
        days_duration:'',
    });
    const handleChangeInput = (e) =>{
        let name = e.target.name;
        let symbol = e.target.value;
        if (name !== 'name') {
            setData(prevState => ({...prevState,[name]:symbol.replace(/\D/gi, '')}));
        }else{
            setData(prevState => ({...prevState,[name]:symbol}));
        }
    }

    const [prices, setPrices] = useState([]);

    const handleChangePrice = (e,age,status)=>{
        setPrices(prevState => {
            let newArr = [...prevState];
            let age_group = newArr[age];
            let abonements = newArr[age].abonements;
            age_group.abonements[status] = {...abonements[status],price: e.target.value}

            return newArr
        })
    }

    useLayoutEffect(() => {
        let arr = [];
        let newJbj = {};
        for (let i = 0; i < settings.ages.length; i++) {
            newJbj = {...newJbj,  ...settings.ages[i],abonements:[]};
            for (let k = 0; k < settings.statuses.length; k++) {

                newJbj = {...newJbj, abonements: [ ...newJbj.abonements,{...settings.statuses[k], price: ''}]}
            }
            arr.push(newJbj);
        }
        setPrices(arr);
    },[settings]);
    // useState(() => {
    //     setPrices([...array])
    // },[ages,statuses]);

    const submitForm = (e) => {
        e.preventDefault();
        const arrPrice = [];
        let newObj = {};
        for (let ages = 0; ages < prices.length;ages++) {
            newObj = {age_group_id: prices[ages].id};
            for (let abonement = 0; abonement < prices[ages].abonements.length; abonement++) {
                newObj = {...newObj,level_id:prices[ages].abonements[abonement].id,price:prices[ages].abonements[abonement].price}
                arrPrice.push(newObj)
            }
        }
        const uploadData = {
            ...data, prices: arrPrice
        };

        try {
            dispatch(upload_abonement_data(uploadData));
            history.goBack();
        } catch (e) {
            console.log(e)
        }

    };

    return (
        <>
            <HeaderNav/>

            <Redirect padding={true} title={'Добавить тариф'}/>

            <div className={classes.wrapper}>
                <form className={classes.block} onSubmit={submitForm}>

                    <div className={classes.create_section}>

                        <div className={classes.fields}>
                            <OtherInput label={'название тарифа'} name={'name'} setValue={handleChangeInput}
                                        value={data.name}/>
                            {/*<OtherInput label={'филиалы'}/>*/}
                            <OtherInput label={'продолжительность в днях'} name={'days_duration'}
                                        setValue={handleChangeInput} value={data.days_duration}/>
                            <OtherInput label={'Количество тренировок'} name={'train_quantity'}
                                        setValue={handleChangeInput} value={data.train_quantity}/>
                        </div>

                        <Radio.Group className={classes.radio_field} onChange={changeIsPersonal} value={is_personal}>
                            <Radio value={false}>Первональная тариф</Radio>
                            <Radio value={true}>Тариф для групповых тренировок</Radio>
                        </Radio.Group>

                    </div>

                    {prices.sort((a,b)=>a.id>b.id?1:-1).map((item,age) => {
                        return (
                            <div key={age} className={classes.wrapper_price}>
                                <h3 className={classes.header}>цены для возрастной
                                    группы &laquo;{item.label}&raquo;</h3>

                                {item.abonements.map((abonement,status) => {
                                    return (
                                        <div key={status} className={classes.prices_block}>
                                            <div className={classes.card}>
                                                <img width={22.87} height={15.55} alt=""/>
                                                <p className={classes.text}>{abonement.name}</p>
                                            </div>
                                            <div className={classes.field}>
                                                <OtherInput label={'цена в рублях'} name={'price'} setValue={(e)=>handleChangePrice(e,age,status)} value={abonement.price}/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        );
                    })}

                    {/*<div className={classes.wrapper_price}>*/}
                    {/*    <h3 className={classes.header}>цены для возрастной группы &laquo;дети&raquo;</h3>*/}

                    {/*    <div className={classes.prices_block}>*/}
                    {/*        <div className={classes.card}>*/}
                    {/*            <img width={22.87} height={15.55} alt=""/>*/}
                    {/*            <p className={classes.text}>Новый</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.field}>*/}
                    {/*            <OtherInput label={'цена в рублях'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className={classes.prices_block}>*/}
                    {/*        <div className={classes.card}>*/}
                    {/*            <img width={22.87} height={15.55} alt=""/>*/}
                    {/*            <p className={classes.text}>Бронзовый</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.field}>*/}
                    {/*            <OtherInput label={'цена в рублях'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className={classes.prices_block}>*/}
                    {/*        <div className={classes.card}>*/}
                    {/*            <img width={22.87} height={15.55} alt=""/>*/}
                    {/*            <p className={classes.text}>Золотой</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.field}>*/}
                    {/*            <OtherInput label={'цена в рублях'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className={classes.prices_block}>*/}
                    {/*        <div className={classes.card}>*/}
                    {/*            <img width={22.87} height={15.55} alt=""/>*/}
                    {/*            <p className={classes.text}>Рубиновый</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.field}>*/}
                    {/*            <OtherInput label={'цена в рублях'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className={classes.prices_block}>*/}
                    {/*        <div className={classes.card}>*/}
                    {/*            <img width={22.87} height={15.55} alt=""/>*/}
                    {/*            <p className={classes.text}>Сапфировый</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.field}>*/}
                    {/*            <OtherInput label={'цена в рублях'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className={classes.prices_block}>*/}
                    {/*        <div className={classes.card}>*/}
                    {/*            <img width={22.87} height={15.55} alt=""/>*/}
                    {/*            <p className={classes.text}>Бриллиантовый</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.field}>*/}
                    {/*            <OtherInput label={'цена в рублях'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                    {/*<div className={classes.wrapper_price}>*/}
                    {/*    <h3 className={classes.header}>цены для возрастной группы &laquo;подростки&raquo;</h3>*/}

                    {/*    <div className={classes.prices_block}>*/}
                    {/*        <div className={classes.card}>*/}
                    {/*            <img width={22.87} height={15.55} alt=""/>*/}
                    {/*            <p className={classes.text}>Новый</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.field}>*/}
                    {/*            <OtherInput label={'цена в рублях'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className={classes.prices_block}>*/}
                    {/*        <div className={classes.card}>*/}
                    {/*            <img width={22.87} height={15.55} alt=""/>*/}
                    {/*            <p className={classes.text}>Бронзовый</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.field}>*/}
                    {/*            <OtherInput label={'цена в рублях'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className={classes.prices_block}>*/}
                    {/*        <div className={classes.card}>*/}
                    {/*            <img width={22.87} height={15.55} alt=""/>*/}
                    {/*            <p className={classes.text}>Золотой</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.field}>*/}
                    {/*            <OtherInput label={'цена в рублях'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className={classes.prices_block}>*/}
                    {/*        <div className={classes.card}>*/}
                    {/*            <img width={22.87} height={15.55} alt=""/>*/}
                    {/*            <p className={classes.text}>Рубиновый</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.field}>*/}
                    {/*            <OtherInput label={'цена в рублях'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className={classes.prices_block}>*/}
                    {/*        <div className={classes.card}>*/}
                    {/*            <img width={22.87} height={15.55} alt=""/>*/}
                    {/*            <p className={classes.text}>Сапфировый</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.field}>*/}
                    {/*            <OtherInput label={'цена в рублях'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className={classes.prices_block}>*/}
                    {/*        <div className={classes.card}>*/}
                    {/*            <img width={22.87} height={15.55} alt=""/>*/}
                    {/*            <p className={classes.text}>Бриллиантовый</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.field}>*/}
                    {/*            <OtherInput label={'цена в рублях'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                    <div className={classes.submit}>
                        <Button factor={'success'} type={'submit'} text={'Сохранить тариф'}
                                size={'auto'}/>
                    </div>

                </form>
            </div>
        </>
    );
};