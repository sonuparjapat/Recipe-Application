import axios from "axios"
import { getsinglefail, getsinglereq, getsinglesucc } from "./ActionTypes"
import { apikey, url } from "../../ApiKey/Apikey"

export const getsinglerequest=()=>{
    return {type:getsinglereq}
}
export const getsinglesuccess=(payload)=>{
    return {type:getsinglesucc,payload}
}
export const getsinglefailure=()=>{
    return {type:getsinglefail}
}

export const getsingle=(id)=>(dispatch)=>{
dispatch(getsinglerequest())
axios.get(`${url}/recipes/${id}/information?apiKey=${"a07a8a4dbde4477b979fa3635b68a3e4"}`).then((res)=>{
    // console.log(res)
    dispatch(getsinglesuccess(res.data))
}).catch((err)=>{
    dispatch(getsinglefailure())
})
}