import React, { useEffect, useState } from 'react'
import styles  from "../Components/Navbar.module.css"
import Navbar from '../Components/Navbar'
import HomepageNavbar from '../Components/HomepageNavbar'
import { Box, Button, Center, Heading, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import { apikey, url } from '../ApiKey/Apikey'
import HomepageRecipeCard from './HomepageRecipeCard'
export default function Homepage() {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [newdata,setNewdata]=useState([])
  const [error,setError]=useState(false)
  console.log(process.env.REACT_APP_API_KEY,"eky")


  useEffect(()=>{
getrecipes()
  },[])


  // gethomepagerecipes
  const getrecipes=()=>{
    setLoading(true)
    setError(false)
    axios.get(`${url}/recipes/complexSearch?apiKey=${apikey}`).then((res)=>{
     setData(res.data.results.slice(0,9))
     setLoading(false)
     setError(false)
    }).catch((err)=>{
      setLoading(false)
      setError(true)
      console.log(err)
    })
  }
  return (
    <>
    <div className={styles["app-container"]}>
     
      <div className={styles["background-image"]}></div>
      <div className={styles.navbar}>
<HomepageNavbar/>
      </div>
      <Heading fontSize={["50px","50px","50px","50px","50px"]} position="absolute" left={["0%","20%","30%","30%","40%"]} right={["0%","20%","30%","30%","40%"]} color="white"><Center height="100vh">Good Taste</Center></Heading>
   <Center><Box ><Text fontSize={["15px","15px","20px","20px","20px"]} position="absolute" left={["20%","20%","20%","30%","30%"]} right={["20%","20%","20%","30%","30%"]}  mt="60px" color="white"><Center height="100vh">
      "Savor the art of flavors with our delectable recipes, where every dish tells a story."
        
        </Center></Text></Box>  </Center> 
    </div>
    <Box height="300px">
        <Box w="95%" margin="auto" fontStyle={"blod"} fontWeight={600} fontSize={"20px"} mt="10px"> <Text textAlign="left">Famous Recipes</Text>
       
       <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap="10px" >
        {data.length!=="undefined"&&data.length>=1&&data.map((item,index)=>
      
         <Box key={index}>
       <HomepageRecipeCard IMAGE={item.image} Title={item.title}/>
       <Box>{index==data.length-1&&<Button>Explore</Button>}</Box>
         </Box>
         
        )
       }

        </Box>
    </Box>
    <Box></Box>
        <Text></Text>
    </Box>
    </>
  )
}
