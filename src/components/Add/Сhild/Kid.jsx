import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from "react-router";
import { TestLesson } from "../common/TestLesson/TestLesson";
import Api from "../../../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { Address } from "../common/Address/Address";
import { Sale } from "../common/Sale/Sale";
import { Rules } from "../common/Rules/Rules";
import { EndBtnGroup } from "../common/EndBtnGroup/EndBtnGroup";
import { PersonalData } from "./PersonalData/PersonalData";
import { ParentsBlock } from "./ParentsBlock/ParentsBlock";
import { Redirect } from "../../common/Redirect";
import { group_list_child } from "../../../Acnions/addChildClientActions";
import classes from '../add.module.css'
import moment from 'moment';

/**
 * компонент для добавления нового клиента ребёнка
 * @returns {JSX.Element}
 * @constructor
 */
export const Kid = () => {

    const refForm = useRef(null);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     (async () => {
    //         await Api.getGroupForChild().then(r => {
    //             dispatch(group_list_child([...r]));
    //         });
    //         await Api.getFilialList().then(r => {
    //             setFilialList([...r.data])
    //         });
    //     })()
    // }, [dispatch]);

    const history = useHistory();

    /**
     * функция для вохврата в компонент с которого переключились
     */
    const goBack = () => {
        history.goBack();
    };

    /**
     * локальный стейт для хранения/установки данных для TestLesson
     */
    const [testData, setTestData] = useState({
        filial: { name: '' },
        group: { name: '' },
        dateTest: '',
        file: {}
    });
    const [filialList, setFilialList] = useState([]);

    /**
     * прослушивание события ввода данных для TestLesson
     * @param e
     */
    const handleChangeValueGroupTestLesson = (obj) => {
        setTestData({ ...testData, group: { ...obj } });
    };

    /**
     * прослушивание события ввода данных для TestLesson
     * @param e
     */
    const handleChangeValueFilialTestLesson = (obj) => {
        setTestData({ ...testData, filial: { ...obj } });
    };

    /**
     * прослушиване события ввода и выбора дыты для TestLesson
     * @param data
     */
    const handleChangeValueDateTestLesson = (data) => {
        setTestData({ ...testData, dateTest: data });
    };

    /**
     * константа из redux для отображения списка доступных групп
     * @type {[]|*}
     */
    const groupList = useSelector(state => state.addChild.groupList);

    /**
     * локальный стейт для храниения/установки персональных данных клиента для PersonalData
     */
    const [personalData, setPersonalData] = useState({
        last_name: '',
        middle_name: '',
        first_name: '',
        date_of_birth: '',
    })

    /**
     * прослушивание события ввода данных для PersonalData
     * @param e
     */
    const handleChangePersonalData = (e, data) => {
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

    /**
     * локальный стейт для хранения/установки массива данных о родителях клиента
     */
    const [parents, setParents] = useState([{
        // passport: {
        //     serial: '',
        //     number: ''
        // }
    }, {}]);

    /**
     * функция для обновления объекта
     * @param i индекс объекта в массиве
     * @param object новый массив для обновления предидущего
     */
    const handleChangeItemParentsBlock = (i, object) => {
        setParents(prevState => [...prevState.slice(0, i), object, ...prevState.slice(i + 1)]);
    };

    /**
     * функция добавления нового поустого объекта в массив родителей
     */
    const addParentsData = () => {
        setParents(prevState => [...prevState, {}]);
    };

    /**
     * удаление объекта из массива
     * @param i индекс объекта в массиве который нужно удалить
     */
    const removeParentsData = (i) => {
        setParents(parents.filter((e, index) => index !== i));
    };

    /**
     * локальный стейт для храниения/установки адреса клиента для Address
     */
    const [address, setAddress] = useState({
        street: '',
        house: '',
        corpus: '',
        room: ''
    });

    /**
     * прослушивание события ввода данных для Address
     * @param e
     */
    const handleChangeAddressComponent = (e) => {
        let name = e.target.name;
        setAddress(prevState => ({ ...prevState, [name]: e.target.value }))
    };

    /**
     * локальный стейт для хранения/установки для Sale
     */
    const [sale, setSale] = useState('');

    /**
     * прослушивание ввода данных для Sale
     * @param e
     */
    const handleChangeValueSale = (e) => {
        setSale(e.target.value);
    };

    /**
     * локальный стейт для установки/снятии флага о том что клиент принял
     * правила посещения клуба для Rules
     */
    const [rules, setRules] = useState(true);

    /**
     * прослушивание клика для переключения флага для Rules
     */
    const handleToggleRules = () => {
        setRules(!rules);
    };

    /**
     * локальный стейт для установки/снятии флага о том что клиент принял
     * правилазачисления и посещения клуба для Rules
     */
    const [personal, setPersonal] = useState(true);

    /**
     * прослушивание клика для переключения флага для Rules
     */
    const handleTogglePersonal = () => {
        setPersonal(!personal);
    };

    /**
     * функция которая отрабатывает при отправке формы на сервер
     * @param e
     */
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        let uploadData = {
            ...personalData,
            date_of_birth:personalData.date_of_birth.replace(/(\d+).(\d+).(\d+)/g,'$3-$2-$1'),
            parents,
            address: `ул.${address.street} ${address.house && 'д.' + address.house} ${address.corpus && 'кор.' + address.corpus} ${address.room && 'кв.' + address.room}`,

        }
        console.log(uploadData)

        const res = await Api.postAddChild(uploadData);
        if(res.status === 201){
            history.push(`/profile/${res.data.id}`)
        }
    };

    return (
        <div className={classes.wrapper_child}>

            {/* блок навигации */}
            <div className={classes.redirect}>
                <Redirect padding={true} title={'Регистрация ребёнка'} />
            </div>
            <form ref={refForm} onSubmit={handleSubmitForm} >

                {/* блок тестового занятия */}

                {/* <TestLesson groupList={groupList}
                    filialList={filialList}
                    value={testData}
                    setFilial={handleChangeValueFilialTestLesson}
                    setGroup={handleChangeValueGroupTestLesson}
                    setDate={handleChangeValueDateTestLesson} /> */}

                {/* блок персональной информации о ребенке */}

                <PersonalData data={personalData}
                    change={handleChangePersonalData}
                    changeData={handleDataPickerPersonal} />

                {/* блок персональной информации о родителях */}

                <ParentsBlock parents={parents}
                    change={handleChangeItemParentsBlock}
                    addParents={addParentsData}
                    removeParents={removeParentsData}
                />

                {/* блок адреса */}

                <Address change={handleChangeAddressComponent} address={address} />

                {/* блок информации об источнике */}

                {/* <Sale sale={sale} setSale={handleChangeValueSale} /> */}

                {/* блок с чекбоксами о разъяснении информации */}

                <Rules rules={rules} setRules={handleToggleRules} personal={personal} setPersonal={handleTogglePersonal} />

                {/* блок с кнопками отмены и отправки данных */}

                <EndBtnGroup goBack={goBack} personal={personal} rules={rules} />


            </form>
        </div>
    );
};