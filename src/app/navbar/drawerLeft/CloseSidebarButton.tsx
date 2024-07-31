import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const closebuttonStyles = {
    background: "#f1f1f1",
    display: "flex",
    alignItems: "center",
    paddingLeft: 3,
  };

const CloseSidebarButton:React.FC<{handler: (arh0: boolean) => void}> = ({handler}) => {
    return(
        <Box sx={closebuttonStyles}>
          <IconButton onClick={() => handler(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
    )
}

export default CloseSidebarButton;