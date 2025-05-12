import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import img1 from "../../assets/images/persons/p1.jpg";
import img2 from "../../assets/images/persons/p2.jpg";
import img3 from "../../assets/images/persons/p3.jpg";

const teams = [
  { src: img1, label: "Yihalem Tsera", job: "CEO" },
  { src: img3, label: "Yeshambel Tsera", job: "Co-Founder" },
  { src: img2, label: "Selam Tsera", job: "HR" },
];

const Team = () => {
  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: "#F9F9F9" }}>
      <Paper elevation={0} sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            id="team"
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#212A5E",
            }}
          >
            Meet Our Team
          </Typography>
          <Box
            sx={{
              height: "5px",
              backgroundColor: "#FA812F",
              mt: "6px",
              width: { xs: "40%", sm: "30%", md: "15%" },
              mx: "auto", // Center underline
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: { xs: "center", sm: "space-between" },
          }}
        >
          {teams.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "48%", md: 300 },
                height: 350,
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                "&:hover img": {
                  opacity: 0.6,
                },
                "&:hover .overlayText": {
                  opacity: 1,
                },
              }}
            >
              <img
                src={item.src}
                alt={item.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.3s ease",
                }}
              />
              <Typography
                className="overlayText"
                variant="h5"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontWeight: "bold",
                  textShadow: "1px 1px 5px rgba(0,0,0,0.6)",
                  opacity: 0,
                  transition: "0.3s ease",
                }}
              >
                {item.label}
                <Typography
                  sx={{
                    color: "#FA812F",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  {item.job}
                </Typography>
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Team;
