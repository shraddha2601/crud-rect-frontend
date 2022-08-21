import React, { useState, useEffect } from 'react'
import { NavLink, useParams , useHistory, useNavigate} from 'react-router-dom';
import { getSingleUser, updateUser } from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux'



const Edit = () => {
  // const [getuserdata, setUserdata] = useState([]);
  const params  = useParams();

  const { users } = useSelector(state => state.data)

  const getUser = users.filter(item => item._id === params.id)

  const {name,email,age,mobile,work,add,des} = getUser[0];

  const [values, setValues] = useState({
    name,email,age,mobile,work,add,des
  });

  // const handleEditUser = () => {
  //   setValues({ name : "",email : "",age : "",mobile : "",work : "",add : "",des : ""  });
  //   dispatch(updateUser({
  //     id,
  //     name: values.name,
  //     email: values.email,
  //     age: values.age,
  //     mobile: values.mobile,
  //     work: values.work,
  //     add: values.add,
  //     des: values.des,
  //   }));
    
  //   history('/');
  // }

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
      const {id} = useParams("");

      // with use of react function
    
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
    //       setINP(data)
    //       // console.log("get data ");
    //     }
    //  }
    //  useEffect(()=>{
    //   getdata()
    //  },[])

    //  const updateuser = async(e) =>{
    //    e.preventDefault();

    //    const {name,email,age,mobile,work,add,des} = inputVal;
    //    const res2 = await fetch(`http://localhost:3000/updateuser/${id}`,{
    //     method : "PATCH",
    //     headers:{
    //       "Content-Type":"application/json"
    //     },
    //     body : JSON.stringify({
    //       name,email,age,mobile,work,add,des
    //     })
    //    });
    //    const data2 = await res2.json();
    //    if(res2.status ===422 || !data2){
    //      alert("Fill the Data")
    //    }else{
    //      alert("data added");
    //      history("/");
    //    }
    //  }

    // with use of react function  end



    // with use of redux

    let dispatch = useDispatch ();
    const [error,setError] = useState("");

    const {user} = useSelector((inputVal) => inputVal.data)
    const handleInputChange = (e) => {
      let { name ,value} = e.target;
      setINP({...inputVal,[name]:value})
    }
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!values.name || !values.email || !values.mobile){
        setError("please fill all input values")
      }else{
        dispatch(updateUser(values, id));
        history("/");
        setError("");
      }
    }

    // useEffect(()=>{
    //   if(user){
    //     setINP({...user})
    //   }
    // },[user])

    //  useEffect(()=>{
    //   dispatch(getSingleUser(id))
    //  },[])

    // with use of redux end


    
  
  return (
    <div className='container'>
    {/* <NavLink to="/">Home 2</NavLink> */}
    <form className='mt-5'  onSubmit={handleSubmit}>
      <div className="row">
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" name="name" onChange={(e) => setValues({ ...values, name: e.target.value })} value={values.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" onChange={(e) => setValues({ ...values, email: e.target.value })} value={values.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
          <input type="text" name="age" onChange={(e) => setValues({ ...values, age: e.target.value })} value={values.age} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Mobile</label>
          <input type="text" name="mobile" onChange={(e) => setValues({ ...values, mobile: e.target.value })} value={values.mobile} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Work</label>
          <input type="text" name="work" onChange={(e) => setValues({ ...values, work: e.target.value })} value={values.work} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
          <input type="text" name="add" onChange={(e) => setValues({ ...values, add: e.target.value })} value={values.add} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Salary</label>
          <input type="text" name="des" onChange={(e) => setValues({ ...values, des: e.target.value })} value={values.des} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
      <button type="submit" className="btn btn-success">Update</button>
      {/* <button type="submit" onClick={updateuser} className="btn btn-success">Submit</button> */}
      </div>
    </form>
  </div>
  )
}

export default Edit







