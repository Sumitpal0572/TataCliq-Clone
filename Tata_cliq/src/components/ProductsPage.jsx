import React, { useState } from "react";
import "./ProductsPage.css";

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
    <div className="products-container">
      <h2>Shopping Products</h2>
      <input
        type="text"
        placeholder="Search for men, women, or kids"
        onChange={handleInputChange}
        className="search-input"
      />
      <div className="products-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              {product.name}
            </div>
          ))
        ) : (
          <p>No products found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
