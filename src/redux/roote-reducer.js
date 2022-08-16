import {combineReducers} from 'redux';
import usersReducers from "./reducer";
import deleteReducers from "./reducer"


const rootReducer = combineReducers({
    data : usersReducers,
    delete : deleteReducers
});

export default rootReducer;  