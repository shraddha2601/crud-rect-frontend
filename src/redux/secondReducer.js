import * as types from "./actionType";

const initialState = {
    users : [],
    user : {},
    // loading : true
}
const deleteReducers = (state = initialState, action) =>{
    switch (action.type){
        case types.DELETE_USER: 
        default:
            return state;
    }
};
export default deleteReducers;