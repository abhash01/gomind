import React, { useState } from "react";
import bgImg from "../../images/bgImg.png";
import bgSlide from "../../images/bgsidedesign.png";

const HeroSection = () => {
  const slides = [
    {
      title: "groMind Academy",
      subtitle: "Bridging skill gap for corporate success",
      image: bgImg,
    },
    {
      title: "Grow with Confidence",
      subtitle: "Empowering your career journey",
      image: bgImg,
    },
    {
      title: "Unlock Your Potential",
      subtitle: "Join the groMind family today!",
      image: bgImg,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        maxHeight: "648px", // Set the max height to 648px
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Slider Container */}
      <div
        style={{
          display: "flex",
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.6s ease-in-out",
          width: `${slides.length * 100}%`,
          height: "100%",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              display: "flex",
              height: "100%",
              backgroundColor: "#632b90", // Background color applied to the whole slide
              backgroundImage: `url(${bgSlide})`,
              backgroundSize: "auto 100%", // Ensures it stretches vertically
              backgroundPosition: "left top",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Text Section */}
            <div
              style={{
                flex: "0 0 60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "20px",
                color: "white",
                position: "relative",
                left: "7%",
              }}
            >
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {slide.title}
              </h1>
              <p style={{ fontSize: "1.5rem" }}>{slide.subtitle}</p>
            </div>

            {/* Image Section */}
            <div
              style={{
                flex: "0 0 40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#632b90",
                position: "relative",
                right: "10%",
                top: "0%",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "auto", // Ensure height adjusts to the container
                  maxWidth: "500px",
                  borderRadius: "15px",
                  objectFit: "cover", // This ensures the image covers the container while maintaining its aspect ratio
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.8)",
          border: "none",
          borderRadius: "50%",
          padding: "10px 15px",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
          zIndex: 1,
        }}
        aria-label="Previous Slide"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.8)",
          border: "none",
          borderRadius: "50%",
          padding: "10px 15px",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
          zIndex: 1,
        }}
        aria-label="Next Slide"
      >
        &#8250;
      </button>

      {/* Navigation Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              margin: "0 5px",
              background: currentSlide === index ? "white" : "gray",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
