import {combineReducers} from 'redux';
import {errorMessage} from './errorMessageReducer';
import serviceDetail from "./serviceDetailReducer";
import similarServices from "./similarServicesReducer";
import witkeys from "./witkeyReducer";
import {date} from "./dateReducer";
import services from "./servicesReducer";

const rootReducer = combineReducers({
    errorMessage, services, serviceDetail, similarServices, witkeys, date
});

export default rootReducer;
