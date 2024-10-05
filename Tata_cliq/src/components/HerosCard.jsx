// src/components/Cards.jsx
import React from "react";
import "./HerosCards.css";

const HeroCard = () => {
  const cardData = [
    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/51889190633502.jpg",
    },
    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/62351067381790.png",
    },

    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/62351067643934.png",
    },

    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/62351069872158.png",
    },

    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/62351068168222.png",
    },

    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/62351068463134.png",
    },

    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/62351070560286.png",
    },

    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/62351070494750.png",
    },

    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/62351068233758.png",
    },

    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/62356603207710.png",
    },

    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/62356603338782.png",
    },

    {
      imgSrc:
        "https://assets.tatacliq.com/medias/sys_master/images/62356603142174.png",
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
