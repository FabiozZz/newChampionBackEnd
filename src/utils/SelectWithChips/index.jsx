import React, {useEffect, useState} from 'react';
import {Option} from "antd/es/mentions";
import {CheckboxBtn} from "../CheckboxBtn/CheckboxBtn";
import Chips from "../Chips";

const SelectWithChips = ({data,clear,check,field}) => {
    const [render_list, set_render_list] = useState([]);
    const [filter_array, set_filter_array] = useState([]);
    const [all_selected,set_all_selected] = useState(false)
    useEffect(() => {
        if (filter_array.length) {
            const count_array = filter_array.length;
            const count_active_array = filter_array.filter(_ => _.active === true).length;
            set_all_selected(count_array === count_active_array);
        }
    },[filter_array]);
    useEffect(() => {
        set_filter_array(data.filter(_ => _.id !== 0));
    },[data]);
    useEffect(() => {
        if (data.length) {
            const fill = data.find(_=>_.id === 0).active
            console.log('filtered_array',filter_array)
            set_render_list(filter_array.map(item=> {
                let value = field.reduce((acc,_,i)=>acc+=item[_]+ ' ','').trim()
                console.log('filtered_array value>>> ',value)
                return (
                    <React.Fragment key={item.id}>
                        <Chips full={fill} active={item.active} click={() => check(item)}>{value}</Chips>
                    </React.Fragment>
                )
            }))
            console.log(data)
        }
    },[filter_array]);
    const [value,set_value] = useState("Не выбрано")
    useEffect(() => {
        const current_check_array = data.filter(_=>_.active)
        if (data.length && current_check_array.length > 1) {
            set_value(<span dangerouslySetInnerHTML={{__html:`Выбрано: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#BFC5D2"/><text style="font-family: Roboto,sans-serif;line-height: 24px;font-size: 16px" fill="white" y="75%" text-anchor="middle" x="50%">${data.filter(_=>_.active).length}</text></svg>`}}/>)
        }else if(current_check_array[0]){
            if (current_check_array[0].id === 0) {
                set_value(current_check_array[0].name)
            }else {
                let value = field.reduce((acc,_)=>acc+=current_check_array[0][_]+ ' ','').trim();
                console.log(value);
                set_value(value);
            }
        }
    },[data]);
    return (
        <>
            {data.map(_=>_.id===0&&<React.Fragment key={_.id}>
                <Chips full={all_selected} active={_.active} click={clear}>{_.name}</Chips>
            </React.Fragment>)
            }

            {render_list}
        </>
    );
};

export default SelectWithChips;