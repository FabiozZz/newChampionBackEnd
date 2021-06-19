import React, {useEffect, useState} from 'react';
import classes from "../add.module.css";
import {useHistory} from "react-router";
import {TestLesson} from "../common/TestLesson/TestLesson";
import Api from "../../../Api/Api";
import {useDispatch, useSelector} from "react-redux";
import {group_list_child} from "../../../Acnions/addChildClientActions";
import {Address} from "../common/Address/Address";
import {Sale} from "../common/Sale/Sale";
import {Rules} from "../common/Rules/Rules";
import {EndBtnGroup} from "../common/EndBtnGroup/EndBtnGroup";
import {PersonalData} from "./PersonalData/PersonalData";
import {ParentsBlock} from "./ParentsBlock/ParentsBlock";
import {Redirect} from "../../common/Redirect";
import {group_list_adult} from "../../../Acnions/addAdultClientActions";

/**
 * компонент для добавления нового клиента ребёнка
 * @returns {JSX.Element}
 * @constructor
 */
export const Kid = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            await Api.getGroupForAdult().then(r => {
                dispatch(group_list_adult(r));
            });
            await Api.getFilialList().then(r => {
                setFilialList([...r.data])
            });
        }
        loadData();
    },[]);

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
        filial:'',
        group: '',
        dateTest: ''
    });
    const [filialList, setFilialList] = useState([]);

    /**
     * прослушивание события ввода данных для TestLesson
     * @param e
     */
    const handleChangeValueGroupTestLesson =  (e) => {
        setTestData({...testData,group: e.target.value});
    };

    /**
     * прослушивание события ввода данных для TestLesson
     * @param e
     */
    const handleChangeValueFilialTestLesson =  (e) => {
        setTestData({...testData,filial: e.target.value});
    };

    /**
     * прослушиване события ввода и выбора дыты для TestLesson
     * @param data
     */
    const handleChangeValueDateTestLesson =  (data) => {
        setTestData({...testData,dateTest: data});
    };

    /**
     * константа из redux для отображения списка доступных групп
     * @type {[]|*}
     */
    const groupList = useSelector(state => state.addChild.groupList);

    /**
     * локальный стейт для храниения/установки персональных данных клиента для PersonalData
     */
    const [personalData,setPersonalData] = useState({
        lastName: '',
        middleName: '',
        name: '',
        phone: '',
        birthDay: '',
    })

    /**
     * прослушивание события ввода данных для PersonalData
     * @param e
     */
    const handleChangePersonalData =  (e,data) => {
        let name = e.target.name;
        setPersonalData(prevState => ({...prevState,[name]:e.target.value}))
    };

    /**
     * прослушивания события выбора даты персональных данных в DataPicker для PersonalData
     * @param some
     */
    const handleDataPickerPersonal =  (some) => {
        setPersonalData({...personalData, birthDay: some});
    };

    /**
     * локальный стейт для хранения/установки массива данных о родителях клиента
     */
    const [parents, setParents] = useState([{},{}]);

    /**
     * функция для обновления объекта
     * @param i индекс объекта в массиве
     * @param object новый массив для обновления предидущего
     */
    const handleChangeItemParentsBlock = (i,object) => {
        setParents(prevState => [...prevState.slice(0,i),object,...prevState.slice(i+1)]);
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
            setParents(parents.filter((e,index)=> index!==i ));
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
        setAddress(prevState => ({...prevState,[name]:e.target.value}))
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
    const handleSubmitForm = (e) => {
        e.preventDefault();
        // отправка данных на сервер
    };

    return (
        <div className={'col-12'}>

            {/* блок навигации */}

            <Redirect padding={true} title={'Регистрация ребёнка'}/>

            {/* блок тестового занятия */}

            <TestLesson groupList={groupList}
                        filialList={filialList}
                        value={testData}
                        setFilial={handleChangeValueFilialTestLesson}
                        setGroup={handleChangeValueGroupTestLesson}
                        setDate={handleChangeValueDateTestLesson}/>

            {/* блок персональной информации о ребенке */}

            <PersonalData data={personalData}
                          change={handleChangePersonalData}
                          changeData={handleDataPickerPersonal}/>

            {/* блок персональной информации о родителях */}

            <ParentsBlock parents={parents}
                          change={handleChangeItemParentsBlock}
                          addParents={addParentsData}
                          removeParents={removeParentsData}
            />

            {/* блок адреса */}

            <Address change={handleChangeAddressComponent} address={address}/>

            {/* блок информации об источнике */}

            <Sale sale={sale} setSale={handleChangeValueSale}/>

            {/* блок с чекбоксами о разъяснении информации */}

            <Rules rules={rules} setRules={handleToggleRules} personal={personal} setPersonal={handleTogglePersonal}/>

            {/* блок с кнопками отмены и отправки данных */}

            <EndBtnGroup submit={handleSubmitForm} goBack={goBack} personal={personal} rules={rules}/>


        </div>
    );
};