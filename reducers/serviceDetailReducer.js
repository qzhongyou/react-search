import {SERVICE_DETAIL}  from "../actions/serviceDetailAction";

const initialState = {
    isFetching: false,
    service: {}
};

export default (state = initialState, action) => {

    const CONNECTTOR = (action.options && action.options.connector) || "_";
    const SERVICE_DETAIL_PENDING = [SERVICE_DETAIL,"PENDING"].join(CONNECTTOR);
    const SERVICE_DETAIL_SUCCESS = [SERVICE_DETAIL,"SUCCESS"].join(CONNECTTOR);
    const SERVICE_DETAIL_FAILURE = [SERVICE_DETAIL,"FAILURE"].join(CONNECTTOR);

    switch (action.type){
        case SERVICE_DETAIL_PENDING:
            return {
                ...initialState,
                isFetching:true
            }
        case SERVICE_DETAIL_SUCCESS:
            return {
                isFetching:false,
                service:{...action.payload}
            }
        case SERVICE_DETAIL_FAILURE:
            return {
                isFetching:false,
                service:{...state.service}
            }
        default:
            return state
    }
}

