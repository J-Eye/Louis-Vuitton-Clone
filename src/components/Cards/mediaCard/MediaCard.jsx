import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
const MediaCard = ({ media, buttonContainerTitle, buttonTitles, isVideo }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(true);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const styles = {
    mainContainer: {
      width: "100%",
      color: "white",
      position: "relative",
      marginBottom: "-1%",
    },
    video: {
      width: "100%",
      height: "auto",
    },
    image :{
      width: "50%",
      height: "auto",
      display:"block",
      backgroundColor: "white",
      margin: "auto",
    },
    buttonContainer: {
      position: "absolute",
      transform: "translate(-50%, -50%)",
      top: "90%",
      left: "50%",
      width: "50%",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      textAlign: "center",
      color: "inherit",
    },
    campaginTitle: {
      width: "100%",
      color: "inherit",
    },
    button: {
      borderRadius: "500px",
      color: "inherit",
      backgroundColor: "transparent",
      border: "white solid 1px",
      backdropFilter: "blur(20px)",
      margin: '10px'
    },
    videoControls: {
      position: "absolute",
      display: "flex",
      left: "120%",
      bottom: "0px",
    },
    videoButton: {
      marginRight: "20px",
    },
  };
  return (
    <Box sx={styles.mainContainer}>
      {isVideo ? (
        <video
          style={styles.video}
          loop="loop"
          ref={videoRef}
          autoPlay
          muted={isMuted}
          src={media}
          type="video/MP4"
        />
      ) : (
        <img src={media} style={styles.image} />
      )}

      <Box sx={styles.buttonContainer}>
        <Typography variant="h5" sx={styles.campaginTitle}>
          {buttonContainerTitle}
        </Typography>
        {buttonTitles.map((title, index) => (
          <Box key={index}>
            <Button sx={styles.button}>{title}</Button>
          </Box>
        ))}
        <Box sx={styles.videoControls}>
          <Box onClick={toggleMute}>
            {isMuted ? (
              <VolumeOffIcon sx={styles.videoButton} />
            ) : (
              <VolumeUpIcon sx={styles.videoButton} />
            )}
          </Box>

          {isVideo && (
            <Box onClick={togglePlay}>
              {isPlaying ? (
                <PauseIcon sx={styles.videoButton} />
              ) : (
                <PlayArrowIcon sx={styles.videoButton} />
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MediaCard;
