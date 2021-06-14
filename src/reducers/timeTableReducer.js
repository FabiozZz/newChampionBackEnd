import {
    CHANGE_COUCH_FOR_COURSE,
    CHANGE_TODAY,
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
            var copyState = [...state.clients];
            // eslint-disable-next-line array-callback-return
            copyState.find(e=>{
                if (e.id === action.course) {
                    e.toDay++;
                    return e;
                }
            })
            // eslint-disable-next-line array-callback-return
            copyState[action.course-1].clients.find(e => {
                if (e.id === action.id) {
                    e.toDay = !e.toDay;
                    return e;
                }
            });
            return {
                ...state,
                clients: [...copyState]
            };
        case CHANGE_COUCH_FOR_COURSE:
            var copyState = [...state.clients];
            // eslint-disable-next-line array-callback-return
            copyState.find(e=>{
                if (e.id === action.id) {
                    e.coach = action.couch;
                    return e;
                }
            })
            return {
                ...state,
                clients: [...copyState]
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
        default:
            return state;
    }
};