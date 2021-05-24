import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";
import {useSelector} from "react-redux";
import {CheckboxBtn} from "../utils/CheckboxBtn/CheckboxBtn";
import {Auth} from "./Auth/Auth";
import './app.css';
import {Container} from "react-bootstrap";
import load from '../assets/images/logoychamp.gif';
import {TimeTable} from "./TimeTable/TimeTable";

function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    // const [isLoad, setIsLoad] = useState(false);

    // if (isLoad) {
    //     return <div id={'firstLoading'}/>
    // }

    return (
        <BrowserRouter>
            <Header/>
                {isAuth ?
                    <Container fluid={true} className={'mainWrapper'}>
                    <Switch>
                        <Route path={'/'} render={() => (<TimeTable/>)} />
                    </Switch>
                    </Container>
                    :
                    <Auth/>
                }

            <Footer simpleClass={'position-fixed'}/>
        </BrowserRouter>
    );
}

export default App;
