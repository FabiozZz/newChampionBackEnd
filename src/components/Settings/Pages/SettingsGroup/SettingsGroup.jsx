import React, {useEffect, useState} from 'react';
import classes from './set_group.module.css';
import {Redirect} from "../../../common/Redirect";
import {Button} from "../../../../utils/Buttons/Button";
import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import {arrayMove, SortableContainer, SortableElement} from 'react-sortable-hoc';
// export const SettingsGroupContext = createContext()

const SortableItem = SortableElement(({age_group,link}) => (
    <tr tabIndex={0}
        key={age_group.id}>
        <td onClick={link}>
            <svg style={{cursor:'grab'}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.33203 4.00033C1.33203 3.26395 1.92898 2.66699 2.66536 2.66699H13.332C14.0684 2.66699 14.6654 3.26395 14.6654 4.00033C14.6654 4.73671 14.0684 5.33366 13.332 5.33366H2.66536C1.92898 5.33366 1.33203 4.73671 1.33203 4.00033ZM1.33203 8.00033C1.33203 7.26395 1.92898 6.66699 2.66536 6.66699H13.332C14.0684 6.66699 14.6654 7.26395 14.6654 8.00033C14.6654 8.7367 14.0684 9.33366 13.332 9.33366H2.66536C1.92898 9.33366 1.33203 8.7367 1.33203 8.00033ZM1.33203 12.0003C1.33203 11.2639 1.92898 10.667 2.66536 10.667H13.332C14.0684 10.667 14.6654 11.2639 14.6654 12.0003C14.6654 12.7367 14.0684 13.3337 13.332 13.3337H2.66536C1.92898 13.3337 1.33203 12.7367 1.33203 12.0003Z" fill="#BFC5D2"/></svg>
            <span className={classes.table_label}>{age_group.label}</span>
        </td>
        <td width={52}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.41845 4.00586L2.80893 10.6159C2.77568 10.6492 2.75167 10.6913 2.74023 10.7366L2.00763 13.6771C1.98572 13.7656 2.01173 13.8597 2.07633 13.9243C2.12521 13.9732 2.19181 14.0003 2.25993 14.0003C2.2808 14.0003 2.30214 13.9977 2.32291 13.9925L5.26342 13.2598C5.30925 13.2483 5.35088 13.2244 5.38414 13.1912L11.9942 6.58164L9.41845 4.00586Z" fill="#BFC5D2"/><path d="M13.6332 3.10437L12.8974 2.36862C12.4057 1.87689 11.5487 1.87736 11.0575 2.36862L10.1562 3.26987L12.7319 5.84555L13.6332 4.94431C13.8788 4.69877 14.0141 4.37196 14.0141 4.02439C14.0141 3.67681 13.8788 3.35 13.6332 3.10437Z" fill="#BFC5D2"/></svg></td>
        <td width={52}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5 4.00033C5 2.71166 6.04467 1.66699 7.33333 1.66699H8.66667C9.95533 1.66699 11 2.71166 11 4.00033L13.3333 4.00033C13.7015 4.00033 14 4.2988 14 4.66699C14 5.03518 13.7015 5.33366 13.3333 5.33366H12.6667V12.0003C12.6667 13.1049 11.7712 14.0003 10.6667 14.0003H5.33333C4.22876 14.0003 3.33333 13.1049 3.33333 12.0003V5.33366H2.66667C2.29848 5.33366 2 5.03518 2 4.66699C2 4.2988 2.29848 4.00033 2.66667 4.00033L5 4.00033ZM7.33333 7.33366C7.33333 6.96547 7.03486 6.66699 6.66667 6.66699C6.29848 6.66699 6 6.96547 6 7.33366V10.667C6 11.0352 6.29848 11.3337 6.66667 11.3337C7.03486 11.3337 7.33333 11.0352 7.33333 10.667V7.33366ZM10 7.33366C10 6.96547 9.70152 6.66699 9.33333 6.66699C8.96514 6.66699 8.66667 6.96547 8.66667 7.33366V10.667C8.66667 11.0352 8.96514 11.3337 9.33333 11.3337C9.70152 11.3337 10 11.0352 10 10.667V7.33366Z" fill="#BFC5D2"/></svg></td>
    </tr>
));

const SortableList = SortableContainer(({list,link}) => (
    <table cellSpacing={4} cellPadding={18} className={classes.table}>
        <tbody>
        {list.map((age_group,index) => {
            return <SortableItem key={age_group.id} link={link} age_group={age_group} index={index}/>
        })}

        {/*{list.sort(sortOrder).map(age_group => {*/}
        {/*    return (*/}
        {/*        <tr onDragStart={start} onDragOver={dragover}*/}
        {/*            key={age_group.id} draggable={true}>*/}
        {/*            <td>*/}
        {/*                <svg style={{cursor:'grab'}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.33203 4.00033C1.33203 3.26395 1.92898 2.66699 2.66536 2.66699H13.332C14.0684 2.66699 14.6654 3.26395 14.6654 4.00033C14.6654 4.73671 14.0684 5.33366 13.332 5.33366H2.66536C1.92898 5.33366 1.33203 4.73671 1.33203 4.00033ZM1.33203 8.00033C1.33203 7.26395 1.92898 6.66699 2.66536 6.66699H13.332C14.0684 6.66699 14.6654 7.26395 14.6654 8.00033C14.6654 8.7367 14.0684 9.33366 13.332 9.33366H2.66536C1.92898 9.33366 1.33203 8.7367 1.33203 8.00033ZM1.33203 12.0003C1.33203 11.2639 1.92898 10.667 2.66536 10.667H13.332C14.0684 10.667 14.6654 11.2639 14.6654 12.0003C14.6654 12.7367 14.0684 13.3337 13.332 13.3337H2.66536C1.92898 13.3337 1.33203 12.7367 1.33203 12.0003Z" fill="#BFC5D2"/></svg>*/}
        {/*                <span className={classes.table_label}>{age_group.label}</span>*/}
        {/*            </td>*/}
        {/*            <td width={52}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.41845 4.00586L2.80893 10.6159C2.77568 10.6492 2.75167 10.6913 2.74023 10.7366L2.00763 13.6771C1.98572 13.7656 2.01173 13.8597 2.07633 13.9243C2.12521 13.9732 2.19181 14.0003 2.25993 14.0003C2.2808 14.0003 2.30214 13.9977 2.32291 13.9925L5.26342 13.2598C5.30925 13.2483 5.35088 13.2244 5.38414 13.1912L11.9942 6.58164L9.41845 4.00586Z" fill="#BFC5D2"/><path d="M13.6332 3.10437L12.8974 2.36862C12.4057 1.87689 11.5487 1.87736 11.0575 2.36862L10.1562 3.26987L12.7319 5.84555L13.6332 4.94431C13.8788 4.69877 14.0141 4.37196 14.0141 4.02439C14.0141 3.67681 13.8788 3.35 13.6332 3.10437Z" fill="#BFC5D2"/></svg></td>*/}
        {/*            <td width={52}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5 4.00033C5 2.71166 6.04467 1.66699 7.33333 1.66699H8.66667C9.95533 1.66699 11 2.71166 11 4.00033L13.3333 4.00033C13.7015 4.00033 14 4.2988 14 4.66699C14 5.03518 13.7015 5.33366 13.3333 5.33366H12.6667V12.0003C12.6667 13.1049 11.7712 14.0003 10.6667 14.0003H5.33333C4.22876 14.0003 3.33333 13.1049 3.33333 12.0003V5.33366H2.66667C2.29848 5.33366 2 5.03518 2 4.66699C2 4.2988 2.29848 4.00033 2.66667 4.00033L5 4.00033ZM7.33333 7.33366C7.33333 6.96547 7.03486 6.66699 6.66667 6.66699C6.29848 6.66699 6 6.96547 6 7.33366V10.667C6 11.0352 6.29848 11.3337 6.66667 11.3337C7.03486 11.3337 7.33333 11.0352 7.33333 10.667V7.33366ZM10 7.33366C10 6.96547 9.70152 6.66699 9.33333 6.66699C8.96514 6.66699 8.66667 6.96547 8.66667 7.33366V10.667C8.66667 11.0352 8.96514 11.3337 9.33333 11.3337C9.70152 11.3337 10 11.0352 10 10.667V7.33366Z" fill="#BFC5D2"/></svg></td>*/}
        {/*        </tr>*/}
        {/*    )*/}
        {/*})}*/}
        </tbody>
    </table>
));

export const SettingsGroup = () => {

    const history = useHistory();
    const {groups,ages_groups} = useSelector(state => state.settings_group);
    const [listAge, setListAge] = useState([
        {id:1,order:1,label:'строка 1'},
        {id:2,order:2,label:'строка 2'},
        {id:3,order:3,label:'строка 3'},
        {id:4,order:4,label:'строка 4'},
    ]);
    const sortOrder = (a,b)=>a.order>b.order?1:-1;
    const link = (e) => {
        console.log('hello')
    };
    const onSortEnd = ({oldIndex, newIndex,...res}) => {
        console.log(res);
        setListAge(prevState => {
            const newArray = arrayMove(prevState, oldIndex, newIndex).map((item,index)=> {
                return {...item,order:index + 1};
            })
            return [
                ...newArray,
            ];
        });
        // console.log(listAge);
    };

    useEffect(() => {
        setListAge(listAge.sort(sortOrder));
    },[listAge]);
    return (
        <>
            <Redirect title={'Группы'}/>

            {/*<p className={classes.empty_text}>Список групп пуст</p>*/}
            <div className={classes.block_wrapper}>
                <p className={classes.block_header}>Возрастные группы</p>
                {!(listAge && listAge.length) ?
                    <span className={classes.block_mute}>Вы еще не добавили возрастные группы</span>
                    // <table cellSpacing={4} cellPadding={18} className={classes.table}>
                    //     <tbody>
                    //     {listAge.sort(sortOrder).map(age_group => {
                    //         return (
                    //             <tr onDragStart={start} onDragOver={dragover}
                    //                 key={age_group.id} draggable={true}>
                    //                 <td>
                    //                     <svg style={{cursor:'grab'}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.33203 4.00033C1.33203 3.26395 1.92898 2.66699 2.66536 2.66699H13.332C14.0684 2.66699 14.6654 3.26395 14.6654 4.00033C14.6654 4.73671 14.0684 5.33366 13.332 5.33366H2.66536C1.92898 5.33366 1.33203 4.73671 1.33203 4.00033ZM1.33203 8.00033C1.33203 7.26395 1.92898 6.66699 2.66536 6.66699H13.332C14.0684 6.66699 14.6654 7.26395 14.6654 8.00033C14.6654 8.7367 14.0684 9.33366 13.332 9.33366H2.66536C1.92898 9.33366 1.33203 8.7367 1.33203 8.00033ZM1.33203 12.0003C1.33203 11.2639 1.92898 10.667 2.66536 10.667H13.332C14.0684 10.667 14.6654 11.2639 14.6654 12.0003C14.6654 12.7367 14.0684 13.3337 13.332 13.3337H2.66536C1.92898 13.3337 1.33203 12.7367 1.33203 12.0003Z" fill="#BFC5D2"/></svg>
                    //                     <span className={classes.table_label}>{age_group.label}</span>
                    //                 </td>
                    //                 <td width={52}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.41845 4.00586L2.80893 10.6159C2.77568 10.6492 2.75167 10.6913 2.74023 10.7366L2.00763 13.6771C1.98572 13.7656 2.01173 13.8597 2.07633 13.9243C2.12521 13.9732 2.19181 14.0003 2.25993 14.0003C2.2808 14.0003 2.30214 13.9977 2.32291 13.9925L5.26342 13.2598C5.30925 13.2483 5.35088 13.2244 5.38414 13.1912L11.9942 6.58164L9.41845 4.00586Z" fill="#BFC5D2"/><path d="M13.6332 3.10437L12.8974 2.36862C12.4057 1.87689 11.5487 1.87736 11.0575 2.36862L10.1562 3.26987L12.7319 5.84555L13.6332 4.94431C13.8788 4.69877 14.0141 4.37196 14.0141 4.02439C14.0141 3.67681 13.8788 3.35 13.6332 3.10437Z" fill="#BFC5D2"/></svg></td>
                    //                 <td width={52}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5 4.00033C5 2.71166 6.04467 1.66699 7.33333 1.66699H8.66667C9.95533 1.66699 11 2.71166 11 4.00033L13.3333 4.00033C13.7015 4.00033 14 4.2988 14 4.66699C14 5.03518 13.7015 5.33366 13.3333 5.33366H12.6667V12.0003C12.6667 13.1049 11.7712 14.0003 10.6667 14.0003H5.33333C4.22876 14.0003 3.33333 13.1049 3.33333 12.0003V5.33366H2.66667C2.29848 5.33366 2 5.03518 2 4.66699C2 4.2988 2.29848 4.00033 2.66667 4.00033L5 4.00033ZM7.33333 7.33366C7.33333 6.96547 7.03486 6.66699 6.66667 6.66699C6.29848 6.66699 6 6.96547 6 7.33366V10.667C6 11.0352 6.29848 11.3337 6.66667 11.3337C7.03486 11.3337 7.33333 11.0352 7.33333 10.667V7.33366ZM10 7.33366C10 6.96547 9.70152 6.66699 9.33333 6.66699C8.96514 6.66699 8.66667 6.96547 8.66667 7.33366V10.667C8.66667 11.0352 8.96514 11.3337 9.33333 11.3337C9.70152 11.3337 10 11.0352 10 10.667V7.33366Z" fill="#BFC5D2"/></svg></td>
                    //             </tr>
                    //         )
                    //     })}
                    //     </tbody>
                    // </table>
                    :
                    <SortableList link={link} list={listAge}  onSortEnd={onSortEnd} pressDelay={100}/>

                }

                <div className={classes.add_group}>
                    <Button size={'auto'} factor={'success'} disabled={!(listAge && listAge.length)}
                            click={() => history.push('/settings/group/create_age_group')}>
                        Добавить возрастную группу
                        {/*<Link to={'/settings/group/create_group'} style={{color:'inherit'}}>Добавить групповое занятие</Link>*/}
                    </Button>
                </div>
            </div>
            <div className={classes.block_wrapper}>
                <p className={classes.block_header}>Групповые занятия</p>
                <span className={classes.block_mute}>Вы еще не добавили не одного</span>
                <div className={classes.add_group}>
                    <Button size={'auto'} factor={'success'} click={() => history.push('/settings/group/create_group')}>
                        Добавить групповое занятие
                        {/*<Link to={'/settings/group/create_group'} style={{color:'inherit'}}>Добавить возрастную группу</Link>*/}
                    </Button>
                </div>
            </div>
        </>
    );
};