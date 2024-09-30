// src/components/AuthForm.jsx
import React, { useState } from "react";
import { Box, Input, Button, FormLabel } from "@chakra-ui/react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Box
      p={6}
      bg="gray.700"
      color="white"
      maxWidth="400px"
      mx="auto"
      mt="50px"
      borderRadius="8px"
    >
      <FormLabel>{isLogin ? "Login" : "Sign Up"}</FormLabel>
      <Input placeholder="Email" type="email" mb={4} />
      <Input placeholder="Password" type="password" mb={4} />
      {!isLogin && (
        <Input placeholder="Confirm Password" type="password" mb={4} />
      )}
      <Button colorScheme="teal" width="100%" mb={4}>
        {isLogin ? "Login" : "Sign Up"}
      </Button>
      <Button colorScheme="gray" width="100%" onClick={toggleForm}>
        {isLogin ? "Create an account" : "Already have an account?"}
      </Button>
    </Box>
  );
};

export default AuthForm;
