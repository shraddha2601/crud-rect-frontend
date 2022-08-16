import React, { useContext, useState } from 'react'
import {NavLink} from 'react-router-dom';
// import { adddata } from './context/ContextProvider';
import {useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addUser } from '../redux/actions';

const Register = () => {

  // const [udata,setUdata] = useContext(adddata);


  const [inputVal, setINP] = useState({
    name : "",
    email : "",
    age : "",
    mobile : "",
    work : "",
    add : "",
    des : "" 

  })

  const [error,setError] = useState("");
  // const setData= (e) =>{
  //   console.log(e.target.value);
  //   const {name,value} = e.target;
  //   setINP((preval)=>{
  //     return{
  //       ...preval,
  //       [name] : value
  //     }
  //   })
  // }


  // const addinpdata = async(e) =>{
  //   e.preventDefault();

  //   const {name,email,age,mobile,work,add,des} = inputVal;
  //    const res = await fetch("http://localhost:3000/register",{
  //      method : "POST",
  //      headers:{
  //        "Content-Type":"application/json"
  //      },
  //      body:JSON.stringify({
  //       name,email,age,mobile,work,add,des
  //      })
  //    })

  //    const data =  res.json();
  //    console.log(data,"data");

  //    if(res.status === 404 || !data){
  //      alert("error")
  //      console.log("error");
  //    }else{
  //      alert("data added")
  //     //  setUdata(data)
  //      console.log("data added");
  //    }
  // }

  let history = useNavigate ();
  let dispatch = useDispatch ();

  const handleInputChange = (e) => {
    let { name ,value} = e.target;
    setINP({...inputVal,[name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!inputVal.name || !inputVal.email || !inputVal.mobile){
      setError("please fill all input values")
    }else{
      dispatch(addUser(inputVal));
      history("/");
      setError("");
    }
  }
  return (
    <div className='container'>
      {/* <NavLink to="/">Home</NavLink> */}
      {error && <h5 className="text-danger">{error}</h5>}
      <form className='mt-5' onSubmit={handleSubmit}> 
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" name="name" onChange={handleInputChange} value={inputVal.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name="email" onChange={handleInputChange} value={inputVal.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
            <input type="text" name="age" onChange={handleInputChange} value={inputVal.age} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">Mobile</label>
            <input type="text" name="mobile" onChange={handleInputChange} value={inputVal.mobile} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">Work</label>
            <input type="text" name="work" onChange={handleInputChange} value={inputVal.work} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
            <input type="text" name="add" onChange={handleInputChange} value={inputVal.add} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">Salary</label>
            <input type="text" name="des" onChange={handleInputChange} value={inputVal.des} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
        <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Register
