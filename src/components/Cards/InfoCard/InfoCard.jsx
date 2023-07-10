import { Box, Typography } from "@mui/material";
import React from "react";
import ContactButton from "../../buttons/ContactButton";

const InfoCard = ({title, content, button}) => {
  const styles = {
    container: {
      margin:'20px 0',
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
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.text}>
          {content}
        </Typography>
        <Box sx={styles.buttonContainer}>
          <ContactButton title={button} />
        </Box>
      </Box>
    </Box>
  );
};

export default InfoCard;
