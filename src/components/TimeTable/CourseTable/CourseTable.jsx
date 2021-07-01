import React from 'react';
import classes from './courseTable.module.css';
import {CardUser} from "../../../utils/CardUser/CardUser";
import {useDispatch, useSelector} from "react-redux";
import {Option} from "./Option";
import {change_couch} from "../../../Acnions/timeTableActions";
import Api from "../../../Api/Api";

/**
 * компонент для визуального отображения занятий
 *
 * @param data массив объектов с клиентами
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const CourseTable = ({data}) => {
    /**
     * массив полученный из redux хранит список доступных тренеров для замены
     * @type {[]|*}
     */
    const couchList = useSelector(state => state.timeTable.filterSection.couch);

    const dispatch = useDispatch();

    /**
     * функция отправляет данные на сервер для подмены тренеров
     *
     * @param id порядковый номер группы
     *
     * @param couch тренер на которого меняют существующего тренера
     *
     * @returns {Promise<void>}
     */
    const handleChangeCouchForCourse = async (id,couch) => {
        await Api.getChangeCouch(id, couch).then(r=>{
            dispatch(change_couch(id,couch))

        });
    };

    // если в массиве что то есть
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
                            if (!card.is_Archive) {
                                return (
                                    <div key={card.id} className={`${classes.item}`}>
                                        <CardUser
                                            abonimentName={card.abonement}
                                            cardStatusName={card.statusName}
                                            cardFrom={card.cardFrom}
                                            lessons={card.lessons}
                                            cardTo={card.cardTo}
                                            id={card.id}
                                            name={card.name}
                                            surname={card.lastName}
                                            expire={card.burnAbonement}
                                            call={card.call}
                                            health={card.health}
                                            toDay={card.toDay}
                                            birthDay={card.birthday}
                                            birthDayDate={card.birthdayDate}
                                            status={card.status}
                                            course={card.course}
                                            freeze={card.freeze}
                                        />
                                    </div>);
                            }else {
                                return null
                            }

                            }
                        )
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
        // если массив пуст
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
