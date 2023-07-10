import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ContactCard from "../Cards/contactCard/ContactCard";
import RepairServiceCard from "../Cards/repairServiceCard/RepairServiceCard";
import FAQCard from "../Cards/FAQCard/FAQCard";
import FrequentQuestionsCardSearch from "../Cards/frequentQuestionsCardSearch/FrequentQuestionsCardSearch";

const ContactContainer = () => {
  const styles = {
    container: {
      width: "100vw",
      backgroundColor: "#f6f5f3",
      height: "auto",
      paddingBottom:'40px'
    },
    contentContainer: {
      paddingTop: "20px",
      width:'80%',
      margin: '0 auto'
    },
    title: {
      fontSize: "2rem",
      letterSpacing: ".025rem",
      lineHeight: "2.5rem",
      fontWeight: "400",
      color: "inherit",
      marginBottom:'20px'
    },
    text: {
      fontSize: "1rem",
      letterSpacing: ".025rem",
      lineHeight: "1.5rem",
      fontWeight: "400",
      marginBottom:'20px'
    }
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.contentContainer}>
        <FAQCard />
        <Typography sx={styles.title}>Contact Us</Typography>
        <Typography style={styles.text}>
          Choose your preferred method of contact to connect with our Client
          Services team or find out more information through our FAQ page.{" "}
        </Typography>
        <ContactCard/>
        <RepairServiceCard/>
        <FrequentQuestionsCardSearch/>
      </Box>
    </Box>
  );
};

export default ContactContainer;
