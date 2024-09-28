// src/components/Navbar.jsx
import React from "react";
import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <Box className="navbar" p={4} bg="black" color="black">
      <Flex align="center">
        <Box fontSize="xl" fontWeight="bold" color="white">
          TATA CliQ Luxury
        </Box>
        <Spacer />
        <Link className="nav-link" href="/">
          CLIQ Cash
        </Link>
        <Link className="nav-link" href="/">
          CLiQ Card
        </Link>
        <Link className="nav-link" href="/about">
          CLiQ Care
        </Link>
        <Link className="nav-link" href="/contact">
          Track Orders
        </Link>
        <Button colorScheme="teal" variant="outline" ml={6}>
          SignIn / SignUp
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
