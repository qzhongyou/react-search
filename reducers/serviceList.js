import {SERVICES_REQUEST,SERVICES_SUCCESS,SERVICES_FAILURE}  from "../actions/servicesAction";

const initialState = {
    isFetching: false,
    servives: []
};

export  const services = (state = initialState, action) => {
    switch (action.type){
        case SERVICES_REQUEST:
            return {
                ...initialState,
                isFetching:true
            }
        case SERVICES_SUCCESS:
            return {
                isFetching:false,
                servives:[...action.services]
            }
        case SERVICES_FAILURE:
            return {
                isFetching:false,
                servives:[...state]
            }
        default:
            return state
    }
}

