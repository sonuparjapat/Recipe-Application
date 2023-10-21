import { deletefail, deletereq, deletesucc } from "./ActionType"

const initialdata={
    deleteisLoading:false,
    deleteisError:false
}

export const reducer =(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case deletereq:{
            return {...state,deleteisLoading:true,deleteisError:false}
        }
        case deletesucc:{
            return {...state,deleteisLoading:false,deleteisError:false}
        }
        case deletefail:{
            return {...state,deleteisLoading:false,deleteisError:true}
        }
        default:{
            return state
        }
    }
}