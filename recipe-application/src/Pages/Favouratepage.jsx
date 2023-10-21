import { Box, Center, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import HomepageRecipeCard from './HomepageRecipeCard'
import { useDispatch, useSelector } from 'react-redux'
import { getfav } from '../Redux/GetFavourates/Action'
import FavRecipecard from './FavRecipeCard'
import Footer from '../Components/Footer'

export default function Favouratepage() {

  const dispatch=useDispatch()
  const favalldata=useSelector((state)=>state.getfavreducer)
  const {favisLoading,favisError,favdata}=favalldata
  // console.log(favalldata)
  const [forany,setForany]=useState(false)
  useEffect(()=>{
dispatch(getfav)
  },[forany])
   const handleforany=()=>{
    setForany(!forany)
   }
  // console.log(favdata)
  if(favisLoading){
    return <Center height="100vh"><Heading>Loading...</Heading></Center>
  }
  else if(favisError){
    return <Center height="100vh"><Heading>Something going wrong..</Heading></Center>
  }
  return (
    <>
 
    <Box mt="30px"><Center><Heading color="yellow.500">Good Taste</Heading></Center></Box>
<Center><Heading size={"md"} color="red.300">Find All Recipes Here</Heading></Center>
<Box  w="90%" margin="auto" pb="30px" mt="30px">
  {/* <Box display={"flex"} justifyContent={"right"} alignItems={"right"}><Filter/></Box> */}
<Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} gap="20px">
{favdata&&favdata!=="undefined"&&favdata.length>=1?favdata.map((item,index)=>
<Box key={index}>
<FavRecipecard IMAGE={item.image} Title={item.title} Id={item._id} handleforany={handleforany}/>

</Box>
):
<Center ><Heading>No Data Found!</Heading></Center>}
</Box>


</Box>
    <Footer/>
    </>
  )
}
