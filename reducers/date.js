import { SELECT_DATE } from "../actions/dateAction";

const initialState = () => {
    const date =new Date();
    return {
        date:date.getFullYear().toString()+("0"+(date.getMonth()+1)).substr(-2)+("0"+(date.getDate()+1)).substr(-2)
    }
}

export const date = (state = initialState(), action) => {
    switch(action.type){
        case SELECT_DATE:
            return {
            date:action.date
        }
        default:
            return state
    }
}
