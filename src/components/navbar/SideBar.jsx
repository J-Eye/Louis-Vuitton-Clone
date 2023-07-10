import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Drawer, Link, Typography } from "@mui/material";
import LinkGenerator from "./LinkGenerator";

const SideBar = ({}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const styles = {
    container: {
      width: "30vw",
      overflowY: "auto",
      maxHeight: "100vh",
      display: 'flex',
      flexDirection: 'column',
      color: 'black',
      margin: '10%'
    },
    mainLinks: {
        display: 'flex',
        flexDirection: 'column',
        color: 'inherit'
    },
    seccondaryLinks: {

    },
    
  };
  return (
    <>
      <Button
        startIcon={<MenuIcon />}
        color="inherit"
        onClick={() => setIsDrawerOpen(true)}
      >
        Menu
      </Button>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={styles.container}>
          <Box sx={styles.mainLinks}>
            <LinkGenerator/>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
