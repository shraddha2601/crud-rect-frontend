import * as types from "./actionType";
import axios from "axios"; 

const getUsers = (users) =>({
    type : types.GET_USERS,
    payload : users
})

const userDeleted = () =>({
    type : types.ADD_USER,
})

const userAdded = () =>({
    type : types.DELETE_USER,
})

const userUpdated = () =>({
    type : types.UPDATE_USER,
})

const getuser = (user) =>({
    type : types.GET_SINGLE_USER,
    payload : user
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
export const deleteUser = (id) => {
    return function(dispatch){
        axios.delete(`http://localhost:3000/deleteuser/${id}`).then((resp)=>{
            console.log("resp",resp);
            dispatch(userDeleted());
            dispatch(loadUsers());

        }).catch(error => console.log(error))
    }
}

// add user
export const addUser = (user) => {
    return function(dispatch){
        axios.post("http://localhost:3000/register",user).then((resp)=>{
            console.log("resp",resp);
            dispatch(userAdded());
            // dispatch(loadUsers());

        }).catch(error => console.log(error))
    }
}


// get single user 
export const getSingleUser = (id) => {
    return function(dispatch){
        axios.get(`http://localhost:3000/getuser/${id}`).then((resp)=>{
            console.log("resp",resp);
            dispatch(getuser(resp.data));
            // dispatch(loadUsers());

        }).catch(error => console.log(error))
    }
}

// edit single user 
export const updateUser = (user, id) => {
    return function(dispatch){
        axios.patch(`http://localhost:3000/updateuser/${id}`, user).then((resp)=>{
            console.log("resp",resp);
            dispatch(userUpdated());
            // dispatch(loadUsers());

        }).catch(error => console.log(error))
    }
}