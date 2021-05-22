import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";
import {useSelector} from "react-redux";
import {CheckboxBtn} from "../utils/CheckboxBtn/CheckboxBtn";
import {Auth} from "./Auth/Auth";
import './app.css';

function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    return (
        <BrowserRouter>
            <Header/>
            <div className={'mainWrapper'}>
                {isAuth ?
                    <Switch>
                        <Route path={'/'} render={() => <CheckboxBtn isChecked={true} setIsChecked={() => {
                        }}/>}/>
                    </Switch>
                    :
                    <Auth/>
                }
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
