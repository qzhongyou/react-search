import {SERVICES_DETAIL_REQUEST,SERVICES_DETAIL_SUCCESS,SERVICES_DETAIL_FAILURE}  from "../actions/serviceDetailAction";

const initialState = {
    isFetching: false,
    service: {}
};

export const serviceDetail = (state = initialState, action) => {
    switch (action.type){
        case SERVICES_DETAIL_REQUEST:
            return {
                ...initialState,
                isFetching:true
            }
        case SERVICES_DETAIL_SUCCESS:
            return {
                isFetching:false,
                service:{...action.service}
            }
        case SERVICES_DETAIL_FAILURE:
            return {
                isFetching:false,
                service:{...state.service}
            }
        default:
            return state
    }
}

