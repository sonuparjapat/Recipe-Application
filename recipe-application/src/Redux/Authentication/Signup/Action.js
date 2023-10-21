import axios from "axios"
import { regfail, regreq, regsucc } from "./ActionTypes"
import { backendurl } from "../../../ApiKey/Apikey"

export const regrequest=()=>{
    return {type:regreq}
}
export const regsuccess=()=>{
    return {type:regsucc}
}
export const regfailure=()=>{
    return {type:regfail}
}

export const register=(obj)=>(dispatch)=>{
    dispatch(regrequest())
    return axios.post(`${backendurl}/user/register`,obj)
}