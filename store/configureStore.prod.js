import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from "redux-thunk";

const enhancer = applyMiddleware(thunk);
export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}
