import React from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Homepage from '../Pages/Homepage'
import HomepageNavbar from '../Components/HomepageNavbar'
export default function AllRoutes() {
    const location=useLocation()
    // console.log(location.pathname)
  return (
  <>
  {location.pathname=="/"?<Homepage/>:<Navbar/>}
  <Routes>
    

        
        
        </Routes></>
  )
}
