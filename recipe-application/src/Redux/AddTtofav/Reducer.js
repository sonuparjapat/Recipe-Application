import { addtofavfail, addtofavreq, addtofavsucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case addtofavreq:{
            return {...state,isLoading:true,isError:false}
        }
        case addtofavsucc:{
            return {...state,isLoading:false,isError:false}
        }
        case addtofavfail:{
            return {...state,isLoading:false,isError:true}
        }

        default:{
            return state
        }
    }
}