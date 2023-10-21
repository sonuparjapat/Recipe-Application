import axios from "axios"
import { getrecipefail, getrecipereq, getrecipesucc } from "./ActionTypes"
import { apikey, url } from "../../ApiKey/Apikey"

export const getreciperequest=()=>{
    return {type:getrecipereq}
}

export const getrecipesuccess=(payload)=>{
    return {type:getrecipesucc,payload}
}

export const getrecipefailure=()=>{
    return {type:getrecipefail}
}

export const getrecipes=(obj)=>(dispatch)=>{
    dispatch(getreciperequest())
    axios.get(`${url}/recipes/complexSearch?apiKey=${"a07a8a4dbde4477b979fa3635b68a3e4"}`,{
        params:obj
       }).then((res)=>{
        dispatch(getrecipesuccess(res.data.results))}).catch(()=>dispatch(getrecipefailure()))
}