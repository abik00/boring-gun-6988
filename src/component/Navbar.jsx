import React from "react";
import {
  Select,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Box,
  Container,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import Login from "../Pages/Login";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <div>
      <Flex w="100%" gap="2" boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px' justifyContent="space-between" p={5}>
        <Box>
          <Image
            src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
            ml={12}
          />
        </Box>

        <ButtonGroup>
          <Login />
          <Button
            borderRadius={25}
            p={6}
            bg="orange.500"
            _hover={{ bg: "orange.400" }}
          >
            Register
          </Button>
          <Menu>
            <MenuButton fontSize={20} mr={14}>
              For employer <ChevronDownIcon/>
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
  );
};

export default Navbar;
