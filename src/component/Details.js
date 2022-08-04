import React, { useState,useEffect } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom';

const Details = () => {

  const {id} = useParams("");

  const history = useNavigate()

  const [getuserdata, setUserdata] = useState([]);

  const getdata = async() =>{

    const res = await fetch(`http://localhost:3000/getuser/${id}`,{
      method : "GET",
      headers:{
        "Content-Type":"application/json"
      }
    })

    const data = await res.json();
    console.log(data,"data");

    if(res.status === 404 || !data){
      console.log("error");
    }else{
       setUserdata(data)
      // console.log("get data ");
    }
 }

 useEffect(()=>{
  getdata()
 },[])

 const deleteuse = async(id) =>{
  const res2 = await fetch(`http://localhost:3000/deleteuser/${id}`,{
      method : "DELETE",
      headers:{
          "Content-Type":"application/json"
    }
  });
  const deletedata = await res2.json();

  if(res2.status === 422 || !deletedata){
      console.log("error");
      // getdata();
      history("/")
  }else{

  }
}
  return (
    <div className='container'>
      <h3>Welcome {getuserdata.name}</h3>
      <div className="card p-4 shadow">
          <div className="add-btn">
              <NavLink to={`/edit/${getuserdata._id}`}><button className='btn btn-primary mx-2'>Edit</button></NavLink>
              <button className='btn btn-danger' onClick={()=>deleteuse(getuserdata._id)}>Delete</button>
          </div>
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
            <h5 className="card-title">Name : <span>{getuserdata.name}</span></h5>
            <p className="card-title">Age : <span>{getuserdata.age}</span></p>
            <p className="card-title">Email : <span>{getuserdata.email}</span></p>
            <p className="card-title">Occuption : <span>{getuserdata.work}</span></p>
            <p className="card-title">Mobile : <span>{getuserdata.mobile}</span></p>
            <p className="card-title">Location : <span>{getuserdata.add}</span></p>
        </div>
    </div>
    </div>
  )
}

export default Details
