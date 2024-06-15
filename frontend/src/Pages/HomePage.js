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
      opacity={"90%"}
      w='100%'
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
      borderBottom='solid 5px lightblue'
      >
      <Text fontSize='4xl' bg={"white"} opacity={"100%"}  fontFamily='Work sans' color='black' borderBottom='solid 5px'>chat-a-bit</Text>
      </Box>
      <Box bg='white' opacity={"90%"} w='100%' p={4} borderRadius='lg' borderWidth="1px" color='black' >
      <Tabs variant='soft-rounded'  colorScheme='blue'>
  <TabList  marginBottom='0.5em'>
    <Tab bg="white" opacity={"100%"} width='50%'>Login</Tab>
    <Tab bg="white" opacity={"100%"} width='50%'>New User</Tab>
  </TabList>
  <TabPanels opacity={"100%"} color={'black'}>
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