import { Box, Link, Typography } from "@mui/material";
import React from "react";
import CustomLogo from "../../customSvgs/CustomLogo";

const FAQCard = () => {
  const styles = {
    container: {
      borderRadius: "10px",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,.04),0 12px 20px 0 rgba(0,0,0,.08)",
      backgroundColor: "#fff",
      display: "flex",
      width: "800px",
      marginBottom:'20px'
    },
    logoContainer: {
      backgroundColor: "#19110b",
      color: "white",
      width: "70px",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
    textContainer: {
        color:'black',
      margin: "20px",
    },
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.logoContainer}>
        <CustomLogo />
      </Box>
      <Box sx={styles.textContainer}>
        <Typography>Frequently Asked Questions</Typography>
        <Link color='inherit'>Read More</Link>
      </Box>
    </Box>
  );
};

export default FAQCard;
