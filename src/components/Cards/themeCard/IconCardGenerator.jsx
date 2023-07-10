import React from "react";
import CustomLogo from "../../customSvgs/CustomLogo";
import { Box } from "@mui/material";
import IconCard from "./IconCard";
import CustomTruck from "../../customSvgs/CustomTruck";
import CustomExchange from "../../customSvgs/CustomExchange";
import CustomBox from "../../customSvgs/CustomBox";
import CustomBag from "../../customSvgs/CustomBag";
import CustomThing from "../../customSvgs/CustomThing";

const IconCardGenerator = () => {
  const cardData = [
    {
      icon: <CustomLogo />,
      title: "Corporate Information",
    },
    {
      icon: <CustomTruck />,
      title: "Shipping & Delivery ",
    },
    {
      icon: <CustomExchange />,
      title: "Exchange & Returns",
    },
    {
      icon: <CustomBox />,
      title: "Orders",
    },
    {
        icon:<CustomBag/>,
        title:'Products'
    },
    {
        icon:<CustomThing/>,
        title: 'Services'
    }
  ];

  const styles = {
    container: {
      display: "flex",
      width:'100%',
      flexWrap:'wrap'
    },
    card: {
        width: "33.1%",
        border: "1px solid #f6f5f3"
      },
  };
  return (
    <Box sx={styles.container}>
        
      {cardData.map(({ icon, title }, index) => (
        <Box key={index} sx={styles.card}>
          <IconCard icon={icon} title={title} />
        </Box>
      ))}
    </Box>
  );
};

export default IconCardGenerator;
