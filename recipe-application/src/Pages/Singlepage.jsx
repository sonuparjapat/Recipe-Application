'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Center,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { MdLocalShipping } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getsingle } from '../Redux/GetSinglePage/Action'

export default function Singlepage() {
  const {id}=useParams()
  
  const dispatch=useDispatch()
  const singledata=useSelector((state)=>state.getsinglereducer)
  const {data,isLoading,isError}=singledata
  // console.log(data)
  useEffect(()=>{
    dispatch(getsingle(id))
  },[])


  const handlefavourate=(item)=>{
console.log(data)
  }
  // console.log(singledata,"singledata")
  if(isLoading){
    return <Center height="100vh"><Heading >Loading...</Heading></Center>
  }else if(isError){
    return <Center height="100vh"><Heading>Something going wrong..</Heading></Center>
  }


  return (

    <Container maxW={'7xl'}>
      {data!=="undefined"&&
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
           src={data.image&&data.image}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
           {data.title&&data.title}
            </Heading>
            <Text
              // color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
            PricePerServing-${data.pricePerServing&&data.pricePerServing
} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
              //  borderColor={useColorModeValue('gray.200', 'gray.600')}
              borderColor={"gray.200"}
                />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                // color={useColorModeValue('gray.500', 'gray.400')}
                color="gray.500"
                fontSize={'2xl'}
                fontWeight={'300'}>
               {/* {data.summary
} */}
              </Text>
              <Text fontSize={'lg'}>
               {data.instructions&&data.instructions}
              </Text>
            </VStack>
           
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                // color={useColorModeValue('yellow.500', 'yellow.300')}
                color="yellow.500"
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
               Informations
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                   Vegan:
                  </Text>{' '}
                  {data.vegan==true?"True":data.vegan==false?"false":data.vegan=="undefined"?"noInfomation":""}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                   Vegetarian:
                  </Text>{' '}
                  {data.vegetarian==true?"True":data.vegetarian==false?"false":data.vegetarian=="undefined"?"noInfomation":""}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                   VeryHealthy:
                  </Text>{' '}
                  {data.veryHealthy==true?"True":data.veryHealthy==false?"false":data.veryHealthy=="undefined"?"noInfomation":""}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    VeryPopular:
                  </Text>{' '}
                 {data.veryPopular==true?"True":data.veryPopular==false?"false":data.veryPopular=="undefined"?"noInfomation":""}
                </ListItem>
               
                
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            onClick={handlefavourate}
            // bg={useColorModeValue('gray.900', 'gray.50')}
            bg="gray.200"
            // color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to Favourates
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
        
          
          </Stack>
        </Stack>
      </SimpleGrid>}
    </Container>
  )
}