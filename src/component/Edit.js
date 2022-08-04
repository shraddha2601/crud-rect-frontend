import React, { useState, useEffect } from 'react'
import { NavLink, useParams , useHistory, useNavigate} from 'react-router-dom';


const Edit = () => {
  // const [getuserdata, setUserdata] = useState([]);


  const history = useNavigate("")
    const [inputVal, setINP] = useState({
        name : "",
        email : "",
        age : "",
        mobile : "",
        work : "",
        add : "",
        des : "" 
    
      })
    
      const setData= (e) =>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setINP((preval)=>{
          return{
            ...preval,
            [name] : value
          }
        })
      }

      const {id} = useParams("");

    
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
          setINP(data)
          // console.log("get data ");
        }
     }
     useEffect(()=>{
      getdata()
     },[])

     const updateuser = async(e) =>{
       e.preventDefault();

       const {name,email,age,mobile,work,add,des} = inputVal;
       const res2 = await fetch(`http://localhost:3000/updateuser/${id}`,{
        method : "PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body : JSON.stringify({
          name,email,age,mobile,work,add,des
        })
       });
       const data2 = await res2.json();
       if(res2.status ===422 || !data2){
         alert("Fill the Data")
       }else{
         alert("data added");
         history("/");
       }
     }
  return (
    <div className='container'>
    {/* <NavLink to="/">Home 2</NavLink> */}
    <form className='mt-5'>
      <div className="row">
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" name="name" onChange={setData} value={inputVal.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" onChange={setData} value={inputVal.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
          <input type="text" name="age" onChange={setData} value={inputVal.age} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Mobile</label>
          <input type="text" name="mobile" onChange={setData} value={inputVal.mobile} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Work</label>
          <input type="text" name="work" onChange={setData} value={inputVal.work} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
          <input type="text" name="add" onChange={setData} value={inputVal.add} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Designation</label>
          <input type="text" name="des" onChange={setData} value={inputVal.des} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
      <button type="submit" onClick={updateuser} className="btn btn-success">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Edit
