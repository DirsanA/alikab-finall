import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Box,
  Grid,
  Chip,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  EmojiEvents,
  Public,
  Handshake,
  TrendingUp,
  Groups,
  LocationOn,
  CalendarToday,
  Star,
  ArrowForward,
} from "@mui/icons-material";
import aboutImage from "../../assets/byd1.png";

const AboutHero = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const stats = [
    { icon: <Groups />, value: "15+", label: "Employees" },
    { icon: <LocationOn />, value: "2", label: "Regional Offices" },
    { icon: <CalendarToday />, value: "1+", label: "Years Experience" },
    { icon: <Star />, value: "ISO", label: "Certified" },
  ];

  const features = [
    {
      icon: <EmojiEvents />,
      title: "Excellence",
      desc: "Committed to delivering exceptional quality in all our services",
    },
    {
      icon: <Handshake />,
      title: "Integrity",
      desc: "Building trust through transparency and ethical business practices",
    },
    {
      icon: <TrendingUp />,
      title: "Growth",
      desc: "Driving sustainable development for our clients and communities",
    },
    {
      icon: <Public />,
      title: "Global Reach",
      desc: "Connecting Ethiopian businesses to international markets",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0a162a 0%, #1a2d55 100%)",
        color: "white",
        pt: { xs: 12, md: 20 },
        pb: { xs: 8, md: 16 },
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              backgroundColor: theme.palette.primary.main,
              opacity: 0.1,
              borderRadius: "50%",
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </Box>

      <Grid
        container
        spacing={4}
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 2, sm: 4, md: 8 },
          maxWidth: 1600,
          mx: "auto",
          alignItems: "center",
        }}
      >
        {/* Left side - Text content */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                lineHeight: 1.2,
                mb: 3,
                background: "linear-gradient(90deg, #FFFFFF, #B4D3FE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <motion.span>Driving Economic</motion.span>
              <br />

              <motion.span style={{ color: theme.palette.secondary.main }}>
                Progress Across Ethiopia, and Beyond
              </motion.span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
                color: "#B4D3FE",
                maxWidth: 600,
                mb: 4,
              }}
            >
              ALIKAB IMPORT EXPORT is a leading multi-sectoral enterprise in
              Ethiopia, specializing in the export of coffee, pulses, and
              oilseed beans, and the import of vehicles, machinery, and
              agrochemicals. We also offer transportation solutions,
              facilitating trade and logistics across East Africa.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 6,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                    fontWeight: "bold",
                    borderWidth: 2,
                    "&:hover": { borderWidth: 2 },
                  }}
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </Button>
              </motion.div>
            </Box>

            {/* Stats */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(4, 1fr)",
                },
                gap: 2,
                mt: 4,
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Box
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 2,
                      p: 2,
                      textAlign: "center",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Avatar
                      sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        width: 40,
                        height: 40,
                        mb: 1,
                        mx: "auto",
                      }}
                    >
                      {stat.icon}
                    </Avatar>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "white" }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#B4D3FE" }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      {/* Background blurs */}
      <Box
        sx={{
          position: "absolute",
          right: -100,
          bottom: -100,
          backgroundColor: "primary.light",
          opacity: 0.2,
          filter: "blur(60px)",
          borderRadius: "50%",
          width: 300,
          height: 300,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: -100,
          top: -100,
          backgroundColor: "secondary.light",
          opacity: 0.2,
          filter: "blur(60px)",
          borderRadius: "50%",
          width: 300,
          height: 300,
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default AboutHero;
