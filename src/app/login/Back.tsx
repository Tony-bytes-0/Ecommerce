import { Box, Button, Grid, IconButton } from "@mui/material";
import { FC } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type back = {
    action: () => void;
}

const Back: React.FC<back> = ({action}) => {
  return (
    <Grid item xs={12}>
      <Box alignContent={"flex-start"} justifyContent={"center"}>
        <IconButton onClick={() => {action()}}>
          <ArrowBackIcon style={{ color: "#FFFFFF" }} />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default Back;
