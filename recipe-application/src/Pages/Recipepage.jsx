import { Box, Center, FormLabel, Heading, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apikey, url } from '../ApiKey/Apikey'
import HomepageRecipeCard from './HomepageRecipeCard'
import Footer from '../Components/Footer'

export default function Recipepage() {
  const [recipedata,setRecipedata]=useState([])
  const [loading,setLoading]=useState(false)

  const [error,setError]=useState(false)

  useEffect(()=>{
    getrecipes()
  },[])
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
  return (
<>
<Box  w="90%" margin="auto" pb="30px" display="flex" justifyContent="space-between" border="1px solid red">
  <Box>
<Box><FormLabel>FindByNutrients</FormLabel>
<input value={"findByNutrients"} name="name" type="radio" onChange={handleby}/>
<Box>
 <Box><FormLabel>minCarbs</FormLabel>
 <input type="number" placeholder='from'/> <input type="number" placeholder='to'/>
 </Box> 
</Box>
</Box>
<Box><FormLabel>FindByIngredients</FormLabel>
<input value={"findByIngredients"} name="name" type="radio" display="inline" onChange={handleby}/>
</Box>
  </Box>
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
