import {
    LOAD_GENERAL_PAGE_DATA,
    LOAD_GENERAL_PAGE_DATA_FAILURE,
    LOAD_GENERAL_PAGE_DATA_SUCCESS, SEARCH_CLIENTS
} from "../../constants/generalPageConstants";

const initialState = {
    groups: [],
    loading: false,
    error: [],
    client: [],
    filter_clients:[],
    clients:[],
    couches:[],
};

export const generalPageReducer = (state = initialState, action = null) => {
    switch (action.type) {
        case LOAD_GENERAL_PAGE_DATA:
            return {
                ...state,
                error: [],
                loading: true
            };
        case LOAD_GENERAL_PAGE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: [],
                groups: [...action.payload.groups],
                couches: [...action.payload.couches],
                clients: [...action.payload.clients]
            }
        case LOAD_GENERAL_PAGE_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: [...action.payload]
            };
        case SEARCH_CLIENTS:
            let search_name = action.payload;
            let filteredData = [...state.clients].filter(client => {
                let last_first_middle = client.last_name.toLowerCase() + ' ' + client.first_name.toLowerCase() + ' ' + client.middle_name.toLowerCase();
                let last_middle_first = client.last_name.toLowerCase() + ' ' + client.middle_name.toLowerCase() + ' ' + client.first_name.toLowerCase();
                let middle_last_first = client.middle_name.toLowerCase() + ' ' + client.last_name.toLowerCase() + ' ' + client.first_name.toLowerCase();
                let middle_first_last = client.middle_name.toLowerCase() + ' ' + client.first_name.toLowerCase() + ' ' + client.last_name.toLowerCase();
                let first_middle_last = client.first_name.toLowerCase() + ' ' + client.middle_name.toLowerCase() + ' ' + client.last_name.toLowerCase();
                let first_last_middle = client.first_name.toLowerCase() + ' ' + client.last_name.toLowerCase() + ' ' + client.middle_name.toLowerCase();
                if (
                    last_first_middle.includes(search_name.toLowerCase())||
                    last_middle_first.includes(search_name.toLowerCase())||
                    middle_first_last.includes(search_name.toLowerCase())||
                    middle_last_first.includes(search_name.toLowerCase())||
                    first_last_middle.includes(search_name.toLowerCase())||
                    first_middle_last.includes(search_name.toLowerCase())
                ) {
                    return client
                }
                return false

            });
            if (search_name) {
                return {
                    ...state,
                    filter_clients: filteredData
                }
            }
            return {
                ...state,
                filter_clients: []
            };
        default:
            return state;
    }
};