import { Box, Button, ButtonBase, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CustomShopIcon from "../customSvgs/CustomShopIcon";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
const Navbar = ({home}) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigation = useNavigate()
  useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const scrollThreshold = 20;
  
        if (
          currentScrollPos > prevScrollPos &&
          currentScrollPos > scrollThreshold
        ) {
          setIsNavbarVisible(false);
        } else {
          setIsNavbarVisible(true);
        }
        setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const styles = {
    navbarStyle: {
      zIndex: "1",
      height: "88px",
      width: "100%",
      position: "fixed",
      top: isNavbarVisible ? "0" : "-88px",
      backgroundColor: window.scrollY < 100 && home ? "transparent" : "white",
      color: window.scrollY < 100 && home ? "white" : "black",
      "&:hover": {
        backgroundColor: "white",
        color: "black",
      },
      transition: "background-color 0.3s ease, top 0.3s ease",
    },
    button: {
      color: "inherit",
    },
    navContent: {
      paddingTop: "10px",
      display: "flex",
      alignContent: "center",
      alignText: "center",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      margin: "10px auto",
      color: "inherit",
    },
    shopContainer: {
      position: "relative",
    },
    shopNumber: {
      position: "absolute",
      background: "black",
      color: "white",
      border: "1px solid white",
      borderRadius: "50%",
      width: "15px",
      height: "20px",
      textAlign: "center",
      fontSize: "15px",
      left: "20px",
      bottom: "15px",
    },
  };

  return (
    <Box sx={styles.navbarStyle}>
      <Box sx={styles.navContent}>
        <Box>
          <SideBar/>
          <Button startIcon={<SearchIcon />} sx={styles.button}>
            Search
          </Button>
        </Box>
        <ButtonBase onClick={() => navigation("/")}>
          <Typography variant="h4" >
            LOUIS VUITTON
          </Typography>
        </ButtonBase>
        <Box>
          <Button sx={styles.button}>Wishlist</Button>
          <Button sx={styles.button}>MyLv</Button>
          <span style={styles.shopContainer}>
            <CustomShopIcon />
            <Typography sx={styles.shopNumber}>0</Typography>
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
