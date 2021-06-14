import React from 'react';
import {CardUser} from "../../../utils/CardUser/CardUser";
import {shallow} from "enzyme";
test('Нужна справка от врача',function(){
    const wrapper = shallow(
        React.createElement(CardUser, {health:true})
    )
    expect(wrapper).toBeInTheDocument();


    }
);