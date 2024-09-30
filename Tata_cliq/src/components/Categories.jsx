import React from "react";
import "./Categories.css"; // Import the CSS file for styling

const categories = [
  { name: "Westside", image: "src/assets/assets/westside.jpg" }, // Correct path with extension
  { name: "Womenswear", image: "src/assets/assets/womenswear.jpg" }, // Make sure all paths include /assets/assets/
  { name: "Menswear", image: "src/assets/assets/menswear.jpg" },
  { name: "Footwear", image: "src/assets/assets/footwear.jpg" },
  { name: "Beauty", image: "src/assets/assets/beauty.jpg" },
  { name: "Watches", image: "src/assets/assets/watches.jpg" },
  { name: "Jewellery", image: "src/assets/assets/jewellerys.jpg" },
  { name: "Kids", image: "src/assets/assets/kids.jpg" },
  { name: "Gadgets", image: "src/assets/assets/gadgets.jpg" },
  { name: "Home", image: "src/assets/assets/home.jpg" },
  { name: "Bags", image: "src/assets/assets/bags.jpg" },
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <a
          key={index}
          href={`/${category.name.toLowerCase()}`}
          className="category-block"
        >
          <img
            src={category.image}
            alt={category.name}
            className="category-image"
          />
          <span>{category.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Categories;
