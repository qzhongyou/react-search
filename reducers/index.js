import {combineReducers} from 'redux';
import {errorMessage} from './errorMessage';
import {services} from './serviceList';
import {serviceDetail} from "./serviceDetail";
const rootReducer = combineReducers({
    errorMessage, services, serviceDetail
});

export default rootReducer;
