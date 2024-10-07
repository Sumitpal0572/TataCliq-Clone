import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInForm from "./components/SignInForm";
import Shopping from "./pages/Shopping";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignInForm />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </Router>
  );
};

export default App;
