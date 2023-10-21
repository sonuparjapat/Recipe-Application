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
    axios.get(`${url}/recipes/complexSearch?apiKey=${"97a93040247d4105ab4eeab6739bd4a2"}`,{
        params:obj
       }).then((res)=>{
        dispatch(getrecipesuccess(res.data.results))}).catch(()=>dispatch(getrecipefailure()))
}