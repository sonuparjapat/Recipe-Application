import React from 'react'
import styles  from "../Components/Navbar.module.css"
import Navbar from '../Components/Navbar'
import HomepageNavbar from '../Components/HomepageNavbar'
import { Box, Center, Heading, Text } from '@chakra-ui/react'
export default function Homepage() {
  return (
    <div className={styles["app-container"]}>
     
      <div className={styles["background-image"]}></div>
      <div className={styles.navbar}>
<HomepageNavbar/>
      </div>
      <Heading fontSize="50px" position="absolute" left="40%" right="40%" color="white"><Center height="100vh">Good Taste</Center></Heading>
   <Center><Box ><Text fontSize={["15px","15px","20px","20px","20px"]} position="absolute" left={["20%","20%","20%","30%","30%"]} right="20%" mt="60px" color="white"><Center height="100vh">
      "Savor the art of flavors with our delectable recipes, where every dish tells a story."
        
        </Center></Text></Box>  </Center> 
    </div>
  )
}
