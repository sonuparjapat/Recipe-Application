import axios from "axios"
import { loginfail, loginreq, loginsucc } from "./ActionTypes"
import { backendurl } from "../../../ApiKey/Apikey"

export const loginrequest=()=>{
    return {type:loginreq}
}
export const loginsuccess=()=>{
    return {type:loginsucc}
}

export const loginfailure=()=>{
    return {type:loginfail}
}

export const login=(obj)=>(dispatch)=>{
    dispatch(loginrequest())
    return axios.post(`${backendurl}/user/login`,obj)
}