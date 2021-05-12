import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Checkbox} from "../utils/Checkbox/Checkbox";
import {Button} from "../utils/Buttons/Button";
import {DataPicker} from "../utils/DataPicker/DataPicker";

function App() {
    return (
        <BrowserRouter>
            <Button text={'some text'}/>
            <Button factor={'success'} text={'some text'}/>
            <Button factor={'danger'} text={'some text'}/>
            <Button factor={'dark'} text={'some text'}/>
            <Checkbox/>
            <Checkbox disabled={true}/>
            <div/>
            <DataPicker/>
        </BrowserRouter>
    );
}

export default App;
