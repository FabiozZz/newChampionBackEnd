import React, { useEffect, useState } from 'react';
import { Redirect } from "../common/Redirect";
import { FilterClientsSection } from "./FilterClientSection/FilterClientsSection";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Api from "../../Api/Api";
import { error } from "../TimeTable/TimeTable";
import {
    load_abonement_for_all, load_clients_for_all, load_couch_for_all, load_filial_for_all,
    load_group_for_all,
    load_sort_list_for_all,
    load_status_list_for_all,
    load_types_list_for_all
} from "../../Acnions/clientsActions";
import { SortTable } from './SortTable/SortTable';
import { ClientsColumn } from "./SortTable/ClientsColumn/ClientsColumn";
import { ClientsRow } from "./SortTable/ClientsRow/ClientsRow";
import classes from './clients.module.css';
import HeaderNav from '../common/HeaderNav';
import { Skeleton } from 'antd';

export const Clients = () => {

    const [load,setLoad] = useState(false);

    const [activeFactor, setActiveFactor] = useState(true);
    const toggleColumn = () => {
        setActiveFactor(true)
    };
    const toggleRow = () => {
        setActiveFactor(false)
    };

    const clientsList = useSelector(state => state.clientsList);
    const clients = clientsList.filterClients.length ? clientsList.filterClients : clientsList.allClients;
    const dispatch = useDispatch();

    useEffect(() => {
        let source = axios.CancelToken.source();
        setLoad(true);
        (async () => {
            await Api.getAllClients().then(r => {
                console.log(r)
                dispatch(load_clients_for_all(r.data));
            });
            // await Api.getTypeList(source.token).then(r => {
            //     dispatch(load_types_list_for_all(r.data));
            // });
            // await Api.getGroupList(source.token).then(r => {
            //     dispatch(load_group_for_all(r.data));
            // });
            // await Api.getStatusListForClients(source.token).then(r => {
            //     dispatch(load_status_list_for_all(r.data));
            // });
            // await Api.getAbonimentList(source.token).then(r => {
            //     dispatch(load_abonement_for_all(r.data));
            // });
            // await Api.getCouchList(source.token).then(r => {
            //     dispatch(load_couch_for_all(r.data));
            // });
            // await Api.getFilialList(source.token).then(r => {
            //     dispatch(load_filial_for_all(r.data));
            // });
            // await Api.getSortListForClients(source.token).then(r => {
            //     dispatch(load_sort_list_for_all(r.data));
            // });
            await setLoad(false)
        })().catch(e => {
            if (axios.isCancel(e)) {
                error(e.message);
            }
        });
        return () => source.cancel('Операция прервана');
    }, [dispatch]);



    return (
        <>
            <HeaderNav/>
            <Redirect padding={true} title={"Список клиентов"} />

            <div className={classes.wrapper}>
                <FilterClientsSection />
                    <SortTable clients={clients} active={activeFactor} row={toggleRow} column={toggleColumn} />
                <Skeleton loading={load} paragraph={{ rows: 4, width: "100%" }} active={true}>
                {activeFactor ?
                    <ClientsColumn clients={clients} /> :
                    <ClientsRow clients={clients} />

                }

                </Skeleton>

            </div>
        </>
    );
};
