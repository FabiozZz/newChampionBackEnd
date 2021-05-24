import React from 'react';
import './timeTable.css';
import {Button} from "../../utils/Buttons/Button";
import {SearchBox} from "../../utils/SearchBox/SearchBox";
import {FilterSection} from "./FilterSection/FilterSection";
import {DataPickerRange} from "../../utils/DataPickerRange/DataPickerRange";

export const TimeTable = () => {
    return (
        <>
        {/*<div className={'row mx-auto mt-4'}>*/}
        {/*    <div className="col-4">*/}
        {/*        <Button text={'some'}/>*/}
        {/*    </div>*/}
        {/*    <div className="col-4">*/}
        {/*        <Button text={'some'} factor={'success'}/>*/}

        {/*    </div>*/}
        {/*    <div className="col-4">*/}
        {/*        <SearchBox/>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*    <div className="row">*/}
        {/*        <div className="col">*/}
        {/*            <h1>Расписание</h1>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <FilterSection/>*/}
            <DataPickerRange/>
        </>
    );
};