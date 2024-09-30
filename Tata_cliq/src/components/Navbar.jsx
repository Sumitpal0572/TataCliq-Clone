// // src/components/Navbar.jsx

import React from "react";
import {
  Box,
  Flex,
  Link,
  Spacer,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <Box className="navbar-base" bg="gray.700" color="white" width="100%">
      {/* Top Section */}
      <Box className="navbar" p={4} bg="black" color="white">
        <Flex align="center" justify="space-between">
          <Box
            fontSize="xl"
            fontWeight="bold"
            color="white"
            marginLeft="10px"
            textAlign="center"
          >
            TATA CliQ Luxury
          </Box>
          <Box className="links">
            <Link className="nav-link" href="/CLIQ Cash">
              CLIQ Cash
            </Link>
            <Link className="nav-link" href="/CLiQ Card">
              CLiQ Card
            </Link>
            <Link className="nav-link" href="/CLiq Care">
              CLiQ Care
            </Link>
            <Link className="nav-link" href="/Track Order">
              Track Orders
            </Link>
            <RouterLink className="nav-link" to="/SignIn">
              SignIn / SignUp
            </RouterLink>
          </Box>
        </Flex>
      </Box>

      {/* Bottom Section with Search */}
      <Flex align="center" maxW="1200px" mx="auto">
        {/* Company Logo */}
        <Box className="logo">
          <h1>
            TATA <br /> CLiQ
          </h1>
        </Box>

        <Spacer />

        {/* Dropdown 1 */}
        <Select
          placeholder="Category"
          _placeholder={{ color: "white" }}
          width="150px"
          marginRight="20px"
          bg="gray.600"
          color="white"
          border="none"
          _hover={{ bg: "gray.500" }}
          className="dropdown"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        {/* Dropdown 2 */}
        <Select
          placeholder="Brands"
          _placeholder={{ color: "white" }}
          width="150px"
          marginRight="20px"
          bg="gray.600"
          color="white"
          border="none"
          _hover={{ bg: "gray.500" }}
          className="dropdown"
        >
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
        </Select>

        {/* Input Field */}
        <Input
          placeholder="Search for Products"
          width="500px"
          bg="grey"
          color="white"
          border="none"
          _placeholder={{ color: "white" }}
          className="search-input"
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
