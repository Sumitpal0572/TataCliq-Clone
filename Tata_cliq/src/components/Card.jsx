// src/components/Cards.jsx
import React from "react";
import "./Cards.css";

const Cards = () => {
  const cardData = [
    {
      imgSrc: "src/assets/puma.jpg",
      title: "PUMA",
      offer: "MIN. 50% OFF",
      link: "https://www.puma.com",
    },
    {
      imgSrc: "src/assets/biba.jpg",
      title: "BIBA",
      offer: "30% - 60% OFF",
      link: "https://www.biba.in",
    },

    {
      imgSrc: "src/assets/w.jpg",
      title: "BIBA",
      offer: "30% - 60% OFF",
      link: "https://www.biba.in",
    },

    {
      imgSrc: "src/assets/addidas.jpg",
      title: "BIBA",
      offer: "30% - 60% OFF",
      link: "https://www.biba.in",
    },

    {
      imgSrc: "src/assets/aldo.jpg",
      title: "BIBA",
      offer: "30% - 60% OFF",
      link: "https://www.biba.in",
    },

    {
      imgSrc: "src/assets/tommy.jpg",
      title: "BIBA",
      offer: "30% - 60% OFF",
      link: "https://www.biba.in",
    },

    {
      imgSrc: "src/assets/uspolo.jpg",
      title: "BIBA",
      offer: "30% - 60% OFF",
      link: "https://www.biba.in",
    },

    {
      imgSrc: "src/assets/titan.jpg",
      title: "BIBA",
      offer: "30% - 60% OFF",
      link: "https://www.biba.in",
    },
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div
          className="card"
          key={index}
          onClick={() => window.open(card.link, "_blank")}
        >
          <img src={card.imgSrc} alt={card.title} className="card-image" />
          <div className="card-details">
            <h3>{card.title}</h3>
            <p>{card.offer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
