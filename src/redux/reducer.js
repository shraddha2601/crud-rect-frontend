import * as types from "./actionType";

const initialState = {
   
    users : [],
    user : {},
    loading : true
}

const usersReducers = (state = initialState, action) =>{
    switch (action.type){
        case types.GET_USERS: 
            return{
                ...state,
                users : action.payload,
                loading : false,

            };
        case types.ADD_USER: 
            return{
                ...state,
                users : [...state.users,action.payload.data],
                loading : false,
 
        };
        case types.UPDATE_USER: 
            let newUser1 = state.users.map(ele=> {
                if(ele._id===action.payload._id){
                    return action.payload
                }else{
                    return ele
                }
            })
            return{
                ...state,
                users : newUser1,
                loading : false,
            };
        case types.GET_SINGLE_USER:{
            return{
                ...state,
                user : action.payload,
                loading : false,
            }
        } 
        
        default:
            return state;
    }
};


export default usersReducers;