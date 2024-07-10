import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";

type Props = {
  xs: number;
  windowSize:{
    width:number, height:number
  }
}
const HomeIconComponent: React.FC<Props> = ({xs, windowSize}) => {
  const router = useRouter()
  return (
    <Grid item xs={xs} paddingLeft={windowSize.width <= 800 ? 1 : 2}>
    <Box >
      <IconButton onClick={() => router.push('/')}>
        <HomeIcon fontSize="medium" />
      </IconButton>
    </Box></Grid>
  );
};

export default HomeIconComponent;
