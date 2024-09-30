import React, { useEffect, useState } from "react";
import "./Banner.css"; // Add some basic styling

const banners = [
  "/banner1.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
  "/banner4.jpg",
  "/banner5.jpg",
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 3000); // Change every 0.3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <img
        src={banners[currentBanner]}
        alt={`Banner ${currentBanner + 1}`}
        className="banner-image"
      />
    </div>
  );
};

export default Banner;
