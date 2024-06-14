import { FormControl,Button, FormLabel, VStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import {React, useState} from 'react'

const Signup = () => {
 const [name, setName] = useState();
 const [email, setEmail] = useState();
 const [password, setPassword] = useState();
 const [confirmPassword, setConfirmPassword] = useState();
 const [pic, setPic] = useState();
 const [show, setShow] = useState(false);
 const handleClick = () => setShow(!show);
 const postDetails = (pics) => {}
 const submitHandler = () => {}

  return (
    <VStack color="black" spacing='5px'>
        <FormControl id='first-name' isRequired>
            <FormLabel >Name</FormLabel>
                <Input
                // w='80%'
                // m='2'
                placeholder='Enter Your Name'
                onChange={(e) => 
                    setName(e.target.value)
                }
                />
        </FormControl>



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


        <FormControl id='password' isRequired>
            <FormLabel >Confirm Password</FormLabel>
            <InputGroup >
                <Input
                type={show? "text": "password"}
                // w='80%'
                // m='2'
                placeholder='Confirm Password'
                onChange={(e) => 
                    setConfirmPassword(e.target.value)
                }
                />

                <InputRightElement width="4.5rem">
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                </Button>
                
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl>
                <FormLabel>Upload you profile photo</FormLabel>
                <Input type="file" p={1.5} accept='image/*' onChange={(e) => postDetails(e.target.files[0])}/>

        </FormControl>


        <Button 
        colorScheme='blue'
        width="100%"
        marginTop={15}
        onClick={submitHandler}>
            Sign Up
        </Button>
    </VStack>
  )
}

export default Signup