import ActionButton from "antd/lib/modal/ActionButton";
import {
    CHANGE_COUCH_FOR_COURSE,
    CHANGE_TODAY, CLEAR_FILTER, FILTERED_CLIENTS,
    LOAD_CLIENTS,
    LOAD_COUCH,
    LOAD_GROUP
} from "../constants/timeTableConstants";
import { isEmpty } from "../helpers/common";

const initialState ={
    clients: [],
    filterClients:[],
    filterSection:{
        group:[],
        couch:[]
    }
}
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
                    group: [...action.group]
                }

            }
        case LOAD_COUCH:
            return {
                ...state,
                filterSection: {
                    ...state.filterSection,
                    couch: [...action.couch]
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
                }
            });
            return {
                ...state,
                filterClients: [...filteredClients]
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