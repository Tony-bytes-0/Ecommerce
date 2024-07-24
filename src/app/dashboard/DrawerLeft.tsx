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
import { useRouter } from "next/navigation";
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
const DrawerLeft: React.FC = ({}) => {
  const router = useRouter()
  const handleNavigate = (route: string) => {
    router.push(route)
  }
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const options = [
    {
      id: 0,
      name: "Listar usuarios",
      navigator: () => handleNavigate('/user_register'),
      icon: <PersonIcon />,
    },
    {
      id: 1,
      name: "Crear usuario",
      navigator: () => handleNavigate('/user_register'),
      icon: <PersonIcon />,
    },
    {
      id: 11,
      name: "Categorias",
      navigator: () => console.log("usuarios navigator"),
      icon: <LabelIcon />,
    },
    {
      id: 21,
      name: "Productos",
      navigator: () => console.log("usuarios navigator"),
      icon: <CategoryIcon />,
    },
  ];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
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
    <Drawer open={open} onClose={() => toggleDrawer(false)}>
              <Box sx={buttonStyles}>
          <IconButton onClick={toggleDrawer(true)}>
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>
      <Box
        sx={{
          background: "#b11111",
          justifyItems: "end",
          display: "flex",
        }}
      >
        <Box>
          <IconButton onClick={() => toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      {DrawerList}
    </Drawer>
  );
};
export default DrawerLeft;
