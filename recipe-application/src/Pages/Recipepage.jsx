import { Box, Center, FormLabel, Heading, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apikey, url } from '../ApiKey/Apikey'
import HomepageRecipeCard from './HomepageRecipeCard'
import Footer from '../Components/Footer'
import Filter from './Filter'
import { useLocation, useSearchParams } from 'react-router-dom'

export default function Recipepage() {
  const [recipedata,setRecipedata]=useState([])
  const [searchparams]=useSearchParams()
  // const [ingredients,setIngredients]=useState(searchparams.get("ingredients"))
  // console.log(ingredients,"ing")
  const [loading,setLoading]=useState(false)

  const [error,setError]=useState(false)
const location=useLocation()
  useEffect(()=>{
    console.log(searchparams.get("ingredients"),"hek")
    getrecipes()
    
  },[location.search])
// getrecipes
  const getrecipes=()=>{
    setLoading(true)
    setError(false)
    axios.get(`${url}/recipes/complexSearch?apiKey=${apikey}`).then((res)=>{
     setRecipedata(res.data.results)
     setLoading(false)
     setError(false)
    }).catch((err)=>{
      setLoading(false)
      setError(true)
      console.log(err)
    })
  }
  const handleby=(e)=>{


  }
  // if(loading){
  //   return <Center>Loading...</Center>
  // }
  // else if(error){
  //   return <Center>Something going wrong..</Center>
  // }
  return (
<>
<Box  w="90%" margin="auto" pb="30px"  border="1px solid red">
  <Box display={"flex"} justifyContent={"right"} alignItems={"right"}><Filter/></Box>
<Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} gap="20px">
{recipedata!=="undefined"&&recipedata.length>=1?recipedata.map((item,index)=>
<Box key={index}>
<HomepageRecipeCard IMAGE={item.image} Title={item.title}/>
</Box>
):
<Center><Heading>No Data Found!</Heading></Center>}
</Box>


</Box>
<Footer/>
</>
  )
}
