import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { getEnvColors } from "@/app/types/common";

type RegisterButton = {
  action: () => void;
  secoundAction: () => void;
  text: string;
  secoundText?: string;
};

export const RegisterButton: React.FC<RegisterButton> = ({ action, secoundAction, text, secoundText }) => {
  const colors = getEnvColors();
  const buttonStyles = {
    background: colors.primaryColor,
    padding: 1.5,
  };
  return (
    <Grid item xs={12}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={2}
      >
        <Button
          variant="outlined"
          sx={buttonStyles}
          fullWidth
          onClick={() => {
            action();
          }}
        >
          <b>{text}</b>
        </Button>
          <Button
            variant="outlined"
            sx={buttonStyles}
            fullWidth
            onClick={() => {
              secoundAction();
            }}
          >
            <b>{secoundText}</b>
          </Button>
      </Box>
      <Divider textAlign="center">
        <Typography sx={{ color: "#FFFFFF" }}>o</Typography>
      </Divider>
    </Grid>
  );
};
