import {
    CHANGE_COUCH_FOR_COURSE,
    CHANGE_TODAY, CLEAR_FILTER, FILTERED_CLIENTS,
    LOAD_CLIENTS,
    LOAD_COUCH,
    LOAD_GROUP
} from "../constants/timeTableConstants";

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
            const copyStateToDay = [...state.clients];
            // eslint-disable-next-line array-callback-return
            copyStateToDay.find(e=>{
                if (e.id === action.course) {
                    e.toDay++;
                    return e;
                }
            })
            // eslint-disable-next-line array-callback-return
            copyStateToDay[action.course-1].clients.find(e => {
                if (e.id === action.id) {
                    e.toDay = !e.toDay;
                    return e;
                }
            });
            return {
                ...state,
                clients: [...copyStateToDay]
            };
        case CHANGE_COUCH_FOR_COURSE:
            const copyStateCouchForCourse = [...state.clients];
            // eslint-disable-next-line array-callback-return
            copyStateCouchForCourse.find(e=>{
                if (e.id === action.id) {
                    e.coach = action.couch;
                    return e;
                }
            })
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
                if (e.name === action.group || e.coach === action.coach) {
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