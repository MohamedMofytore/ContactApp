
import axios from "axios"
import {GET_USERS} from "./actionTypes"
export const getUsers=()=>async(dispatch)=>{
    try{
const res=await axios.get("http://localhost:5000/api/getall")
dispatch({
    type:GET_USERS,
    payload:res.data
})
    }
    catch(err){
        console.log(err)
    }
}

export const deleteUser=(id)=>async(dispatch)=>{
    try{
const res=await axios.delete(`http://localhost:5000/api/delete/${id}`)
dispatch(getUsers())
    }
    catch(err){
        console.log(err)
    }

}


//add newUser

export const addUser=(newUser)=>async(dispatch)=>{
    try{
const res=await axios.post("http://localhost:5000/api/addUser",newUser)
dispatch(getUsers())
    }
catch(err){console.log(err)}
}
//edit user

export const editUser=(editedUser,id)=>async(dispatch)=>{
    try {
        const res=await axios.put(`http://localhost:5000/api/edit/${id}`,editedUser)
        dispatch(getUsers())
    }
    catch(err){
        console.log(err)
    }
}

