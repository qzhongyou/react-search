import {SIMILAR_REQUEST, SIMILAR_SUCCESS, SIMILAR_FAILURE} from  "../actions/similarAction";

const initialState = {
    isFetching: false,
    services: []
};

export const similarServices = (state = initialState, action) => {
    switch (action.type){
        case SIMILAR_REQUEST:
            return {
                ...initialState,
                isFetching:true
            }
        case SIMILAR_SUCCESS:
            return {
                isFetching:false,
                services:[...action.service]
            }
        case SIMILAR_FAILURE:
            return {
                isFetching:false,
                services:[...state.service]
            }
        default:
            return state
    }
}

