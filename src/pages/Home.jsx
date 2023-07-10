import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import MediaCardGenerator from '../components/Cards/mediaCard/MediaCardGenerator.jsx'
import ServiceCardGenerator from "../components/Cards/serviceCard/ServiceCardGenerator";
import ContactFooter from "../components/contactFooter/ContactFooter";
import Footer from "../components/footer/Footer";
import ChatButton from '../components/buttons/ChatButton'

const Home = () => {

  return (
    <Box sx={{ width: "100vw" }}>
      <Navbar home={true}/>
      <MediaCardGenerator/>
      <ServiceCardGenerator/>
      <ContactFooter/>
      <Footer/>
      <ChatButton/>
    </Box>
  );
};

export default Home;
