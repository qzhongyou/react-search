import {SERVICES}  from "../actions/servicesAction";

const initialState = {
    isFetching: false,
    services: []
};
export default (state = initialState, action) => {

    const CONNECTTOR = (action.options && action.options.connector) || "_";
    const SERVICES_PENDING = [SERVICES, "PENDING"].join(CONNECTTOR);
    const SERVICES_SUCCESS = [SERVICES, "SUCCESS"].join(CONNECTTOR);
    const SERVICES_FAILURE = [SERVICES, "FAILURE"].join(CONNECTTOR);

    switch (action.type) {
        case SERVICES_PENDING:
            return {
                ...initialState,
                isFetching: true
            }
        case SERVICES_SUCCESS:
            return {
                isFetching: false,
                services: action.payload[0] && action.payload[0].services ? [...action.payload[0].services] : []
            }
        case SERVICES_FAILURE:
            return {
                isFetching: false,
                services: [...state]
            }
        default:
            return state
    }
}

