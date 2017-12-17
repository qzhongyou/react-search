export const errorMessage = (state = null, action)=> {
    const {error} =action;
    if (error) {
        return error
    }
    return state;
}
