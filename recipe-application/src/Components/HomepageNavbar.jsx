
import React, { useEffect } from "react";
import recipeimg from "../Images/recipe.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Link, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import styles from "../Components/Navbar.module.css"
import { faArrowRightToBracket, faCartArrowDown, faColonSign, faHome, faLongArrowLeft, faSearch, faSign, faSignIn, faSignOut, faSmile } from "@fortawesome/free-solid-svg-icons";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Img,
    Input,
    Spacer,
    useLatestRef
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,


  } from '@chakra-ui/icons';


import { useState } from "react";
  import { useContext } from "react";

import { useSelector } from "react-redux";
import { BirecipeimgutCircle } from "react-icons/bi";
import AuthenticationDrawer from "./AuthenticationDrawer";
  export default function HomepageNavbar() {
    
    const [searchparams,setSearchParams]=useSearchParams()
    // const [params,setParmas]=useParams()
    const { isOpen, onToggle } = useDisclosure();
    const location=useLocation()
    const navigate=useNavigate()
    const [input,setInput]=useState(null)
const handlesearch=(e)=>{
const obj={}
setInput(e.target.value)


}
const handlesearchclick=()=>{
  if(input){
    navigate(`/search?name=${input}`)
  } 
}
useEffect(()=>{
    // setSearchParams({})
},[])
  // const{username,arrangeusername,inputvalue,ourinput}=useContext(Authcontext)
//   const logindata=useSelector((state)=>state.loginreducer)
//   const {username,token}=logindata
  // const{inputvalue}=useContext(Authcontext)

    return (
      <Box className={styles.navbar}  width="100&">
        <Flex
        
          color="white"
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
        //   borderBottom={1}
        //   borderStyle={'solid'}
        //   borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>

          <Box display="flex" justifyContent={"space-evenly"} border="1px solid green" w="100%">

         
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
      
            <Image
        
        height={10}
            src={recipeimg}
   


           />
       
        

            <Flex display={["none","none","flex","flex","flex"]} ml={10} >
              <DesktopNav />
            </Flex>
     

          </Flex>
          <Box border="1px solid red" w={["70%","70%","50%","50%","50%"]} mr="30px" display="flex"  >
            <Box w="70%"  >
       
          <Input variant='outline' onChange={handlesearch} placeholder='Search Items'  /></Box>
          <Box><Button  ml="5px" opacity="0.5"><FontAwesomeIcon icon={faSearch} onClick={handlesearchclick} /></Button></Box>  </Box>
          
          <Box display={["none","none","flex","flex","flex"]} justifyContent="space-between">

  <Box fontWeight={500} fontSize="20px" mt="10px" >  <Link to="/cart" style={{marginTop:"10px"}} ><FontAwesomeIcon icon={faCartArrowDown} /></Link></Box>
  <Box ml="20px" fontWeight={500} fontSize="20px" mt="10px"> <Link to="/favourates" style={{marginTop:"10px"}} >Favourates</Link></Box> 
 
  </Box> </Box>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
        {/* <Carousel/> */}
      </Box>
    
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack mt="10px"direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} fontStyle="bold">
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
             
                 to={navItem.to}
                 >
                  <Text  color="white.700" fontSize={'20px'}
          
               fontWeight={500}
         
               _hover={{
                 textDecoration: 'none',
                 color: "linkHoverColor",
               }} fontStyle="bold" >{navItem.label}</Text> 
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
        <AuthenticationDrawer/>
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        to={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
     <Link to="/cart"><Text        fontWeight={600}
        textAlign="left"    color={useColorModeValue('gray.600', 'gray.200')}> Cart </Text></Link>
             <Link to="/favourates"><Text  py={2}      fontWeight={600}
        textAlign="left"    color={useColorModeValue('gray.600', 'gray.200')}> Favourates </Text></Link>
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children,href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
      <Link to={href}><Flex
          py={2}
         
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex></Link>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} to={child.to}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
      
    );
  };
  
  
  
  const NAV_ITEMS = [
    {
      label: 'ExploreRecipes',
     to:"/recipes"
       
    },
    
    
  
  

    
  ];