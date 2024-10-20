// // import React from 'react'
// // // import axios from 'axios'
// // import { ChatState } from '../Context/ChatProvider'
// // import {Box} from '@chakra-ui/react'
// // import SideDrawer from '../components/miscellaneous/SideDrawer'
// // import { MyChats } from '../components/MyChats'
// // import ChatBox from '../components/ChatBox'
// // const ChatPage = () => {
// //  const {user} = ChatState()

// //   return (
// //     <div style={{width: '100%'}}>
// //     {user && <SideDrawer/>}
// //     <Box display='flex' justifyContent={'space-between'} w={"100%"} height={'91.5vh'} padding={"10px"}>
// //       {user && <MyChats/>}
// //       {user && <ChatBox/>}
// //     </Box>
// //     </div>
// //   )
// // }

// // export default {ChatPage}


// import React from 'react';
// import { ChatState } from '../Context/ChatProvider';
// import { Box } from '@chakra-ui/react';
// import SideDrawer from '../components/miscellaneous/SideDrawer';
// import {MyChats} from '../components/MyChats';
// import ChatBox from '../components/ChatBox';
// import Bg from '../background.png'

// const ChatPage = () => {
//   const { user } = ChatState();
//   return (
//     <div style={{ width: '100%', backgroundImage:`url(${Bg})`,backgroundSize: 'cover', // Optional: to cover the entire div
//     backgroundPosition: 'center' }}>
//       {user && <SideDrawer />}
//       <Box display='flex' justifyContent={'space-between'} w={"100%"} height={'91.5vh'} padding={"10px"}>
//         {user && <MyChats />}
//         {user && <ChatBox />}
//       </Box>
//     </div>
//   );
// };

// export default ChatPage; // Corrected default export
// import { Box } from "@chakra-ui/layout";
// import { useState } from "react";
// import Chatbox from "../components/Chatbox";
// import MyChats from "../components/MyChats";
// import SideDrawer from "../components/miscellaneous/SideDrawer";
// import { ChatState } from "../Context/ChatProvider"
import React from 'react'
const Chatpage = () => {
return (
      <div style={{ width: "100%" }}>
       <h1>Hii omkar</h1>
      </div>
    );
  }
// const Chatpage = () => {
//   const [fetchAgain, setFetchAgain] = useState(false);
//   const { user } = ChatState();

//   return (
//     <div style={{ width: "100%" }}>
//       {user && <SideDrawer />}
//       <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
//         {user && <MyChats fetchAgain={fetchAgain} />}
//         {user && (
//           <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
//         )}
//       </Box>
//     </div>
//   );
// };

export default Chatpage;