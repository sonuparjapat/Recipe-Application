import { loginfail, loginreq, loginsucc } from "./ActionTypes"

const initialdata={
    loginisLoading:false,
    loginisError:false,
    username:""
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case loginreq:{
            return {...state,loginisLoading:true,loginisError:false,username:""}
        }
        case loginsucc:{
            return {...state,loginisLoading:false,loginisError:false,username:payload.username}
        }
        case loginfail:{
            return {...state,loginisLoading:false,loginisError:true,username:""}
        }
        default:{
            return state
        }
    }
}