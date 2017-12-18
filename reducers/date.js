import { SELECT_DATE } from "../actions/dateAction";

const initialState = () => {
    const date =new Date();
    return {
        date:date.getFullYear().toString()+(date.getMonth()+1)+date.getDate()
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
