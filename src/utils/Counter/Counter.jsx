import React from 'react';
import classes from './counter.module.css'
import PropTypes from "prop-types";

/**
 *
 * @param label
 * @param increment
 * @param decrement
 * @param style
 * @param name
 * @param value
 * @param setValue
 * @param required
 * @param placeholder
 * @param type
 * @param disabled
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const Counter = ({label,increment,decrement,style,name,value,setValue,required,placeholder,type,disabled,...props}) => {
    return (
        <div style={style} className={`${classes.otherInputWrapper} ${props.className}`}>
            {label&&<label>{label}</label>}
            <div className={classes.wrapper}>
                <span onClick={decrement} className={classes.toggle}>-</span>
                <input className={classes.wrapper_input} value={value} max={3} min={1}  name={name} onChange={setValue} required={required} placeholder={placeholder} type={'number'} disabled={disabled}/>
                <span onClick={increment} className={classes.toggle}>+</span>
            </div>
        </div>
    );
};

Counter.defaultProps = {
    required: false,
    type: 'number',
    disabled: false,
    name:'',
    style: {},
    placeholder: '',
    className: '',
    value:'',
    setValue: ()=>{}
};

Counter.propTypes = {
    required: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    value:PropTypes.number,
    setValue: PropTypes.func
};