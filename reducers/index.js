import {combineReducers} from 'redux';
import {errorMessage} from './errorMessage';
import {serviceDetail} from "./serviceDetail";
import {similarServices} from "./similar";
import {exclusive} from "./exclusive";
import {date} from "./date";
import services from "./servicesReducer";

const rootReducer = combineReducers({
    errorMessage, services, serviceDetail, similarServices, exclusive,date
});

export default rootReducer;
