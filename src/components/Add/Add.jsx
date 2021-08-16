import React, {createContext, useEffect, useRef, useState} from 'react';
import classes from './add.module.css';
import {OtherInput} from "../../utils/OtherInput/OtherInput";
import {DataPicker} from "../../utils/DataPicker/DataPicker";
import camera from './camera (1) 1.png';
import {Redirect} from "../common/Redirect";
import moment from "moment";
import {Button} from "../../utils/Buttons/Button";
import {Adult} from "./Adult/Adult";
import TrialSectionSection from "./common/TrialSectionSection/TrialSectionSection";
import {AddresSection} from "./common/AddresSection/AddresSection";
import {OterSection} from "./common/OterSection/OterSection";
import {Kid} from "./Сhild/Kid";
import {RulesSection} from "./common/RulesSection/RulesSection";
import {EndBtnGroup} from "./common/EndBtnGroup/EndBtnGroup";
import {useHistory} from "react-router";
import {Modal} from "../../utils/Modal/Modal";
import ModalPhoto from "./ModalPhoto/ModalPhoto";

export const ContextAdult = createContext();
export const ContextChild = createContext();
export const ContextModal = createContext();

const Add = () => {

    /* Modal */

    const [state,setState] = useState({
        width:320,
        height:0,
        image: null,
        streaming:false
    })
    const video = useRef(null),
        canvas = useRef(null),
        photo = useRef(null)


    function clearphoto() {
        let context = canvas.current.getContext('2d');
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.current.width, canvas.current.height);

        let data = canvas.current.toDataURL('image/jpeg');
        setState(prevState=>({...prevState,image:data}))
        console.log(data)
        photo.current.setAttribute('src', data);
    }

    function takepicture() {
        let context = canvas.current.getContext('2d');
        if (state.width && state.height) {
            canvas.current.width = state.width;
            canvas.current.height = state.height;
            context.drawImage(video.current, 0, 0, state.width, state.height);

            let data = canvas.current.toDataURL('image/jpeg');
            photo.current.setAttribute('src', data);
        } else {
            clearphoto();
        }
    }

    const canplay = () => {
        if (!state.streaming && video.current) {
            setState(prevState=>({...prevState, height: video.current.videoHeight / ( video.current.videoWidth / state.width )}))


            video.current.setAttribute('height', state.height);
            video.current.setAttribute('width', state.width);
            canvas.current.setAttribute('width', state.width);
            canvas.current.setAttribute('height', state.height);

            // streaming = true;
            setState(prevState=>({...prevState,streaming:true}))
        }
    };

    function startUp() {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function(stream) {
                video.current.srcObject = stream;
                video.current.play();
            })
            .catch(function(err) {
                console.log("An error occurred: " + err);
            });
        video.current.addEventListener('canplay', canplay);
        clearphoto();
    }


    /* endModal */

    /* common */

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    /**
     * локальный стейт для храниения/установки персональных данных клиента для PersonalData
     */
    const [personalData, setPersonalData] = useState({
        last_name: '',
        middle_name: '',
        first_name: '',
        date_of_birth: '',
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

    const history = useHistory();

    /**
     * функция для вохврата в компонент с которого переключились
     */
    const goBack = () => {
        history.goBack();
    };


    /**/

    /* child */
    const refFile = useRef(null)

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
        <>
            {modal&&
            <Modal size={'lg'} toggle={toggleModal}>
                <ContextModal.Provider value={{state,setState,clearphoto,takepicture,canplay,startUp,video,canvas,photo}}>
                    <ModalPhoto/>
                </ContextModal.Provider>
            </Modal>
            }
            <form onSubmit={() => console.log('submit')} className={classes.wrapper}>

                <div className={classes.redirect}>
                    <Redirect title={"Регистрация клиента"} padding={true}/>
                </div>
                <div onClick={toggleModal} className={classes.block_f}>
                    <img width={72} height={72} src={camera} alt={''}/>
                    <span>Добавить фото</span>
                </div>

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
                        {age > 0 && age < 16 ?
                            <ContextChild.Provider value={{}}>
                                <div className={classes.button}>
                                    <Button size={'default'} text={'добавить справку'} click={() => {
                                        refFile.current.click();
                                    }}/>
                                    <input ref={refFile} name={'health'} type="file" hidden={true}/>
                                </div>
                                <TrialSectionSection/>

                                <Kid/>
                            </ContextChild.Provider>
                            : age >= 16 ?
                                <ContextAdult.Provider value={{}}>
                                    <Adult/>
                                    <TrialSectionSection/>
                                </ContextAdult.Provider>
                                : null
                        }


                        <AddresSection change={handleChangeAddressComponent} address={address}/>

                        <OterSection sale={sale} setSale={handleChangeValueSale}/>

                        <RulesSection rules={rules} setRules={handleToggleRules} personal={personal} setPersonal={handleTogglePersonal}/>

                        <EndBtnGroup goBack={goBack} personal={personal} rules={rules}/>
                    </>
                    : null}
            </form>
        </>
    );
};

export default Add;