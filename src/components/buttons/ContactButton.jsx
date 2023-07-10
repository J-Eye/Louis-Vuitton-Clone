import { Box, Button } from "@mui/material";
import React from "react";

const ContactButton = ({ icon, title }) => {
  const styles = {
    container: {
      color: "black",
      width: "100%",
      height: "50px",
      border: "1px solid black",
      display: "flex",
      borderRadius: "20px",
      justifyContent: "center",
      alignItems: "center",
    },
    logoContainer: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      height: "300%",
    },
  };
  return (
    <Button sx={styles.container}>
      <Box sx={styles.logoContainer}>{icon}</Box>
      {title}
    </Button>
  );
};

export default ContactButton;
