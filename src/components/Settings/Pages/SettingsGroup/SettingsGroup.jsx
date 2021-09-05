import React from 'react';
import classes from './set_group.module.css';
import {Redirect} from "../../../common/Redirect";
import {Button} from "../../../../utils/Buttons/Button";
import {useHistory} from "react-router";
import {useSelector} from "react-redux";

// export const SettingsGroupContext = createContext()

export const SettingsGroup = () => {

    const history = useHistory();
    const {groups, ages_groups} = useSelector(state => state.settings_group);

    return (
        <>
            <Redirect title={'Группы'}/>
            {/*<p className={classes.empty_text}>Список групп пуст</p>*/}
            <div className={classes.block_wrapper}>
                {/*{ages_groups.length ?*/}
                {/*    <table>*/}
                {/*        <tbody>*/}
                {/*        {}*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*    : null*/}
                {/*}*/}
                <p className={classes.block_header}>Возрастные группы</p>

                <span className={classes.block_mute}>Вы еще не добавили возрастные группы</span>
                <div className={classes.add_group}>
                    <Button size={'auto'} factor={'success'} click={() => history.push('/settings/group/create_group')}>
                        Добавить возрастную группу
                        {/*<Link to={'/settings/group/create_group'} style={{color:'inherit'}}>Добавить возрастную группу</Link>*/}
                    </Button>
                </div>
            </div>
            <div className={classes.block_wrapper}>
                <p className={classes.block_header}>Групповые занятия</p>
                <span className={classes.block_mute}>Вы еще не добавили не одного</span>
                <div className={classes.add_group}>
                    <Button size={'auto'} factor={'success'}
                            click={() => history.push('/settings/group/create_age_group')}>
                        Добавить групповое занятие
                        {/*<Link to={'/settings/group/create_group'} style={{color:'inherit'}}>Добавить групповое занятие</Link>*/}
                    </Button>
                </div>
            </div>
        </>
    );
};