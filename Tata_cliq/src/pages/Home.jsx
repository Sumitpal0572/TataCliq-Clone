import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Posters from "../components/Posters";
import Cards from "../components/Card";
import Poster from "../components/poster";
import HeroCard from "../components/HerosCard";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <Posters />
      <Cards />
      <Poster />
      <HeroCard />
    </div>
  );
}

export default Home;
