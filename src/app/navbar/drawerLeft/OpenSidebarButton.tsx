import { Box, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const buttonStyles = {
    background: "#f1f1f1",
    width: "4rem",
    position: "fixed",
    top: "30%",
    left: "0%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  };

const OpenSidebarButton:React.FC<{handler: (arg0: boolean) => void;}> = ({handler}) => {
    return(
        <Box sx={buttonStyles}>
        <IconButton onClick={() => handler(true)}>
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </Box>
    )
}

export default OpenSidebarButton;