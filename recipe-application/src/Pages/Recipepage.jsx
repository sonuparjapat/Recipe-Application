import { Box, Center, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apikey, url } from '../ApiKey/Apikey'
import HomepageRecipeCard from './HomepageRecipeCard'
import Footer from '../Components/Footer'
import Filter from './Filter'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getrecipes } from '../Redux/GetRecipes/Action'

export default function Recipepage() {
  const [recipedata,setRecipedata]=useState([])
  const [searchparams]=useSearchParams()
  // const [ingredients,setIngredients]=useState(searchparams.get("ingredients"))
  // console.log(ingredients,"ing")
  const [loading,setLoading]=useState(false)

  const [error,setError]=useState(false)
const location=useLocation()
const getrecipedata=useSelector((state)=>state.getrecipesreducer)
const {isLoading,isError,recipes}=getrecipedata
const dispatch=useDispatch()
  useEffect(()=>{
    // console.log(searchparams.get("ingredients"),"hek")
    const paramsobj={
      minCarbs:searchparams.get("minCarbs")&&searchparams.get("minCarbs"),
     maxCarbs:searchparams.get("maxCarbs")&&searchparams.get("maxCarbs"),
      minCalories:searchparams.get("minCalories")&&searchparams.get("minCalories"),
     maxCalories:searchparams.get("maxCalories")&&searchparams.get("maxCalories"),
      minProtein:searchparams.get("minProtein")&&searchparams.get("maxProtein"),
      maxProtein:searchparams.get("maxProtein")&&searchparams.get("maxProtein"),
      ingredients:searchparams.get("ingredients")&&searchparams.get("ingredients"),
      query:searchparams.get("query")&&searchparams.get("query"),
     
    }
    // console.log(paramsobj)
   dispatch(getrecipes(paramsobj))
    
  },[location.search])

  const handleby=(e)=>{


  }
  if(loading){
    return <Center>Loading...</Center>
  }
  else if(error){
    return <Center>Something going wrong..</Center>
  }
  return (
<>
<Box mt="30px"><Center><Heading color="yellow.500">Good Taste</Heading></Center></Box>
<Center><Heading size={"md"} color="red.300">Find All Recipes Here</Heading></Center>
<Box  w="90%" margin="auto" pb="30px" mt="30px">
  {/* <Box display={"flex"} justifyContent={"right"} alignItems={"right"}><Filter/></Box> */}
<Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} gap="20px">
{recipes!=="undefined"&&recipes.length>=1?recipes.map((item,index)=>
<Box key={index}>
<HomepageRecipeCard IMAGE={item.image} Title={item.title} Id={item.id}/>

</Box>
):
<Center><Heading>No Data Found!</Heading></Center>}
</Box>


</Box>
<Footer/>
</>
  )
}
