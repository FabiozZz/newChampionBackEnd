import React, {useRef} from 'react';
import './auth.css';
import {OtherInput} from "../../utils/OtherInput/OtherInput";
import {Button} from "../../utils/Buttons/Button";
import Api from "../../Api/Api";
import './auth.css';

let style = {
    form:{
        
    }
}


export const Auth = () => {

    const formRef = useRef(null);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        let form={}
        for(let key of formRef.current.elements){
            if (key.tagName === 'INPUT') {
                form = {...form,[key.name]:key.value}
            }
        }
    };

    return (
        <div style={style.root} className={'authWrapper'}>
            <h1 className={'authWrapper__title'}>
                Авторизация
            </h1>
            <form ref={formRef} onSubmit={handleSubmitForm}>
                <OtherInput style={style.email} name={'email'} type={'email'}/>
                <OtherInput style={style.pass} name={'pass'} type={'password'}/>
                <Button style={{display:'block',margin:'36px auto'}} factor={'success'} text={'Войти'} type={'submit'}/>
            </form>
        </div>
    );
};