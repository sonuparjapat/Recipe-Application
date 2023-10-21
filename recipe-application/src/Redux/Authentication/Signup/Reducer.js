import { regfail, regreq, regsucc } from "./ActionTypes"

const initialdata={
    regisLoading:false,
    regisError:false
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case regreq:{
            return {...state,regisLoading:true,regisError:false}
        }
        case regsucc:{
            return {...state,regisLoading:false,regisError:false}
        }
        case regfail:{
            return {...state,regisLoading:false,regisError:true}
        }
        default:{
            return  state
        }
    }
}