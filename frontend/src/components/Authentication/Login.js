import {React, useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { FormControl,Button, FormLabel, VStack, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react'

const Login = () => {
  const [email, setEmail] = useState();
 const [show, setShow] = useState(false);
 const [password, setPassword] = useState();
 const [loading, setLoading] = useState(false);
 const toast = useToast();
 const history = useHistory();
 const handleClick = () => setShow(!show);
 
 const submitHandler = async() => {
    setLoading(true);
    if(  !email || !password ){
        toast({
            title: "Please enter all details",
            status:'warning',
            duration: 2000,
            isClosable:true,
            position: "bottom"
        })
        setLoading(false);
        return;
    }

    try{
        const config = {
            headers: {
                "Content-type" : "application/json",
            }
        }
        const {data} = await axios.post("/api/user/login", {email, password}, config)
        toast({
            title: "Login successful",
            status:'success',
            duration: 2000,
            isClosable:true,
            position: "bottom"
        })

        localStorage.setItem('userInfo', JSON.stringify(data));
        setLoading(false);
        history.push('/chats')
        }catch(err){
            toast({
                title: "Error occured!!",
                description: err.response.data.message,
                status:'error',
                duration: 2000,
                isClosable:true,
                position: "bottom"
            })
            setLoading(false);
        }
 }


  return (
    <VStack color="black" spacing='5px'>
      <FormControl id='email' isRequired>
            <FormLabel >Email</FormLabel>
                <Input
                // w='80%'
                // m='2'
                placeholder='your-email@xyz.com'
                onChange={(e) => 
                    setEmail(e.target.value)
                }
                />
        </FormControl>


        <FormControl id='password' isRequired>
            <FormLabel >Password</FormLabel>
            <InputGroup>
                <Input
                type={show? "text": "password"}
                // w='80%'
                // m='2'
                placeholder='Enter Your Password'
                onChange={(e) => 
                    setPassword(e.target.value)
                }
                />

                <InputRightElement width="4.5rem">
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                </Button>
                
                </InputRightElement>
            </InputGroup>
        </FormControl>


        <Button 
        colorScheme='blue'
        width="100%"
        marginTop={15}
        onClick={submitHandler}
        isLoading = {loading}>
            Login
        </Button>
        {/* <Button 
        colorScheme='red'
        variant='solid'
        width="100%"
        marginTop={15}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("12345")
        }}>
            Get Guest Credentials
        </Button> */}
    </VStack>
  )
}

export default Login