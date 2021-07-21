import React, { useEffect, useRef, useState } from "react";
import classes from "./general.module.css";
import { CourseTable } from "./CourseTable/CourseTable";
import Api from "../../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { message, Skeleton } from "antd";
import {
    filtered_clients, filtered_clients_fio,
    load_clients,
    load_couch,
    load_group,
} from "../../Acnions/timeTableActions";
import HeaderNav from "../common/HeaderNav";
import axios from "axios";
import { FilterSection } from "./FilterSection/FilterSection";
import { HiddenFilter } from "./HiddenFilter/HiddenFilter";
import { InfoBlock } from "./InfoBlock/InfoBlock";
import cn from 'classnames';

export const error = (text) => {
    message.error(text, 2);
};

export const TimeTable = () => {
    const refBox = useRef(null);
    const refInfo = useRef(null);

    const [search, setSearch] = useState('');

    const hendleSearchClient = (e) => {
        setSearch(e.target.value);
        dispatch(filtered_clients_fio(e.target.value));
    };

    const stateClients = useSelector((state) => state.timeTable);

    const {clients, filterClients} = stateClients;

    let dataClients = filterClients.length ? filterClients : clients;

    const [isLoad, setIsLoad] = useState(false);

    // const [uploadData, setUploadData] = useState(false);

    const dispatch = useDispatch();

    const [groupData, setGroup] = useState({});
    const handleChangeGroup = (obj) => {
        setGroup(obj);
    };

    const [couchData, setCouch] = useState({});
    const handleChangeCouch = (obj) => {
        setCouch(obj);
    };

    const [date, setDate] = useState({
        from: "",
        to: "",
    });
    const handleChangeDateFrom = (some) => {
        setDate((prevState) => ({...prevState, from: some}));
    };

    const handleChangeDateTo = (some) => {
        setDate((prevState) => ({...prevState, to: some}));
    };

    useEffect(() => {
        const source = axios.CancelToken.source();
        // setUploadData(true)
        // if (!dataClients.length) {
        setIsLoad(true);
        // }
        (async () => {
            await Api.getClientsTimeTable(source.token).then((r) => {
                dispatch(load_clients(r.data));
            });
            await Api.getGroupList(source.token).then((r) => {
                console.log('%cr: ', 'color: MidnightBlue; background: Aquamarine;', r);

                dispatch(load_group(r.data));
            });
            await Api.getCouchList(source.token).then((r) => {
                console.log('%cr: ', 'color: MidnightBlue; background: Aquamarine;', r);
                dispatch(load_couch(r.data));
            });
            await setIsLoad(false);
            // await setUploadData(false);
        })().catch((e) => {
            if (axios.isCancel(e)) {
                error(e.message);
            }
        });
        return () => source.cancel("Операция прервана");
    }, [dispatch]);

    const [hide, setHide] = useState(false);
    const handleToggleHide = () => {
        setHide(!hide);
    };

    const clearFilter = () => {
        setDate({from: "", to: ""});
        setGroup({});
        setCouch({});
        setSearch('');
    };

    useEffect(() => {
        dispatch(filtered_clients(groupData, couchData));
    }, [couchData, dispatch, groupData]);

    const [hideOrVisInfo, setHideOrVisInfo] = useState(false);
    const [visibleInfo, setVisibleInfo] = useState(false);
    const toggleVisibleInfo = () => {
        setVisibleInfo(!visibleInfo);
    };

    useEffect(() => {
        if (refBox.current) {
            if (refBox.current.scrollWidth > refBox.current.clientWidth) {
                setHideOrVisInfo(true);
            } else {
                setHideOrVisInfo(false);
            }
        }
    });

    useEffect(() => {
        const scrollBox = () => {
            if (refInfo.current) {
                refInfo.current.style.right =
                    refBox.current.getBoundingClientRect().right;
            }
        };
        refBox.current.addEventListener("scroll", scrollBox);
    }, []);

    return (
        <>
            {/* {(uploadData && dataClients.length) &&
                <div class={cn(classes.lds_ring)}><div></div><div></div><div></div><div></div></div>
            } */}

            <HeaderNav/>

            <h1 className={classes.wrapper__title}>Расписание</h1>

            <div className={cn('container-fluid', classes.wrapper__table)}>
                {!hide && (
                    <FilterSection
                        serch={search}
                        setSearch={hendleSearchClient}
                        date={date}
                        couchData={couchData}
                        groupData={groupData}
                        handleChangeCouch={handleChangeCouch}
                        handleChangeGroup={handleChangeGroup}
                        changeDateTo={handleChangeDateTo}
                        changeDateFrom={handleChangeDateFrom}
                    />
                )}
                <HiddenFilter
                    search={search}
                    hide={hide}
                    clear={clearFilter}
                    toggleHide={handleToggleHide}
                    couch={couchData}
                    group={groupData}
                    date={date}
                />

                {hideOrVisInfo && (
                    <div ref={refInfo} className={classes.info_block} onClick={toggleVisibleInfo}>
                        <InfoBlock toggle={visibleInfo}/>
                    </div>
                )}
                <div ref={refBox} className={` ${classes.wrapper__course_table} ${isLoad ? "row" : ""}`}>
                    <Skeleton loading={isLoad} paragraph={{rows: 4, width: "100%"}} active={true}/>
                    <Skeleton loading={isLoad} paragraph={{rows: 4, width: "100%"}} active={true}/>
                    <Skeleton loading={isLoad} paragraph={{rows: 4, width: "100%"}} active={true}>
                        <CourseTable data={dataClients}/>
                    </Skeleton>
                </div>
            </div>
        </>
    );
};
