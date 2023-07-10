import { Box, Typography, Link } from "@mui/material";
import React from "react";
import USFlag from "../../assets/imgs/USFlag.svg.webp";
const Footer = () => {
  const styles = {
    container: {
      margin: "40px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    flag: {
      height: "20px",
      width: "auto",
    },
    main: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
    },
    title: {
      display: "flex",
    },
    text: {
      fontSize: ".875rem",
      letterSpacing: ".025rem",
      lineHeight: "1rem",
      fontWeight: "400",
      marginLeft: '50px'
    },
    textContainer: {
      display: "flex",
      marginLeft: '10%'
    },
    link : {
        color: 'black'
    }
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.main}>
        <Typography>
          Ship to: <img src={USFlag} style={styles.flag} /> <Link sx={styles.link}>United States</Link>
        </Typography>
        <Box sx={styles.textContainer}>
          <Typography sx={styles.text}>Sitemap</Typography>
          <Typography sx={styles.text}>Legal Notices</Typography>
          <Typography sx={styles.text}>Privacy Policy</Typography>
          <Typography sx={styles.text}>California Supply Chains Act</Typography>
          <Typography sx={styles.text}>
            Do Not Sell or Shaer My Personal Information
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.title}>
        <Typography variant="h4">Louis Vuitton</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
