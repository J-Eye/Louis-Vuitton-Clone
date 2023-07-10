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
      display: "flex",
      flexDirection: "column",
      color: "black",
      
    },
    mainLinks: {
      padding:'5%',
      display: "flex",
      flexDirection: "column",
      color: "inherit",
    },
    seccondaryLinks: {
      padding:'5%',
      borderTop: "1px solid #f6f5f3",
    },
    seccondaryLink: {
      marginTop: "10px",
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
            <LinkGenerator />
          </Box>
          <Box sx={styles.seccondaryLinks}>
            <Typography sx={styles.seccondaryLink}>Sustainability</Typography>
            <Typography sx={styles.seccondaryLink}>Stores</Typography>
            <Typography sx={styles.seccondaryLink}>
              Ship to: United States
            </Typography>
            <Typography sx={styles.seccondaryLink}>Can we help you?</Typography>
            <Typography sx={styles.seccondaryLink}>+1.866.VUITTON</Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
