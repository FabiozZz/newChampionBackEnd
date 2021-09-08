import React, {useEffect, useRef, useState} from 'react';
import classes from './add_modal.module.css';
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";
import {Button} from "../../../../utils/Buttons/Button";
import {useDispatch, useSelector} from "react-redux";
import {search_clients} from "../../../../store/Actions/generalPageActions";

export const AddClientModal = ({change_user,name}) => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const {filter_clients} = useSelector(state => state.general_page);
    const handleSearchClient = (e) => {
        setSearch(e.target.value);
        dispatch(search_clients(search));
    };

    const refList = useRef(null);

    useEffect(() => {
        if (refList.current) {
            let height_list = refList.current.getBoundingClientRect().height;
            console.log(height_list)
            refList.current.style.bottom = `-${height_list + 8}px`;
        }
    },[filter_clients]);

    return (

        <div className={classes.wrapper}>
            <h3 className={classes.name}>
                Отметить клиента в группе {name}
            </h3>


            {/*<div className={classes.loader}>loading</div>*/}


            <div className={classes.change}>
                <span className={classes.placeholder}>Чтобы отметить клиента поднесите карточку к терминалу или напишите его фамилию ниже</span>
                <OtherInput focus={true} value={search} setValue={handleSearchClient} placeholder={'Начните писать ФИО клиента'}/>
                {filter_clients.length ?
                    <>
                        <span className={classes.arrow}/>
                        <div ref={refList} className={classes.list}>
                            {filter_clients.map(client=><div key={client.id} onClick={()=>change_user(client)} className={classes.list_item}>{client.last_name} {client.first_name} {client.middle_name}</div>)}

                        </div>
                    </>
                    :null}
            </div>
            <div className={classes.btn_group}>
                <Button factor={'danger'} text={'отменить'}/>
                <Button factor={'success'} text={'сохранить'}/>
            </div>
        </div>

    );
};

