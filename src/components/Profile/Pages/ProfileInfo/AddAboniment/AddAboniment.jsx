import React, {useEffect, useState} from 'react';
import { OtherInput } from "../../../../../utils/OtherInput/OtherInput";
import classes from '../../../profile.module.css';
import devider from '../../../../../assets/images/deviderParent.svg'
import { Button } from "../../../../../utils/Buttons/Button";
import edit from '../../../../../assets/images/editAboniment.svg';
import success_edit from '../../../../../assets/images/successAbonement.svg';
import {SelectAbonement} from "../SelectAbonement";
import { MaskInput } from "../../../../../utils/MaskInput/MaskInput";
import { Counter } from "../../../../../utils/Counter/Counter";
import { SelectStatus } from "../SelectStatus/SelectStatus";
import { SelectCouch } from "../../../../TimeTable/FilterSection/SelectCouch/SelectCouch";
import { SelectGroup } from "../../../../TimeTable/FilterSection/SelectGroup/SelectGroup";
import { declOfLessonsNum, declOfWeekNum } from '../../../../../helpers/common';
import Api from '../../../../../Api/Api';
import axios from 'axios';


export const AddAboniment = ({profile}) => {


    const {couch, group, status, typeAboniment, user} = profile;

    const [selectAboniment, setAboniment] = useState({
        id:null,
        name: ''
    });
    const handleChangeAboniment = (item) => {
        setAboniment(prevState => ({...prevState,...item}))
    };

    const [selectCouch, setCouch] = useState({
        id: null,
        name:''
    });
    const handleChangeCouch = (obj) => {
        setCouch(prevState => ({...prevState,...obj}));
    };

    const [selectGroup, setGroup] = useState({
        id: null,
        name: ''
    });
    const handleChangeGroup = (obj) => {
        setGroup(prevState => ({...prevState,...obj}));
    };

    const [selectStatus, setStatus] = useState({
        id: null,
        name: ''
    });
    const handleChangeStatus = (obj) => {
        setStatus(prevState => ({...prevState,...obj}))
    };

    const [card, setCard] = useState('');
    const handleChangeNumCard = (e) => {
        let symbol = e.target.value.replace(/\D/g, '')
        setCard(symbol);
    };

    const [countCard, setCount] = useState(1);
    const handleChangeCountCard = (e) => {
        let symbol = e.target.value;
        setCount(Number(symbol) > 999 ? 999 : Number(symbol) < 1 ? 1 : Number(symbol));
    };
    const handleIncrementCount = () => {
        setCount(countCard < 999 ? countCard + 1 : 999);
    };
    const handleDecrementCount = () => {
        setCount(countCard <= 1 ? 1 : countCard - 1)
    };

    const [passport, setPassport] = useState({
        number: '',
        serial: ''
    })
    const handleChangePass = (e) => {
        setPassport(prevState => ({...prevState, [e.target.name]: e.target.value}))
    };

    const [price, setPrice] = useState(0)

    const [editPrice, setEditPrice] = useState({
        price: price,
        edit: false
    });
    const handleChangePriceAbonement = (e) => {
        setPrice(Number(e.target.value));
    };
    const toggleEdit = () => {
        setEditPrice(prevState => ({...prevState, edit: !prevState.edit}));
    };

    useEffect(() => {
        let source = axios.CancelToken.source();
        (async () => {
            if (selectAboniment.id && selectStatus.id) {
                await Api.getPriceList(source.token, selectAboniment.id, selectStatus.id).then(r => {
                    setPrice(r)
                });
            }
        })();
        return () => source.cancel();
    }, [selectAboniment.id, selectStatus.id]);

    // const [width, setWidth] = useState(0);
    //
    // useEffect(() => {
    //     if (refSpan.current) {
    //         setWidth(refSpan.current.offsetWidth);
    //     }
    // }, [price]);
    return (
        <>
            <div className={classes.add_aboniment}>
                <div className={`${classes.aboniment}`}>
                    <div>
                        <OtherInput value={card} setValue={handleChangeNumCard} label={'номер карты'}/>
                    </div>
                    <div>
                        <SelectAbonement value={selectAboniment.name} setValue={handleChangeAboniment}
                                         data={typeAboniment}
                                         label={'тип абонимента'}/>
                    </div>
                    <div>
                        <SelectStatus value={selectStatus.name} setValue={handleChangeStatus} data={status}
                                      label={'статус'}/>
                    </div>
                    <div>
                        <Counter value={countCard}
                                 decrement={handleDecrementCount}
                                 increment={handleIncrementCount}
                                 setValue={handleChangeCountCard}
                                 label={'количество'}/>
                    </div>
                </div>

                {
                    selectAboniment.id <= 4 && selectAboniment.id !== null ?

                        <div className={`${classes.group}`}>
                            <SelectGroup label={'группа'} data={group} value={selectGroup.name}
                                         setValue={handleChangeGroup}/>
                        </div>

                        :
                        selectAboniment.id > 4 && selectAboniment.id < 8 && selectAboniment.id !== null ?
                            <div className={`${classes.group}`}>
                                <SelectCouch data={couch} value={selectCouch.name} setValue={handleChangeCouch}
                                             label={'тренер'}/>
                            </div>
                            :
                            null
                }
                <div className={`${profile.user.is_Adult ? classes.pass_adult : classes.pass}`}>

                    {user.is_Adult ?
                        <>
                            <div>
                                <MaskInput setValue={handleChangePass} name={'serial'} value={passport.serial}
                                           mask={'9999'}
                                           label={'паспорт'} placeholder={'Серия'}/>
                            </div>
                            <div>
                                <MaskInput value={passport.number} setValue={handleChangePass} name={'number'}
                                           mask={'999999999'} placeholder={'Номер'}/>
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <OtherInput label={'предствитель ребенка'}/>
                            </div>
                            <div>
                                <OtherInput label={'паспорт родителя'} placeholder={'Серия'}/>
                            </div>
                            <div>
                                <OtherInput placeholder={'Номер'}/>
                            </div>
                        </>

                    }
                </div>
                {selectAboniment.name !== '' && selectStatus.name !== '' ?
                    <>
                        <div className={`${classes.sale}`}>
                            <div>
                                <OtherInput label={'скидка'}/>
                            </div>
                        </div>
                        <div className={`${classes.sale_count}`}>
                        <span className={`${classes.sale_count_text}`}>{selectAboniment.lessons > 20 ? <span
                            dangerouslySetInnerHTML={{__html: '&#8734;'}}/> : selectAboniment.lessons} {declOfLessonsNum(selectAboniment.lessons)}</span>
                            <span className={`${classes.sale_count_text}`}>{selectAboniment.week > 8 ? <span
                                dangerouslySetInnerHTML={{__html: '&#8734;'}}/> : selectAboniment.week} {declOfWeekNum(selectAboniment.week)}</span>
                            <img className={classes.sale_count_img} src={devider} alt="devider"/>

                            {
                                editPrice.edit ?
                                    <div onClick={toggleEdit} className={classes.edit_block}>
                                    <input autoFocus
                                           className={classes.edit_price}
                                           style={{width:((String(price).length*10)+'px')}}
                                           value={price}
                                           onChange={handleChangePriceAbonement}
                                           type="number"/>
                                        <span className={classes.edit_block_text}>&#8381;</span>
                                        <img className={classes.img_edit} src={success_edit} alt="edit"/>
                                    </div>
                                    :
                                    <div onClick={toggleEdit} className={classes.edit_block}>
                                    <span className={`${classes.edit_block_text}`}>{price * countCard}
                                        &#8381;</span>
                                        <img className={classes.img_edit} src={edit} alt="edit"/>
                                    </div>

                            }
                        </div>
                        <div className={`${classes.success}`}>
                            <Button text={'применить'} factor={"success"}/>
                        </div>
                    </> :
                    null
                }
            </div>
            {/*<input className={classes.sale_count__input}*/}
            {/*       type={'number'} size={editPrice.price.length}*/}
            {/*       value={editPrice.price} onChange={handleChangePriceAbonement}/>*/}

        </>
    );
};