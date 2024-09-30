// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSignUpPage from "./pages/SignInSignUpPages";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/SignIn" element={<SignInSignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
