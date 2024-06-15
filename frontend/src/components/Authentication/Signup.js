import { useToast,FormControl,Button, FormLabel, VStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import {React, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
 const [name, setName] = useState();
 const [email, setEmail] = useState();
 const [password, setPassword] = useState();
 const [confirmPassword, setConfirmPassword] = useState();
 const [pic, setPic] = useState();
 const [show, setShow] = useState(false);
 const [loading, setLoading] = useState(false)
 const history = useHistory()
 const toast = useToast();
 const handleClick = () => setShow(!show);

 const submitHandler = async() => {
    setLoading(true);
    if(!name || !email || !password || !confirmPassword){
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

    if(password !== confirmPassword){
        toast({
            title: "Passwords do not match",
            status:'warning',
            duration: 2000,
            isClosable:true,
            position: "bottom"
        })
        setLoading(false)
        return;
    }

    try{
        const config = {
            headers: {
                "Content-type" : "application/json",
            }
        }
        const {data} = await axios.post("/api/user", {name, email, password, pic}, config)
        toast({
            title: "Registration successful",
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

 
 const postDetails = (pics) => {
    setLoading(true);
    if(pics === undefined){
        toast({
            title: 'Please select an image',
            status: "warning",
            duration: 2000,
            isClosable: true,
            position: "bottom"
          })
          return;
    }
    if(pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg"){
        const data = new FormData()
        data.append("file", pics)
        data.append("upload_preset", "chatabit")
        data.append("cloud_name", "dvufeofbf")
        fetch("https://api.cloudinary.com/v1_1/dvufeofbf/image/upload", {
            method:'post',
            body: data,
        }).then((res) => res.json()).then( data => {
            setPic(data.url.toString())
            console.log(data.url.toString());
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false)
        })
    }else{
        toast({
            title: 'Please select an correct image type',
            status: "warning",
            duration: 2000,
            isClosable: true,
            position: "bottom"
        })
        setLoading(false)
        return;
    }
 }


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
        onClick={submitHandler}
        isLoading= {loading}>
            Sign Up
        </Button>
    </VStack>
  )
}

export default Signup