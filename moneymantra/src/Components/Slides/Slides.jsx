
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const banners = [
  {
    title: "Unlock Your Dreams with ",
    highlight: "Personal Loan",
    description:
      "Flexible terms and competitive rates to help you fund your next big purchase or dream vacation.",
    image: "/images/slider1.jpg",
    link: "/personal-loans",
    buttonText: "Compare & Apply",
  },
  {
    title: "Instant Loan up to ₹5 lakhs in 5 minutes from ",
    highlight: "Poonawalla Fincorp",
    description: "",
    image: "/images/slider2.jpg",
    link: "https://instant-pocket-loan.poonawallafincorp.com",
    buttonText: "Apply Now",
  },
  {
    title: "Your New ",
    highlight: "Home Journey ",
    titlebottom: "Begins Here",
    description:
      "You simply find Dream Home, we will work towards making it reality. Get assistance even after disbursement.",
    image: "/images/slider3.jpg",
    link: "/home-loans",
    buttonText: "Compare & Apply",
  },
  {
    titletop : "Credit Card",
    title: " with Endless Possibilities",
    highlight: "",
    description:
      "Compare the top cards in categories like shopping, travel, luxury and Apply for the best suitable Credit Card.",
    image: "/images/slider4.jpg",
    link: "/credit-cards",
    buttonText: "Explore Cards",
  },
];

const SliderAdvs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ position: "relative", width: "100%", height: 600,  }}>
      {banners.map((banner, index) => (
        <Box
        key={index}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${banner.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "transform 0.8s ease-in-out",
          transform: `translateX(${(index - currentIndex) * 100}%)`, // Slide effect
          display: "flex",
          alignItems: "center",
          fontFamily: "Manrope, sans-serif !important",
          textAlign: "left",
          padding: 3,
        }}
      >
      
          <Box
            sx={{
              //backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: 3,
              borderRadius: 2,
              maxWidth: 550,
              
         
            }}
          >
            <Typography variant="h1" sx={{ fontWeight: "900", fontSize:"3.4rem", lineHeight:"4rem",marginBottom:"0.5rem" }}>
              <span style={{ color: "#4A9B85" }}>{banner.titletop }</span>
              {banner.title}
               <span style={{ color: "#4A9B85" }}>{banner.highlight } </span>
               <span style={{color:"black"}}>{banner.titlebottom}</span>
            </Typography>
             <img src="/images/slideline.jpg" alt="line" style={{width:"70%"}}/>
            {banner.description && (
              <Typography variant="body1" sx={{ mt: 2, color: "black", fontSize:"1.4rem", lineHeight:"2rem", fontWeight:"bolder" }}>
                {banner.description}
              </Typography>
            )}
            <Button
              href={banner.link}
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#4A9B85",
                color: "white",
                width:"230px",
                marginTop:"60px",
                textAlign:"center",
                fontSize:"1.125rem",
                lineHeight:"1.75rem",
                padding:"10px",
                justifyContent:"space-between",
                alignItems:"center",
                fontWeight: "700",
               
              }}
            >
              {banner.buttonText} <ArrowForwardIos />
            </Button>
          </Box>
        </Box>
      ))}

      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.6)",
          ":hover": { backgroundColor: "white" },
        }}
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1))
        }
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.6)",
          ":hover": { backgroundColor: "white" },
        }}
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
        }
      >
        <ArrowForwardIos />
      </IconButton>

      <Box sx={{ position: "absolute", bottom: 10, width: "100%", display: "flex", justifyContent: "center" }}>
        {banners.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#4A9B85" : "#ccc",
              margin: 1,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SliderAdvs;
