import { Box, Link, Typography } from "@mui/material";
import React from "react";
import SearchBar from "../../searchBar/SearchBar";
import ContactButton from "../../buttons/ContactButton";

const FrequentQuestionsCard = () => {
  const styles = {
    container: {
      marginTop: "20px",
      backgroundColor: "white",
      width: "100%",
      display: "flex",
    },
    contentContainer: {
      padding: "40px",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
    },
    title: {
      width: "100%",
      fontSize: "1.125rem",
      letterSpacing: ".025rem",
      lineHeight: "1.5rem",
      fontWeight: "400",
    },
    text: {
      fontSize: ".875rem",
      letterSpacing: ".025rem",
      lineHeight: "1.25rem",
      fontWeight: "400",
      width: "50%",
    },
    buttonContainer: {
      margin: "0 auto",
    },
    topBox: {
      width: "100%",
      display: "flex",
      height: "20%",
      alignItems: "center",
    },
    BottomBox: {
      marginTop: "20px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      margin: '40px 0'
    },
    link: {
      color: "black",
      width: "30%",
    },
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.contentContainer}>
        <Box sx={styles.topBox}>
          <Typography sx={styles.title}>FREQUENT QUESTIONS</Typography>
          <Box width="50%">
            <SearchBar color="#f6f5f3" />
          </Box>
        </Box>
        <Box sx={styles.BottomBox}>
          <Link sx={styles.link}>What is the Return & Exchange Policy?</Link>
          <Link sx={styles.link}>What is the return policy?</Link>
          <Link sx={styles.link}>What shipping options are available?</Link>
          <Link sx={styles.link}>How do I return my Louis Vuitton item?</Link>
          <Link sx={styles.link}>What are the accepted payment methods?</Link>
          <Link sx={styles.link}>
            How do I return or exchange my online purchase?
          </Link>
        </Box>
        <ContactButton title="Discover all" />
      </Box>
    </Box>
  );
};

export default FrequentQuestionsCard;
