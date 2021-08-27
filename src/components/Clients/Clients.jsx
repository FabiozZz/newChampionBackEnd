/**@namespace Clients*/

import React, {useEffect, useState} from 'react';
import { Redirect } from "../common/Redirect";
import { FilterClientsSection } from "./FilterClientSection/FilterClientsSection";
import { useSelector } from "react-redux";
import { SortTable } from './SortTable/SortTable';
import { ClientsColumn } from "./SortTable/ClientsColumn/ClientsColumn";
import { ClientsRow } from "./SortTable/ClientsRow/ClientsRow";
import classes from './clients.module.css';
import HeaderNav from '../common/HeaderNav';
import { Skeleton } from 'antd';
import ErrorsGroup from "../common/ErrorsGroup";

/**
 * @returns {React.Element}
 * @constructor
 */
export const Clients = () => {
    const [activeFactor, setActiveFactor] = useState(true);
    const toggleColumn = () => {
        setActiveFactor(true)
    };
    const toggleRow = () => {
        setActiveFactor(false)
    };

    const clientsList = useSelector(state => state.clientsList);
    const {error,loading} = clientsList;
    const clients = clientsList.filterClients.length ? clientsList.filterClients : clientsList.allClients;
    const [renderError, setError] = useState([]);

    useEffect(() => {
        if (error.length) {
            setError(ErrorsGroup(error));
        }
    }, [error]);

    return (
        <>
            {error.length ?
                // <></>
                renderError
                : null}
            <HeaderNav/>
            <Redirect padding={true} title={"Список клиентов"}/>

            <div className={classes.wrapper}>
                <FilterClientsSection/>
                <SortTable clients={clients} active={activeFactor} row={toggleRow} column={toggleColumn}/>
                <Skeleton loading={loading} paragraph={{rows: 4, width: "100%"}} active={true}>
                    {(!clients?.length || false) ?
                        <p className={classes.text_none_data}>Данных нет</p> :
                        activeFactor ?
                            <ClientsColumn clients={clients}/> :
                            <ClientsRow clients={clients}/>
                    }
                </Skeleton>
            </div>
        </>
    );
};
