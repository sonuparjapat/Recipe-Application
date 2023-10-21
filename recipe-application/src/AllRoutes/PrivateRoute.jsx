import { useToast } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const token=sessionStorage.getItem("usertoken")
    const location=useLocation()
    const toast=useToast()
    if(!token){
toast({description:"Please Loign First",position:"top","status":"error",duration:2000})
        return <Navigate to="/" state={location.pathname} replace/>
    }
    return children
 
}
