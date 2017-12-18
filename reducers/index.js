import {combineReducers} from 'redux';
import {errorMessage} from './errorMessage';
import {services} from './serviceList';
import {serviceDetail} from "./serviceDetail";
import {similarServices} from "./similar";
import {exclusive} from "./exclusive";

const rootReducer = combineReducers({
    errorMessage, services, serviceDetail, similarServices, exclusive
});

export default rootReducer;
