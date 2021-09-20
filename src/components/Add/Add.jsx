import React, {createContext, useEffect, useRef, useState} from 'react';
import classes from './add.module.css';
import {OtherInput} from "../../utils/OtherInput/OtherInput";
import {DataPicker} from "../../utils/DataPicker/DataPicker";
import camera from './camera (1) 1.png';
import {Redirect} from "../common/Redirect";
import moment from "moment";
import {Button} from "../../utils/Buttons/Button";
import TrialSectionSection from "./common/TrialSectionSection/TrialSectionSection";
import {AddresSection} from "./common/AddresSection/AddresSection";
import {OterSection} from "./common/OterSection/OterSection";
import {RulesSection} from "./common/RulesSection/RulesSection";
import {useHistory} from "react-router";
import {Modal} from "../../utils/Modal/Modal";
import ModalPhoto from "./ModalPhoto/ModalPhoto";
import PhoneSection from "./PhoneSection/PhoneSection";
import {EndBtnGroup} from "../common/EndBtnGroup/EndBtnGroup";
import {ParentsBlock} from "../common/ParentsBlock/ParentsBlock";
import {useDispatch, useSelector} from "react-redux";
import {add_client_on_CRM} from "../../store/Actions/addClientsActions";
import {isEmpty} from "../../helpers/common";

export const ContextCommon = createContext();

export const Add = () => {
    const {groups, couches, agesGroup,loading,error} = useSelector(state => state.addClient);

    const dispatch = useDispatch()

    /* common */

    const [errorInput, setIsError] = useState(error);
    useEffect(() => {
        setIsError(error);
    },[error]);

    const [image, setImage] = useState(null);
    const handleChangeImage = (data) => setImage(data);


    const [modal, setModal] = useState(false);
    // const toggleModal = () => {
    //     setModal(!modal);
    // };

    /**
     * локальный стейт для храниения/установки персональных данных клиента для PersonalData
     */
    const [personalData, setPersonalData] = useState({});

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
    const [address, setAddress] = useState({
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
        agesGroup: {label: ''}
    });
    // const [filialList, setFilialList] = useState([]);
    //
    // /**
    //  * прослушивание события ввода данных для TestLesson
    //  * @param e
    //  */
    const handleChangeValueGroupTestLesson = (obj) => {
        setTestData({ ...testData, group: obj });
    };
    //
    // /**
    //  * прослушивание события ввода данных для TestLesson
    //  * @param e
    //  */
    const handleChangeValueAgesGroupTestLesson = (obj) => {
        setTestData({ ...testData, agesGroup: obj });
    };

    /**
     * прослушиване события ввода и выбора дыты для TestLesson
     * @param data
     */
    const handleChangeValueDateTestLesson = (data) => {
        setTestData({ ...testData, dateTest: data });
    };



    /**/

    /* Adult */

    const [phone_number, setPhone] = useState('');

    const handleChangePhone = (phone) => {setPhone(phone.target.value)}

    /**/

    /* child */
    const refFile = useRef(null)

    /**
     * локальный стейт для хранения/установки массива данных о родителях клиента
     */
    const [parents, setParents] = useState([{}]);

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

    useEffect(() => {
        if (/\d{2}\.\d{2}\.\d{4}/g.test(personalData.date_of_birth)) {
            let dateNow = moment();
            let dateBirth = moment(personalData.date_of_birth.replace(/(\d+).(\d+).(\d+)/g, '$3-$2-$1'));
            let mathAge = Math.floor(dateNow.diff(dateBirth, 'year'));

            setAge(mathAge);
        }
    },[age, error, personalData.date_of_birth]);


    /**
     *
     */
    const submitForm = (e)=>{
        e.preventDefault();
        let oldUploadData = {};
        // let newUploadData = {};
        const {date_of_birth,middle_name,...other}=personalData
        if (age < 16) {
            if (middle_name) {
                oldUploadData = {
                    ...other,
                    middle_name,
                    ...(!isEmpty(date_of_birth)&&{date_of_birth:date_of_birth.replace(/(\d{2}).(\d{2}).(\d{4})/g,'$3-$2-$1')}),
                    parents,
                    ...(testData.agesGroup.id&& {age_group_id:testData.agesGroup.id}),
                    age
                };
            }else{
                oldUploadData = {
                    ...other,
                    ...(!isEmpty(date_of_birth)&&{date_of_birth:date_of_birth.replace(/(\d{2}).(\d{2}).(\d{4})/g,'$3-$2-$1')}),
                    parents,
                    ...(testData.agesGroup.id&& {age_group_id:testData.agesGroup.id}),
                    age
                };

            }
            // newUploadData = {
            //     ...other,
            //     date_of_birth:date_of_birth.replace(/(\d{2}).(\d{2}).(\d{4})/g,'$3-$2-$1'),
            //     avatar:image,
            //     file: refFile.current.files[0],
            //     filial:'здесь будет филиал',
            //     group:'здесь будет группа',
            //     ...address,
            //     parents,
            //     age_group_id:testData.agesGroup.id,
            //     age,
            //     sale //откуда узнали
            //
            // };
        }else{
            if (middle_name) {
                oldUploadData = {
                    ...other,
                    middle_name,
                    ...(!isEmpty(date_of_birth)&&{date_of_birth:date_of_birth.replace(/(\d{2}).(\d{2}).(\d{4})/g,'$3-$2-$1')}),
                    ...(phone_number&&{phone_number}),
                    ...(testData.agesGroup.id&& {age_group_id:testData.agesGroup.id}),
                    age
                };
            }else{
                oldUploadData = {
                    ...other,
                    ...(!isEmpty(date_of_birth)&&{date_of_birth:date_of_birth.replace(/(\d{2}).(\d{2}).(\d{4})/g,'$3-$2-$1')}),
                    ...(phone_number&&{phone_number}),
                    ...(testData.agesGroup.id&& {age_group_id:testData.agesGroup.id}),
                    age
                };
            }
            // newUploadData = {
            //     ...other,
            //     date_of_birth:date_of_birth.replace(/(\d{2}).(\d{2}).(\d{4})/g,'$3-$2-$1'),
            //     avatar:image,
            //     filial:'здесь будет филиал',
            //     group:'здесь будет группа',
            //     ...address,
            //     age_group_id:testData.agesGroup?.id,
            //     age,
            //     sale //откуда узнали
            // };
        }
        if (!isEmpty(address)) {
            oldUploadData = {...oldUploadData, ...address};
        }
        console.log(oldUploadData);
        dispatch(add_client_on_CRM(oldUploadData));
    }
    console.log('Add>>',errorInput)
    return (
        <>
            {modal&&
            <Modal size={'lg'} toggle={setModal}>
                <ModalPhoto toggleModal={setModal} modal={modal} image={image} setImage={handleChangeImage}/>
            </Modal>
            }
            <div style={{marginTop:'32px',gridColumn:'1/11'}}>
            <Redirect title={"Регистрация клиента"} padding={true}/>
            </div>
            <form onSubmit={submitForm} className={classes.wrapper}>

                <div className={classes.block_info_f}>

                    <div onClick={()=>setModal(true)} className={classes.block_f}>
                        <img  src={image||camera} alt={'avatar'}/>
                        {!image&&<span>Добавить фото</span>}

                    </div>

                    <div className={classes.block_personal}>
                        <h3 className={classes.block_info__title}>личная информация</h3>
                        <div className={classes.block_info__item}>
                            <div className={classes.last_name}>
                                <OtherInput danger={errorInput&&errorInput.last_name} setValue={handleChangePersonalData} name={'last_name'}
                                            value={personalData.last_name} label={'фамилия'}/>
                                {errorInput&&errorInput.last_name&&<span className={classes.warning_text}>{errorInput.last_name.join()}</span>}
                            </div>
                            <div className={classes.first_name}>
                                <OtherInput danger={errorInput&&errorInput.first_name} setValue={handleChangePersonalData} name={'first_name'}
                                            value={personalData.first_name} label={'имя'}/>
                                {errorInput&&errorInput.first_name&&<span className={classes.warning_text}>{errorInput.first_name.join()}</span>}
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
                </div>
                {age>0 ?
                    <>
                        <ContextCommon.Provider value={{phone_number,errorInput,
                            handleChangePhone,handleChangeValueDateTestLesson,testData,groups,couches,agesGroup,handleChangeValueGroupTestLesson,
                            handleChangeValueAgesGroupTestLesson}}>

                            {age > 0 && age < 16 ?
                                <>
                                    <div className={classes.button}>
                                        <Button size={'default'} text={'добавить справку'} click={() => {
                                            refFile.current.click();
                                        }}/>
                                        <input ref={refFile} name={'health'} type="file" hidden={true}/>
                                    </div>
                                    <TrialSectionSection/>
                                    <ParentsBlock parents={parents}
                                                  error={errorInput}
                                                  change={handleChangeItemParentsBlock}
                                                  addParents={addParentsData}
                                                  removeParents={removeParentsData}
                                    />
                                </>
                                : age >= 16 ?
                                    <>
                                        <PhoneSection/>
                                        <TrialSectionSection/>
                                    </>
                                    : null
                            }
                        </ContextCommon.Provider>


                        <AddresSection error={errorInput} change={handleChangeAddressComponent} address={address}/>

                        {/*<OterSection sale={sale} setSale={handleChangeValueSale}/>*/}

                        <RulesSection rules={rules} setRules={handleToggleRules} personal={personal} setPersonal={handleTogglePersonal}/>
                        {!loading&&
                        <EndBtnGroup goBack={goBack} personal={personal} rules={rules}/>
                        }
                    </>
                    : null}

            </form>
        </>
    );
};