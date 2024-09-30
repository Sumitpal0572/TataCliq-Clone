import React from "react";
import "./Posters.css"; // Import CSS for styling

const posters = [
  {
    name: "Poster 1",
    image: "src/assets/assets/poster1.jpg",
    link: "/poster1",
  },
  {
    name: "Poster 2",
    image: "src/assets/assets/poster2.jpg",
    link: "/poster2",
  },
  {
    name: "Poster 3",
    image: "src/assets/assets/poster3.jpg",
    link: "/poster3",
  },
];

const Posters = () => {
  return (
    <div className="posters-container">
      {posters.map((poster, index) => (
        <a key={index} href={poster.link} className="poster-block">
          <img src={poster.image} alt={poster.name} className="poster-image" />
        </a>
      ))}
    </div>
  );
};

export default Posters;
