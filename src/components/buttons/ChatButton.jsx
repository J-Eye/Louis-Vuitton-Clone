import React from "react";
import TextsmsIcon from "@mui/icons-material/Textsms";
import { Box } from "@mui/material";
const ChatButton = () => {
  const styles = {
    container: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      height: "50px",
      width: "50px",
      zIndex: "999",
      backgroundColor: "white",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 0 4px 0 rgba(0,0,0,.12),0 4px 12px 0 rgba(0,0,0,.1)"
    }
  };
  return (
    <Box sx={styles.container}>
      <TextsmsIcon color="black"/>
    </Box>
  );
};

export default ChatButton;
