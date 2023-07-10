import { SvgIcon } from "@mui/material";
import React from "react";

const CustomEmail = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 100 100"
      sx={{ width: "50%", height: "50%" }}
    >
      <path d="M20.132 39.873L50.257 71.8l.172.172 29.438-32.014v35.704H20.132V39.873zm2.918-3.434h4.892v5.149l-4.892-5.149zm48.922 0h4.978l-4.978 5.407v-5.407zm-39.481 9.957V24.338h35.018v22.401L50.343 65.363 32.491 46.396zm-4.549-26.521v12.102H15.669v48.149h68.662v-48.15H72.058V19.875H27.942z"></path>
    </SvgIcon>
  );
};

export default CustomEmail;
