import { Box, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = ({ color }) => {
  const styles = {
    container: {
      backgroundColor: color,
      padding: "0.55rem",
      width: "100%",
      display: "flex",
    },
    searchField: {
      backgroundColor: "inherit",
      border: "none",
      "::placeholder": {
        fontStyle: "italic",
      },
    },
  };
  return (
    <Box sx={styles.container}>
      <SearchIcon />
      <input style={styles.searchField} placeholder="How can we assist you?" />
    </Box>
  );
};

export default SearchBar;
