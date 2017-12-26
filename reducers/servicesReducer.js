import {SUFFIXES} from "../middleware/redux-fetch";
import {SERVICES}  from "../actions/servicesAction";
const {PENDING, SUCCESS, FAILURE}  = SUFFIXES;

const initialState = {
    isFetching: false,
    services: []
};
export default (state = initialState, action) => {

    const CONNECTTOR = (action.options && action.options.connector) || "_";
    const PENDING_SERVICES = [PENDING, SERVICES].join(CONNECTTOR);
    const SUCCESS_SERVICES = [SUCCESS, SERVICES].join(CONNECTTOR);
    const FAILURE_SERVICES = [FAILURE, SERVICES].join(CONNECTTOR);

    switch (action.type) {
        case PENDING_SERVICES:
            return {
                ...initialState,
                isFetching: true
            }
        case SUCCESS_SERVICES:
            return {
                isFetching: false,
                services: [...action.payload[0].services]
            }
        case FAILURE_SERVICES:
            return {
                isFetching: false,
                services: [...state]
            }
        default:
            return state
    }
}

