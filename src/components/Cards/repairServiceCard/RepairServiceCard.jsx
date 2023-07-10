import { Box, Typography } from "@mui/material";
import React from "react";
import ContactButton from "../../buttons/ContactButton";

const RepairServiceCard = () => {
  const styles = {
    container: {
      marginTop:'20px',
      backgroundColor: "white",
      width: "100%",
      display: "flex",
    },
    contentContainer: {
      padding: "40px",
      width: "100%"
    },
    title: {
      width: "100%",
      fontSize: "1.125rem",
      letterSpacing: ".025rem",
      lineHeight: "1.5rem",
      fontWeight: "400",
      marginBottom:'20px'
    },
    text: {
      fontSize: ".875rem",
      letterSpacing: ".025rem",
      lineHeight: "1.25rem",
      fontWeight: "400",
      marginBottom:'20px'
    },
    buttonContainer: {
      margin: '0 auto'
    }
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.contentContainer}>
        <Typography sx={styles.title}>REPAIR SERVICES</Typography>
        <Typography sx={styles.text}>
          Repairs can be requested either online or in Louis Vuitton stores.<br/>
          Please allow our artisans up to 6 weeks for your repair.
        </Typography>
        <Box sx={styles.buttonContainer}>
          <ContactButton title="Care Services" />
        </Box>
      </Box>
    </Box>
  );
};

export default RepairServiceCard;
