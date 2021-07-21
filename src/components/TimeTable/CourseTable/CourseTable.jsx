import React, { useState } from 'react';
import classes from './courseTable.module.css';
import { CardUser } from "../../../utils/CardUser/CardUser";
import { useDispatch, useSelector } from "react-redux";
import { Option } from "./Option";
import { change_couch } from "../../../Acnions/timeTableActions";
import Api from "../../../Api/Api";
import moment from 'moment';

/**
 * компонент для визуального отображения занятий
 *
 * @param data массив объектов с клиентами
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const CourseTable = ({ data }) => {
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
    const handleChangeCouchForCourse = async (id, couch) => {
        await Api.changeCouch(id, couch.id).then(r => {
            dispatch(change_couch(id, couch))

        });
    };
    // если в массиве что то есть
    if (data.length) {
        const renderListGroup = data.map(lesson => {
            let trainer = `${lesson.trainer.last_name} ${lesson.trainer.first_name} ${lesson.trainer.middle_name}`
            let checked_clients = lesson.trainings.filter(client => client.is_visited)
            return (
                <React.Fragment key={lesson.id} >
                    <h4 className={classes.course}>{lesson.group.name}</h4>
                    <Option change={handleChangeCouchForCourse} id={lesson.id} couch={trainer} couchList={couchList} />
                    <span className={classes.date}>{moment(lesson.date).format('DD.MM.YYYY')}</span>
                    <span className={classes.count}>Отмечено: <b>{checked_clients.length}</b> человек из <b>{lesson.trainings.length}</b></span>
                    <div>
                        {lesson.trainings.map(train => {
                            if (!train.client.in_archive) {
                                return (
                                    <div key={train.id} className={`${classes.item}`}>
                                        <CardUser
                                            // abonimentName={card.abonement}
                                            // cardStatusName={card.statusName}
                                            // cardFrom={card.cardFrom}
                                            // lessons={card.lessons}
                                            // cardTo={card.cardTo}
                                            lesson_id={lesson.id}
                                            train_id={train.id}
                                            id={train.client.id}
                                            name={train.client.first_name}
                                            surname={train.client.last_name}
                                            // expire={card.burnAbonement}
                                            // call={card.call}
                                            // health={card.health}
                                            toDay={train.is_visited}
                                            // birthDay={train.card.birthday}
                                            birthDayDate={train.client.date_of_birth}
                                        // status={card.status}
                                        // course={card.course}
                                        // freeze={card.freeze}
                                        // img={card.img}
                                        />
                                    </div>);
                            } else {
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
                {renderListGroup}
            </div>
        )
    } else {
        // если массив пуст
        return (
            <div className={'col-12 text-center my-5'}>
                <p>Данных нет</p>
            </div>
        )

    }
};
CourseTable.defaultProps = {
    data: []
}
