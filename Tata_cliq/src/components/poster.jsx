import React from "react";
import "./poster.css"; // CSS file for styling the poster

const Poster = () => {
  const handleClick = () => {
    alert("Poster Clicked!");
  };

  return (
    <div className="poster-container">
      <img
        src="https://blogs.paidkiya.com/wp-content/uploads/2020/11/HDFC.jpg"
        alt="Clickable Poster"
        className="poster"
        onClick={handleClick}
      />
    </div>
  );
};

export default Poster;
