import React,{useContext} from "react";
import { FormContext } from "../Context/FormContext";

const Report = ()=>{

    const {stuid,name,password,age,email} = useContext(FormContext)
    return(
        <div>
            <h1>Student Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Studentid</th>
                        <th>Student Name</th>
                        <th>Password</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{stuid}</td>
                        <td>{name}</td>
                        <td>{password}</td>
                        <td>{age}</td>
                        <td>{email}</td>
                    </tr>

                </tbody>
            </table>

           
        </div>
    )
}

export default Report