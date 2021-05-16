import React, {useRef, useState} from 'react';
import './checkbox.css';

export const Checkbox = ({disabled = false,name=''}) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggleCheckBox = (e) => {
        e.preventDefault();
        setIsChecked(!isChecked);
        some.current.checked = !isChecked
    };
    const some = useRef(null);
    let disabledBox = disabled ? <div className={'checkboxDisabled'}/> : isChecked ?
        <div className={'checkbox-wrapper'}>
            <div className={'checkCheckBox'}/>
        </div> : <div className={'checkbox-nonDisabled'}/>;
    return (
        <>
            <label className={'checkbox-app'} htmlFor={'check'} onClick={handleToggleCheckBox}>
                {disabledBox}
                <input ref={some} disabled={disabled} id={'check'} onChange={(e)=>e.target.checked = isChecked} name={name} value={1} type="checkbox"/>
            </label>
        </>
    )
};

