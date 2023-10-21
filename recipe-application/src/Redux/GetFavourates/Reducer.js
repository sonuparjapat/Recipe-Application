import { getfavfail, getfavreq, getfavsucc } from "./ActionTypes"

const initialdata={
    favisLoading:false,
    favisError:false,
    favdata:[]
}

export const reducer =(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getfavreq:{
            return {...state,favisLoading:true,favisError:false,favdata:[]}
        }
        case getfavsucc:{
            // console.log(payload)
            return {...state,favisLoading:false,favisError:false,favdata:payload} 
        }
        case getfavfail:{
            return {...state,favisLoading:false,favisError:true,favdata:[]}
        }
        default:{
            return state
        }
    }
}