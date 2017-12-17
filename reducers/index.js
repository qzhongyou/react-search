import {combineReducers} from 'redux';
import {errorMessage} from './errorMessage';
import {services} from './serviceList';
import {serviceDetail} from "./serviceDetail";
import {similarServices} from "./similar"
const rootReducer = combineReducers({
    errorMessage, services, serviceDetail ,similarServices
});

export default rootReducer;
