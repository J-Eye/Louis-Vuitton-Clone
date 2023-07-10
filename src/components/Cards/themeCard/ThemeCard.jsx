import { Box, Typography } from '@mui/material';
import React from 'react'
import IconCardGenerator from './IconCardGenerator';

const ThemeCard = () => {
    const styles = {
        container: {
          backgroundColor: "white",
          width: "60%",
          display: "flex",
          flexWrap: "wrap",
        },
        contentContainer: {
          padding: "40px",
          width: "100%"
        },
        card: {
          width: "100%",
          display: "flex",
          border: "1px solid #f6f5f3"
        },
        title: {
          width: "100%",
          fontSize: "1.125rem",
          letterSpacing: ".025rem",
          lineHeight: "1.5rem",
          fontWeight: "400",
          padding: "20px"
        },
        text: {
          fontSize: ".875rem",
          letterSpacing: ".025rem",
          lineHeight: "1.25rem",
          fontWeight: "400",
        },
        textContainer:{
          height: '80%'
        }
      };
  return (
    <Box sx={styles.container}>
        <Box sx={styles.card}>
            <Typography sx={styles.title}>THEMES</Typography>
        </Box>
        <IconCardGenerator/>
    </Box>
  )
}

export default ThemeCard