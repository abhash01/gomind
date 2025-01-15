import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "../src/components/home/Home";
import Footer from "./components/footer/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import CouresPage from "./pages/CouresPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> {/* Add this line */}
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/courses" element={<CouresPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
