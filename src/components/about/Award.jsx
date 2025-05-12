import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  useTheme,
  useMediaQuery,
  Modal,
  IconButton,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import logo1 from "../../assets/images/award/C1.png";
import logo2 from "../../assets/images/award/c2.png";
import logo3 from "../../assets/images/award/c3.png";
import logo4 from "../../assets/images/award/c4.png";

const awards = [
  { id: 1, image: logo1 },
  { id: 2, image: logo2 },
  { id: 3, image: logo3 },
  { id: 4, image: logo4 },
];

const Award = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 4 },
        backgroundColor: theme.palette.background.default,
      }}
      id="awards"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            textAlign: "center",
            mb: 1,
            fontWeight: 700,
            color: "#212A5E",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          }}
        >
          Awards of Merit and Appreciation
        </Typography>

        <Typography
          variant="h5"
          component="p"
          sx={{
            textAlign: "center",
            mb: { xs: 3, md: 5 },
            color: "#4E4E4EB3",
            fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" },
            px: { xs: 1, sm: 0 },
          }}
        >
          We have been honored with recognition from various prestigious
          organizations
        </Typography>
      </motion.div>

      {/* Awards Grid */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          maxWidth: "900px",
          mx: "auto",
          mt: { xs: 2, md: 4 },
        }}
      >
        {awards.map((award, index) => (
          <Grid item xs={6} sm={4} md={3} key={award.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  p: 1,
                }}
                onClick={() => handleOpen(index)}
              >
                <Card
                  sx={{
                    borderRadius: "50%",
                    boxShadow: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: 6,
                    },
                    backgroundColor: "transparent",
                    width: "100%",
                    maxWidth: { xs: "120px", sm: "150px", md: "180px" },
                    aspectRatio: "1/1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={award.image}
                    alt={`Award ${award.id}`}
                    sx={{
                      width: "80%",
                      height: "80%",
                      objectFit: "contain",
                    }}
                  />
                </Card>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Image Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(5px)",
          p: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            maxWidth: "90vw",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "text.primary",
            }}
          >
            <CloseIcon />
          </IconButton>

          <CardMedia
            component="img"
            image={awards[currentImageIndex].image}
            alt={`Award ${awards[currentImageIndex].id}`}
            sx={{
              maxWidth: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Award {currentImageIndex + 1}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default Award;
