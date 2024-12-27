import React from "react";
import { Button, Container, Typography } from "@mui/material";
import Header from "../src/components/header/Header";
import HeroSection from "../src/components/heroSection/HeroSection";
import AboutUs from "./components/aboutUs/AboutUs";
import PopularCourses from "./components/popularCourses/PopularCourses";
import RegistrationBanner from "./components/registrationBanner/RegistrationBanner";
import Footer from "./components/footer/Footer";
import Testitmonial from "./components/testimonials/Testitmonial";

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <HeroSection />
      <AboutUs />
      <PopularCourses />
      <RegistrationBanner />
      <Testitmonial />
      <Footer />
    </>
  );
}

export default App;
