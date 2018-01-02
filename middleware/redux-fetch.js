/**
 * fetch 中间件
 */

const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
export const SUFFIXES = {PENDING, SUCCESS, FAILURE};

const isPromise = (payload)=> {
    return payload && typeof payload.then == "function";
}

export default ({dispatch}) => next => action => {

    let {connector = "_", isJson = true} = (action.options || {});
    let promise;

    const TYPE = action.type;
    //连接符
    const CONNECTTOR = connector;

    // success handle
    const handleSuccess = (response) => {
        let payload = response;
        let type = TYPE + CONNECTTOR + SUFFIXES[SUCCESS];
        let successAction = {...action, payload, type};
        dispatch(successAction);
        return successAction;
    }

    const handleParse = (response) => {
        let parseRes = response;
        if (isJson) {
            parseRes = parseRes.json();
        }
        return parseRes;
    }
    // error handle
    const handleFailure = (error) => {
        let payload = error.message;
        let type = TYPE + CONNECTTOR + SUFFIXES[FAILURE];
        let failureAction = {...action, payload, type};
        dispatch(failureAction);
        return failureAction;
    }

    // payload is promise
    if (action.payload && isPromise(action.payload)) {
        promise = action.payload;

        // pending action
        dispatch({
            type: TYPE + CONNECTTOR + SUFFIXES[PENDING],
            ...(action.options ? {options: action.options} : {})
        })

        // return promise object
        return promise.then(handleParse).then(handleSuccess).catch(handleFailure);
    } else {
        // do next middleware
        return next(action);
    }
}
