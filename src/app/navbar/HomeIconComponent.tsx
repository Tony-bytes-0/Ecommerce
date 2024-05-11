import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

type Props = {
  xs: number;
  windowSize:{
    width:number, height:number
  }
}
const HomeIconComponent: React.FC<Props> = ({xs, windowSize}) => {
  return (
    <Grid item xs={xs} paddingLeft={windowSize.width <= 800 ? 1 : 2}>
    <Box >
      <IconButton href="/">
        <HomeIcon fontSize="medium" />
      </IconButton>
    </Box></Grid>
  );
};

export default HomeIconComponent;
