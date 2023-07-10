import React from "react";
import FirstService from "../../../assets/imgs/FirstService.webp";
import SeccondService from "../../../assets/imgs/SeccondService.webp";
import ThirdService from "../../../assets/imgs/ThirdService.webp";
import { Box, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
const ServiceCardGenerator = () => {
  const cardData = [
    {
      image: FirstService,
      title: "How Can We Help You?",
      content:
        "Wherever you are, Louis Vuitton Client Advisors will be delighted to assist you.",
      links: [{ link: "Contact Us", navigation: "/contact" }],
    },
    {
      image: SeccondService,
      title: "Art of Gifting",
      content:
        "Choose the perfect gift from our specially curated selection of products.",
      links: [
        { link: "Gifts for Her", navigation: "/" },
        { link: "Gifts for Him ", navigation: "/" },
      ],
    },
    {
      image: ThirdService,
      title: "Personalization",
      content:
        "Louis Vuitton’s personalization offer spans a wide range of services.",
      links: [{ link: "Explore our Collections", navigation: "/" }],
    },
  ];
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      margin: "50px",
      textAlign: "center",
      justifyContent: "center",
    },
    title: {
      width: "100%",
      margin: "50px",
    },
    cardContainer: {
      width: "27%",
      padding: "10px",
    },
  };
  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={styles.title}>
        Services
      </Typography>
      {cardData.map(({ image, title, content, links }, index) => (
        <Box key={index} sx={styles.cardContainer}>
          <ServiceCard
            image={image}
            title={title}
            content={content}
            links={links}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ServiceCardGenerator;
