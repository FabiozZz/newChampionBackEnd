import {
    CHANGE_COUCH_FOR_COURSE,
    CHANGE_TODAY, CLEAR_FILTER, FILTERED_CLIENTS,
    LOAD_CLIENTS,
    LOAD_COUCH,
    LOAD_GROUP
} from "../constants/timeTableConstants";
import { isEmpty } from "../helpers/common";
import {FILTERED_CLIENTS_FIO} from "../constants/profileConstant";

const initialState = {
    clients: [],
    filterClients: [],
    copyFilterClients: [],
    filterSection: {
        group: [],
        couch: []
    }
};
export const timeTableReducer = (state=initialState,action) => {
    switch (action.type) {
        case CHANGE_TODAY:
            let copyState = [...state.clients];
            for (const key in copyState) {
                if (Object.hasOwnProperty.call(copyState, key)) {
                    const element = copyState[key];
                    if(element.id === action.lesson){
                        for (const key in element.trainings) {
                            if (Object.hasOwnProperty.call(element.trainings, key)) {
                                const train = element.trainings[key];
                                if(train.id === action.train){
                                    Object.assign(train,action.client)
                                }
                            }
                        }
                    }

                }
            }
            return {
                ...state,
                clients: [...copyState]
            };
        case CHANGE_COUCH_FOR_COURSE:
            const copyStateCouchForCourse = [...state.clients];
            // eslint-disable-next-line array-callback-return
            for (const key in copyStateCouchForCourse) {
                if (Object.hasOwnProperty.call(copyStateCouchForCourse, key)) {
                    const element = copyStateCouchForCourse[key];
                    if(element.id === action.id){
                        Object.assign(element.trainer,action.couch)
                    }

                }
            }
            return {
                ...state,
                clients: [...copyStateCouchForCourse]
            };
        case LOAD_GROUP:
            return {
                ...state,
                filterSection: {
                    ...state.filterSection,
                    group: [...state.filterSection.group,...action.group]
                }

            }
        case LOAD_COUCH:
            return {
                ...state,
                filterSection: {
                    ...state.filterSection,
                    couch: [...state.filterSection.couch,...action.couch]
                }

            }
        case LOAD_CLIENTS:
            return {
                ...state,
                clients: [...action.clients]
            }
        case FILTERED_CLIENTS:
            const filteredClients = state.clients.filter(e=>{
                if ((!isEmpty(action.group) && e.group.id === action.group.id) || (!isEmpty(action.coach) && e.trainer.id === action.coach.id)) {
                    return e;
                }else{
                    return null;
                }
            });
            return {
                ...state,
                filterClients: [...filteredClients],
                copyFilterClients: [...filteredClients]
            };
        case FILTERED_CLIENTS_FIO:
            let copyStateClientsForFilteredFio = [];
            let result;
            if (state.filterClients.length) {
                for (let i = 0; i < state.filterClients.length; i++) {
                    copyStateClientsForFilteredFio.push({...state.filterClients[i], trainings: [...state.filterClients[i].trainings]});
                }
                result = copyStateClientsForFilteredFio.filter((lesson,index)=>{
                    lesson.trainings = state.filterClients[index].trainings.filter(train => {
                        let fullName = `${train.client.first_name.toLowerCase()} ${train.client.last_name.toLowerCase()}`
                        let fullNameRev = `${train.client.last_name.toLowerCase()} ${train.client.first_name.toLowerCase()}`
                        return fullName.toLowerCase().includes(action.event.toLowerCase()) || fullNameRev.toLowerCase().includes(action.event.toLowerCase())
                    });
                    return lesson.trainings.length;

                })

            }else{
                for (let i = 0; i < state.clients.length; i++) {
                    copyStateClientsForFilteredFio.push({...state.clients[i], trainings: [...state.clients[i].trainings]});
                }
                result = copyStateClientsForFilteredFio.filter((lesson,index)=>{
                    lesson.trainings = state.clients[index].trainings.filter(train => {
                        let fullName = `${train.client.first_name.toLowerCase()} ${train.client.last_name.toLowerCase()}`
                        let fullNameRev = `${train.client.last_name.toLowerCase()} ${train.client.first_name.toLowerCase()}`
                        return fullName.toLowerCase().includes(action.event.toLowerCase()) || fullNameRev.toLowerCase().includes(action.event.toLowerCase())
                    });
                    return lesson.trainings.length;

                })
            }
            return {
                ...state,
                filterClients: action.event !== ""?[...result]:[...state.copyFilterClients],
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filterClients: []
            }
        default:
            return state;
    }
};