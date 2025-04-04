import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const banks = [
  { id: 1, image: "/Banks/american_express.jpg" },
  { id: 2, image: "/Banks/AU.jpg" },
  { id: 3, image: "/Banks/axis_bank.jpg" },
  { id: 4, image: "/Banks/HDFC_Bank.jpg" },
  { id: 5, image: "/Banks/HSBC.jpg" },
  { id: 6, image: "/Banks/IDFC.jpg" },
  { id: 7, image: "/Banks/Kotak.jpg" },
  { id: 8, image: "/Banks/SB_Icard.jpg" },
  { id: 9, image: "/Banks/yes.jpg" },
];

function BankPartner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banks.length - 4 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <Box sx={{ position: "relative", display: "flex", justifyContent: "center", marginTop:"60px" }}>
      {/* Top Typography (Left-Top Corner) - Increased Font Size */}
      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
        //   padding: "10px",
          whiteSpace: "pre-line",
          textAlign: "left",
          fontSize: "1.6rem", // Increased font size
          color:"#e5e7eb",
        //   zIndex:"-1",
          width:"126px",
          height:"137px",
          wordSpacing:"6px",
        }}
      >
        +  +  + <span style={{ color: "#4A9B85" }}> + </span>  + {"\n"}
        + + + + {"\n"}
        + + <span style={{ color: "#4A9B85" }}>+</span> {"\n"}
        + + + {"\n"}
        <span style={{ color: "#4A9B85" }}>+</span> + + {"\n"}
      </Typography>

      {/* Main Box */}
      <Box
        sx={{
          backgroundColor: "#ebf8f8",
          padding: "20px",
          borderRadius: "50px",
          width: "85%",
          margin: "50px",
          paddingBottom: "2.5rem",
          paddingTop: "2.5rem",
          boxShadow: "0px 0px 6px 2px rgb(0 0 0 / 12%)",
          boxSizing: "border-box",
          position: "relative",
          height:"40%"
        }}
      >
        <Typography
          variant="h2"
          sx={{
            position: "relative",
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
            fontWeight: "900",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}
        >
          Our
          <span
            style={{
              borderBottom: "3px solid #3593B0",
              paddingBottom: "3px",
              fontWeight: "bolder",
              paddingLeft: "10px",
            }}
          >
            Partners
          </span>
        </Typography>

        {/* Image Box */}
        <Box sx={{ display: "flex", overflow: "hidden", marginTop: "20px", justifyContent: "center" }}>
          {banks.slice(currentIndex, currentIndex + 4).map((bank) => (
            <Box
              key={bank.id}
              sx={{
                marginRight: "16px",
                backgroundColor: "white",
                padding: "15px",
                margin: "10px",
                borderRadius: "10px",
                width: "20%",
                height:"100px",
                color:"#ffffff"
              }}
            >
              <img
                src={bank.image}
                alt={`bank-${bank.id}`}
                style={{ width: "150px", height: "auto", borderRadius: "8px" }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Bottom Typography (Right-Bottom Corner) - Increased Font Size */}
      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          padding: "10px",
          whiteSpace: "pre-line",
          textAlign: "right",
          fontSize: "1.6rem", // Increased font size
          color:"#e5e7eb",
        //   zIndex:"-1",
          width:"126px",
          height:"137px",
          wordSpacing:"6px",
        }}
      >
        + + <span style={{ color: "#4A9B85" }}>+</span> {"\n"}
        + + + {"\n"}
        <span style={{ color: "#4A9B85" }}>+</span> + + {"\n"}
        + + + + {"\n"}
        + <span style={{ color: "#4A9B85" }}>+ </span> + + + {"\n"}
      </Typography>
    </Box>
  );
}

export default BankPartner;
