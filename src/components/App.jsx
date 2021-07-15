import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import './app.css';
import { Header } from "./Header/Header";
import { Route, Switch } from "react-router";
import { Auth } from "./Auth/Auth";
import { Footer } from "./Footer/Footer";
import { Container } from "react-bootstrap";
import { Adult } from "./Add/Adult/Adult";
import { Kid } from "./Add/Сhild/Kid";
import { Profile } from "./Profile/Profile";
import { Clients } from "./Clients/Clients";
import { TimeTable } from './TimeTable/TimeTable';
import { EditProfile } from "./Profile/Pages/ProfileInfo/EditProfile/EditProfile";
import { SideBar } from './SideBar/SideBar';

/**
 * главный компонент содержащий все приложение
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    /**
     * константа из redux показывает авторизован ли менеджер
     * @type {boolean|*}
     */
    const isAuth = useSelector(state => state.user.isAuth);
    // const [isLoad, setIsLoad] = useState(false);

    // if (isLoad) {
    //     return <div id={'firstLoading'}/>
    // }
    // const formRef = useRef();
    // const [datePicker, setDatePicker] = useState('');
    // const selectPicker = (e) => {
    //     let date = new Date(e);
    //     setDatePicker(date.getFullYear()+'-'+date.getDate()+'-'+ date.getMonth()+1)
    // };
    // const clearPicker = (e) => {
    //     let date = new Date(e);
    //     setDatePicker('')
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let form={}
    //     for(let key of formRef.current.elements){
    //         if (key.tagName === 'INPUT') {
    //             form = {...form,[key.name]:key.value}
    //         }
    //     }
    //     if (datePicker) {
    //         form = {...form,birthDay:datePicker};
    //     }
    //     console.log(form)
    // };
    //
    // const [show, setShow] = useState(false);
    // const target = useRef(null);


    /**
     * если не авторизован пользователь, то его выбрасывает на экран входа в систему
     */
    if (!isAuth) {
        return (
            <BrowserRouter>
                <Container className={'h-100'} fluid={true}>
                    <Header />
                    <div className="app-wrapper_auth">
                        <Auth />
                    </div>
                </Container>
            </BrowserRouter>
        )
    }


    return (
        <BrowserRouter>
            <Container className={'h-100'} fluid={true}>
                <Header />
                <div className="wrapper_large">
                    <SideBar />
                    <div className="app-wrapper">

                        <Switch>
                            <Route exact path={'/'} component={TimeTable} />
                            <Route path={'/add_adult'} component={Adult} />
                            <Route path={'/add_child'} component={Kid} />
                            <Route exact path={'/profile/:id/'} component={Profile} />
                            <Route exact path={'/profile/:id/edit'} component={EditProfile} />
                            <Route path={'/clients'} component={Clients} />
                        </Switch>

                    </div>
                </div>
                {/* <div className={'footer-hidden'}/> */}

                <div className="app-wrapper__footer">
                    <Footer />
                </div>

            </Container>

        </BrowserRouter>
    );
}

export default App;
