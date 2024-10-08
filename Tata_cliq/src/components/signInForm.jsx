import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Text,
  useToast,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const SignInSignUpForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [alertMessage, setAlertMessage] = useState(null); // For inline alert messages
  const toast = useToast();

  const handleSignIn = () => {
    if (email.trim() && password.trim()) {
      setAlertMessage(`Hello, ${email}`);
      toast({
        title: `Hello, ${email}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      setAlertMessage("Please fill in all fields");
      toast({
        title: "Please fill in all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSignUp = () => {
    if (username.trim() && email.trim() && password.trim()) {
      setAlertMessage(`Welcome, ${username}! Your account has been created.`);
      toast({
        title: `Welcome, ${username}! Your account has been created.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      setAlertMessage("Please fill in all fields");
      toast({
        title: "Please fill in all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      minHeight="100vh"
      bg="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="400px"
        p={6}
        bg="aqua"
        color="white"
        borderRadius="8px"
        boxShadow="lg"
      >
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </Text>

        {alertMessage && (
          <Alert status="success" mb={4} borderRadius="md">
            <AlertIcon />
            {alertMessage}
          </Alert>
        )}

        {!isSignIn && (
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            mt={4}
            bg="gray.600"
          />
        )}

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mt={4}
          bg="gray.600"
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mt={4}
          bg="gray.600"
        />

        <Button
          colorScheme="teal"
          width="full"
          mt={6}
          onClick={isSignIn ? handleSignIn : handleSignUp}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </Button>

        <Box mt={4} textAlign="center">
          {isSignIn ? (
            <Text>
              Don't have an account?{" "}
              <Button
                variant="link"
                color="teal.200"
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </Button>
            </Text>
          ) : (
            <Text>
              Already have an account?{" "}
              <Button
                variant="link"
                color="teal.200"
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </Button>
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SignInSignUpForm;
