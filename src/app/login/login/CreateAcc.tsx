import { Box, Button, Grid, Typography } from "@mui/material";
import { getEnvColors } from "@/app/types/common";
import Divider from "@mui/material/Divider";

export const CreateAcc = ({handler, text}:{handler: () => void, text: string}) => {
  const colors = getEnvColors();
  const buttonStyles = {
    background: colors.primaryColor,
    padding: 1.5,
  };
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={2}
        >
          <Button variant="outlined" sx={buttonStyles} fullWidth onClick={handler}>
            <b>{text}</b>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
