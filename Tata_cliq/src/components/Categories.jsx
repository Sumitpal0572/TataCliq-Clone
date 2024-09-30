import React from "react";
import "./Categories.css"; // Import the CSS file for styling

const categories = [
    { name: "Westside", image: "/assets/assets/westside.jpg" }, // Correct path with extension
    { name: "Womenswear", image: "/assets/assets/womenswear.jpg" }, // Make sure all paths include /assets/assets/
    { name: "Menswear", image: "/assets/assets/menswear.jpg" },
    { name: "Footwear", image: "/assets/assets/footwear.jpg" },
    { name: "Beauty", image: "/assets/assets/beauty.jpg" },
    { name: "Watches", image: "/assets/assets/watches.jpg" },
    { name: "Jewellery", image: "/assets/assets/jewellery.jpg" },
    { name: "Kids", image: "/assets/assets/kids.jpg" },
    { name: "Gadgets", image: "/assets/assets/gadgets.jpg" },
    { name: "Home", image: "/assets/assets/home.jpg" },
    { name: "Bags", image: "/assets/assets/bags.jpg" },
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
