import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Button,
  Box,
  MenuItem,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const creditCardsData = {
  "HDFC Bank Credit Card": [
    "Swiggy Credit Card",
    "Tata Neu Credit Card",
    "HDFC Millennia Credit Card",
    "HDFC Freedom Credit Card",
    "HDFC IndianOil Credit Card",
    "HDFC MoneyBack Credit Card",
    "HDFC UPI RuPay Credit Card",
    "HDFC MoneyBack+ Credit Card",
  ],

  "SBI Credit Card": [
    "SBI Prime Credit Card",
    "SimplyCLICK SBI Card",
    "SBI Elite Credit Card",
    "SimplySave SBI Card",
    "SBI PULSE Credit Card",
    "BPCL SBI Credit Card",
    "IRCTC RuPay Credit Card",
  ],

  "Popular Credit Card": [
    "Pop Club Credit Card",
    "Anq Phi Credit Card",
    "Jupiter Credit Card",
    "OneCard Credit Card",
    "ZET Magnet FD Credit Card",
    "Rupicard Credit Card",
    "Kiwi Credit Card",
  ],

  "IDFC Bank Credit Card": [
    "IDFC Wealth Credit Card",
    "IDFC Millennia Credit Card",
    "IDFC Classic Credit Card",
    "IDFC WOW Credit Card",
    "IDFC Select Credit Card",
  ],

  "Axis Bank Credit Card": [
    "Airtel Axis Bank Credit Card",
    "Axis Bank LIC Signature Credit Card",
    "Axis Bank SELECT Credit Card",
    "Axis Bank Rewards Credit Card",
    "Axis Bank Neo Credit Card",
    "Axis Bank MY ZONE Credit Card",
    "Axis Bank Magnus Credit Card",
    "LIC Axis Platinum Credit Card",
    "Axis Bank ACE Credit Card",
    "IndianOil Axis Bank Credit Card",
  ],

  "HSBC Bank Credit card": [
    "HSBC Visa Platinum Credit Card",
    "HSBC Live+ Credit Card",
    "HSBC Premier Credit Card",
    "HSBC Bank Smart Value Credit Card",
  ],

  "AU Bank Credit Card": [
    "AU Bank LIT Credit Card",
    "AU Bank Zenith Credit Card",
    "AU Bank Vetta Credit Card",
    "AU Bank Altura Credit Cards",
    "AU Bank Altura Plus Credit Card",
  ],

  "American Express Credit Card": [
    "American Express Gold Credit Card",
    "American Express SmartEarn Credit Card",
    "American Express Payback Credit Card",
  ],

  "ICICI Bank Credit Card": [
    "ICICI Bank Rubyx Credit Card",
    "ICICI Bank Coral Credit Card",
    "ICICI Bank Platinum Chip Credit Card",
    "ICICI Bank Expressions Credit Card",
    "ICICI Bank Coral Rupay Credit Card",
    "Amazon Pay ICICI Credit Card",
    "ICICI Bank HPCL Super Saver Credit Card",
    "ICICI Bank Sapphiro Credit Card",
    "ICICI Bank Emeralde Credit Card",
    "ICICI Bank Emeralde Private Metal Credit Card",
  ],

  "IndusInd Bank Credit Cards": [
    "EazyDiner IndusInd Bank Platinum Credit Card",
    "IndusInd Bank Samman RuPay Credit Card",
    "IndusInd Bank Platinum RuPay Credit Card",
    "IndusInd Bank Nexxt Credit Card",
    "IndusInd Bank Platinum Visa Credit Card",
    "IndusInd Bank Aura Edge Credit Card",
    "IndusInd Bank Legend Credit Card",
  ],
};

const loanData = {
  "Personal Loan": [
    "KreditBee Personal Loan",
    "Fibe Personal Loan",
    "HDFC Jumbo Loan",
    "Prefr Personal Loan",
    "Poonawalla Personal Loan",
    "Incred Personal Loan",
    "L&T Finance Personal Loan",
    "HSBC Personal Loan",
    "Freo loan",
  ],

  "Business Loan": [
    "KreditBee Business Loan",
    "Moneyview Business Loan",
    "Prefr Business Loan",
    "LendingKart Business Loan",
    "IIFL Business Loan",
    "Protium Business Loan",
    "NeoGrowth Business Loan",
    "Faircent Business Loan",
    "SMFG India Business Loan",
    "SBI Business Loan",
  ],

  "Home Loan": [
    "PNB Home Loan",
    "Kotak Bank Home Loan",
    "IDFC First Home Loan",
    "Home First Home Loan",
    "HDFC Bank Home Loan",
    "Federal Bank Home Loan",
    "Bajaj Finserv Home Loan",
    "L&T Home Loan",
  ],

  "Gold Loan": [
    "SahiBandhu Gold Loan",
    "InidaGold Loan",
    "Muthoot Fincorp Gold Loan",
    "Oro Gold Loan",
    "Rupeek Gold Loan",
    "DBS Bank Gold Loan",
  ],

  "Home Loan Balance Transfer": [
    "HDFC Bank Home Loan Balance Transfer",
    "Kotak Home Loan Balance Transfer",
    "Bajaj Finserv Home Loan Balance Transfer",
    "IDFC First Home Loan Balance Transfer",
    "Home First Home Loan Balance Transfer",
    "Aditya Birla Home Loan Balance Transfer",
    "PNB Housing Home Loan Balance Transfer",
  ],

  "Loan Against Property": [
    "HDFC Bank Loan Against Property",
    "Federal Bank Loan Against Property",
    "Kotak Mahindra Loan Against Property",
    "IDFC First Loan Against Property",
    "Home First Loan Against Property",
    "Aditya Birla Housing Loan Against Property",
    "Muthoot Fincorp Loan Against Property",
    "Tata Capital Housing Loan Against Property",
  ],

  "Overdraft Facility": [
    "ICICI Bank Insta OD",
    "Bajaj Overdraft Loan",
    "SBI Overdraft Facility",
    "HDFC Overdraft Facility",
    "Kotak Overdraft Loan",
  ],

  "Loan On Credit Card": [
    "HDFC Bank Credit Card Loan",
    "ICICI Bank Credit Card Loan",
    "Axis Bank Credit Card Loan",
    "SBI Credit Card Loan",
    "Bajaj Insta EMI Card",
  ],

  "Personal Loan By Amount": [
    "1 Lakh Personal Loan",
    "2 Lakh Personal Loan",
    "3 Lakh Personal Loan",
    "4 Lakh Personal Loan",
    "5 Lakh Personal Loan",
    "10 Lakh Personal Loan",
    "15 Lakh Personal Loan",
    "20 Lakh Personal Loan",
    "25 Lakh Personal Loan",
    "30 Lakh Personal Loan",
  ],

  "Personal Loan Interest Rates": [
    "Axis Bank Personal Loan Interest Rates",
    "Bajaj Finance Personal Loan Interest Rates",
    "HDFC Personal Loan Interest Rates",
    "ICICI Personal Loan Interest Rates",
    "IDFC FIRST Bank Personal Loan Interest Rates",
    "Kotak Bank Personal Loan Interest Rates",
    "Paytm Personal Loan Interest Rates",
  ],
};

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [appStoreOpen, setAppStoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const [submenu, setSubmenu] = useState(null);
  const [submenuPosition, setSubmenuPosition] = useState(0);
  const [signInOpen, setSignInOpen] = useState();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    consent: false,
  });

  const validateForm = () => {
    return (
      formData.fullName &&
      /^[a-zA-Z ]+$/.test(formData.fullName) &&
      formData.mobile &&
      /^[0-9]{10}$/.test(formData.mobile) &&
      formData.email &&
      /^\S+@\S+\.\S+$/.test(formData.email) &&
      formData.consent
    );
  };

  const handleMenuOpen = (event, menu) => {
    setMenuOpen(menu);
    setSubmenu(null);
  };

  const handleMenuClose = () => {
    setMenuOpen(null);
    setSubmenu(null);
  };

  const handleSubmenuOpen = (event, item) => {
    setSubmenu(item);
    setSubmenuPosition(event.target.offsetTop);
  };

  const handleSubmenuClose = () => {
    setSubmenu(null);
  };

  return (
    <AppBar sx={{ width: "100%", height: "85px", backgroundColor: "#fff" }}>
      <Toolbar sx={{ justifyContent: "space-between", alignContent: "center" }}>
        <Box sx={{ display: "flex", marginTop: "22px" }}>
          {/* Logo */}
          <img
            src="https://cdn2.mymoneymantra.com/dark_logo_028c7b2cf6.webp?format=avif&quality=80&width=196&height=40"
            alt="Logo"
            style={{ height: 40, marginRight: 20 }}
          />

          {/* Credit Cards Dropdown */}

          <Box
            onMouseEnter={(e) => handleMenuOpen(e, "creditCards")}
            onMouseLeave={handleMenuClose}
            position="relative"
          >
            <Button
              endIcon={<KeyboardArrowDownSharpIcon />}
              sx={{
                fontWeight: "700",
                fontFamily: "Manrope, sans-serif !important",
                color: "#3593B0",
                textTransform: "none",
                marginLeft: 0.5,
                fontSize: "15px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:focus": {
                  backgroundColor: "transparent",
                },
                "&:active": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Credit Cards
            </Button>

            {menuOpen === "creditCards" && (
              <Box
                position="absolute"
                bgcolor="white"
                boxShadow={3}
                p={2}
                onMouseEnter={() => setMenuOpen("creditCards")}
                onMouseLeave={handleMenuClose}
                sx={{ borderRadius: "8px" }}
              >
                {Object.keys(creditCardsData).map((item, index) => (
                  <MenuItem
                    key={item}
                    onMouseEnter={(e) => handleSubmenuOpen(e, item)}
                    onMouseLeave={handleSubmenuClose}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "300px",
                      fontWeight: "700",
                      fontFamily: "Manrope, sans-serif !important",
                      color: "#3593B0",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#3593B0",
                        color: "white",
                      },
                    }}
                    data-index={index} // Store the index to position the submenu
                  >
                    {item} <ArrowForwardIosIcon fontSize="inherit" />
                  </MenuItem>
                ))}

                {/* Submenu (Properly Positioned) */}
                {submenu && (
                  <Box
                    position="absolute"
                    left="100%"
                    top={submenuPosition} // Dynamic positioning
                    bgcolor="white"
                    boxShadow={3}
                    p={2}
                    onMouseEnter={() => setSubmenu(submenu)}
                    onMouseLeave={handleSubmenuClose}
                    sx={{ borderRadius: "8px", marginRight: "100px" }}
                  >
                    {creditCardsData[submenu].map((subItem) => (
                      <MenuItem
                        key={subItem}
                        sx={{
                          color: "#3593B0",
                          fontWeight: "600",
                          fontFamily: "Manrope, sans-serif !important",
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: "#3593B0",
                            color: "white",
                          },
                        }}
                      >
                        {subItem}
                      </MenuItem>
                    ))}
                  </Box>
                )}
              </Box>
            )}
          </Box>

          {/* Loan Dropdown */}

          <Box
            onMouseEnter={(e) => handleMenuOpen(e, "loans")}
            onMouseLeave={handleMenuClose}
            position="relative"
          >
            <Button
              endIcon={<KeyboardArrowDownSharpIcon />}
              sx={{
                fontWeight: "700",
                fontFamily: "Manrope, sans-serif !important",
                color: "#3593B0",
                textTransform: "none",
                marginLeft: 0.5,
                fontSize: "15px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:focus": {
                  backgroundColor: "transparent",
                },
                "&:active": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Loans
            </Button>

            {menuOpen === "loans" && (
              <Box
                position="absolute"
                bgcolor="white"
                boxShadow={3}
                p={2}
                onMouseEnter={() => setMenuOpen("loans")}
                onMouseLeave={handleMenuClose}
                sx={{ borderRadius: "8px" }}
              >
                {Object.keys(loanData).map((item) => (
                  <MenuItem
                    key={item}
                    onMouseEnter={(e) => handleSubmenuOpen(e, item)}
                    onMouseLeave={handleSubmenuClose}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "300px",
                      fontWeight: "700",
                      fontFamily: "Manrope, sans-serif !important",
                      color: "#3593B0",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#3593B0",
                        color: "white",
                      },
                    }}
                  >
                    {item} <ArrowForwardIosIcon fontSize="inherit" />
                  </MenuItem>
                ))}

                {/* Submenu (Properly Positioned) */}
                {submenu && loanData[submenu] && (
                  <Box
                    position="absolute"
                    left="100%"
                    top={submenuPosition} // Dynamic positioning applied here
                    bgcolor="white"
                    boxShadow={3}
                    p={2}
                    onMouseEnter={() => setSubmenu(submenu)}
                    onMouseLeave={handleSubmenuClose}
                    sx={{ borderRadius: "8px" }}
                  >
                    {loanData[submenu].map((subItem) => (
                      <MenuItem
                        key={subItem}
                        sx={{
                          color: "#3593B0",
                          fontWeight: "600",
                          fontFamily: "Manrope, sans-serif !important",
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: "#3593B0",
                            color: "white",
                          },
                        }}
                      >
                        {subItem}
                      </MenuItem>
                    ))}
                  </Box>
                )}
              </Box>
            )}
          </Box>

          {/* Insurance Dropdown */}
          <Box
            onMouseEnter={(e) => handleMenuOpen(e, "insurance")}
            onMouseLeave={handleMenuClose}
          >
            <Button
              endIcon={<KeyboardArrowDownSharpIcon />}
              sx={{
                fontWeight: "700",
                fontFamily: "Manrope, sans-serif !important",
                color: "#3593B0",
                textTransform: "none",
                marginLeft: 0.5,
                fontSize: "15px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:focus": {
                  backgroundColor: "transparent",
                },
                "&:active": {
                  backgroundColor: "transparent",
                },
              }}
            >
              {" "}
              Insurance
            </Button>

            {menuOpen === "insurance" && (
              <Box
                position="absolute"
                bgcolor="white"
                boxShadow={3}
                p={2}
                onMouseEnter={() => setMenuOpen("insurance")}
                onMouseLeave={handleMenuClose}
                sx={{ borderRadius: "8px" }}
              >
                {["Health Insurance", "Life Insurance"].map((item) => (
                  <MenuItem
                    key={item}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "200px",
                      fontWeight: "700",
                      fontFamily: "Manrope, sans-serif !important",
                      color: "#3593B0",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#3593B0",
                        color: "white",
                      },
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Box>
            )}
          </Box>

          {/* EMI Calculator Dropdown */}
          <Box
            onMouseEnter={(e) => handleMenuOpen(e, "emiCalculator")}
            onMouseLeave={handleMenuClose}
          >
            <Button
              endIcon={<KeyboardArrowDownSharpIcon />}
              sx={{
                fontWeight: "700",
                fontFamily: "Manrope, sans-serif !important",
                color: "#3593B0",
                textTransform: "none",
                marginLeft: 0.5,
                fontSize: "15px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:focus": {
                  backgroundColor: "transparent",
                },
                "&:active": {
                  backgroundColor: "transparent",
                },
              }}
            >
              EMI Calculator
            </Button>

            {menuOpen === "emiCalculator" && (
              <Box
                position="absolute"
                bgcolor="white"
                boxShadow={3}
                p={2}
                onMouseEnter={() => setMenuOpen("emiCalculator")}
                onMouseLeave={handleMenuClose}
                sx={{ borderRadius: "8px" }}
              >
                {[
                  "Home Loan EMI Calculator",
                  "Personal Loan EMI Calculator",
                  "Business Loan EMI Calculator",
                  "Compound Interest Calculator",
                  "Loan Prepayment Calculator",
                  "RD Calculator",
                  "FD Calculator",
                ].map((item) => (
                  <MenuItem
                    key={item}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "300px",
                      fontWeight: "700",
                      fontFamily: "Manrope, sans-serif !important",
                      color: "#3593B0",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#3593B0",
                        color: "white",
                      },
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Box>
            )}
          </Box>

          {/* Credit Score Dropdown */}
          <Box
            onMouseEnter={(e) => handleMenuOpen(e, "creditScore")}
            onMouseLeave={handleMenuClose}
            position="relative"
          >
            <Button
              endIcon={<KeyboardArrowDownSharpIcon />}
              sx={{
                fontWeight: "700",
                fontFamily: "Manrope, sans-serif !important",
                color: "#3593B0",
                textTransform: "none",
                marginLeft: 0.5,
                fontSize: "15px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:focus": {
                  backgroundColor: "transparent",
                },
                "&:active": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Credit Score
            </Button>

            {menuOpen === "creditScore" && (
              <Box
                position="absolute"
                bgcolor="white"
                boxShadow={3}
                p={2}
                onMouseEnter={() => setMenuOpen("creditScore")}
                onMouseLeave={handleMenuClose}
                sx={{ borderRadius: "8px" }}
              >
                {[
                  "Check CIBIL Score by Pan Card",
                  "CIBIL Score for Banks",
                  "Check Free CIBIL Score",
                  "Instant Loan Without CIBIL",
                  "CIBIL Score Range",
                  "CIBIL Score Calculation",
                  "How to Improve CIBIL Score",
                ].map((item) => (
                  <MenuItem
                    key={item}
                    onMouseEnter={
                      item === "CIBIL Score for Banks"
                        ? (e) => handleSubmenuOpen(e, "cibilBanks")
                        : null
                    }
                    onMouseLeave={handleSubmenuClose}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "280px",
                      fontWeight: "700",
                      fontFamily: "Manrope, sans-serif !important",
                      color: "#3593B0",
                      borderRadius: "8px",
                      padding: "10px",

                      "&:hover": {
                        backgroundColor: "#3593B0",
                        color: "white",
                      },
                    }}
                  >
                    {item}
                    {item === "CIBIL Score for Banks" && (
                      <ArrowForwardIosIcon fontSize="inherit" />
                    )}
                  </MenuItem>
                ))}

                {submenu === "cibilBanks" && (
                  <Box
                    position="absolute"
                    left="100%"
                    top={submenuPosition} // Dynamically positioning submenu
                    bgcolor="white"
                    boxShadow={3}
                    p={2}
                    onMouseEnter={() => setSubmenu("cibilBanks")}
                    onMouseLeave={handleSubmenuClose}
                    sx={{ borderRadius: "8px" }}
                  >
                    {[
                      "SBI CIBIL Score",
                      "HDFC CIBIL Score",
                      "Bajaj CIBIL Score",
                      "ICICI CIBIL Score",
                      "IIFL CIBIL Score",
                    ].map((subItem) => (
                      <MenuItem
                        key={subItem}
                        sx={{
                          color: "#3593B0",
                          fontWeight: "700",
                          fontFamily: "Manrope, sans-serif !important",
                          borderRadius: "8px",
                          padding: "10px",
                          "&:hover": {
                            backgroundColor: "#3593B0",
                            color: "white",
                          },
                        }}
                      >
                        {subItem}
                      </MenuItem>
                    ))}
                  </Box>
                )}
              </Box>
            )}
          </Box>

          {/* Blogs */}
          <Button
            sx={{
              backgroundColor: "white",
              fontWeight: "700",
              textTransform: "none",
              marginLeft: 0.5,
              fontSize: "15px",
              fontFamily: "Manrope, sans-serif !important",
              color: "#3593B0",
            }}
          >
            Blogs
          </Button>
        </Box>

        <Box sx={{ marginTop: "22px" }}>
          {/* Search Icon */}

          {searchOpen && (
            <InputBase
              placeholder="Search..."
              autoFocus
              style={{
                width: "140px",
                height: "30px",
                backgroundColor: "#d3eef7",
                borderRadius: "40px",
                padding: "5px 15px",
                fontSize: "1rem",
                transition: "width 0.3s ease-in-out",
              }}
            />
          )}

          <IconButton
            onClick={() => setSearchOpen(!searchOpen)}
            sx={{
              background: "linear-gradient(45deg, #3593B0 0%, #4A9B85 100%)",
              borderRadius: "60%",
              padding: "8px",
              textTransform: "none",
              // boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                background: "linear-gradient(45deg, #2A7A91 0%, #3E8E6F 100%)",
              },
            }}
          >
            <Search sx={{ color: "#fff", fontSize: "1.0rem" }} />
          </IconButton>

          {/* App Store Icon */}
          <Button
            onClick={() => setAppStoreOpen(!appStoreOpen)}
            sx={{
              p: 1,
              borderRadius: "8px",
              textTransform: "none",
              backgroundColor: "white",
              "&:hover": { backgroundColor: "white" },
            }}
          >
            <img
              src="https://cdn2.mymoneymantra.com/app_icon_28a4c1d200.png?format=avif&quality=80"
              alt="app icon"
              style={{ width: "30px", height: "auto" }}
            />
          </Button>

          {appStoreOpen && (
            <Box
              position="absolute"
              top={80}
              right={160}
              bgcolor="white"
              p={3}
              boxShadow={4}
              sx={{
                width: "350px",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Typography
                fontSize={16}
                fontWeight={600}
                sx={{ color: "black", textAlign: "left" }}
              >
                Mobile Number
              </Typography>

              <InputBase
                placeholder="Enter mobile number"
                fullWidth
                sx={{
                  p: "10px",
                  border: "1px solid #bdbdbd",
                  borderRadius: "8px",
                  fontSize: "14px",
                  "&:focus-within": {
                    borderColor: "#1976d2",
                  },
                }}
              />

              <Typography
                variant="caption"
                sx={{ color: "black", fontSize: "14px" }}
              >
                *By clicking on proceed, you agree to MMM consent.
              </Typography>

              <Button
                sx={{
                  color: "#fff",
                  marginLeft: "110px",
                  fontWeight: 600,
                  textTransform: "none",
                  p: "8px",
                  width: "130px",
                  borderRadius: "8px",
                  backgroundImage:
                    "linear-gradient(45deg, #3593B0 0%, #4A9B85 100%)",
                  "&:hover": {
                    backgroundColor:
                      "linear-gradient(45deg, #3593B0 0%, #4A9B85 100%)",
                  },
                }}
              >
                Get Link
              </Button>
            </Box>
          )}

          {/* Sign In Button */}

          <Button
            variant="contained"
            onClick={() => setSignInOpen(!signInOpen)}
            sx={{
              backgroundImage:
                "linear-gradient(45deg, #3593B0 0%, #4A9B85 100%)",
              color: "white",
              border: "none",
              fontFamily: "Manrope, sans-serif",
              padding: "8px 25px",
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "18px",
              "&:hover": {
                backgroundImage:
                  "linear-gradient(45deg, #4A9B85 0%, #3593B0 100%)",
              },
            }}
          >
            Sign In
          </Button>

          {signInOpen && (
            <Box
              position="absolute"
              top={78}
              right={50}
              bgcolor="white"
              p={2}
              boxShadow={3}
              sx={{
                borderRadius: "12px",
                //   zIndex: 1200,
                width: "250px",
                height: "auto",
              }}
            >
              <form id="login-form" autoComplete="off" noValidate>
                {/* Full Name Field */}
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textAlign: "left",
                      fontWeight: "500",
                      fontSize: "16px",
                      marginBottom: "0.25rem",
                      color: "black",
                    }}
                  >
                    Full Name
                  </Typography>
                  <InputBase
                    placeholder="Enter your Full Name"
                    fullWidth
                    sx={{
                      border: "1px solid #8C8C8C",
                      borderRadius: "4px",
                      padding: "3px",
                      fontSize: "1rem",
                      bgcolor: "white",
                      "&.Mui-error": {
                        borderColor: "red",
                      },
                    }}
                    inputProps={{
                      minLength: 3,
                      maxLength: 30,
                      pattern: "^[a-zA-Z ]+$",
                    }}
                    error={
                      !formData.fullName ||
                      !/^[a-zA-Z ]+$/.test(formData.fullName)
                    }
                    value={formData.fullName || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                  {(!formData.fullName ||
                    !/^[a-zA-Z ]+$/.test(formData.fullName)) && (
                    <Typography
                      variant="caption"
                      sx={{ color: "red", fontSize: "0.75rem" }}
                    >
                      Please enter a valid full name (letters only)
                    </Typography>
                  )}
                </Box>

                {/* Mobile Number Field */}
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textAlign: "left",
                      fontWeight: "500",
                      fontSize: "16px",
                      marginBottom: "0.25rem",
                      color: "black",
                    }}
                  >
                    Mobile Number
                  </Typography>
                  <InputBase
                    placeholder="Enter your Mobile Number"
                    fullWidth
                    sx={{
                      border: "1px solid #8C8C8C",
                      borderRadius: "4px",
                      padding: "3px",
                      fontSize: "1rem",
                      bgcolor: "white",
                      "&.Mui-error": {
                        borderColor: "red",
                      },
                    }}
                    inputProps={{
                      maxLength: 10,
                      inputMode: "numeric",
                      pattern: "^[0-9]{10}$",
                    }}
                    error={
                      !formData.mobile || !/^[0-9]{10}$/.test(formData.mobile)
                    }
                    value={formData.mobile || ""}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                      setFormData({ ...formData, mobile: value });
                    }}
                  />
                  {(!formData.mobile ||
                    !/^[0-9]{10}$/.test(formData.mobile)) && (
                    <Typography
                      variant="caption"
                      sx={{ color: "red", fontSize: "0.75rem" }}
                    >
                      Please enter a valid 10-digit mobile number
                    </Typography>
                  )}
                </Box>

                {/* Email Field */}
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textAlign: "left",
                      fontWeight: "500",
                      fontSize: "16px",
                      marginBottom: "0.25rem",
                      color: "black",
                    }}
                  >
                    Email Address
                  </Typography>
                  <InputBase
                    placeholder="Enter your Email ID"
                    fullWidth
                    type="email"
                    sx={{
                      border: "1px solid #8C8C8C",
                      borderRadius: "4px",
                      padding: "3px",
                      fontSize: "1rem",
                      bgcolor: "white",
                      "&.Mui-error": {
                        borderColor: "red",
                      },
                    }}
                    error={
                      !formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)
                    }
                    value={formData.email || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {(!formData.email ||
                    !/^\S+@\S+\.\S+$/.test(formData.email)) && (
                    <Typography
                      variant="caption"
                      sx={{ color: "red", fontSize: "0.75rem" }}
                    >
                      Please enter a valid email address
                    </Typography>
                  )}
                </Box>

                {/* Divider - Hidden on mobile, visible on desktop */}
                <Box
                  sx={{
                    borderBottom: "1px solid #e0e0e0",
                    mb: 1,
                    display: { xs: "none", md: "block" },
                  }}
                />

                {/* Consent Checkbox */}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "black",
                      fontSize: "12px",
                      fontWeight: "200",
                      fontFamily: "Manrope, sans-serif",
                      letterSpacing: "0.015em",
                      wordSpacing: "0.3em",
                    }}
                  >
                    I accept Privacy Policy and Terms and Condition
                    <span
                      style={{
                        color: "#0094FF",
                        cursor: "pointer",
                        ml: 0.5,
                        wordSpacing: "0.01rem",
                      }}
                    >
                      ...Read more
                    </span>
                  </Typography>
                </Box>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  onClick={(e) => {
                    e.preventDefault();
                    if (validateForm()) {
                      // Handle form submission
                      console.log("Form submitted:", formData);
                    }
                    // setFormData("")
                  }}
                  sx={{
                    backgroundImage:
                      "linear-gradient(45deg, #3593B0 0%, #4A9B85 100%)",
                    // color: "white",
                    fontWeight: "500",
                    ml: 8,
                    mt: 1.5,
                    width: "125px",
                    padding: "8px",
                    fontSize: "18px",
                    textTransform: "none",
                    borderRadius: "10px",
                    mb: 0.5,
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(45deg, #4A9B85 0%, #3593B0 100%)",
                    },
                  }}
                >
                  Sign In
                </Button>
              </form>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;