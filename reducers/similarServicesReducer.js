import {SIMILAR_SERVICES} from  "../actions/similarServicesAction";

const initialState = {
    isFetching: false,
    services: []
};

export default  (state = initialState, action) => {

    const CONNECTTOR = (action.options && action.options.connector) || "_";
    const SIMILAR_SERVICES_PENDING = [SIMILAR_SERVICES,"PENDING"].join(CONNECTTOR);
    const SIMILAR_SERVICES_SUCCESS = [SIMILAR_SERVICES,"SUCCESS"].join(CONNECTTOR);
    const SIMILAR_SERVICES_FAILURE = [SIMILAR_SERVICES,"FAILURE"].join(CONNECTTOR);

    switch (action.type){
        case SIMILAR_SERVICES_PENDING:
            return {
                ...initialState,
                isFetching:true
            }
        case SIMILAR_SERVICES_SUCCESS:
            return {
                isFetching:false,
                services:[...action.payload]
            }
        case SIMILAR_SERVICES_FAILURE:
            return {
                isFetching:false,
                services:[...state.services]
            }
        default:
            return state
    }
}
