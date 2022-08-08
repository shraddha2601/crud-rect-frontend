import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) =>({
    type : types.GET_USERS,
    payload : users
})

const userDeleted = () =>({
    type : types.DELETE_USER,
})
// get user
export const loadUsers = () => {
    return function(dispatch){
        axios.get("http://localhost:3000/getdata/").then((resp)=>{
            console.log("resp",resp);
            dispatch(getUsers(resp.data))
        }).catch(error => console.log(error))
    }
}

// user delete
export const deleteUser = (_id) => {
    return function(dispatch){
        axios.delete("http://localhost:3000/deleteuser/id").then((resp)=>{
            console.log("resp",resp);
            dispatch(userDeleted());
            dispatch(loadUsers());

        }).catch(error => console.log(error))
    }
}