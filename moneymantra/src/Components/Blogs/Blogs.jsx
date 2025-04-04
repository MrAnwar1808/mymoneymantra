import { Box, Typography, Grid, CardMedia, CardContent } from "@mui/material";
import React from "react";

function Blogs() {
    const blogs = [
        {
          id: 1,
          image: "/blogs/blog1.jpg",  // ✅ Ensure this path is correct
          title: "Key Highlights - Union Budget 2025-26",
          description:
            "Union Budget 2025 focuses on gareeb, youth, annadata & naari. No tax on income up to ₹12L, higher TDS limit for seniors & major reforms in credit & FDI. Boost for startups, urea production, and Atmanirbharta in pulses to strengthen the economy.",
        },
        {
          id: 2,
          image: "/blogs/blog2.jpg",  // ✅ Ensure this path is correct
          title: "Axis Bank Credit Card Cash Withdrawal Charges & Limit",
          description:
            "You can use your Axis Bank credit card for cash withdrawals just like a debit card from an ATM kiosk. The cash withdrawal feature of Axis Bank credit cards can be of great benefit, especially during emergencies. However, Axis Bank levies a limit for withdrawing cash with your credit card from an ATM.",
        },
        {
          id: 3,
          image: "/blogs/blog3.jpg",  // ✅ Ensure this path is correct
          title: "How to Choose Personal Loan Tenure Wisely?",
          description:
            "When you choose a personal loan offer, there are many factors you consider, like loan amount, rate of interest, processing fee, etc. However, it is crucial to focus on choosing the right loan tenure so that you do not end up paying much more than you should. The right personal loan tenure should neither be too short nor too long.",
        },
      ];
      
  return (
    <Box sx={{ width: "100%", backgroundColor: "white", paddingBottom: 5, marginTop:"40px" }}>
      {/* Title */}
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
    <Typography
        sx={{
            fontSize: "2.3rem",
            fontWeight: "700",
            color: "black",
            textAlign: "center",
            marginTop: 3,
            position: "relative",
            display: "inline-block", // Ensures width wraps around text
            "&::after": {
                content: '""',
                position: "absolute",
                left: "50%", // Centers it relative to the text
                transform: "translateX(-50%)", // Keeps it properly aligned
                bottom: "-8px",
                width: "70px",
                height: "4px",
                backgroundColor: "#3593b0",
            },
        }}
    >
        Blogs
    </Typography>
</Box>


      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 3 }}>
        {blogs.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={6} md={4}>
            <Box sx={{ maxWidth: 400, height: 400 }}>
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.title}
                sx={{ objectFit: "cover", width: "100%", borderRadius: 2 }}
              />
              <CardContent>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: "600", textAlign: "center" }}>
                  {blog.title}
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", marginTop: 1, color: "gray", textAlign: "center" }}>
                  {blog.description}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography
        sx={{
          fontSize: "1.8rem",
          fontWeight: "550",
          color: "#3593b0",
          textAlign: "center",
          marginTop: 5,
          cursor: "pointer",
        }}
      >
        View More
      </Typography>
    </Box>
  );
}

export default Blogs;
