import React from "react";
import { Box, Input, Button } from "@chakra-ui/react";

const SignInForm = () => {
  return (
    <Box
      width="400px"
      margin="auto"
      p={4}
      bg="gray.700"
      color="white"
      borderRadius="8px"
      mt={8}
    >
      <h2>Sign In</h2>
      <Input placeholder="Email" mt={4} />
      <Input placeholder="Password" type="password" mt={4} />
      <Button colorScheme="teal" mt={4}>
        Sign In
      </Button>
      <Box mt={4}>
        Don't have an account? <a href="/SignUp">Sign Up</a>
      </Box>
    </Box>
  );
};

export default SignInForm;
