import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavigatorTab = ({title, path}) => {
    const navigate = useNavigate();
    const styles = {
        container : {
            border: "1px solid #efeeeb",
            "&:hover": {
                borderBottom: '1px solid black'
            },
            height: '100%',
            borderRadius: 0,
            color: 'black'
        }
    }
    return (
        <Button sx={styles.container} onClick={() => navigate(path)}>
            <Typography>{title}</Typography>
        </Button>
      );
}

export default NavigatorTab