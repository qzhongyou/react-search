export const errorMessage = (state = "", action)=> {
    const {error} =action;
    if (error) {
        return error
    }else if(state) {
        return null
    }
    return state;
}
