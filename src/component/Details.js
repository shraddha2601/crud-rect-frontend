import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';

const Details = () => {

  const params  = useParams();

  const { users } = useSelector(state => state.data)
  console.log(users,"users details")

  const getUser = users.filter(item => item._id === params.id)

  const usersDet = getUser[0]

//   const {id} = useParams("");

  const history = useNavigate()

//   const [getuserdata, setUserdata] = useState([]);

//   const getdata = async() =>{

//     const res = await fetch(`http://localhost:3000/getuser/${id}`,{
//       method : "GET",
//       headers:{
//         "Content-Type":"application/json"
//       }
//     })

//     const data = await res.json();
//     console.log(data,"data");

//     if(res.status === 404 || !data){
//       console.log("error");
//     }else{
//        setUserdata(data)
//       // console.log("get data ");
//     }
//  }

//  useEffect(()=>{
//   getdata()
//  },[])

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
      <h3>Welcome {usersDet.name}</h3>
      <div className="card p-4 shadow">
          <div className="add-btn">
              <NavLink to={`/edit/${usersDet._id}`}><button className='btn btn-primary mx-2'>Edit</button></NavLink>
              <button className='btn btn-danger' onClick={()=>deleteuse(usersDet._id)}>Delete</button>
          </div>
        <div className="card-body">
            <h5 className="card-title">Name : <span>{usersDet.name}</span></h5>
            <p className="card-title">Age : <span>{usersDet.age}</span></p>
            <p className="card-title">Email : <span>{usersDet.email}</span></p>
            <p className="card-title">Occuption : <span>{usersDet.work}</span></p>
            <p className="card-title">Mobile : <span>{usersDet.mobile}</span></p>
            <p className="card-title">Location : <span>{usersDet.add}</span></p>
        </div>
    </div>
    </div>
  )
}

export default Details
