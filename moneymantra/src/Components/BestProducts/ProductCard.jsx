
import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const ProductCard = ({ id, href, imageSrc, altText, title }) => {
  return (
    <Box
      component="a"
      id={`our-products-${id}`}
      href={href}
      sx={{
        textDecoration: "none",
        borderRadius: 2,
        // backgroundColor: "#EBF6F9",
        // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 180, // Ensuring uniform width
          height: 200, // Ensuring uniform height
          paddingLeft:"1rem",
          paddingRight:"1rem",
          paddingTop:"0.5rem",
          paddingBottom:"0.5rem",
          borderRadius:"10px",
        }}
      >
        <Box
          component="img"
          src={`${imageSrc}?format=avif&quality=80`}
          alt={altText}
          loading="eager"
          decoding="async"
          sx={{
            maxHeight: "80px",
            maxWidth: "100%",
            objectFit: "contain",
            marginTop:"25px",
            mb: 2,
          }}
        />
        <CardContent sx={{ textAlign: "center", p: 0 }}>
          <Typography variant="h3" sx={{ fontSize: "1.2rem", fontWeight: 550, lineHeight:"1.75rem", fontFamily:"Manrope, sans-serif !important" }}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
