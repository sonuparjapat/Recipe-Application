'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  useToast,
} from '@chakra-ui/react'
import { Delete } from '@mui/icons-material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletefav, deletefavfailure, deletefavsuccess } from '../Redux/DeleteFav/Action'
import { deletesucc } from '../Redux/DeleteFav/ActionType'


export default function FavRecipecard({IMAGE,Title,Id,handleforany}) {
    const dispatch=useDispatch()
    const deletedata=useSelector((state)=>state.deletefavreducer)
    const {deleteisLoading,deleteisError}=deletedata
const toast=useToast()

// handledeleteprocess
const token=sessionStorage.getItem("usertoken")
    const handledelete=(id)=>{

        dispatch(deletefav(id)).then((res)=>{
            dispatch(deletefavsuccess())
toast({description:res.data.msg,"position":"top","status":'success',duration:2000})
handleforany()
        }).catch((err)=>{
            dispatch(deletefavfailure())
            toast({description:err.response.data.msg,"position":"top","status":'error',duration:2000})
        })
    }
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          
          </Text>
          <Heading fontSize={["md","md","md","xl",'xl']} fontFamily={'body'} fontWeight={500}>
          { Title}, pink
          </Heading>
          <Link to={`/details/${Id}`}><Text>More Details</Text></Link>
          {deleteisLoading?<Button>Loading...</Button>
          : <Button onClick={()=>handledelete(Id)} _hover={{color:"red"}}>Remove From Favourates</Button>}
         
        </Stack>
      </Box>
    </Center>
  )
}