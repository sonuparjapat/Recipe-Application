import { getsinglefail, getsinglereq, getsinglesucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    data:[]
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getsinglereq:{
            return {...state,isLoading:true,isError:false,data:[]}
        }
        case getsinglesucc:{
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case getsinglefail:{
            return {...state,isLoading:false,isError:true,data:[]}
        }
        default:{
            return state
        }
    }
}