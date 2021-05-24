import React from 'react';
import {SelectBox} from "../../../utils/SelectBox/SelectBox";

export const FilterSection = () => {
    return (
        <div className={'row vw-100 filterSectionWrapper'}>
            <SelectBox simpleClass={'col-4'}/>
            <SelectBox simpleClass={'col-4'}/>
        </div>
    );
};