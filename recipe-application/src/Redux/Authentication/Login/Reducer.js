import { loginfail, loginreq, loginsucc } from "./ActionTypes"

const initialdata={
    loginisLoading:false,
    loginisError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case loginreq:{
            return {...state,loginisLoading:true,loginisError:false}
        }
        case loginsucc:{
            return {...state,loginisLoading:false,loginisError:false}
        }
        case loginfail:{
            return {...state,loginisLoading:false,loginisError:true}
        }
        default:{
            return state
        }
    }
}