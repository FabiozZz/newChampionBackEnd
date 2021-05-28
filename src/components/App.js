import React, {useRef, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import './app.css';
import {DataPicker} from "../utils/DataPicker/DataPicker";
import {DataPickerRange} from "../utils/DataPickerRange/DataPickerRange";

function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    // const [isLoad, setIsLoad] = useState(false);

    // if (isLoad) {
    //     return <div id={'firstLoading'}/>
    // }
    const formRef = useRef();
    const [datePicker, setDatePicker] = useState('');
    const selectPicker = (e) => {
        let date = new Date(e);
        setDatePicker(date.getFullYear()+'-'+date.getDate()+'-'+ date.getMonth()+1)
    };
    const clearPicker = (e) => {
        let date = new Date(e);
        setDatePicker('')
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let form={}
        for(let key of formRef.current.elements){
            if (key.tagName === 'INPUT') {
                form = {...form,[key.name]:key.value}
            }
        }
        if (datePicker) {
            form = {...form,birthDay:datePicker};
        }
        console.log(form)
    };
    return (
        <BrowserRouter>
            <form ref={formRef} onSubmit={handleSubmit}>
                <DataPicker label={'data'}/>
                <DataPickerRange label={'data'}/>
            </form>
            {/*<DataPicker style={{width:'220px',margin:'20px'}}/>*/}
            {/*<Header/>*/}
            {/*    {isAuth ?*/}
            {/*        <Container fluid={true} className={'mainWrapper'}>*/}
            {/*        <Switch>*/}
            {/*            <Route path={'/'} render={() => (<TimeTable/>)} />*/}
            {/*        </Switch>*/}
            {/*        </Container>*/}
            {/*        :*/}
            {/*        <Auth/>*/}
            {/*    }*/}

            {/*<Footer simpleClass={'position-fixed'}/>*/}
        </BrowserRouter>
    );
}

export default App;
