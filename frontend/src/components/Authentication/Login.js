import {React, useState} from 'react'
import { FormControl,Button, FormLabel, VStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

const Login = () => {
  const [email, setEmail] = useState();
 const [show, setShow] = useState(false);
 const [password, setPassword] = useState();

 const handleClick = () => setShow(!show);
 const submitHandler = () => {}

  return (
    <VStack color="black" spacing='5px'>
      <FormControl id='email' isRequired>
            <FormLabel >Email</FormLabel>
                <Input
                // w='80%'
                // m='2'
                placeholder='Enter Your Email'
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
        onClick={submitHandler}>
            Login
        </Button>
        <Button 
        colorScheme='red'
        variant='solid'
        width="100%"
        marginTop={15}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("12345")
        }}>
            Get Guest Credentials
        </Button>
    </VStack>
  )
}

export default Login