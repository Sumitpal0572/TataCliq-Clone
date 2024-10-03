// src/components/Cards.jsx
import React from "react";
import "./HerosCards.css";

const HeroCard = () => {
  const cardData = [
    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/51889190633502.jpg",
      offer: "30% - 60% OFF",
    },
    {
      imgSrc: "src/assets/biba.jpg",
      offer: "30% - 60% OFF",
    },

    {
      imgSrc: "src/assets/W.jpg",
      offer: "30% - 70% OFF",
    },

    {
      imgSrc: "src/assets/addidas.jpg",
      offer: "30% - 50% OFF",
    },

    {
      imgSrc: "src/assets/aldo.jpg",
      offer: "30% - 50% OFF",
    },

    {
      imgSrc: "src/assets/tommy.jpg",
      offer: "30% - 60% OFF",
    },

    {
      imgSrc: "src/assets/uspolo.jpg",
      offer: "30% - 60% OFF",
    },

    {
      imgSrc: "src/assets/forevernew.jpg",
      offer: "30% - 60% OFF",
    },

    {
      imgSrc: "src/assets/levis.jpg",
      offer: "30% - 60% OFF",
    },

    {
      imgSrc: "src/assets/woodland.jpg",
      offer: "30% - 60% OFF",
    },

    {
      imgSrc: "src/assets/j&j.jpg",
      offer: "30% - 60% OFF",
    },

    {
      imgSrc: "src/assets/titan.jpg",
      offer: "30% - 60% OFF",
    },
  ];

  return (
    <>
      <h1 className="hero">SEAL THE DEALS</h1>

      <hr style={{ color: "red" }} />

      <div className="Herocards-container">
        {cardData.map((card, index) => (
          <div
            className="hero-card"
            key={index}
            onClick={() => window.open(card.link, "_blank")}
          >
            <img
              src={card.imgSrc}
              alt={card.title}
              className="herocard-image"
            />
            <div className="herocard-details">
              <h3>{card.title}</h3>
              <p>{card.offer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroCard;
