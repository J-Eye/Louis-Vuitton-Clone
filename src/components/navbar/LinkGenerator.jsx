import React from "react";
import SideLink from "./SideLink";
import { Box } from "@mui/material";

const LinkGenerator = () => {
  const linkData = ["Louis Vuitton x Yayoi Kusama", "Gifts","New","Bags","Women","Men","Jewelry","Watches","Perfumes","Art of Living", "Services", "World of Louis Vuitton" ];
  return (
    <>
    {linkData.map((link, index) => (
        <Box key={index}>
        <SideLink
            title={link}
        />
        </Box>
    ))}
    </>
  );
};

export default LinkGenerator;
