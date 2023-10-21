
import React, { useEffect, useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Select,
    Stack,
    FormLabel,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Textarea,
    Radio,
    Center
  } from '@chakra-ui/react'
import { Filter1 } from '@mui/icons-material'
import { AddIcon } from '@chakra-ui/icons'
import { useSearchParams } from 'react-router-dom'
const intdata={
    "minCarbs":"",
    minProtein:"",
    minCalories:"",
    maxCarbs:"",
    "maxProtein":"",
    maxCalories:""
}
const inginitdata={
    "ing1":"",
    "ing2":"",
    "ing3":""
}
export default function Filter() {
    const [searchBy,setSearchby]=useState("findbyingrediands")
    const [inputdata,setInputdata]=useState(intdata)
    const [ingdata,setIngdata]=useState(inginitdata)
  const [searchParams,setSearchParams]=useSearchParams()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  const handlesearchby=(e)=>{
    setSearchby(e.target.value)
    clearfilter()
  }
  const handlechange=(e)=>{
    const {name,value}=e.target
    setInputdata((pre)=>({...pre,[name]:value}))
  }
  const handleingchange=(e)=>{
    const {name,value}=e.target

    setIngdata((pre)=>({...pre,[name]:value}))
  }
  const {ing1,ing2,ing3}=ingdata
//   console.log(ingdata)
  const {minCalories,minCarbs,minProtein,maxCalories,maxCarbs,maxProtein}=inputdata
  useEffect(()=>{
const obj={}

minCarbs&&(obj.minCarbs=minCarbs)
maxCarbs&&(obj.maxCarbs=maxCarbs)
minProtein&&(obj.minProtein=minProtein)

maxProtein&&(obj.maxProtein=maxProtein)
minCalories&&(obj.minCalories=minCalories)
maxCalories&&(obj.maxCalories=maxCalories)
// apples,+flour,+sugar&number=2
ing1&&ing2&&ing3?(obj.ingredients=`${ing1},+${ing2},+${ing3}`):
ing1&&ing2?(obj.ingredients=`${ing1},+${ing2}`):
ing1?(obj.ingredients=ing1):
ing2?(obj.ingredients=ing2):
ing3?(obj.ingredients=ing3):


setSearchParams(obj)
setSearchParams(obj)
  },[inputdata,ingdata])
  
//   To clear filters
const clearfilter=()=>{
    setInputdata(intdata)
    setIngdata(inginitdata)
    setSearchby("findbyingrediands")
}
//   console.log(inputdata)
    return (
      <>
        <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}>
          Filter
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Add Filters
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='searchby'>Search By</FormLabel>
                <label>FindByIngredients</label> <input  onChange={handlesearchby} type="radio" value="findbyingrediands" name="searchby"/><br></br>
                <label>FindByNutrients</label> <input onChange={handlesearchby} type="radio" value="findbynutrients" name="searchby"/>
                </Box>
  {searchBy=="findbynutrients"&&
   <Box>
   <FormLabel htmlFor='carbs'>Carbs</FormLabel>

   <Box display={"flex"} justifyContent={"space-around"}>
     <Input
       type='number'
       id='minCarbs'
       min={10}
       name="minCarbs"
      value={minCarbs}
      onChange={handlechange}
       placeholder='From (min10)'
       display={"inline"}
     />
     
     <Input
        display={"inline"}
       type='number'
       id='maxCarbs'
       name="maxCarbs"
       onChange={handlechange}
       value={maxCarbs}
       max={100}
       placeholder='To (max100)'
     /></Box>
     <FormLabel htmlFor='protein'>Protein</FormLabel>

<Box display={"flex"} justifyContent={"space-around"}>
  <Input
    type='number'
    id='minProtein'
    name="minProtein"
    onChange={handlechange}
    value={minProtein}
    placeholder='From (min10)'
   min={10}
  />
  
  <Input
  
    type='number'
    id='maxProtein'
    name="maxProtein"
    onChange={handlechange}
    value={maxProtein}
    placeholder='To (max100)'
    max={100}
  /></Box>
  <FormLabel htmlFor='calories'>Calories</FormLabel>

<Box display={"flex"} justifyContent={"space-around"}>
  <Input
    type='number'
    id='minCalories'
    name="minCalories"
    onChange={handlechange}
    value={minCalories}
    placeholder='From (min50)'
min={50}
  />
  
  <Input
  
    type='number'
    id='maxCalories'
    max={800}
    name="maxCalories"
    onChange={handlechange}
    value={maxCalories}
    placeholder='To (max800)'
  /></Box>

<Center><Button colorScheme='blue' onClick={clearfilter} mt="20px">Clear Filters</Button></Center>
 </Box>


}
{/* ingredients=apples,+flour,+sugar&number=2 */}
     {searchBy=="findbyingrediands"&&
     <Box>
     <FormLabel htmlFor='carbs'>Ingridents</FormLabel>
   
     <Box >
     <FormLabel htmlFor='protein'>Ingredient1</FormLabel>
       <Input
         type='text'
        
         name="ing1"
        value={ing1}
        onChange={handleingchange}
         placeholder='Ingredient1'
       
       />
       </Box>
       <Box>
       <FormLabel htmlFor='protein'>Ingredient2</FormLabel>
       <Input
             type='text'
        
             name="ing2"
            value={ing2}
            onChange={handleingchange}
             placeholder='Ingredient2'
       /></Box>
  
  
  <Box >
  <FormLabel htmlFor='protein'>Ingredient3</FormLabel>
    <Input
        type='text'
        
        name="ing3"
       value={ing3}
       onChange={handleingchange}
        placeholder='Ingredient3'
    />
    
   </Box>
  
  
  <Center><Button colorScheme='blue' onClick={clearfilter} mt="20px">Clear Filters</Button></Center>
   </Box>
     }          
  
                
  
               
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={()=>{onClose()
            clearfilter()}}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={onClose}>Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }