import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Grid } from "@mui/material";
//ICONS
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyIcon from '@mui/icons-material/Key';

function LoginInput() {
  return (
    <Grid
      container
      className="flex p-5 justify-center "
      sx={{ width: "100%", height: "50vh" }}
    >
      <Grid item xs={0.5}>
        <Box className="justify-center flex">
          <AccountBoxIcon sx={{ fontSize: "4em" }} />
        </Box>
      </Grid>
      <Grid item xs={9} className="p-2">
        <Box className="w-full flex-row">
          <TextField id="standard-basic" label="Standard" className="flex" />
        </Box>
      </Grid>
      <Grid item xs={9} className="p-2">
        <TextField id="standard-basic" label="Standard" className="flex" />
      </Grid>
    </Grid>
  );
}

export default LoginInput;
