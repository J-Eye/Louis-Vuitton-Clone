import { Box, Card, Typography } from "@mui/material";
import React from "react";
import ContactButton from "../../buttons/ContactButton";
import CustomPhoneIcon from "../../customSvgs/CustomPhoneIcon";
import CustomChat from "../../customSvgs/CustomChat";
import CustomEmail from "../../customSvgs/CustomEmail";

const ContactCard = () => {
  const styles = {
    container: {
      backgroundColor: "white",
      width: "100%",
      display: "flex",
    },
    contentContainer: {
      padding: "40px",
      width: "100%"
    },
    card: {
      width: "100%",
      display: "flex",
      border: "1px solid #f6f5f3",
      flexWrap: "wrap",
    },
    title: {
      width: "100%",
      fontSize: "1.125rem",
      letterSpacing: ".025rem",
      lineHeight: "1.5rem",
      fontWeight: "400",
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
        <Box sx={styles.contentContainer}>
          <Box sx={styles.textContainer}>
            <Typography sx={styles.title}>CALL US</Typography>
            <Typography sx={styles.text}>
              Our Client Advisors are here to help, providing information on
              your inquiries and advice on your purchases. You may contact us by
              phone:
            </Typography>
            <ul>
              <li>Monday to Friday: 8am - 9pm CT</li>
              <li>Saturday: 9am - 9pm CT</li>
              <li>Sunday: 10am - 9pm CT</li>
            </ul>
          </Box>
          <ContactButton icon={<CustomPhoneIcon />} title="+1.866.VUITTON " />
        </Box>
      </Box>
      <Box sx={styles.card}>
        <Box sx={styles.contentContainer}>
          <Box sx={styles.textContainer}>
            <Typography sx={styles.title}>CHAT WITH US</Typography>
            <Typography sx={styles.text}>
              Our Live Chat Client Advisors are available to assist:
            </Typography>
            <ul>
              <li>Monday to Sunday: 7am - 11pm CT</li>
            </ul>
            <Typography sx={styles.text}>
              Find the live chat icon in the bottom right hand corner of the
              screen. It will become active during these hours, once an Advisor
              is available.
            </Typography>
          </Box>
          <ContactButton icon={<CustomChat />} title="Chat with an Advisor" />
        </Box>
      </Box>
      <Box sx={styles.card}>
        <Box sx={styles.contentContainer} >
          <Box sx={styles.textContainer}>
            <Typography sx={styles.title}>EMAIL US</Typography>
            <Typography sx={styles.text}>
              Please allow us up to 24 hours to respond to your inquiry.
            </Typography>
          </Box>
          <ContactButton icon={<CustomEmail />} title="Send an Email" />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactCard;
