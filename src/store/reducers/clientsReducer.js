import {
    LOAD_ABONEMENT_FOR_ALL, LOAD_CLIENTS_ALL, LOAD_CLIENTS_ALL_FAILURE, LOAD_CLIENTS_ALL_SUCCESS,
    LOAD_COUCH_FOR_ALL, LOAD_FILIAL_FOR_ALL,
    LOAD_GROUP_FOR_ALL, LOAD_SORT_FOR_ALL, LOAD_STATUS_LIST_FOR_ALL, LOAD_TYPES_LIST_FOR_ALL
} from "../../constants/clientsConstans";

const initalState = {
    allClients: [],
    filterClients: [],
    filterSection:{
        couch:[],
        types:[],
        group:[],
        status:[],
        abonement:[],
        filial:[]
    },
    sortSection: [],
    loading: false,
    error: []
}
export const clientsReducer = (state = initalState, action) => {
    switch (action.type) {
        case LOAD_CLIENTS_ALL:
            return {
                ...state,
                loading: true,
                error: []
            }
        case LOAD_CLIENTS_ALL_SUCCESS:
            return {
                ...state,
                loading:false,
                ...action.payload
            }
        case LOAD_CLIENTS_ALL_FAILURE:
            return {
                ...state,
                loading:false,
                error:[...state.error,action.payload]
            }
        case LOAD_SORT_FOR_ALL:
            return {
                ...state,
                sortSection: [...action.sort]
            }
        case LOAD_COUCH_FOR_ALL:
            return {
                ...state,
                filterSection: {
                    ...state.filterSection,
                    couch: action.couch
                }
            }
        case LOAD_TYPES_LIST_FOR_ALL:
            return {
                ...state,
                filterSection: {
                    ...state.filterSection,
                    types: action.types
                }
            }
        case LOAD_GROUP_FOR_ALL:
            return {
                ...state,
                filterSection: {
                    ...state.filterSection,
                    group: action.group
                }
            }
        case LOAD_STATUS_LIST_FOR_ALL:
            return {
                ...state,
                filterSection: {
                    ...state.filterSection,
                    status: action.status
                }
            }
        case LOAD_ABONEMENT_FOR_ALL:
            return {
                ...state,
                filterSection: {
                    ...state.filterSection,
                    abonement: action.abonement
                }
            }
        case LOAD_FILIAL_FOR_ALL:
            return {
                ...state,
                filterSection: {
                    ...state.filterSection,
                    filial: action.filial
                }
            }
        default:
            return state;
    }
};