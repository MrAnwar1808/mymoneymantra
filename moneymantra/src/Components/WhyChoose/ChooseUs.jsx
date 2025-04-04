
import { Box, Typography } from "@mui/material";
import React from "react";

function ChooseUs() {
    return (
        <Box sx={{ justifyContent: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
    <Typography
        sx={{
            fontFamily: "Manrope, sans-serif !important",
            padding: 5,
            marginTop: "40px",
            textAlign: "center",
            fontSize: "2.3rem",
            fontWeight: "700",
            color: "black",
            lineHeight: 1.2,
            position: "relative",
            display: "inline-block",  // Keep the width as per text
            "&::after": {
                content: '""',
                position: "absolute",
                right: 40, // Keeps underline at the same position
                borderRadius: "5px",
                bottom: "35px",
                width: "150px",
                height: "4px",
                backgroundColor: "#3593b0",
            },
        }}
    >
        Why Choose Us
    </Typography>
</Box>


            <Box sx={{ display: "flex", justifyContent: "center", gap: 15 }}>
                <Box sx={{ textAlign: "left", }}>
                    <Typography variant="h3" sx={{ fontSize: "1.875rem", lineHeight: "2.25rem", fontWeight: "700", mb: 2 }}>
                        Fast Disbursal
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "1.5rem", lineHeight: "2rem", color: "#575757", whiteSpace: "pre-line", mb: 5 }}>
                        Our team helps customers <br></br>
                        make informed loan <br></br>
                        decisions.
                    </Typography>
                    <img
                        src="/Images/c2.jpg"
                        alt="choose2"
                        style={{
                            boxShadow: "20px 10px 20px rgba(228, 225, 225, 0.97)",
                            borderRadius: "35px",
                            backgroundColor: "white",
                          }}

                    />




                    <Typography variant="h3" sx={{ fontSize: "1.875rem", lineHeight: "2.25rem", fontWeight: "700", mt: 4, mb: 2 }}>
                        Personalised
                    </Typography>

                    <Typography variant="body1" sx={{ fontWeight: "500", fontSize: "1.5rem", lineHeight: "2rem", color: "#575757", whiteSpace: "pre-line", mb: 2 }}>
                        We curate the best available <br></br>
                        offers from banks, NBFCs &  <br></br>
                        financial institutions
                    </Typography>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: 400, // Adjust height as needed
                    justifyContent: "space-between",
                    padding: "10px",
                    marginTop: "40px"

                }}>
                    {/* First Circle */}
                    <Box sx={{ width: 50, height: 50, backgroundColor: "#4FACCA", borderRadius: "50%", }} />

                    {/* Vertical Line */}
                    <Box sx={{ width: 4, height: 90, backgroundColor: "#e5e7eb" }} />

                    {/* Second Circle */}
                    <Box sx={{ width: 50, height: 50, backgroundColor: "#64B59F", borderRadius: "50%", }} />

                    {/* Vertical Line */}
                    <Box sx={{ width: 4, height: 90, backgroundColor: "#e5e7eb" }} />

                    {/* Third Circle */}
                    <Box sx={{ width: 50, height: 50, backgroundColor: "#4FACCA", borderRadius: "50%" }} />
                </Box>



                <Box sx={{ textAlign: "left" }}>
                    <img src="/Images/c1.jpg" 
                         alt="choose1"
                         style={{
                            boxShadow: "20px 10px 20px rgba(228, 225, 225, 0.97)",
                            borderRadius: "35px",
                            backgroundColor: "white",
                          }} />

                    <Typography variant="h3" sx={{ fontSize: "1.875rem", lineHeight: "2.25rem", fontWeight: "700", mt: 4, mb: 2 }}>
                        Safe & Secure
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "500", fontSize: "1.5rem", lineHeight: "2rem", color: "#575757", whiteSpace: "pre-line", mb: 4 }}>
                        Applying for loans and credit cards <br></br>
                        through MyMoneyMantra is <br></br>
                        100% safe and secure.
                    </Typography>
                    <img src="/Images/c3.jpg" 
                         alt="choose3" 
                         style={{
                            boxShadow: "20px 10px 20px rgba(228, 225, 225, 0.97)",
                            borderRadius: "35px",
                            backgroundColor: "white",
                          }}/>
                </Box>

            </Box>

        </Box>
    )
}

export default ChooseUs