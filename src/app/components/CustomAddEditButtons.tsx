import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from "@mui/material";
type CustomAddEditButtons = {
  action: () => void;
  action2: () => void;
};

const CustomAddEditButtons: React.FC<CustomAddEditButtons> = ({action, action2}) => {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <IconButton color="primary"  onClick={action} size="large">
            <AddIcon  fontSize="large"  />
          </IconButton>
          <IconButton color="secondary" size="large" onClick={action2}>
            <ReplayIcon fontSize="large" />
          </IconButton>
        </Box>
      );
};

export default CustomAddEditButtons;
