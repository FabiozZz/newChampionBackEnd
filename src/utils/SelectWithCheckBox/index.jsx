import React, {useEffect, useState} from 'react';
import {Option} from "antd/es/mentions";
import {CheckboxBtn} from "../CheckboxBtn/CheckboxBtn";
import Select from "../FromAnt/Select/Select";

const SelectWithCheckBox = ({data, field, check, clear,label,...props}) => {
    const [render_list, set_render_list] = useState([]);
    const [filter_array, set_filter_array] = useState([]);
    const [all_selected, set_all_selected] = useState(false)
    useEffect(() => {
        if (filter_array.length) {
            const count_array = filter_array.length;
            const count_active_array = filter_array.filter(_ => _.active === true).length;
            set_all_selected(count_array === count_active_array);
        }
    }, [filter_array]);
    useEffect(() => {
        if (data) {
            set_filter_array(data.filter(_ => _.id !== 0));
        }
    }, [data]);
    useEffect(() => {
        if (data && data.length) {
            const fill = data.find(_ => _.id === 0).active
            console.log('filtered_array', filter_array)
            set_render_list(filter_array.map(item => {
                let value = field.reduce((acc, _, i) => acc += item[_] + ' ', '').trim()
                console.log('filtered_array value>>> ', value)
                return (
                    <Option value={item.id} key={item.id} style={{cursor: 'default'}} disabled={true}>
                        <CheckboxBtn text={value} full={fill} isChecked={item.active} setIsChecked={() => check(item)}/>
                    </Option>
                )
            }))
            console.log(data)
        }
    }, [filter_array]);
    const [value, set_value] = useState("Нет данных")
    useEffect(() => {
        if (data) {

            const current_check_array = data.filter(_ => _.active);
            if (data.length && current_check_array.length > 1) {
                set_value(<span
                    dangerouslySetInnerHTML={{__html: `Выбрано: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#BFC5D2"/><text style="font-family: Roboto,sans-serif;line-height: 24px;font-size: 16px" fill="white" y="75%" text-anchor="middle" x="50%">${data.filter(_ => _.active).length}</text></svg>`}}/>)
            } else if (current_check_array[0]) {
                if (current_check_array[0].id === 0) {
                    set_value(current_check_array[0].name)
                } else {
                    let value = field.reduce((acc, _) => acc += current_check_array[0][_] + ' ', '').trim();
                    console.log(value);
                    set_value(value);
                }
            }
        }
    }, [data]);
    console.log('render_list', render_list)
    return (
        <Select value={value&&value} label={label}>
            {data&&data.map(_ => _.id === 0 && <Option value={_.id} key={_.id} style={{cursor: 'default'}} disabled={true}>
                <CheckboxBtn full={all_selected} text={_.name} isChecked={_.active} setIsChecked={clear}/>
            </Option>)}

            {(render_list&&!!render_list.length)&&render_list}
        </Select>
    );
};

export default SelectWithCheckBox;