import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import NavigatorTab from "./NavigatorTab";

const HelpNavigator = () => {
  const navigationData = [
    {
      title: "CONTACT US",
      path: "/contact",
    },
    {
      title: "FAQ",
      path: "/faq",
    },
    {
      title: "DELIVERY & RETURNS",
      path: "/",
    },
    {
      title: "CARE SERVICES",
      path: "/",
    },
  ];
  const styles = {
    container: {
      display: "flex",
      marginTop: "88px",
      height: "80px",
      width: "100vw",
      alignContent: "center",
      alignItems: "center",
      justifyContent: 'space-between',
      borderTop:"1px solid #efeeeb",
      borderBottom:"1px solid #efeeeb",
      position: "sticky",
      top:'0px',
      backgroundColor:'white',
      zIndex:'+1'
      
    },
    title: {
      alignText: "center",
      marginLeft: '50px'
    },
    buttonContainer: {
        width: "auto",
        margin: '0 20px',
        display:'flex',
        height: '100%'
    }
  };
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>NEED HELP</Typography>
      <Box sx={styles.buttonContainer}>
        {navigationData.map(({ title, path }, index) => (
          <Box key={index}>
            <NavigatorTab title={title} path={path} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HelpNavigator;
