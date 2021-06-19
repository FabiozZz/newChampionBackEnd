import React, {useEffect, useState} from 'react';
import classes from "../../profile.module.css";
import moment, {now} from "moment";
import devider from '../../../../assets/images/deviderParent.svg';
import Api from "../../../../Api/Api";
import {isEmpty} from "../../../../helpers/common";
import {CheckboxBtn} from "../../../../utils/CheckboxBtn/CheckboxBtn";
import addCard from '../../../../assets/images/cardAdd.svg';
import {SelectAbonement} from "./SelectAbonement";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";

export const ProfileInfo = ({user={}}) => {
    const [age, setAge] = useState('');
    const [whatsApp, setWhatsApp] = useState(false);
    const [abonementList, setAbonementList] = useState([]);
    const [abonementData, setAbonementData] = useState({
        numCard: '',
        typeAbonement: '',
        status: '',
        count: '',
        sale: 0,
        passport:{
            series: '',
            number: ''
        }
    });
    const handleChangeDataAbonement = (e) => {
        setAbonementList(prevState => ({...prevState, [e.target.name]: e.target.value}))
    };

    const [selectAbonement, setSelectAbonement] = useState('');
    const [step, setStep] = useState(1);
    const handleSelectAbonement = (e) => {
        setSelectAbonement(e.target.value);
        setStep(step + 1);
    };

    const handleToggleWhatsApp = ()=>{
        setWhatsApp(!whatsApp)
    }

    useEffect(() => {
        const loadData = async () => {
            await Api.getAbonimentList().then(r=> {
                setAbonementList([...r])
            });
        };
        loadData();
    },[]);

    useEffect(() => {
        let dateNow = moment();
        let dateBirth = moment(user.birthdayDate.replace(/(\d{2}).(\d{2}).(\d{4})/g,'$3-$2-$1'));
        let mathAge = Math.floor(dateNow.diff(dateBirth,'year'));
        mathAge += (mathAge % 100 < 21 || mathAge % 10 < 1 || (mathAge % 10 > 4 && mathAge % 10 <= 9) || mathAge % 10 === 0) ? ' лет' :
            mathAge % 10 === 1 ? ' год' : ' года';
        setAge(mathAge);
    },[user.birthdayDate,user.course]);

    // is_whatsApp
    return (
        <>
            <div className={classes.block_info}>
                <h3 className={classes.block_info__title}>{user.status<1? <img src={addCard} alt="add"/>:null} Абонемент</h3>
                <div className="row">
                    <div className="col-4">
                        <OtherInput />
                    </div>
                    <div className={'col-3'}></div>
                    <div className={'col-3'}></div>
                    <div className={'col-2'}></div>
                </div>
                {/*    <SelectAbonement value={selectAbonement} data={abonementList} setValue={handleChangeAbonement} label={'тип абонемента'}/>*/}
                {/*{step}*/}
                {/*/!*{user.status?*!/*/}

                {/*/!*    :*!/*/}
                {/*/!*}*!/*/}
                {/*<div className={`${classes.block_info__item}`}>*/}
                {/*    <p className={classes.block_info__item_label}>Филиал:</p>*/}
                {/*    <span className={classes.block_info__item_label__text}>{user.filial}</span>*/}
                {/*    <p className={classes.block_info__item_label}>Записан в группу:</p>*/}
                {/*    <span className={classes.block_info__item_label__text}>{user.course}</span>*/}
                {/*    <p className={classes.block_info__item_label}>WhatsApp:</p>*/}
                {/*    <span className={classes.block_info__item_label__text}>*/}
                {/*        <div className={classes.block_info__item__checkbox}>*/}
                {/*        <CheckboxBtn isChecked={whatsApp} setIsChecked={handleToggleWhatsApp} />*/}
                {/*        </div>*/}
                {/*         <span className={classes.block_info__item__description}>Добавлен в чат</span></span>*/}

                {/*</div>*/}

            </div>

            <div className={classes.block_info}>
                <h3 className={classes.block_info__title}>{!user.is_Adult ? 'Информация о ребёнке' : 'личная информация'}</h3>
                <div className={`${classes.block_info__item}`}>
                    <p className={classes.block_info__item_label}>Фамилия:</p>
                    <span className={classes.block_info__item_label__text}>{user.lastName}</span>
                    <p className={classes.block_info__item_label}>Имя:</p>
                    <span className={classes.block_info__item_label__text}>{user.name}</span>
                    <p className={classes.block_info__item_label}>Отчество:</p>
                    <span className={classes.block_info__item_label__text}>{user.middleName}</span>
                    <p className={classes.block_info__item_label}>Дата рождения:</p>
                    <span className={classes.block_info__item_label__text}>{user.birthdayDate} ({age})</span>
                </div>
            </div>

            {!user.is_Adult &&
            < div className={classes.block_info}>
                <h3 className={classes.block_info__title}>Информация о родителях</h3>

                {user.parents.map((parent, index) => {
                    return (
                        <div key={index} className={`${classes.block_info__item} ${classes.block_info__item_parent}`}>
                            {index>0&& (<img className={classes.block_info__parent_devider} src={devider} alt="devider"/>)}
                            <p className={classes.block_info__item_label}>Фамилия:</p>
                            <span className={classes.block_info__item_label__text}>{parent.lastName}</span>
                            <p className={classes.block_info__item_label}>Имя:</p>
                            <span className={classes.block_info__item_label__text}>{parent.name}</span>
                            <p className={classes.block_info__item_label}>Отчество:</p>
                            <span className={classes.block_info__item_label__text}>{parent.middleName}</span>
                            <p className={classes.block_info__item_label}>Кем приходится:</p>
                            <span className={classes.block_info__item_label__text}>{parent.hoIs}</span>
                            <p className={classes.block_info__item_label}>Номер телефона:</p>
                            <span className={classes.block_info__item_label__text}>{parent.phone}</span>
                        </div>
                    )
                })}
            </div>
            }

            <div className={classes.block_info}>
                <h3 className={classes.block_info__title}>Адрес проживания</h3>
                <div className={`${classes.block_info__item_small}`}>
                    <p className={classes.block_info__item_label}>Улица:</p>
                    <span className={classes.block_info__item_label__text}>{user.address.street}</span>
                    <p className={classes.block_info__item_label}>Дом:</p>
                    <span className={classes.block_info__item_label__text}>{user.address.house}</span>
                    <p className={classes.block_info__item_label}>Корпус:</p>
                    <span className={classes.block_info__item_label__text}>{user.address.corpus}</span>
                    <p className={classes.block_info__item_label}>Квартира:</p>
                    <span className={classes.block_info__item_label__text}>{user.address.room}</span>
                </div>
            </div>

            <div className={classes.block_info}>
                <h3 className={classes.block_info__title}>прочее</h3>
                <div className={`${classes.block_info__item_small}`}>
                    <p className={classes.block_info__item_label}>Источник:</p>
                    <span className={classes.block_info__item_label__text}>{user.whereIs}</span>
                </div>
            </div>

        </>
    );

};