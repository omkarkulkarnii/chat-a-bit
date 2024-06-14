import React from 'react'
import {Box,Text , Container} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box 
      display='flex'
      justifyContent='center'
      padding='3'
      bg={'white'}
      w='100%'
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
      borderBottom='solid 5px blue'
      >
      <Text fontSize='4xl'  fontFamily='Work sans' color='black' borderBottom='solid 5px'>chat-a-bit</Text>
      </Box>
      <Box bg='white' w='100%' p={4} borderRadius='lg' borderWidth="1px" color='black' >
      <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList marginBottom='0.5em'>
    <Tab width='50%'>Login</Tab>
    <Tab width='50%'>New User</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  )
}

export default HomePage