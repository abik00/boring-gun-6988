import { Button, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'


import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
  Heading,
  Input,
 
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  } from '@chakra-ui/react'
  import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

  function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  
    return (
      <>
        <Button ref={btnRef} borderRadius={25} p={6} color="blue" border="1px solid blue" onClick={onOpen}>
          Login
        </Button>
        <Drawer
          isOpen={isOpen}
          size='md'
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            
            <DrawerCloseButton />
            <Flex>
            <DrawerHeader>Login</DrawerHeader>
            <Text ml={200} mt={7} color='blue' fontWeight='bold'>Resiter for Free</Text>
            </Flex>
            <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        
        justifyContent="center"
        alignItems="center"
      >
        
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
            
          </DrawerContent>
        </Drawer>
      </>
    )
  }
export default Login
