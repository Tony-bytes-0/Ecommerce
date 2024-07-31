import { useState } from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DrawerComponent from "./DrawerComponent";
import CloseIcon from "@mui/icons-material/Close";

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

const DrawerLeft: React.FC = ({}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    console.log('se llamo a toggle drawer')
    setOpen(newOpen);
  };
  return (
    <>
          <Drawer open={open} onClose={() => toggleDrawer(false)}>


        
      </Drawer>
      <Box sx={buttonStyles}>
        <IconButton onClick={toggleDrawer(true)}>
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </Box>
      <DrawerComponent />
    </>
  );
};

export default DrawerLeft;
