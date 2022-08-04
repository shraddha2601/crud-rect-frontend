import React, { useContext,useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { adddata } from './context/ContextProvider';

const Home = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    // const [udata,setUdata] = useContext(adddata);

    const getdata = async(e) =>{
    
         const res = await fetch("http://localhost:3000/getdata",{
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
           console.log("get data ");
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
            getdata();
        }else{

        }
      }

      const[query, setQuery] = useState("");
      
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
                        <th scope="col">Job</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getuserdata.filter(element=>element.name.toLowerCase().includes(query)).map((element,id)=>{
                            return(
                                <>
                                    <tr>
                                        <td>{id + 1}</td>
                                        <td>{element.name}</td>
                                        <td>{element.email}</td>
                                        <td>{element.work}</td>
                                        <td>{element.mobile}</td>
                                        <td className='d-flex justify-content-between'>
                                            <NavLink to={`view/${element._id}`}><button className='btn btn-warning'>View</button></NavLink>
                                            <NavLink to={`edit/${element._id}`}><button className='btn btn-primary'>Edit</button></NavLink>
                                            <button className='btn btn-danger' onClick={()=>deleteuse(element._id)}>Delete</button>
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
