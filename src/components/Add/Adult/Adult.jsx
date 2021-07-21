import React, { useEffect, useState } from 'react';
import Api from "../../../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { group_list_adult } from "../../../Acnions/addAdultClientActions";
import { useHistory } from "react-router";
import { Address } from "../common/Address/Address";
import { PersonalData } from "./PersonalData/PersonalData";
import { TestLesson } from "../common/TestLesson/TestLesson";
import { Sale } from "../common/Sale/Sale";
import { Rules } from "../common/Rules/Rules";
import { EndBtnGroup } from "../common/EndBtnGroup/EndBtnGroup";
import { Redirect } from "../../common/Redirect";
import classes from '../add.module.css'

/**
 * компонент для добавления нового взрослого клиента
 * @returns {JSX.Element}
 * @constructor
 */
export const Adult = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    /**
     * еффект, сробатывает единожды при монтировании компонента,
     * делаеет запрос на сервер для получения списка доступных групп для зачисления,
     * с сохраненем полученных данных в redux
     */
    // useEffect(() => {
    //     (async () => {
    //         await Api.getGroupForAdult().then(r => {
    //             dispatch(group_list_adult(r));
    //         });
    //         await Api.getFilialList().then(r => {
    //             setFilialList([...r.data])
    //         });
    //     })()
    // }, [dispatch]);

    /**
     * константа из redux для отображения списка доступных групп
     * @type {[]|*}
     */
    const groupList = useSelector(state => state.addAdult.groupList);

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
     * локальный стейт для храниения/установки персональных данных клиента для PersonalData
     */
    const [personalData, setPersonalData] = useState({
        last_name: '',
        middle_name: '',
        first_name: '',
        phone_number: '',
        date_of_birth: '',
        passport: {
            serial: '',
            number: ''
        }
    })

    /**
     * прослушивание события ввода данных для PersonalData
     * @param e
     */
    const handleChangePersonalData = (e) => {
        let name = e.target.name;
            setPersonalData(prevState => ({ ...prevState, [name]: e.target.value }));
    };

    const handleChangePersonalPass = (e) => {
        let name = e.target.name;
        setPersonalData(prevState => ({ ...prevState, passport: { ...prevState.passport, [name]: e.target.value } }));
    };

    /**
     * прослушивания события выбора даты персональных данных в DataPicker для PersonalData
     * @param some
     */
    const handleDataPickerPersonal = (some) => {
        setPersonalData({ ...personalData, date_of_birth: some });
    };

    /**
     * локальный стейт для хранения/установки данных для TestLesson
     */
    const [testData, setTestData] = useState({
        filial: { name: '' },
        group: { name: '' },
        dateTest: ''
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
     * функция для вохврата в компонент с которого переключились
     */
    const goBack = () => {
        history.goBack();
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
            first_name:personalData.first_name,
            middle_name:personalData.middle_name,
            last_name:personalData.last_name,
            phone_number: personalData.phone_number.replace(/\+\d \((\d+)\) (\d+)-(\d+)-(\d+)/g,'8$1$2$3$4'),
            date_of_birth: personalData.date_of_birth.replace(/(\d+).(\d+).(\d+)/g, '$3-$2-$1'),
            address: `ул.${address.street} ${address.house && 'д.' + address.house} ${address.corpus && 'кор.' + address.corpus} ${address.room && 'кв.' + address.room}`,
            // address,
        }
        // console.log(uploadData)
        await Api.postAddAdult(uploadData).then(r => {

            console.log(r)
            if (r.status === 201) {
                history.push(`/profile/${r.data.id}`)
            }

        }).catch(e => console.log(e))

    };


    return (
        <div className={classes.wrapper_child}>
            <div className={classes.redirect}>
                <Redirect padding={true} title={'Регистрация взрослого'} />
            </div>
            {/* блок пробного занятия */}
            <form onSubmit={handleSubmitForm}>

                {/* <TestLesson groupList={groupList}
                        filialList={filialList}
                        isAdult={true}
                        value={testData}
                        setFilial={handleChangeValueFilialTestLesson}
                        setGroup={handleChangeValueGroupTestLesson}
                        setDate={handleChangeValueDateTestLesson}/> */}

                {/* блок личной информации */}

                <PersonalData data={personalData}
                              changePass={handleChangePersonalPass}
                              changeData={handleDataPickerPersonal}
                              change={handleChangePersonalData} />

                {/* блок адреса проживания */}

                <Address change={handleChangeAddressComponent} address={address} />

                {/* блок источника */}

                <Sale sale={sale} setSale={handleChangeValueSale} />

                {/* блок с чекбоксами */}

                <Rules rules={rules}
                       setRules={handleToggleRules}
                       personal={personal}
                       setPersonal={handleTogglePersonal} />

                {/* блок с кнопками подтверждения или отмены */}

                <EndBtnGroup goBack={goBack} personal={personal} rules={rules} />

            </form>
        </div>
    );
};