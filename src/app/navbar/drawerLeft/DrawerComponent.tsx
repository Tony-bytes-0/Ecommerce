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

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";



const DrawerComponent: React.FC = ({}) => {
  const router = useRouter();
  const handleNavigate = (route: string) => {
    router.push(route);
  };
  const options = [
    {
      id: 0,
      name: "Listar usuarios",
      navigator: () => handleNavigate("/user_register"),
      icon: <PersonIcon />,
    },
    {
      id: 1,
      name: "Crear usuario",
      navigator: () => handleNavigate("/user_register"),
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
  return(
/*     <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    > */
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
  );
};
export default DrawerComponent;
