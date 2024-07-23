import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import CategoryIcon from "@mui/icons-material/Category";
import LabelIcon from "@mui/icons-material/Label";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Typography } from "@mui/material";

type DrawerLeftTypes = {
  drawerState: boolean;
  handler: (arg0: boolean) => void;
  userPanelState: boolean;
  toggleUserPanel: (arg0: boolean) => void;
};

const DrawerLeft: React.FC<DrawerLeftTypes> = ({ drawerState, handler, toggleUserPanel, userPanelState }) => {
  const options = [
    {
      id: 0,
      name: "Usuarios",
      navigator: () => toggleUserPanel(!userPanelState),
      icon: <PersonIcon />,
    },
    {
      id: 1,
      name: "Categorias",
      navigator: () => console.log("usuarios navigator"),
      icon: <LabelIcon />,
    },
    {
      id: 2,
      name: "Productos",
      navigator: () => console.log("usuarios navigator"),
      icon: <CategoryIcon />,
    },
  ];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => handler(false)}>
      <List>
        {options.map((e) => (
          <ListItem key={e.id}>
            <ListItemButton onClick={e.navigator}>
              <ListItemIcon>{e.icon}</ListItemIcon>
              <Typography fontSize={20}>{e.name}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer open={drawerState} onClose={() => handler(false)}>
      <Box
        sx={{
          background: "#b11111",
          justifyItems: "end",
          display: "flex",
        }}
      >
        <Box>
          <IconButton onClick={() => handler(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      {DrawerList}
    </Drawer>
  );
};
export default DrawerLeft;
