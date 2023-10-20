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
    Center
  } from '@chakra-ui/react'
  import { AddIcon } from '@chakra-ui/icons'
import { Google, Login } from '@mui/icons-material'
import { BiLogoGoogle } from 'react-icons/bi'
  export default function AuthenticationDrawer() {
    const [what,setWhat]=useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  useEffect(()=>{
    setWhat(true)
  },[])
    return (
      <>
        <Button leftIcon={<Login/>} colorScheme='teal' onClick={onOpen}>
          Login/Signup
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
           <Center><Button><Google/>SignUp with Google</Button></Center> 
            <Stack spacing='24px' mt="40px">
              <Box>
                <FormLabel htmlFor='username'>Name</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please enter user name'
                />
                 <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please enter user name'
                />
                 <FormLabel htmlFor='password'>Password</FormLabel>
                <Input
                  ref={firstField}
                  id='password'
                  placeholder='Please enter user name'
                />
             
   <Center mt="30px"> <Button colorScheme='blue' onClick={()=>setWhat(!what)}>Or Login</Button></Center> 
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Submit</Button>
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
         <Center><Button><Google/>LogIn with Google</Button></Center> 
           <Stack spacing='24px' mt="30px">
             <Box>
               <FormLabel htmlFor='email'>Email</FormLabel>
               <Input
                 ref={firstField}
                 id='email'
                 placeholder='Please enter user email'
               />
              
             </Box>
             <Box>
               <FormLabel htmlFor='password'>Password</FormLabel>
             
                 <Input
                 ref={firstField}
                 id='password'
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
           <Button colorScheme='blue'>Submit</Button>
         </DrawerFooter>
       </DrawerContent>
     </Drawer>
    
    }
      
      </>
    )
  }

