
import React, { useState } from "react";
import { Box, Button, Input, Text, VStack, SimpleGrid } from "@chakra-ui/react";

const products = [
  { id: 1, name: "Men T-shirt", category: "men" },
  { id: 2, name: "Women Dress", category: "women" },
  { id: 3, name: "Kids Shorts", category: "kids" },
  { id: 4, name: "Men Jeans", category: "men" },
  { id: 5, name: "Women Handbag", category: "women" },
  { id: 6, name: "Kids T-shirt", category: "kids" },
  { id: 7, name: "Men Sneakers", category: "men" },
  { id: 8, name: "Women Sandals", category: "women" },
  { id: 9, name: "Kids Sneakers", category: "kids" },
];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.category.includes(searchTerm)
  );

  return (
    <Box p={5} bg="gray.50" minH="100vh">
      <VStack spacing={5}>
        <Text fontSize="2xl" fontWeight="bold" color="teal.600">
          Shopping Products
        </Text>
        <Input
          placeholder="Search for men, women, or kids"
          onChange={handleInputChange}
          bg="white"
          border="1px solid"
          borderColor="teal.300"
          _hover={{ borderColor: "teal.500" }}
          size="lg"
        />
        <SimpleGrid columns={[1, 2, 3]} spacing={5} w="full">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Box
                key={product.id}
                p={5}
                bg="white"
                shadow="md"
                borderRadius="md"
                borderWidth="1px"
                textAlign="center"
              >
                <Text fontSize="lg" mb={3}>
                  {product.name}
                </Text>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  _hover={{ bg: "teal.600", color: "white" }}
                >
                  View Product
                </Button>
              </Box>
            ))
          ) : (
            <Text>No products found for "{searchTerm}"</Text>
          )}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default ProductsPage;
