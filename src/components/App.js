import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Checkbox} from "../utils/Checkbox/Checkbox";
import {Button} from "../utils/Buttons/Button";
import {DatePicker} from 'antd';
import calendar from '../assets/images/calendar.svg';
import {DataPicker} from "../utils/DataPicker/DataPicker";

function App() {
    return (
        <BrowserRouter>
            <form action="">
            <Button text={'some text'}/>
            <Button factor={'success'} text={'some text'}/>
            <Button factor={'danger'} text={'some text'}/>
            <Button factor={'dark'} text={'some text'}/>
            <Button disabled={true} factor={'dark'} text={'some text'}/>
            <Checkbox/>
                <DatePicker suffixIcon={calendar}/>
            <Checkbox disabled={true}/>
            <DataPicker/>
            </form>
        </BrowserRouter>
    );
}

export default App;
