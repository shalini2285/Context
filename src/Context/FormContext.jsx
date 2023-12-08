 import React,{createContext, useState} from "react";

 export const FormContext =  createContext({});

const FormContextProvider=({children})=>{

const[stuid,setStuid]=useState("")
const[name,setName]=useState("")
const[password,setPassword]=useState("")
const[age,setAge]=useState("")
const[email,setEmail]=useState("")
const [uniqueId,setUniqueid]=useState("")
const [details,setDetails]=useState([])


const createObject=()=>{
    let obj={
        stuid:stuid,
        name:name,
        password:password,
        age:age,
        email:email
    }
    setDetails([
        ...details,obj
    ])
    setStuid("")
    setName("")
    setEmail("")
    setAge("")
    setPassword("")
}

const handleEdit=(item)=>{
    setUniqueid(item.stuid)
    setStuid(item.stuid)
    setName(item.name)
    setEmail(item.email)
    setAge(item.age)
    setPassword(item.password)
}

const updatedata=(item)=>{
    const temp = details.map((item)=>(
        item.stuid == uniqueId ?                  
        {
            ...item,
            stuid:stuid,
            name:name,
            password:password,
            age:age,
            email:email
        }
        :item
    ))
    setDetails(temp)
    setStuid("")
    setName("")
    setEmail("")
    setAge("")
    setPassword("")

}

    const handleDelete=(id)=>{
        const temp = details.filter((el)=>el.stuid !== id)
        setDetails(temp)
    }

    return(
        <div>
            <FormContext.Provider value={{stuid,setStuid,name,setName,password,setPassword,age,setAge,email,setEmail,createObject,details,setDetails,handleDelete,handleEdit,updatedata,uniqueId,setUniqueid}}>
                {children}
            </FormContext.Provider>

        </div>
    )


}

 export default FormContextProvider
