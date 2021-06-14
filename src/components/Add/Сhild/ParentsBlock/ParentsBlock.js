import React, {useEffect, useState} from 'react';
import classes from '../../add.module.css';
import {Button} from "../../../../utils/Buttons/Button";
import {AddParent} from "./AddParent/AddParent";

export const ParentsBlock = ({parents,addParents,removeParents}) => {
    const [data, setData] = useState({
        lastName: '',
        name: '',
        middleName: '',
        hoIs: '',
        phone: ''
    });
    const handleChangePersonalData =  (e) => {

        let name = e.target.name;
        // eslint-disable-next-line default-case
        switch (name) {
            case 'lastName':
                setData({...data,lastName: e.target.value})
                break;
            case 'middleName':
                setData({...data,middleName: e.target.value})
                break;
            case 'name':
                setData({...data,name: e.target.value})
                break;
            case 'hoIs':
                setData({...data,hoIs: e.target.value})
                break;
            case 'phone':
                setData({...data,phone: e.target.value})
                break;
        }
    };

    const handleAddedParentsBlock = () => {
        addParents(data);
    };


    return (
        <div className={`row ${classes.block_info}`}>
                <div className="col-12">
                    <h3 className={classes.block_info__title}>информация о родителях</h3>
                </div>

                {parents.map(e=><AddParent data={data} setsData={handleChangePersonalData}/>)}

                <div className={`col-12 ${classes.block_info__btn}`}>
                    <Button text={'добавить родственника'} click={handleAddedParentsBlock} size={'auto'} factor={'success'}/>
                </div>
        </div>

    );
};