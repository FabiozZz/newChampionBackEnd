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

export const Kid = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    const [testData, setTestData] = useState({
        group: '',
        dateTest: ''
    });

    const handleChangeValueGroupTestLesson =  (e) => {
        setTestData({...testData,group: e.target.value});
    };

    const handleChangeValueDateTestLesson =  (data) => {
        setTestData({...testData,dateTest: data});
    };

    const groupList = useSelector(state => state.addChild.groupList);

    const [personalData,setPersonalData] = useState({
        lastName: '',
        middleName: '',
        name: '',
        phone: '',
        birthDay: '',
    })

    const handleChangePersonalData =  (e,data) => {

        let name = e.target.name;
        // eslint-disable-next-line default-case
        switch (name) {
            case 'lastName':
                setPersonalData({...personalData,lastName: e.target.value})
                break;
            case 'middleName':
                setPersonalData({...personalData,middleName: e.target.value})
                break;
            case 'name':
                setPersonalData({...personalData,name: e.target.value})
                break;
            case 'phone':
                setPersonalData({...personalData,phone: e.target.value})
                break;
        }
    };

    const handleDataPickerPersonal =  (some) => {
        setPersonalData({...personalData, birthDay: some});
    };

    const [parents, setParents] = useState([{},{}]);

    const addParentsData = (data) => {
        setParents(prevState => [...prevState, data]);
        console.log(parents)
    };


    const removeParentsData = (i) => {
        if (i > -1) {
            console.log(parents)
            setParents(prevState => prevState.splice(i, 1));
        }
    };


    const [address, setAddress] = useState({
        street: '',
        house: '',
        corpus: '',
        room: ''
    });

    const handleChangeAddressComponent = (e) => {
        let name = e.target.name;
        // eslint-disable-next-line default-case
        switch (name) {
            case 'street':
                setAddress(prevState => ({...prevState,street:e.target.value}))
                break;
            case 'house':
                setAddress(prevState => ({...prevState,house:e.target.value}))
                break;
            case 'corpus':
                setAddress(prevState => ({...prevState,corpus:e.target.value}))
                break;
            case 'room':
                setAddress(prevState => ({...prevState,room:e.target.value}))
                break;
        }
    };

    const [sale, setSale] = useState('');
    const handleChangeValueSale = (e) => {
        setSale(e.target.value);
    };

    const [rules, setRules] = useState(true);
    const handleToggleRules = () => {
        setRules(!rules);
    };

    const [personal, setPersonal] = useState(true);
    const handleTogglePersonal = () => {
        setPersonal(!personal);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await Api.getGroupForChild().then(r=> {
                dispatch(group_list_child(r));
            });
        })();
    },[dispatch]);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(parents);
    };

    return (
        <div className={'col-12'}>

            {/* блок навигации */}

            <div className="row">
                <div className={`col-12 ${classes.wrapper_adult}`}>
                    <div onClick={goBack} className={classes.wrapper_adult__svg}>
                        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.48618 10.2947C1.608 10.1733 1.74016 10.0709 1.8792 9.98177L11.1808 0.680602C12.0882 -0.226398 13.5604 -0.226829 14.4683 0.681033C15.3762 1.58846 15.3762 3.06024 14.4683 3.96853L6.45768 11.9792L14.5096 20.0315C15.4175 20.939 15.4175 22.4103 14.5096 23.319C14.0555 23.7736 13.4601 24 12.8661 24C12.272 24 11.6763 23.7736 11.2226 23.319L1.8792 13.9748C1.74016 13.8857 1.60714 13.7833 1.48618 13.6619C1.02213 13.1978 0.798289 12.5865 0.809482 11.9783C0.798289 11.37 1.02213 10.7592 1.48618 10.2947Z"
                                fill="#69707F"/>
                        </svg>
                    </div>
                    <h1 className={classes.wrapper_adult__title}>Регистрация ребёнка</h1>
                </div>
            </div>

            {/* блок тестового занятия */}

            <TestLesson groupList={groupList}
                        value={testData}
                        setGroup={handleChangeValueGroupTestLesson}
                        setDate={handleChangeValueDateTestLesson}/>

            {/* блок персональной информации о ребенке */}

            <PersonalData data={personalData} change={handleChangePersonalData} changeData={handleDataPickerPersonal}/>

            {/* блок персональной информации о родителях */}

            <ParentsBlock parents={parents}
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