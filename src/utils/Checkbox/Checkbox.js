import React, {useState} from 'react';
import './checkbox.css';

export const Checkbox = ({disabled = false}) => {
    const [isChecked, setIsCheked] = useState(false);
    const handleToggleCheckBox = () => {
        setIsCheked(!isChecked);
    };
    let disabledBox = disabled ? <div className={'checkboxDisabled'}/> : isChecked ?
        <div className={'checkbox-wrapper'}>
            <div className={'checkCheckBox'}/>
        </div> : <div className={'checkbox-nonDisabled'}/>;
    return (
        <>
            <div onClick={handleToggleCheckBox}>
                {disabledBox}
                <input disabled={disabled} hidden={true} checked={isChecked} type="checkbox"/>
            </div>
        </>
    )
};

