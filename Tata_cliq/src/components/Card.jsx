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
      imgSrc: "src/assets/W.jpg",
      title: "WESTSIDE",
      offer: "30% - 70% OFF",
      link: "https://www.westside.in",
    },

    {
      imgSrc: "src/assets/addidas.jpg",
      title: "ADDIDAS",
      offer: "30% - 50% OFF",
      link: "https://www.addidas.in",
    },

    {
      imgSrc: "src/assets/aldo.jpg",
      title: "ALDO",
      offer: "30% - 50% OFF",
      link: "https://www.aldo.in",
    },

    {
      imgSrc: "src/assets/tommy.jpg",
      title: "TOMMY HILIFER",
      offer: "30% - 60% OFF",
      link: "https://www.tommyhilifer.in",
    },

    {
      imgSrc: "src/assets/uspolo.jpg",
      title: "US POLO",
      offer: "30% - 60% OFF",
      link: "https://www.usp.in",
    },

    {
      imgSrc: "src/assets/forevernew.jpg",
      title: "Forever New",
      offer: "30% - 60% OFF",
      link: "https://www.forevernew.in",
    },

    {
      imgSrc: "src/assets/levis.jpg",
      title: "LEVIS",
      offer: "30% - 60% OFF",
      link: "https://www.levis.in",
    },

    {
      imgSrc: "src/assets/woodland.jpg",
      title: "WOODLAND",
      offer: "30% - 60% OFF",
      link: "https://www.woodland.in",
    },

    {
      imgSrc: "src/assets/j&j.jpg",
      title: "JACK & JONES",
      offer: "30% - 60% OFF",
      link: "https://www.jackjones.in",
    },

    {
      imgSrc: "src/assets/titan.jpg",
      title: "TITAN",
      offer: "30% - 60% OFF",
      link: "https://www.titan.in",
    },
  ];

  return (
    <>
      <h1 className="hero">BLOCKBUSTER DEALS</h1>

      <hr style={{ color: "red" }} />

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
    </>
  );
};

export default Cards;
