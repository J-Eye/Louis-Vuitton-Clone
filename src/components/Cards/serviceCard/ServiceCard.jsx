import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ image, title, content, links }) => {
    const navigate = useNavigate()
  const styles = {
    container: {
      width: "100%",
      textAlign: "left"
    },
    textContainer: {
        marginTop: "20px"
    },
    image: {
      width: "100%",
      height: "auto",
    },
    linkContainer: {
        display: 'flex',
        marginTop: "5px"
    },
    link: {
        color: "black",
        marginRight: "10px"
    }
  };
  return (
    <Box sx={styles.container}>
      <img src={image} style={styles.image} />
      <Box sx={styles.textContainer}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="caption">{content}</Typography>
      </Box>
      <Box sx={styles.linkContainer}>
      {links.map((link, index) => (
        <Box key={index}>
          <Link sx={styles.link} variant="caption" onClick={() => navigate(link.navigation)}>{link.link}</Link>
        </Box>
      ))}
      </Box>
    </Box>
  );
};

export default ServiceCard;
