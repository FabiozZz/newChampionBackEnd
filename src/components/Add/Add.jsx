import React, {createContext, useEffect, useRef, useState} from 'react';
import classes from './add.module.css';
import {OtherInput} from "../../utils/OtherInput/OtherInput";
import {DataPicker} from "../../utils/DataPicker/DataPicker";
import camera from './camera (1) 1.png';
import {Redirect} from "../common/Redirect";
import moment from "moment";

export const ContextAdult = createContext();
export const ContextChild = createContext();

const Add = () => {
    /* common */

    const refFoto = useRef(null)

    /**
     * локальный стейт для храниения/установки персональных данных клиента для PersonalData
     */
    const [personalData, setPersonalData] = useState({
        last_name: '',
        middle_name: '',
        first_name: '',
        date_of_birth: '',
    });

    const [age, setAge] = useState('');


    /**
     * прослушивание события ввода данных для PersonalData
     * @param e
     */
    const handleChangePersonalData = (e) => {
        let name = e.target.name;
        setPersonalData(prevState => ({ ...prevState, [name]: e.target.value }))
    };

    /**
     * прослушивания события выбора даты персональных данных в DataPicker для PersonalData
     * @param some
     */
    const handleDataPickerPersonal = (some) => {
        setPersonalData({ ...personalData, date_of_birth: some });
    };

    /**/

    /* child */
    // const refFile = useRef(null)

    /**
     * локальный стейт для хранения/установки массива данных о родителях клиента
     */
    // const [parents, setParents] = useState([{}, {}]);

    /**
     * функция для обновления объекта
     * @param i индекс объекта в массиве
     * @param object новый массив для обновления предидущего
     */
    // const handleChangeItemParentsBlock = (i, object) => {
    //     setParents(prevState => [...prevState.slice(0, i), object, ...prevState.slice(i + 1)]);
    // };
    //
    // /**
    //  * функция добавления нового поустого объекта в массив родителей
    //  */
    // const addParentsData = () => {
    //     setParents(prevState => [...prevState, {}]);
    // };
    //
    // /**
    //  * удаление объекта из массива
    //  * @param i индекс объекта в массиве который нужно удалить
    //  */
    // const removeParentsData = (i) => {
    //     setParents(parents.filter((e, index) => index !== i));
    // };
    useEffect(() => {
        if (/\d{2}\.\d{2}\.\d{4}/g.test(personalData.date_of_birth)) {
            let dateNow = moment();
            let dateBirth = moment(personalData.date_of_birth.replace(/(\d+).(\d+).(\d+)/g, '$3-$2-$1'));
            let mathAge = Math.floor(dateNow.diff(dateBirth, 'year'));

            setAge(mathAge);
        }

    },[age, personalData.date_of_birth]);
    return (
        <div className={classes.wrapper}>

            <div className={classes.redirect}>
                <Redirect title={"Регистрация клиента"} padding={true}/>
            </div>

            <button onClick={() => {
                refFoto.current.click();
            }} className={classes.block_f}>
                <img width={72} height={72} src={camera} alt={''}/>
                <span>Добавить фото</span>
                <input ref={refFoto} name={'foto'} type="file" hidden={true}/>
            </button>

            <div className={classes.block_info_f}>
                <h3 className={classes.block_info__title}>личная информация</h3>
                <div className={classes.block_info__item}>
                    <div className={classes.last_name}>
                        <OtherInput setValue={handleChangePersonalData} name={'last_name'}
                                    value={personalData.last_name} label={'фамилия'}/>
                    </div>
                    <div className={classes.first_name}>
                        <OtherInput setValue={handleChangePersonalData} name={'first_name'}
                                    value={personalData.first_name} label={'имя'}/>
                    </div>
                    <div className={classes.middle_name}>
                        <OtherInput setValue={handleChangePersonalData} name={'middle_name'}
                                    value={personalData.middle_name} label={'отчество'}/>
                    </div>
                    <div className={classes.date_of_birth}>
                        <DataPicker value={personalData.date_of_birth} setValue={handleDataPickerPersonal}
                                    label={'дата рождения'}/>
                    </div>
                </div>
            </div>

            {/*<div className={classes.button}>*/}
            {/*    <Button size={'default'} text={'добавить справку'} click={() => {*/}
            {/*        refFile.current.click();*/}
            {/*    }}/>*/}
            {/*    <input ref={refFile} name={'health'} type="file" hidden={true}/>*/}
            {/*</div>*/}

            {/*<div className={classes.block_info}>*/}
            {/*    <div className={classes.block_info__item}>*/}
            {/*        <div className={classes.phone_number}>*/}
            {/*            <MaskInputTel label={"номер телефона"} setValue={()=>{}}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className={classes.block_info}>*/}
            {/*    <h3 className={classes.block_info__title}>Пробное занятие</h3>*/}
            {/*    <div className={classes.block_info__item}>*/}
            {/*        <div className={classes.group}>*/}
            {/*            <OtherInput label={'группа'}/>*/}
            {/*        </div>*/}
            {/*        <div className={classes.filial}>*/}
            {/*            <OtherInput label={'филиал'}/>*/}
            {/*        </div>*/}
            {/*        <div className={classes.picker}>*/}
            {/*            <DataPicker label={"дата пробного занятия"} setValue={()=>{}}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className={classes.block_info}>*/}
            {/*    <h3 className={classes.block_info__title}>Адресс</h3>*/}
            {/*    <div className={classes.block_info__item}>*/}
            {/*        <div className={classes.street}>*/}
            {/*            <OtherInput label={'улица'}/>*/}
            {/*        </div>*/}
            {/*        <div className={classes.house}>*/}
            {/*            <OtherInput label={'дом'}/>*/}
            {/*        </div>*/}
            {/*        <div className={classes.corspus}>*/}
            {/*            <OtherInput label={"корпус"}/>*/}
            {/*        </div>*/}
            {/*        <div className={classes.room}>*/}
            {/*            <OtherInput label={"картира"}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className={classes.block_info}>*/}
            {/*    <h3 className={classes.block_info__title}>Прочее</h3>*/}
            {/*    <div className={classes.block_info__item}>*/}
            {/*        <div className={classes.sale}>*/}
            {/*            <OtherInput label={'Откуда узнали о нас'}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
};

export default Add;