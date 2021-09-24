import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './app.css';
import './radio.css';
import { Header } from "./Header/Header";
import { Auth } from "../../../../../next.js/with-redux-thunk-app/components/Auth/Auth";
import { Footer } from "./Footer/Footer";
import { Container } from "react-bootstrap";
import { SideBar } from './SideBar/SideBar';
import Routes from "../Routes/Routes";
import {ConnectedRouter} from "connected-react-router";
import Api from "../Api/Api";
import { token_verify} from "../store/Actions/userActions";
import {isEmpty} from "../../../../../next.js/with-redux-thunk-app/components/halpers/common";

/**
 * главный компонент содержащий все приложение
 *
 * @return {JSX.Element}
 */
function App({history}) {
    /**
     * константа из redux показывает авторизован ли менеджер
     * @type {boolean}
     */
    const {isAuth,error} = useSelector(state => state.user);

    const dispatch = useDispatch();


    // const [notification, setNotification] = useState({errorNot:null,successNot:null});
    /**
     * если не авторизован пользователь, то его выбрасывает на экран входа в систему
     */
    if (!isAuth) {
        if (Api.getToken() && isEmpty(error)) {
            dispatch(token_verify());
        }
        // if (!Api.getToken() && Api.getRefreshToken()) {
        // }
        // else if (Api.getRefreshToken()) {
        // }
    }

    // useEffect(() => {
    //     setNotification(prevState => ({...prevState,errorNot: error&&null,successNot:success&&null}));
    // },[error, success]);

    // if(!isEmpty(error)) notificationPopUp(error.type,error.title,error.desc)
    // if(!isEmpty(success)) notificationPopUp(success.type,success.title,success.desc)
    return (
        <>
            {/*{!isEmpty(error) && notification[error.type]({*/}
            {/*    message: error.title,*/}
            {/*    description: error.desc,*/}
            {/*    duration: 2.5*/}
            {/*})}*/}
            {/*{!isEmpty(success) && notification[success.type]({*/}
            {/*    message: success.title,*/}
            {/*    description: success.desc,*/}
            {/*    duration: 2.5*/}
            {/*})}*/}

            <ConnectedRouter history={history}>
                {isAuth?

                    <Container className={'h-100 p-0 m-0'} fluid={true}>
                        <Header/>
                        <div className="wrapper_large">
                            <SideBar/>
                            <div className="app-wrapper">
                                <Routes/>
                            </div>
                        </div>
                        {/* <div className={'footer-hidden'}/> */}

                        <div className="app-wrapper__footer">
                            <Footer/>
                        </div>

                    </Container>
                    :

                    <Container className={'h-100'} fluid={true}>
                        <Header />
                        <div className="app-wrapper_auth">
                            <Auth />
                        </div>
                    </Container>
                }
            </ConnectedRouter>
        </>
    );
}

export default App;
