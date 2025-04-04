import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "./ProductCard";


const ProductsSection = () => {
  const products = [
    {
      id: "personal-loans",
      href: "/personal-loans",
      imageSrc: "https://cdn2.mymoneymantra.com/business_loan_99304060b9.svg",
      altText: "Personal Loan",
      title: "Personal Loan",
    },
    {
      id: "credit-cards",
      href: "/credit-cards/journey",
      imageSrc: "https://cdn2.mymoneymantra.com/Credit_Card_c729194945.webp",
      altText: "Credit Card",
      title: "Credit Card",
    },
    {
      id: "loan-against-mutual-fund",
      href: "/loan-against-mutual-fund",
      imageSrc: "https://cdn2.mymoneymantra.com/04_7ea6db151d.png",
      altText: "Loan Against Mutual Fund",
      title: "Loan Against Mutual Fund",
    },
    {
      id: "business-loans",
      href: "/business-loans",
      imageSrc: "https://cdn2.mymoneymantra.com/Business_Loan_cd14cecb36.webp",
      altText: "Business Loan",
      title: "Business Loan",
    },
    {
      id: "home-loans",
      href: "/home-loans",
      imageSrc: "https://cdn2.mymoneymantra.com/Home_Loan_80525c3d86.webp",
      altText: "Home Loan",
      title: "Home Loan",
    },
    {
      id: "short-term-personal-loans",
      href: "/short-term-personal-loans",
      imageSrc: "https://cdn2.mymoneymantra.com/STPL_9cb60080c5.svg",
      altText: "Short Term Personal Loan",
      title: "Short Term Personal Loan",
    },
    {
      id: "gold-loans",
      href: "/gold-loans",
      imageSrc: "https://cdn2.mymoneymantra.com/Gold_Loan_194772f1e8.webp",
      altText: "Gold Loan",
      title: "Gold Loan",
    },
    {
      id: "loan-against-property",
      href: "/loan-against-property",
      imageSrc: "https://cdn2.mymoneymantra.com/Loan_Against_p_007a9d193b.svg",
      altText: "Loan Against Property",
      title: "Loan Against Property",
    },
    {
      id: "home-loan-balance-transfer",
      href: "/home-loan-balance-transfer",
      imageSrc: "https://cdn2.mymoneymantra.com/Home_loan_BL_3149d36906.svg",
      altText: "Home Loan Balance Transfer",
      title: "Home Loan Balance Transfer",
    },
    {
      id: "health-insurance",
      href: "/health-insurance",
      imageSrc: "https://cdn2.mymoneymantra.com/Health_Insurance_22d7a5b405.webp",
      altText: "Health Insurance",
      title: "Health Insurance",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#EBF6F9", width:"100%" }}>
      <Box sx={{  padding:"80px", fontFamily:"Manrope, sans-serif !important", }}>
        {/* Section Heading */}
        <Box sx={{ textAlign: "left",  }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: "#333",
              lineHeight: "50px",
              width:"65%",
              marginBottom:"30px",
              marginTop: "30px",
              fontSize: "2.25rem",
              // margin:"0px 0px 16px"
            }}
          >
            Bringing you the <span style={{ color: "#3593B0" }}>Best Products</span>
            <br />
            from Top Banks &amp; Financial{" "}
            <span style={{ borderBottom: "3px solid #3593B0", paddingBottom: "3px", fontWeight:"bolder"}}>
              Institutions
              </span>
          </Typography>
        </Box>

        {/* Product Grid */}
        <Grid container spacing={3} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={4} md={3} lg={2} key={product.id}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductsSection;
