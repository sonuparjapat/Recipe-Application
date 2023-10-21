import axios from "axios"
import { getfavfail, getfavreq, getfavsucc } from "./ActionTypes"
import { backendurl } from "../../ApiKey/Apikey"

export const getfavrequest=()=>{
    return {type:getfavreq}
}
export const getfavsuccess=(payload)=>{
    return {type:getfavsucc,payload}
}
export const getfavfailure=()=>{
    return {type:getfavfail}
}

export const getfav=(dispatch)=>{
    
    const token=sessionStorage.getItem("usertoken")
    console.log(token)
    dispatch(getfavrequest())
    axios.get(`${backendurl}/favourate/get`,{
        headers:{

            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{
        // console.log(res)
        dispatch(getfavsuccess(res.data.msg))
    }).catch((err)=>{
        dispatch(getfavfailure())
    })
}