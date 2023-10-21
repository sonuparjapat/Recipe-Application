import { getrecipefail, getrecipereq, getrecipesucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    recipes:[]
}


export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch (type){
        case getrecipereq:{
            return {...state,isLoading:true,isError:false,recipes:[]}
        }
        case getrecipesucc:{
            return {...state,isLoading:false,isError:false,recipes:payload}
        }
        case getrecipefail:{
            return {...state,isLoading:false,isError:true,recipes:[]}
        }
        default:{
            return state
        }
    }
}