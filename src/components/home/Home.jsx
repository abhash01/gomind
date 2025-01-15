import React from "react";
import HeroSection from "../heroSection/HeroSection";
import AboutUs from "../aboutUs/AboutUs";
import PopularCourses from "../popularCourses/PopularCourses";
import RegistrationBanner from "../registrationBanner/RegistrationBanner";
import Testitmonial from "../testimonials/Testitmonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <PopularCourses />
      <RegistrationBanner />
      <Testitmonial />
    </>
  );
};

export default Home;
