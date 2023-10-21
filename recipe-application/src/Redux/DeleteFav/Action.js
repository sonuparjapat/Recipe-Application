import axios from "axios"
import { deletefail, deletereq, deletesucc } from "./ActionType"
import { backendurl } from "../../ApiKey/Apikey"

export const deletefavrequest=()=>{
    return {type:deletereq}
}
export const deletefavsuccess=()=>{
    return {type:deletesucc}
}
export const deletefavfailure=()=>{
    return {type:deletefail}
}

export const deletefav=(id)=>(dispatch)=>{
    // console.log(id)
    const token=sessionStorage.getItem("usertoken")
    dispatch(deletefavrequest())
    return axios.delete(`${backendurl}/favourate/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}