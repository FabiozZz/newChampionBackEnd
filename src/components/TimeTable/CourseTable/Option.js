import React, {useEffect, useRef, useState} from 'react';
import classes from "./courseTable.module.css";
import edit from "../../../assets/images/editCouch.svg";

export const Option = ({change,id,couch,couchList}) => {
    const [toggleOption, setToggleOption] = useState(false);
    const handleToggleOptionBox = () => {
        setToggleOption(!toggleOption);
    };

    const optionBox = useRef(null);
    const selectRef = useRef(null);
    useEffect(() => {
        if (optionBox.current!=null) {
            if (optionBox.current.getBoundingClientRect().right >= window.innerWidth) {
                optionBox.current.style.right = 30 + 'px';
            }
        }
    },[toggleOption]);
    useEffect(() => {
        const onClick = e => {
            if ((optionBox.current && !optionBox.current.contains(e.target))
                &&
                selectRef.current && !selectRef.current.contains(e.target)) {
                setToggleOption(false)
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    return (
        <div ref={selectRef} className={classes.block_trainer}>
            <span className={classes.trainer}>{couch}</span>
            <div className={classes.edit}>
                <img className={classes.edit__icon} onClick={handleToggleOptionBox} src={edit} alt="edit"/>
                {toggleOption&&<div className={classes.arrowOptionBox}/>}

            </div>
            {toggleOption &&
            <div ref={optionBox} className={classes.optionBox}>
                {couchList.map(item => (<option key={item.id} onClick={(e) => {
                    change(id, e.target.value);
                    setToggleOption(false);
                }} value={item.name} className={classes.optionBox_item}>{item.name}</option>))}
            </div>
            }

        </div>    );
};