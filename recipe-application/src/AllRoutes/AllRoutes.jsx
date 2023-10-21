import React from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Homepage from '../Pages/Homepage'
import HomepageNavbar from '../Components/HomepageNavbar'
import Recipepage from '../Pages/Recipepage'
import Singlepage from '../Pages/Singlepage'
import Favouratepage from '../Pages/Favouratepage'
import PrivateRoute from './PrivateRoute'
export default function AllRoutes() {
    const location=useLocation()
    // console.log(location.pathname)
  return (
  <>
  {location.pathname=="/"?<Homepage/>:<Navbar/>}
  <Routes>
    <Route path="/:name" element={<Recipepage/>}></Route>
    <Route path="/recipes" element={<Recipepage/>}/>
<Route path="/favourates" element={<PrivateRoute><Favouratepage/></PrivateRoute>}></Route>
   <Route path="/details/:id" element={<Singlepage/>}></Route>     
        
        </Routes></>
  )
}
