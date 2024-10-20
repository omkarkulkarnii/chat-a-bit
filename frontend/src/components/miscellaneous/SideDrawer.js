import React, {useState} from 'react';
import {Box } from '@chakra-ui/layout'
import {Button, Tooltip, Text} from '@chakra-ui/react'

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  return (
    <>
    <Box 
    display='flex' justifyContent="space-between" alignItems="center" bg={'white'} w={"100%"} p={"5px 10px 5px 10px"} borderWidth={'5px'}>
      <Tooltip label="Search Users to Chat" hasArrow placement = "bottom-end">
        <Button variant='ghost'>
          <i className="fas fa-search"></i>
          <Text display={{base:'none', md:'flex'}} paddingX='4'>
            Search User
          </Text>
        </Button>
      </Tooltip>
    </Box>
    </>
  )
}
export default SideDrawer;
