import { Grid } from '@mui/material'
import React from 'react'
import LoginInput from './LoginInput';

function Page() {
  return (
    <Grid container sx={{ width: "100%", height: "100vh" }}>
      <LoginInput />
    </Grid>
  );
}

export default Page
