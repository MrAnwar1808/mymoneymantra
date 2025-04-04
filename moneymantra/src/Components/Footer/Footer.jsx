import {
    Facebook,
    KeyboardDoubleArrowDown,
    KeyboardDoubleArrowUp,
    LinkedIn,
    YouTube,
  } from "@mui/icons-material";
  import XIcon from "@mui/icons-material/X";
  import { Box, Button, Divider, Typography } from "@mui/material";
  import React, { useState } from "react";
  
  function Footer() {
    const [showData, setShowData] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
  
    const mmmData = [
      "HDFC Freedom Credit Card",
      "HDFC Indian Oil Credit Card",
      "SBI Prime Credit Card",
      "SBI Elite Credit Card",
      "Axis Bank Neo Credit Card",
      "Axis Bank My Zone Credit Card",
      "HSBC Visa Platinum Credit Card",
      "HSBC Cashback Credit Card",
      "IDFC Millennia Credit Card",
      "AU Zenith Credit Card",
    ];
  
    const categories = [
      {
        name: "Credit Card",
        data: [
          "IndusInd Bank Credit Card",
          "Saraswat Bank Credit Card",
          "Best RuPay Credit Cards",
          "Best Airport Lounge Access Credit Cards",
          "Best International Travel Credit Cards",
          "Best Hotel Booking Credit Cards",
          "Best Movie Ticket Booking Credit Cards",
          "Lifetime Free Credit Cards",
          "Best Cashback Credit Cards",
          "Best Credit Cards in India",
          "Best Fuel Credit Cards",
          "Best Reward Credit Cards",
          "Best Shopping Credit Cards",
          "Best Student Credit Cards",
          "Best Travel Credit Cards",
          "Balance Transfer Credit Card",
        ],
      },
      {
        name: "Personal Loan",
        data: [
          "CashBean Personal Loan",
          "Best Loan Apps",
          "Best Student Loan Apps",
          "Loan Without CIBIL Score",
          "Loan Apps Without Salary Slip",
          "PAN Card Personal Loan",
          "Aadhaar Card Personal Loan",
          "10,000 Personal Loan",
          "15,000 Personal Loan",
          "20,000 Personal Loan",
          "30,000 Personal Loan",
          "50,000 Personal Loan",
          "SBI Personal Loan EMI Calculator",
          "Loan Prepayment Calculator",
          "Personal Loan Interest Rates",
          "Paytm Personal Loan Interest Rates",
          "SBI Personal Loan Statement",
          "L&T Finance Personal Loan Statement",
        ],
      },
      {
        name: "Home Loan",
        data: [
          "Yes Bank Home Loan",
          "UCO Bank Home Loan",
          "Shriram Housing Finance Home Loan",
          "SBI Home Loan",
          "Repco Home Finance Home Loan",
          "Reliance Home Finance Home Loan",
          "RBL Home Loan",
          "PNB Home Loan",
          "Manappuram Home Finance",
          "LIC Housing Finance",
          "ICICI Bank Home Loan",
        ],
      },
      {
        name: "Business Loan",
        data: [
          "Aditya Birla Business Loan",
          "Axis Bank Business Loan",
          "Bajaj Finserv Business Loan",
          "BOB Business Loan",
          "Bank of India Business Loan",
          "Deutsche Bank Business Loan",
          "Federal Bank Business Loan",
          "HDFC Bank Business Loan",
          "ICICI Bank Business Loan",
          "IDFC Bank Business Loan",
          "Indian Bank Business Loan",
          "Kotak Bank Business Loan",
          "RBL Bank Business Loan",
          "Tata Capital Business Loan",
          "Yes Bank Business Loan",
          "Ziploan Business Loan",
        ],
      },
      {
        name: "Credit Score",
        data: [
          "Check Free Credit Score",
          "Free CIBIL Score Check",
          "CIBIL Score Calculator",
          "Pan Card CIBIL Score",
          "SBI CIBIL Score",
          "CIBIL Score for Personal Loan",
          "CIBIL Score for Home Loan",
          "CIBIL Score for Credit Card",
          "TransUnion CIBIL Score",
          "Experian Credit Score",
          "Equifax Credit Score",
          "CIBIL Dispute",
          "CIBIL Score Range",
          "How To Improve CIBIL Score",
          "CIBIL Full Form",
        ],
      },
      {
        name: "Gold Loan",
        data: [
          "Axis Bank Gold Loan",
          "Bajaj Gold Loan",
          "Bank of Baroda Gold Loan",
          "Bank of India Gold Loan",
          "Canara Bank Gold Loan",
          "Federal Bank Gold Loan",
          "ICICI Bank Gold Loan",
          "IDBI Gold Loan",
          "IIFL Gold Loan",
          "Indian Bank Gold Loan",
          "Kotak Bank Gold Loan",
          "Manappuram Gold Loan",
          "PNB Bank Gold Loan",
          "SBI Gold Loan",
          "UCO Bank Gold Loan",
          "Union Bank of India Gold Loan",
        ],
      },
    ];
  
    return (
      <Box
        sx={{ backgroundImage: "linear-gradient(to right, #3593B0, #4A9B85)" }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginTop: 2,
            backgroundImage: "linear-gradient(to right, #3593B0, #4A9B85)",
            padding: "20px",
            color: "white",
          }}
        >
          {/* Toggle Button */}
          <Button
            variant="text"
            onClick={() => setShowData(!showData)}
            sx={{ marginBottom: -1, color: "white", textTransform: "none" }}
            disableRipple
          >
            <Typography
              component="h3"
              variant="h3"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.6rem",
                lineHeight: "4rem",
                fontWeight: "700",
                fontFamily: "Manrope, sans-serif !important",
                textTransform: "none",
              }}
            >
              Trending on MMM
              <Box component="span" sx={{ ml: 1 }}>
                {showData ? (
                  <KeyboardDoubleArrowDown fontWeight="bold" />
                ) : (
                  <KeyboardDoubleArrowUp fontWeight="bold" />
                )}
              </Box>
            </Typography>
          </Button>
  
          {/* Card Titles - Show Only When Data is Visible */}
          {showData && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)", // Ensures exactly 5 per row
                gap: 2,
                rowGap: "0.25rem",
                textAlign: "center",
                marginBottom: "1rem",
                fontFamily: "Manrope, sans-serif !important",
                fontSize: "16px",
                // maxWidth: "900px",
                width: "100%",
                margin: "auto",
              }}
            >
              {mmmData.map((title, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: "center",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                >
                  <Typography sx={{ fontSize: "1rem", fontWeight: "500" }}>
                    {title}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
  
        <Divider
          sx={{
            width: "90%",
            marginLeft: "65px",
            borderBottomWidth: "1px",
            borderColor: "white",
          }}
        />
  
        <Box sx={{ textAlign: "center", marginTop: 0 }}>
          {/* Buttons and Data Rendering */}
          <Box sx={{ maxWidth: "90%", margin: "auto", padding: "20px" }}>
            {Array.from(
              { length: Math.ceil(categories.length / 4) },
              (_, rowIndex) => (
                <Box key={rowIndex}>
                  {/* Row of 4 Buttons */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gap: "10px",
                      justifyContent: "center",
                    }}
                  >
                    {categories
                      .slice(rowIndex * 4, rowIndex * 4 + 4)
                      .map((category) => (
                        <Button
                          key={category.name}
                          variant="outlined"
                          onClick={() =>
                            setActiveCategory(
                              activeCategory === category.name
                                ? null
                                : category.name
                            )
                          }
                          sx={{
                            color: "white",
                            fontFamily: "Manrope, sans-serif !important",
                            border: "1.1px solid white",
                            paddingLeft: "0.75rem",
                            paddingRight: "0.75rem",
                            textTransform: "none",
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontSize: "16px",
                            fontWeight: "bold",
                            padding: "6px",
                            marginBottom: "15px",
                            transition: "background-color 0s, color 0s",
                            backgroundColor:
                              activeCategory === category.name
                                ? "rgba(255, 255, 255, 0.3)"
                                : "transparent",
                          }}
                          disableRipple
                        >
                          {category.name}
                          <Box
                            component="span"
                            sx={{
                              ml: 1,
                              fontSize: "25px",
                              color:
                                activeCategory === category.name
                                  ? "white"
                                  : "#cfd8dc",
                              marginRight: 1,
                            }}
                          >
                            {activeCategory === category.name ? "-" : "+"}
                          </Box>
                        </Button>
                      ))}
                  </Box>
  
                  {/* Show Data Below the Current Row */}
                  {categories
                    .slice(rowIndex * 4, rowIndex * 4 + 4)
                    .some((category) => activeCategory === category.name) && (
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "530",
                        color: "white",
                        background: "rgba(255, 255, 255, 0.1)",
                        textAlign: "center",
                        padding: "10px",
                        fontFamily: "Manrope, sans-serif !important",
                        borderRadius: "8px",
                        marginTop: 1,
                        Width: "80%",
                        margin: "auto",
                      }}
                    >
                      {categories
                        .find((category) => category.name === activeCategory)
                        ?.data.join(" | ")}
                    </Typography>
                  )}
                </Box>
              )
            )}
          </Box>
        </Box>
  
        <Box
          sx={{
            padding: "10px",
            marginTop: "0.5rem",
            background: "rgba(255, 255, 255, 0.2)",
            color: "white",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
              color: "white",
              padding: "0.25rem",
              margin: 0,
              fontWeight: "700",
              fontSize: "1rem",
              lineHeight: "1.5rem",
              fontFamily: "Manrope, sans-serif",
              cursor: "pointer",
            }}
          >
            <li>About us</li>
            <li>Meet the team</li>
            <li>Careers</li>
            <li>Our Partners</li>
            <li>Press</li>
            <li>Privacy Policy</li>
            <li>Fraud Detection</li>
            <li>Contact Us</li>
            <li>Experian T & C</li>
          </ul>
        </Box>
  
        <Box
          sx={{
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "1.5rem",
            width: "90%",
            marginLeft: "70px",
            alignItems: "center",
          }}
        >
          {/* App Store & Play Store Images */}
          <Box>
            <img
              src="/Images/appstore.jpg"
              alt="playstore"
              style={{
                height: "57px",
                width: "190px",
                paddingRight: "20px",
                borderRadius: "5px",
              }}
            />
            <img
              src="/Images/googleplay.jpg"
              alt="appstore"
              style={{ height: "57px", width: "190px" }}
            />
          </Box>
  
          {/* Social Media Icons */}
          <Box sx={{ display: "flex", gap: "18px", cursor: "pointer" }}>
            {" "}
            {/* Added gap for spacing */}
            <Facebook sx={{ color: "#cfd8dc", fontSize: "25px" }} />
            <LinkedIn sx={{ color: "#cfd8dc", fontSize: "25px" }} />
            <XIcon sx={{ color: "#cfd8dc", fontSize: "25px" }} />
            <YouTube sx={{ color: "#cfd8dc", fontSize: "25px" }} />
          </Box>
        </Box>
  
        <Divider
          sx={{
            width: "90%",
            marginLeft: "65px",
            borderBottomWidth: "1px",
            borderColor: "white",
          }}
        />
  
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "550",
              fontSize: "16px",
              lineHeight: "1.5rem",
              color: "#cfd8dc",
              fontFamily: "Manrope, sans-serif !important",
            }}
          >
            © 2025 MyMoneyMantra. All rights reserved
          </Typography>
        </Box>
      </Box>
    );
  }
  
  export default Footer;
  