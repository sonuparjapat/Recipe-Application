import axios from "axios"
import { addtofavfail, addtofavreq, addtofavsucc } from "./ActionTypes"
import { backendurl } from "../../ApiKey/Apikey"

export const addtofavrequest=()=>{
    return {type:addtofavreq}
}

export const addtofavsuccess=()=>{
    return {type:addtofavsucc}
}
export const addtofavfailure=()=>{
    return {type:addtofavfail}
}

export const addtofav=(obj)=>(dispatch)=>{
   
    const {id,image,instructions,pricePerServing
,readyInMinutes,title,vegan,veryHealthy,summary,veryPopular}=obj
  const newobj={id,image,instructions,pricePerServing,readyInMinutes,title,vegan,veryHealthy,summary,veryPopular}
    const token=sessionStorage.getItem("usertoken")
    dispatch(addtofavrequest())
    return axios.post(`${backendurl}/favourate/add`,newobj,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}