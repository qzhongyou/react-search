import {WITKEY} from  "../actions/witkeyAction";

const initialState = {
    isFetching: false,
    witkeys: []
};

export default (state = initialState, action) => {

    const CONNECTTOR = (action.options && action.options.connector) || "_";
    const WITKEY_PENDING = [WITKEY, "PENDING"].join(CONNECTTOR);
    const WITKEY_SUCCESS = [WITKEY, "SUCCESS"].join(CONNECTTOR);
    const WITKEY_FAILURE = [WITKEY, "FAILURE"].join(CONNECTTOR);

    switch (action.type) {
        case WITKEY_PENDING:
            return {
                ...initialState,
                isFetching: true
            }
        case WITKEY_SUCCESS:
            return {
                isFetching: false,
                witkeys: [...action.payload]
            }
        case WITKEY_FAILURE:
            return {
                isFetching: false,
                witkeys: [...state.witkeys]
            }
        default:
            return state
    }
}

