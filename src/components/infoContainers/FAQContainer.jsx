import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FAQCard from "../Cards/FAQCard/FAQCard.jsx";
import SearchBar from "../searchBar/SearchBar.jsx";
import ThemeCard from "../Cards/themeCard/ThemeCard.jsx";
import InfoCard from "../Cards/InfoCard/InfoCard.jsx";
import FrequentQuestionsCard from "../Cards/frequentQuestionsCard/FrequentQuestionsCard.jsx";

const FAQContainer = () => {
  const styles = {
    container: {
      width: "100vw",
      backgroundColor: "#f6f5f3",
      height: "auto",
      paddingBottom: "40px",
    },
    contentContainer: {
      paddingTop: "20px",
      width: "80%",
      margin: "0 auto",
    },
    title: {
      fontSize: "2rem",
      letterSpacing: ".025rem",
      lineHeight: "2.5rem",
      fontWeight: "400",
      color: "inherit",
      marginBottom: "20px",
    },
    text: {
      fontSize: "1rem",
      letterSpacing: ".025rem",
      lineHeight: "1.5rem",
      fontWeight: "400",
      marginBottom: "20px",
    },
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      height:'70vh'
    },
    searchBarContainer: {
      width: "60%",
      marginBottom: "50px",
    },
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.contentContainer}>
        <FAQCard />
        <Typography sx={styles.title}>
          Find out more information with our FAQ page.
        </Typography>
        <Box sx={styles.searchBarContainer}>
          <SearchBar color="white" />
        </Box>
        <Box sx={styles.mainContainer}>
          <ThemeCard />
          <Box width="60%">
            <InfoCard
              title="CONTACT US "
              content="Reach out to our Client Services team via your favorite contact method."
              button="CONTACT US"
            />
          </Box>
          <FrequentQuestionsCard/>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQContainer;
