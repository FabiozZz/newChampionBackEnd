import React, {useRef, useState} from 'react';
import './radioBtn.css';

export const RadioBtn = (disabled=false) => {

    const [isChecked, setIsChecked] = useState(false);

    const refRadio = useRef('');
    console.log(isChecked)
    console.log(refRadio.current.checked)

    const handleToggleIsChecked = () => {
        setIsChecked(prevState => !prevState);
    };


    return (
        <label className={`radioWrapper ${isChecked? 'radioWrapperChecked':''}`} onClick={handleToggleIsChecked}>

            <input ref={refRadio} type="radio" checked={isChecked} hidden={true} disabled={disabled}/>
        </label>
    );
};