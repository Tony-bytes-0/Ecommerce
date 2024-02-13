import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Grid } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function LoginInput() {
  return (
    <Grid
      container
      className="flex p-5 justify-center "
      sx={{ width: "100%", height: "50vh" }}
    >
      <Grid item xs={9} className="p-5">
        <Box className="w-full flex-row">
          <Grid item xs={2}>
            <AccountBoxIcon sx={{ fontSize: "4em" }} />
          </Grid>
          <TextField id="standard-basic" label="Standard" className="flex" />
        </Box>
      </Grid>
      <Grid item xs={9} className="p-5">
        <TextField id="standard-basic" label="Standard" className="flex" />
      </Grid>
    </Grid>
  );
}

export default LoginInput;
