import { STOP_FETCHING} from "../../constants/globalConstans";

export const stoppingFetch = source => ({type:STOP_FETCHING,payload:source});
