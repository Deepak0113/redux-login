const userdetailsReducer = (state = "", action) => {
    switch(action.type){
        case 'LOGIN':
            return action.username;
        default:
            return state;
    }
}

export default userdetailsReducer;