const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'LOGIN':
            return !state;
        default:
            return state;
    }
};

export default loggedReducer;