// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSignUpPage from "./pages/SignInSignUpPages";
import Categories from "./components/Categories";
import Posters from "./components/Posters";
import Cards from "./components/Card";
import Poster from "./components/poster";
import HeroCard from "./components/HerosCard";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/SignIn" element={<SignInSignUpPage />} />
        </Routes>
        <Categories />
        <Posters />
        <Cards />
        <Poster />
        <HeroCard />
      </div>
    </Router>
  );
}

export default App;
