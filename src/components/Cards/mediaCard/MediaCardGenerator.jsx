import React from "react";
import FirstHome from "../../../assets/videos/FirstHome.mp4";
import SeccondHome from "../../../assets/videos/SeccondHome.mp4";
import ThirdHome from "../../../assets/videos/ThirdHome.mp4";
import FourthHome from "../../../assets/videos/FourthHome.mp4";
import FifthHome from "../../../assets/videos/FifthHome.mp4";
import SixthHome from "../../../assets/videos/SixthHome.mp4";
import SeventhHome from "../../../assets/videos/SeventhHome.mp4";
import EigthHome from "../../../assets/imgs/EigthHome.jpg";
import MediaCard from "./MediaCard";
import { Box } from "@mui/material";
const CardGenerator = () => {
  const cardData = [
    {
      media: FirstHome,
      buttonContainerTitle: "Louis Vuitton Deep Time",
      buttonTitles: ["Discover the Campaign"],
      isVideo: true,
    },
    {
      media: SeccondHome,
      buttonContainerTitle: "LV By The Pool",
      buttonTitles: ["Explore the Collection", "Discover the Campaign"],
      isVideo: true,
    },
    {
      media: ThirdHome,
      buttonContainerTitle: "Taurillon Monogram and Monogram Macassar",
      buttonTitles: ["Discover the Collection"],
      isVideo: true,
    },
    {
      media: FourthHome,
      buttonContainerTitle: "Zendaya and the Capucines",
      buttonTitles: ["Explore the Campaign"],
      isVideo: true,
    },
    {
      media: FifthHome,
      buttonContainerTitle: "Tambour",
      buttonTitles: ["Discover the Collection", "Explore the Campaign"],
      isVideo: true,
    },
    {
      media: SixthHome,
      buttonContainerTitle: "Silver Lockit",
      buttonTitles: ["Explore the Collection", "Discover the Campaign"],
      isVideo: true,
    },
    {
      media: SeventhHome,
      buttonContainerTitle: "Spell On You with Léa Seydoux",
      buttonTitles: ["Shop the Fragrance", "Explore the Campaign"],
      isVideo: true,
    },
    /*{
        media: EigthHome,
        buttonContainerTitle: "New This Season",
        buttonTitles: ["Discover All Handbags"],
        isVideo: false,
    }*/
  ];
  return (
    <>
      {cardData.map(
        ({ media, buttonContainerTitle, buttonTitles, isVideo }, index) => (
          <Box key={index}>
            <MediaCard
              media={media}
              buttonContainerTitle={buttonContainerTitle}
              buttonTitles={buttonTitles}
              isVideo={isVideo}
            />
          </Box>
        )
      )}
    </>
  );
};

export default CardGenerator;
