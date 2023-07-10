import { SvgIcon } from "@mui/material";
import React from "react";

const CustomPhoneIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 80 80" sx={{width:'50%',height:'50%'}}>
      <path
        d="M46.8 9.4H33.6a2.9 2.9 0 000 5.9h13.2a2.9 2.9 0 100-5.9zm0 54.1H33.6a2.9 2.9 0 000 5.9h13.2a2.9 2.9 0 100-5.9zM54.2 0a10.9 10.9 0 0110.9 10.8v58.4A10.9 10.9 0 0154.2 80H25.8a10.9 10.9 0 01-10.9-10.8V10.8A10.9 10.9 0 0125.8 0zm5 10.8v58.4a5 5 0 01-5 5H25.8a5 5 0 01-5-5V10.8a5 5 0 015-5h28.4a5 5 0 015 5"
        fill-rule="evenodd"
      ></path>
    </SvgIcon>
  );
};

export default CustomPhoneIcon;
