import React from 'react'
import {Select, Button, ButtonGroup, Flex, Heading, Spacer,Box, Container,Image,Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    
} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div >
   <Flex w='100%' gap='2' bg='blue.500' justifyContent='space-between' p={5}>
        <Box>
            <Image src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' ml={12}/>
        </Box>

        <ButtonGroup>
            <Button borderRadius={25} p={6} color='blue' border='1px solid blue'>Login</Button>
            <Button borderRadius={25} p={6}
             bg='orange.500'
             _hover={{ bg: "orange.400" }}
        
             >Register</Button>
            <Menu>
                <MenuButton fontSize={20} mr={14} >
                    For employer
                </MenuButton>
                <MenuList>
                    <MenuItem>Buy Online</MenuItem>
                    <MenuItem>Hiring Solutions</MenuItem>
                    <MenuItem>Employer Login</MenuItem>
                    
                </MenuList>
            </Menu>
        </ButtonGroup>
        
        
  
    </Flex>
</div>
  )
}

export default Navbar
