import {WITKEY_DETAIL_REQUEST, WITKEY_DETAIL_SUCCESS, WITKEY_DETAIL_FAILURE} from  "../actions/exclusiveAction";

const initialState = {
    isFetching: false,
    witkeys: []
};

export const exclusive = (state = initialState, action) => {
    switch (action.type){
        case WITKEY_DETAIL_REQUEST:
            return {
                ...initialState,
                isFetching:true
            }
        case WITKEY_DETAIL_SUCCESS:
            return {
                isFetching:false,
                witkeys:[...action.witkeys]
            }
        case WITKEY_DETAIL_FAILURE:
            return {
                isFetching:false,
                witkeys:[...state.witkeys]
            }
        default:
            return state
    }
}

