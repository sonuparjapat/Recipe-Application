import React, { useEffect, useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Select,
    Box,
    Textarea,
    FormLabel,
    InputGroup,
    InputLeftAddon,
    Stack,
    useDisclosure,
    Input,
    InputRightAddon,
    Text,
    Center,
    useToast
  } from '@chakra-ui/react'
 
  import { AddIcon } from '@chakra-ui/icons'
import { Google, Login } from '@mui/icons-material'
import { BiLogoGoogle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { regfailure, register, regsuccess } from '../Redux/Authentication/Signup/Action'
import { login, loginfailure, loginsuccess } from '../Redux/Authentication/Login/Action'
const loginintdata={

  email:"",
  password:""
}
const signupintdata={
  name:"",
  "email":"",
  password:""
}

  export default function AuthenticationDrawer() {
    const [what,setWhat]=useState(true)
    const [logindata,setLogindata]=useState(loginintdata)
    const [signIndata,setSignIndata]=useState(signupintdata)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  useEffect(()=>{
    setWhat(true)

   
  },[])

  // handlesinginprocess
  const handlesignin=(e)=>{
    const {name,value}=e.target
    setSignIndata((pre)=>({...pre,[name]:value}))
  }
  const dispatch=useDispatch()
  const toast=useToast()
  const signupdata=useSelector((state)=>state.registerreducer)
  const {regisLoading,regisError}=signupdata
const dosignin=(e)=>{
  e.preventDefault()

  // console.log(signIndata)
  dispatch(register(signIndata)).then((res)=>{
    dispatch(regsuccess())
    toast({description:res.data.msg,position:"top",status:"success",duration:3000})
    setWhat(!what)
  }).catch((err)=>{
    if(err.message=="Network Error"){
      toast({description:"something going wrong",position:"top",status:"error",duration:3000})
      dispatch(regfailure())
    }
 
   else{

    toast({description:err.response.data.msg,position:"top",status:"error",duration:3000})
    dispatch(regfailure())}
  })
}

const mylogin=useSelector((state)=>state.loginreducer)
const {loginisLoading,loginisError}=mylogin
// handleloginprocess
const handleloginchange=(e)=>{
  const {name,value}=e.target
  setLogindata((pre)=>({...pre,[name]:value}))

}
const handlelogin=()=>{
  // console.log(logindata)
  dispatch(login(logindata)).then((res)=>{
    dispatch(loginsuccess(res.data))
    toast({description:res.data.msg,position:"top",status:"success",duration:3000})
    onClose()
   sessionStorage.setItem("username",res.data.username)
   sessionStorage.setItem("usertoken",res.data.token)
  }).catch((err)=>{
  
    if(err.message=="Network Error"){
      toast({description:"something going wrong",position:"top",status:"error",duration:3000})
      dispatch(loginfailure())
    }
 
   else{

    toast({description:err.response.data.msg,position:"top",status:"error",duration:3000})
    dispatch(loginfailure())}
  })
}

    return (
      <>
        <Button leftIcon={<Login/>} colorScheme='teal' onClick={onOpen}>
          Login
        </Button>

        {what?
      
        <Drawer
        isOpen={isOpen}
        placement='left'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            SignUp
          </DrawerHeader>

          <DrawerBody>
           {/* <Center><Button><Google/>SignUp with Google</Button></Center>  */}
     
            <Stack spacing='24px' mt="40px">
              <Box>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input
                  ref={firstField}
                  id='name'
                  name="name"
                  value={signIndata.name}
                  onChange={handlesignin}
                  placeholder='Please enter user name'
                />
                 <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
             
                  ref={firstField}
                  id='email'
                  name="email"
                  type="email"
                  onChange={handlesignin}
                  value={signIndata.email}
                  placeholder='Please enter user email'
                />
                 <FormLabel htmlFor='password'>Password</FormLabel>
                <Input
                isRequired={true}
                  ref={firstField}
                  id='password'
                  name="password"
                  value={signIndata.password}
                  onChange={handlesignin}
                  placeholder='Please enter user password'
                />
             
   <Center mt="30px"> <Button colorScheme='blue' onClick={()=>setWhat(!what)}>Or Login</Button></Center> 
              </Box>
            </Stack>
         
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            {regisLoading?
                <Button  colorScheme='blue'>Loading...</Button>:
                <Button onClick={dosignin} colorScheme='blue' isDisabled={signIndata.name&&signIndata.email&&signIndata.password?false:true}>Submit</Button>
                }
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>:
       <Drawer
       isOpen={isOpen}
       placement='left'
       initialFocusRef={firstField}
       onClose={onClose}
     >
       <DrawerOverlay />
       <DrawerContent>
         <DrawerCloseButton />
         <DrawerHeader borderBottomWidth='1px'>
          LogIn
         </DrawerHeader>

         <DrawerBody mt="30px">
         {/* <Center><Button><Google/>LogIn with Google</Button></Center>  */}
           <Stack spacing='24px' mt="30px">
             <Box>
               <FormLabel htmlFor='email'>Email</FormLabel>
               <Input
                 ref={firstField}
                 id='email'
                 name="email"
                 value={logindata.email}
                 onChange={handleloginchange}
                 placeholder='Please enter user email'
               />
              
             </Box>
             <Box>
               <FormLabel htmlFor='password'>Password</FormLabel>
             
                 <Input
                 ref={firstField}
                 id='password'
                 name="password"
                 value={logindata.password}
                 onChange={handleloginchange}
                 placeholder='Please enter user password'
               />
             </Box>

           <Center mt="30px">  <Button colorScheme='blue' onClick={()=>setWhat(!what)}>Or SignUp</Button></Center>
           </Stack>
         </DrawerBody>

         <DrawerFooter borderTopWidth='1px'>
           <Button variant='outline' mr={3} onClick={onClose}>
             Cancel
           </Button>
           {loginisLoading?
            <Button  colorScheme='blue'>Loading...</Button>
           :   <Button onClick={handlelogin} isDisabled={logindata.email&&logindata.password?false:true} colorScheme='blue'>Submit</Button>}
        
         </DrawerFooter>
       </DrawerContent>
     </Drawer>
    
    }
      
      </>
    )
  }

