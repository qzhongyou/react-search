import {combineReducers} from 'redux';
import {errorMessage} from './errorMessage';
import {services} from './serviceList';
import {serviceDetail} from "./serviceDetail";
import {similarServices} from "./similar";
import {exclusive} from "./exclusive";
import {date} from "./date";
const rootReducer = combineReducers({
    errorMessage, services, serviceDetail, similarServices, exclusive,date
});

export default rootReducer;
