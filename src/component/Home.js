import React, { useContext,useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { adddata } from './context/ContextProvider';
import {useDispatch,useSelector} from "react-redux";
import { deleteUser, loadUsers } from '../redux/actions';
import axios from "axios";



const Home = () => {

// get data function start
  let dispatch = useDispatch();
  const[data, setdata] = useState({name : "", email : ""});  //for search data

  const {users} = useSelector(state => state.data)
  console.log(users)
  useEffect(()=>{
    // setdata({...data})
    dispatch(loadUsers()) 
  },[]);
// get data function end


  // delete function start
  const handleDelete = (id) => {
    if(window.confirm("Are you Sure you wanted to delete the User")){
      dispatch(deleteUser(id))
    }
  }

  
  // delete function end


    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

    // const [udata,setUdata] = useContext(adddata);

    // const getdata = async(e) =>{
    
    //      const res = await fetch("http://localhost:3000/getdata",{
    //        method : "GET",
    //        headers:{
    //          "Content-Type":"application/json"
    //        }
    //      })
    
    //      const data = await res.json();
    //     //  console.log(data,"data");
    
    //      if(res.status === 404 || !data){
    //        console.log("error");
    //      }else{
    //         setUserdata(data)
    //        console.log("get data ");
    //      }
    //   }

      // useEffect(()=>{
      //   getdata()
      // },[])

      // const deleteuse = async(id) =>{
      //   const res2 = await fetch(`http://localhost:3000/deleteuser/${id}`,{
      //       method : "DELETE",
      //       headers:{
      //           "Content-Type":"application/json"
      //     }
      //   });
      //   const deletedata = await res2.json();

      //   if(res2.status === 422 || !deletedata){
      //       console.log("error");
      //       // getdata();
      //   }else{

      //   }
      // }

      const[query, setQuery] = useState("");  //for search data
      
  return (
      <>
      
        <div className='mt-5'>
            <div className="container">
                <div className="add-btn mt-2">
                    <NavLink to="/register" className='btn btn-success'>Add Data</NavLink>
                </div>
                <input className="form-control my-2" onChange={(e)=> setQuery(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
                
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Position</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.filter(element=>element.name.toLowerCase().includes(query)).map((user,id,index)=>{
                            return(
                                <>
                                    <tr key={index}>
                                        <td>{id + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.work}</td>
                                        <td>{user.mobile}</td>
                                        <td className='d-flex justify-content-between'>
                                            <NavLink to={`view/${user._id}`}><button className='btn btn-warning'>View</button></NavLink>
                                            <NavLink to={`edit/${user._id}`}><button className='btn btn-primary'>Edit</button></NavLink>
                                            <button className='btn btn-danger' onClick={()=>handleDelete(user._id)}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                        
                    </tbody>
                </table>
              
            </div>
        </div>
      </>
  )
}

export default Home
