import React,{useContext,useState} from "react";
import { FormContext } from "../Context/FormContext";
//import { useNavigate } from "react-router-dom";





const Form =()=>{

    const {stuid,setStuid,name,setName,password,setPassword,age,setAge,email,setEmail,createObject,details,setDetails,handleDelete,handleEdit,updatedata,uniqueId,setUniqueid} = useContext(FormContext)
    //const [showProfile, setShowProfile]=useState(false)
    //const navigate = useNavigate()

    return(
        <div>
            <h1>Student Form</h1>
            <div>
                <label>Student Id</label>
                <input type="text" value={stuid} onChange={(e)=>{setStuid(e.target.value)}} className="stuid" id="stuid" placeholder="Enter Your Id" />
            </div>
            <div>
                <label>Student Name</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="name" id="name" placeholder="Enter Your Name" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="password" id="password" placeholder="Enter Your Password" />
            </div>
            <div>
                <label>Age</label>
                <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}} className="age" id="age" placeholder="Enter Your Age" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="email" id="email" placeholder="Enter Your email" />
            </div>
            <div>
                <button onClick={uniqueId ? updatedata : createObject } className="button" >{uniqueId ? 'update' : 'create'}</button>
            </div>
            <div>
             

                <table>
                    <thead>
                        <tr>
                            <th>Studentid</th>
                            <th>Student Name</th>
                            <th>Password</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item.stuid}</td>
                                        <td>{item.name}</td>
                                        <td>{item.password}</td>
                                        <td>{item.age}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <span onClick={()=>handleEdit(item)}>Edit</span> /
                                            <span onClick={()=>handleDelete(item.stuid)}>Delete</span>
                                        </td>
                                    </tr>

                                )
                            })
                        
                    }
                    </tbody>
                </table>
                
                
                
            </div>
        </div>
    )
}

export default Form