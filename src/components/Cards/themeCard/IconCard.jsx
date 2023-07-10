import { Box, Link } from "@mui/material";
import React from "react";

const IconCard = ({ icon, title }) => {
  const styles = {
    container: {
      margin: '0 auto', 
      width: "100%",
      padding: '10px',
      textAlign: 'center'
    },
    title: {
      fontSize: ".8rem",
      letterSpacing: ".025rem",
      lineHeight: "1rem",
      fontWeight: "400",
      color: 'black',
    },
    iconContainer: {
      margin: '0 auto', 
        width:'20%',
        height:'auto'
    }
  };
  return (
    <Box sx={styles.container}>
        <Box sx={styles.iconContainer}>
        {icon}
        </Box>
      
      <Link sx={styles.title}>{title}</Link>
    </Box>
  );
};

export default IconCard;
