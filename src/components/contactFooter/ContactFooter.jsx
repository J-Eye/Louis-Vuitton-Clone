import { Box, Typography, Link } from "@mui/material";
import React from "react";

const ContactFooter = () => {
  const styles = {
    container: {
      borderTop: "1px solid #efeeeb",
      borderBottom: "1px solid #efeeeb",
      widith: "100vw",
      height: "500px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      textAlign: "left",
      color: 'black'
    },
    section: {
      width: "20%",
      height: "80%",
      display: "flex",
      flexDirection: "column",
    },
    text: {
      fontSize: ".875rem",
      letterSpacing: ".025rem",
      lineHeight: "1.25rem",
      fontWeight: "400",
      marginTop: "20px",
      width: "90%",
    },
    sectionTitle: {
      fontSize: ".625rem",
      letterSpacing: ".0625rem",
      lineHeight: "1rem",
      fontWeight: "400",
      marginTop: "50px",
    },
    link: {
        color: 'inherit'
    }
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.section}>
        <Typography sx={styles.sectionTitle}>Help</Typography>
        <Typography sx={styles.text}>
          Our Client Advisors are available to assist you by phone at{" "}
          <Link sx={styles.link}>+1.866.VUITTON</Link> . You can also <Link sx={styles.link}>chat</Link> or{" "}
          <Link sx={styles.link}>email us</Link>.
        </Typography>
        <Typography sx={styles.text}>FAQs</Typography>
        <Typography sx={styles.text}>Product Care</Typography>
        <Typography sx={styles.text}>Stores</Typography>
      </Box>
      <Box sx={styles.section}>
        <Typography sx={styles.sectionTitle}>Services</Typography>
        <Typography sx={styles.text}>Repairs</Typography>
        <Typography sx={styles.text}>Personalization</Typography>
        <Typography sx={styles.text}>Art of Gifting</Typography>
        <Typography sx={styles.text}>Download our Apps</Typography>
      </Box>
      <Box sx={styles.section}>
        <Typography sx={styles.sectionTitle}>About Louis Vuitton</Typography>
        <Typography sx={styles.text}>Fashion Shows</Typography>
        <Typography sx={styles.text}>Arts & Culture</Typography>
        <Typography sx={styles.text}>La Maison</Typography>
        <Typography sx={styles.text}>Sustainability</Typography>
        <Typography sx={styles.text}>Latest News</Typography>
        <Typography sx={styles.text}>Careers</Typography>
        <Typography sx={styles.text}>Foundation Louis Vuitton</Typography>
      </Box>
      <Box sx={styles.section}>
        <Typography sx={styles.sectionTitle}>Connect</Typography>
        <Typography sx={styles.text}>
          <Link sx={styles.link}>Sign up</Link> for the latest news from the Maison, including
          exclusive online pre-launches for new collections.
        </Typography>
        <Typography sx={styles.text}>Follow Us</Typography>
      </Box>
    </Box>
  );
};

export default ContactFooter;
