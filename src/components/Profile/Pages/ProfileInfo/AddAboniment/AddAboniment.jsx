import React, {useState} from 'react';
import {OtherInput} from "../../../../../utils/OtherInput/OtherInput";
import classes from '../../../profile.module.css';
import devider from '../../../../../assets/images/deviderParent.svg'
import {Button} from "../../../../../utils/Buttons/Button";
import edit from '../../../../../assets/images/editAboniment.svg';
import {SelectAbonement} from "../SelectAbonement";
import {MaskInput} from "../../../../../utils/MaskInput/MaskInput";
import {Counter} from "../../../../../utils/Counter/Counter";
import {SelectStatus} from "../SelectStatus/SelectStatus";
import {SelectCouch} from "../../../../TimeTable/FilterSection/SelectCouch/SelectCouch";
import {SelectGroup} from "../../../../TimeTable/FilterSection/SelectGroup/SelectGroup";

export const AddAboniment = ({profile}) => {
    const {couch, group, status, typeAboniment} = profile;

    const [selectAboniment, setAboniment] = useState('');
    const handleChangeAboniment = (e) => {
        setAboniment(e.target.value)
    };

    const [selectCouch, setCouch] = useState('');
    const handleChangeCouch = (e) => {
        setCouch(e.target.valueOf);
    };

    const [selectGroup, setGroup] = useState('');
    const handleChangeGroup = (e) => {
        setGroup(e.target.value);
    };

    const [selectStatus, setStatus] = useState('');

    const [card, setCard] = useState('');
    const handleChangeNumCard = (e) => {
        let symbol = e.target.value.replace(/\D/g, '')
        setCard(symbol);
    };

    const [countCard, setCount] = useState(1);
    const handleChangeCountCard = (e) => {
        let symbol = e.target.value;
        symbol.replace(/\D/g, '');

        setCount(Number(symbol)>999?999:Number(symbol)<1?1:Number(symbol));
    };
    const handleIncrementCount = () => {
        setCount(countCard<999?countCard+1:999);
    };
    const handleDecrementCount = () => {
        setCount(countCard<=1?1:countCard-1)
    };

    const [passport,setPassport] = useState({
        number:'',
        serial:''
    })
    const handleChangePass = (e) => {
        setPassport(prevState => ({...prevState,[e.target.name]:e.target.value}))
    };

    return (
        <div className={classes.add_aboniment}>
            <div className={`${classes.aboniment}`}>
                <div>
                    <OtherInput value={card} setValue={handleChangeNumCard} label={'номер карты'}/>
                </div>
                <div>
                    <SelectAbonement value={selectAboniment} setValue={handleChangeAboniment} data={typeAboniment}
                                     label={'тип абонимента'}/>
                </div>
                <div>
                    <SelectStatus value={selectStatus} setValue={setStatus} data={status} label={'статус'}/>
                </div>
                <div>
                    <Counter value={countCard}
                             decrement={handleDecrementCount}
                             increment={handleIncrementCount}
                             setValue={handleChangeCountCard}
                             placeholder={''}
                             label={'количество'}/>
                </div>
            </div>

            {
                selectAboniment === 'Стандарт' ||
                selectAboniment === 'SMART' ||
                selectAboniment === 'MINI' ||
                selectAboniment === 'NONSTOP' ?

                    <div className={`${classes.group}`}>
                        <SelectGroup label={'группа'} data={group} value={selectGroup} setValue={handleChangeGroup}/>
                    </div>

                    :
                selectAboniment === 'GOLD' ||
                selectAboniment === 'PLATINUM' ||
                selectAboniment === 'SUPER PLATINUM' ||
                selectAboniment === 'Персональная тренировка' ?

                    <div className={`${classes.group}`}>
                        <SelectCouch data={couch} value={selectCouch} setValue={handleChangeCouch} label={'тренер'}/>
                    </div>
                    :
                    null
            }
            <div className={`${profile.user.is_Adult?classes.pass_adult:classes.pass}`}>

                {profile.user.is_Adult ?
                    <>
                        <div>
                            <MaskInput setValue={handleChangePass} name={'serial'} value={passport.serial} mask={'9999'} label={'паспорт'} placeholder={'Серия'}/>
                        </div>
                        <div>
                            <MaskInput value={passport.number} setValue={handleChangePass} name={'number'} mask={'999999999'} placeholder={'Номер'}/>
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
            {selectAboniment ?
                <>
                    <div className={`${classes.sale}`}>
                        <div>
                            <OtherInput label={'скидка'}/>
                        </div>
                    </div>
                    <div className={`${classes.sale_count}`}>
                        <span className={`${classes.sale_count_text}`}>8 занятий</span>
                        <span className={`${classes.sale_count_text}`}>4 недели</span>
                        <img className={classes.sale_count_img} src={devider} alt="devider"/>
                        <span className={`${classes.sale_count_text}`}>3200
                            &#8381;</span>
                        <img src={edit} alt="edit"/>
                    </div>
                    <div className={`${classes.success}`}>
                        <Button text={'применить'} factor={"success"}/>
                    </div>

                </> :
                null
            }
        </div>
    );
};