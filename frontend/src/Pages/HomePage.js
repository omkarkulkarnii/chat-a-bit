// // import {React, useEffect} from 'react'
// // import {Box,Text , Container} from '@chakra-ui/react'
// // import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// // import Login from '../components/Authentication/Login'
// // import Signup from '../components/Authentication/Signup'
// // import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// // const HomePage = () => {
// //   const history = useHistory();
// //   useEffect(() => {
// //     const user = JSON.parse(localStorage.getItem("userInfo"))
// //     if(user) history.pushState("/chats")
// //   }, [history])
  


// //   return (
// //     <Container maxW='xl' centerContent>
// //       <Box 
// //       display='flex'
// //       justifyContent='center'
// //       padding='3'
// //       bg={'white'}
// //       opacity={"90%"}
// //       w='100%'
// //       m="40px 0 15px 0"
// //       borderRadius="lg"
// //       borderWidth="1px"
// //       borderBottom='solid 5px lightblue'
// //       >
// //       <Text fontSize='4xl' bg={"white"} opacity={"100%"}  fontFamily='Work sans' color='black' borderBottom='solid 5px'>chat-a-bit</Text>
// //       </Box>
// //       <Box bg='white' opacity={"90%"} w='100%' p={4} borderRadius='lg' borderWidth="1px" color='black' >
// //       <Tabs variant='soft-rounded'  colorScheme='blue'>
// //   <TabList  marginBottom='0.5em'>
// //     <Tab bg="white" opacity={"100%"} width='50%'>Login</Tab>
// //     <Tab bg="white" opacity={"100%"} width='50%'>New User</Tab>
// //   </TabList>
// //   <TabPanels opacity={"100%"} color={'black'}>
// //     <TabPanel>
// //       <Login/>
// //     </TabPanel>
// //     <TabPanel>
// //       <Signup/>
// //     </TabPanel>
// //   </TabPanels>
// // </Tabs>
// //       </Box>
// //     </Container>
// //   )
// // }

// // export default HomePage
// import {
//   Box,
//   Container,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
//   Text,
// } from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useHistory } from "react-router";
// import Login from "../components/Authentication/Login";
// import Signup from "../components/Authentication/Signup";

// function Homepage() {
//   const history = useHistory();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("userInfo"));

//     if (user) history.push("/chats");
//   }, [history]);

//   return (
//     <Container maxW="xl" centerContent>
//       <Box
//         d="flex"
//         justifyContent="center"
//         p={3}
//         bg="white"
//         w="100%"
//         m="40px 0 15px 0"
//         borderRadius="lg"
//         borderWidth="1px"
//       >
//         <Text fontSize="4xl" fontFamily="Work sans">
//           Talk-A-Tive
//         </Text>
//       </Box>
//       <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
//         <Tabs isFitted variant="soft-rounded">
//           <TabList mb="1em">
//             <Tab>Login</Tab>
//             <Tab>Sign Up</Tab>
//           </TabList>
//           <TabPanels>
//             <TabPanel>
//               <Login />
//             </TabPanel>
//             <TabPanel>
//               <Signup />
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>
//     </Container>
//   );
// }
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;