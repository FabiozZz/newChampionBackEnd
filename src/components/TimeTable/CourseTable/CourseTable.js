import React from 'react';
import classes from './courseTable.module.css';
import {CardUser} from "../../../utils/CardUser/CardUser";
import {useDispatch, useSelector} from "react-redux";
import {Option} from "./Option";
import {change_couch} from "../../../Acnions/timeTableActions";
import Api from "../../../Api/Api";

export const CourseTable = ({data}) => {

    const couchList = useSelector(state => state.timeTable.filterSection.couch);
    const dispatch = useDispatch();

    const handleChangeCouchForCourse = async (id,couch) => {
        await Api.getChangeCouch(id, couch).then(r=>{
            dispatch(change_couch(id,couch))

        });
    };
    if (data.length) {
        const renderListGroup = data.map(e=>{
            return (
                <React.Fragment key={e.id} >
                            <h4 className={classes.course}>{e.name}</h4>
                            <Option change={handleChangeCouchForCourse} id={e.id} couch={e.coach} couchList={couchList}/>
                            <span className={classes.date}>{e.timeTraining}</span>
                            <span className={classes.count}>Отмечено: <b>{e.toDay}</b> человек из <b>{e.totalClients}</b></span>
                        <div>
                        {e.clients.map(card=>{
                            return (
                                <div key={card.id} className={`${classes.item}`}>
                                    <CardUser
                                        id={card.id}
                                        name={card.name}
                                        surname={card.lastName}
                                        expire={card.burnAbonement}
                                        call={card.call}
                                        health={card.health}
                                        toDay={card.toDay}
                                        birthDay={card.birthday}
                                        status={card.status}
                                        course={card.course}
                                    />
                                </div>)})
                        }
                        </div>
                </React.Fragment>)
        })
        return (
            <div className={classes.table_wrapper}>
                {[renderListGroup,renderListGroup]}
            </div>
        )
    }else{
        return (
            <div className={'col-12 text-center my-5'}>
                <p>Данных нет</p>
            </div>
        )

    }
};
CourseTable.defaultProps ={
    data: []
}
