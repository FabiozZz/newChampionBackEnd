import React, {createContext, useEffect, useRef, useState} from 'react';
import classes from './edit.module.css';
import {OtherInput} from "../../utils/OtherInput/OtherInput";
import {DataPicker} from "../../utils/DataPicker/DataPicker";
import camera from './camera (1) 1.png';
import {Redirect} from "../common/Redirect";
import moment from "moment";
import {Button} from "../../utils/Buttons/Button";
import {useHistory, useParams} from "react-router";
import {Modal} from "../../utils/Modal/Modal";
import EditModalPhoto from "./EditModalPhoto/EditModalPhoto";
import EditPhoneSection from "./EditPhoneSection/EditPhoneSection";
import {EndBtnGroup} from "../common/EndBtnGroup/EndBtnGroup";
import {useDispatch, useSelector} from "react-redux";
import {edit_profile, open_edit_page} from "../../store/Actions/profileActions";
import {EditAddresSection} from "./common/EditAddresSection/EditAddresSection";
import {isEmpty} from "../../helpers/common";

export const ContextCommonEdit = createContext();

export const Edit = () => {

    const user = useSelector(state => state.profile.user);
    const {id} = useParams()
    const dispatch = useDispatch();


    /* common */
    const [image, setImage] = useState(user?.avatar||null);
    const handleChangeImage = (data) => {
        console.log(data)
        setImage(data)
    };


    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    /**
     * локальный стейт для храниения/установки персональных данных клиента для PersonalData
     */
    const [personalData, setPersonalData] = useState({
        last_name: user.last_name,
        middle_name: user.middle_name,
        first_name: user.first_name,
        date_of_birth: moment(user.date_of_birth).format('DD.MM.YYYY'),
    });

    const [age, setAge] = useState(0);


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

    /**
     * локальный стейт для храниения/установки адреса клиента для Address
     */
    const [addressEdit, setAddress] = useState({
        street: user.street,
        house: user.house,
        building: user.building,
        apartments: user.apartments
    });

    // /**
    //  * прослушивание события ввода данных для Address
    //  * @param e
    //  */
    const handleChangeAddressComponent = (e) => {
        let name = e.target.name;
        setAddress(prevState => ({ ...prevState, [name]: e.target.value }))
    };

    // /**
    //  * локальный стейт для хранения/установки для Sale
    //  */
    // const [sale, setSale] = useState(user.sale);
    //
    // /**
    //  * прослушивание ввода данных для Sale
    //  * @param e
    //  */
    // const handleChangeValueSale = (e) => {
    //     setSale(e.target.value);
    // };

    // /**
    //  * локальный стейт для установки/снятии флага о том что клиент принял
    //  * правила посещения клуба для Rules
    //  */
    // const [rules, setRules] = useState(true);
    //
    // /**
    //  * прослушивание клика для переключения флага для Rules
    //  */
    // const handleToggleRules = () => {
    //     setRules(!rules);
    // };
    //
    // /**
    //  * локальный стейт для установки/снятии флага о том что клиент принял
    //  * правилазачисления и посещения клуба для Rules
    //  */
    // const [personal, setPersonal] = useState(true);
    //
    // /**
    //  * прослушивание клика для переключения флага для Rules
    //  */
    // const handleTogglePersonal = () => {
    //     setPersonal(!personal);
    // };

    const history = useHistory();

    /**
     * функция для вохврата в компонент с которого переключились
     */
    const goBack = () => {
        history.goBack();
    };

    // /**
    //  * локальный стейт для хранения/установки данных для TestLesson
    //  */
    // const [testData, setTestData] = useState({
    //     filial: { name: '' },
    //     group: { name: '' },
    //     dateTest: ''
    // });
    // const [filialList, setFilialList] = useState([]);
    //
    // /**
    //  * прослушивание события ввода данных для TestLesson
    //  * @param e
    //  */
    // const handleChangeValueGroupTestLesson = (obj) => {
    //     setTestData({ ...testData, group: { ...obj } });
    // };
    //
    // /**
    //  * прослушивание события ввода данных для TestLesson
    //  * @param e
    //  */
    // const handleChangeValueFilialTestLesson = (obj) => {
    //     setTestData({ ...testData, filial: { ...obj } });
    // };
    //
    // /**
    //  * прослушиване события ввода и выбора дыты для TestLesson
    //  * @param data
    //  */
    // const handleChangeValueDateTestLesson = (data) => {
    //     setTestData({ ...testData, dateTest: data });
    // };



    /**/

    /* Adult */

    const [phone_number, setPhone] = useState(user.phone_number);

    const handleChangePhone = (phone) => {setPhone(phone.target.value)}

    /**/

    /* child */
    const refFile = useRef(null)

    // /**
    //  * локальный стейт для хранения/установки массива данных о родителях клиента
    //  */
    // const [parents, setParents] = useState([{}, {}]);
    //
    // /**
    //  * функция для обновления объекта
    //  * @param i индекс объекта в массиве
    //  * @param object новый массив для обновления предидущего
    //  */
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
        // if (/\d{2}\.\d{2}\.\d{4}/g.test(personalData.date_of_birth)) {
        //     let dateNow = moment();
        //     let dateBirth = moment(personalData.date_of_birth.replace(/(\d+).(\d+).(\d+)/g, '$3-$2-$1'));
        //     let mathAge = Math.floor(dateNow.diff(dateBirth, 'year'));
        //
        //     setAge(mathAge);
        // }


    },[age, user.date_of_birth]);
    const handleSubmit = (e) => {
        e.preventDefault();
        let uploadData;
        if (age > 0 && age < 16) {
            uploadData = {
                id:id,
                ...personalData,
                date_of_birth:personalData.date_of_birth.replace(/(\d{2}).(\d{2}).(\d{4})/g,'$3-$2-$1'),
                ...addressEdit,
                age_group_id: user.club_card.age_group.id
            };
        }else{
            uploadData = {
                id:user.id,
                ...personalData,
                date_of_birth:personalData.date_of_birth.replace(/(\d{2}).(\d{2}).(\d{4})/g,'$3-$2-$1'),
                ...addressEdit,
                phone_number,
                age_group_id: user.club_card.age_group.id
            };
        }
        console.log(uploadData)
        dispatch(edit_profile(uploadData));
        history.goBack();
    };
    useEffect(() => {
        if (isEmpty(user)) {
            dispatch(open_edit_page(id))
        }else{
            setPersonalData({
                last_name:user.last_name,
                first_name:user.first_name,
                middle_name:user.middle_name,
                date_of_birth: moment(user.date_of_birth).format('DD.MM.YYYY')
            })
            setPhone(user.phone_number);
            setAddress({
                street:user.street,
                house:user.house,
                building:user.building,
                apartments:user.apartments
            })
            if (/\d{4}-\d{2}-\d{2}/g.test(user.date_of_birth)) {
                let dateNow = moment();
                let dateBirth = moment(user.date_of_birth);
                let mathAge = Math.floor(dateNow.diff(dateBirth, 'year'));
                setAge(mathAge);
            }
        }
    }, [dispatch, id, user]);
    return (
        <>
            {modal&&
            <Modal size={'sm'} toggle={setModal}>
                <EditModalPhoto toggleModal={setModal} modal={modal} image={image} setImage={handleChangeImage}/>
            </Modal>
            }
            <form onSubmit={handleSubmit} className={classes.wrapper}>

                <div className={classes.redirect}>
                    <Redirect title={"Редактирование профиля"} padding={true}/>
                </div>
                {/*<div onClick={toggleModal} className={classes.block_f}>*/}
                {/*    <img  src={image||camera} alt={'avatar'}/>*/}
                {/*    {!image&&<span>Добавить фото</span>}*/}

                {/*</div>*/}

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
                {age>0 ?
                    <>
                        <ContextCommonEdit.Provider value={{phone_number,
                            handleChangePhone}}>

                            {age > 0 && age < 16 ?
                                <>
                                    {/*<div className={classes.button}>*/}
                                    {/*    <Button size={'default'} text={'добавить справку'} click={() => {*/}
                                    {/*        refFile.current.click();*/}
                                    {/*    }}/>*/}
                                    {/*    <input ref={refFile} name={'health'} type="file" hidden={true}/>*/}
                                    {/*</div>*/}
                                    {/*<TrialSectionSection/>*/}
                                    {/*<ParentsBlock parents={parents}*/}
                                    {/*              change={handleChangeItemParentsBlock}*/}
                                    {/*              addParents={addParentsData}*/}
                                    {/*              removeParents={removeParentsData}*/}
                                    {/*/>*/}
                                </>
                                : age >= 16 ?
                                    <>
                                        <EditPhoneSection/>
                                        {/*<TrialSectionSection/>*/}
                                    </>
                                    : null
                            }
                        </ContextCommonEdit.Provider>


                        {/*<div className={classes.block_info}>*/}
                        {/*    <h3 className={classes.block_info__title}>Адресс</h3>*/}
                        {/*    <div className={classes.block_info__item}>*/}
                        {/*        <div className={classes.street}>*/}
                        {/*            <OtherInput name={'street'} value={user.address} label={'улица'}/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <EditAddresSection address={addressEdit} change={handleChangeAddressComponent}/>

                        {/*<OterSection sale={sale} setSale={handleChangeValueSale}/>*/}

                        {/*<RulesSection rules={rules} setRules={handleToggleRules} personal={personal} setPersonal={handleTogglePersonal}/>*/}

                        <EndBtnGroup goBack={goBack}/>
                    </>
                    : null}
            </form>
        </>
    );
};