import { Box, Link } from "@mui/material";
import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SideLink = ({ title }) => {
  const [isHovered, setisHovered] = useState(false);
  const styles = {
    container: {
        display: 'flex'
    },
    links: {
        position: 'relative',
      color: "inherit",
      fontSize: "1.5rem",
      letterSpacing: ".025rem",
      lineHeight: "1.75rem",
      fontWeight: "400",
      marginBottom: "40px",
    }
  };
  return (
    <Box sx={styles.container}>
      <Link
      underline="hover"
        sx={styles.links}
        onMouseOver={() => setisHovered(true)}
        onMouseOut={() => setisHovered(false)}
      >
        {title}
      </Link>
      {isHovered && <ChevronRightIcon/>}
    </Box>
  );
};

export default SideLink;
