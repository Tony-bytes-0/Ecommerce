import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ReplayIcon from '@mui/icons-material/Replay';
type CustomAddEditButtons = {
  action: () => void;
  action2: () => void;
};

const CustomAddEditButtons: React.FC<CustomAddEditButtons> = ({action, action2}) => {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab color="primary" aria-label="add" onClick={action} size="large">
            <AddIcon />
          </Fab>
          <Fab color="secondary" variant="circular" aria-label="edit" onClick={action2}>
            <ReplayIcon />
          </Fab>
        </Box>
      );
};

export default CustomAddEditButtons;
