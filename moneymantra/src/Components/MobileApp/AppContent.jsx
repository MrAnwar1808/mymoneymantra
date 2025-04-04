import { Box, Typography } from "@mui/material";
import React from "react";
 
function MobileApps() {
  return (
    <Box
      sx={{
        backgroundColor: "#EBF6F9",
        display: "flex",
        marginTop: "50px",
        padding: "40px",
        justifyContent: "space-between",
        paddingBottom: "50px",
        paddingTop: "40px",
        maxWidth: "100%",
      }}
    >
      <Box sx={{ paddingTop: "20px" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "3rem",
            lineHeight: "3.5rem",
            width: "47rem",
            fontWeight: "700",
            textAlign: "left",
            marginBottom: "1rem",
            paddingTop: "20px",
          }}
        >
          Download the
          <span
            style={{
              color: "#3593B0",
              fontWeight: "bolder",
              position: "relative",
              paddingBottom: "9px",
              display: "inline-block",
              left: 10,
            }}
          >
            MyMoneyMantra
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: 45,
                width: "88%",
                height: "3px",
                backgroundColor: "black",
                borderRadius: "5px",
              }}
            ></span>
          </span>
          <br></br>
          Mobile App
        </Typography>
 
        <ul
          style={{
            textDecoration: "none",
            textAlign: "left",
            listStyleType: "none",
            padding: 0,
            margin: 0,
            paddingTop: "70px",
            paddingBottom: "40px",
          }}
        >
          {[
            "Enjoy a seamless experience.",
            "Get exclusive Loans and Credit Card offers.",
            "Track your credit score anytime anywhere.",
          ].map((text, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                fontWeight: "400",
                fontFamily: "Manrope, sans-serif ",
                marginBottom: "2rem",
                gap: "0.75rem",
              }}
            >
              <img
                src="/Images/tick_icon.jpg"
                alt="tick"
                style={{
                  width: "24px",
                  height: "24px",
                  objectFit: "contain",
                }}
              />
              {text}
            </li>
          ))}
        </ul>
 
        <Box sx={{ display: "flex", gap: 10, width: "250px", paddingTop: 2 }}>
          <img src="/Images/appstore.jpg" alt="App store" />
          <img src="/Images/googleplay.jpg" alt="play store" />
        </Box>
      </Box>
 
      <Box sx={{ marginRight: "1px", padding: "5px", marginTop: 2 }}>
        <img src="/Images/Mobile.jpg" alt="Mobile" />
      </Box>
    </Box>
  );
}
 
export default MobileApps;