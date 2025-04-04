import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Slider,
  TextField,
  Typography,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import { PieChart, Pie, Cell, Label } from "recharts";

const EMICalculator = () => {
  const [activeTab, setActiveTab] = useState("personal-loan");
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(10.75);
  const [tenure, setTenure] = useState(36);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;

    return Math.round(
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1)
    );
  };

  const emi = calculateEMI();
  const totalInterest = emi * tenure - loanAmount;
  const totalPayment = loanAmount + totalInterest;

  const pieData = [
    { name: "Principal", value: loanAmount, color: "#297289" },
    { name: "Interest", value: totalInterest, color: "#76BFD6" },
  ];

  return (
    <Box>
      <Grid
        container
        spacing={25}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {/* Left Side: Loan Type & Input Fields */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column", width: "40%" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Manrope, sans-serif !important",
              padding: 5,
              marginTop: "40px",
              marginLeft: "-40px",
              fontSize: "2.3rem",
              fontWeight: "700",
              color: "black",
              lineHeight: 1.2,
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 165,
                borderRadius: "5px",
                bottom: "38px",
                width: "125px",
                height: "4px",
                backgroundColor: "#3593b0",
              },
            }}
          >
            EMI Calculator
          </Typography>
          <Box>
            <Tabs
              value={activeTab}
              onChange={(event, newValue) => setActiveTab(newValue)}
              sx={{
                width: "130%",
                ml: -1,
                mb: 5,
                "& .MuiTabs-indicator": { backgroundColor: "transparent" },
              }}
            >
              {["Personal Loan", "Home Loan", "Business Loan"].map(
                (label, index) => (
                  <Tab
                    key={index}
                    label={label}
                    value={label.toLowerCase().replace(" ", "-")}
                    sx={{
                      border: "1px solid #3593B0",
                      fontFamily: "Manrope, sans-serif !important",
                      borderRadius: "50px",
                      width: "30%",
                      mt: 2.5,
                      fontSize: "15px",
                      fontWeight: "bold",
                      textTransform: "none",
                      mx: 1,
                      backgroundColor:
                        activeTab === label.toLowerCase().replace(" ", "-")
                          ? "#3593B0"
                          : "transparent",
                      color:
                        activeTab === label.toLowerCase().replace(" ", "-")
                          ? "#fff !important"
                          : "#3593B0",
                    }}
                  />
                )
              )}
            </Tabs>

            {[
              {
                label: "Loan Amount (₹)",
                value: loanAmount,
                setValue: setLoanAmount,
                min: 5000,
                max: 10000000,
                step: 5000,
              },
              {
                label: "Interest Rate (%)",
                value: interestRate,
                setValue: setInterestRate,
                min: 1,
                max: 30,
                step: 0.05,
              },
              {
                label: "Tenure (Months)",
                value: tenure,
                setValue: setTenure,
                min: 1,
                max: 84,
                step: 1,
              },
            ].map((field, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  fontFamily="Manrope, sans-serif"
                  fontWeight="16px"
                  color="black"
                  mb={1}
                  sx={{ marginRight: "365px" }}
                >
                  {field.label}
                </Typography>
                <TextField
                  sx={{
                    width: "115%",
                    "& .MuiInputBase-input": {  // Target the input field
                      color: "black",
                      fontWeight: "500",
                      fontSize: "1.5rem",
                      fontFamily: "Manrope, sans-serif"
                    }
                  }}
                  type="number"
                  value={field.value}
                  onChange={(e) => field.setValue(Number(e.target.value))}
                />

                <Slider
                  sx={{
                    color: "#3593B0",
                    width: "110%",
                  }}
                  value={field.value}
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  onChange={(e, value) => field.setValue(value)}
                />
              </Box>
            ))}

            <Button
              variant="contained"
              sx={{
                px: 7,
                py: 1.5,
                left: 190,
                fontFamily: "Manrope, sans-serif !important",
                fontSize: "16px",
                color: "white",
                fontWeight: "bold",
                borderRadius: 3,
                background: "linear-gradient(45deg, #3593B0 0%, #4A9B85 100%)",
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Grid>

        {/* Pie Chart & EMI Breakdown */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "block",
            textAlign: "center",
            marginTop: "100px",
            marginRight: "50px",
            transform: "scale(1.1)", // Apply zoom effect (1.1 means 10% zoom)
            transition: "transform 0.3s ease-in-out", // Smooth transition for zoom effect
          }}
        >
          {/* Pie Chart */}
          <PieChart width={450} height={400}>
            <Pie
              data={pieData}
              dataKey="value"
              cx="60%"
              cy="60%"
              outerRadius={130}
              innerRadius={80}
              startAngle={90} // Adjusted rotation
              endAngle={-270} // Adjusted rotation
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}

              {/* Center Labels */}
              <Label
                value="Your EMI is"
                position="center"
                fontSize={16}
                fill="#333"
                fontWeight="bold"
                dy={-30}
              />
              <Label
                value={`₹${emi}`}
                position="center"
                fontSize={24}
                fill="#3593B0"
                fontWeight="bold"
              />
              <Label
                value="Per Month"
                position="center"
                fontSize={16}
                fill="#333"
                fontWeight="bold"
                dy={30}
              />
            </Pie>
          </PieChart>

          {/* Interest and Principal Labels Outside Pie Chart */}

          <Box sx={{ mt: 3, marginLeft: "70px", marginTop: "20px" }}>
            {pieData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                  width: "400px",
                }} // Increased width
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    backgroundColor: item.color,
                    borderRadius: "50%",
                    mr: 1,
                  }}
                />
                <Box
                  sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
                >
                  <Typography variant="body1">{item.name}</Typography>
                </Box>
                <Typography variant="body1" fontWeight="bold">
                  ₹{item.value.toLocaleString()}
                </Typography>
              </Box>
            ))}

            {/* Total Payment */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
                width: "400px",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Manrope, sans-serif !important",
                  paddingLeft: "1.2rem",
                }}
              >
                Total Payment
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                ₹{totalPayment.toLocaleString()}
              </Typography>
            </Box>
            <Divider sx={{ marginTop: "10px", paddingLeft: "1.2rem" }} />

            {/* Your EMI Amount */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                width: "400px",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Manrope, sans-serif !important",
                  paddingLeft: "1.2rem",
                }}
              >
                Your EMI Amount
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                ₹{emi.toLocaleString()}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EMICalculator;
