import loggedReducer from "./loggedReducer";
import {combineReducers} from 'redux'
import userdetailsReducer from "./userdetailReducer";

const allReducers = combineReducers({
    isLogged: loggedReducer,
    username: userdetailsReducer
})

export default allReducers;