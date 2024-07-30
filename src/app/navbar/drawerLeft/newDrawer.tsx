import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import CategoryIcon from "@mui/icons-material/Category";
import LabelIcon from "@mui/icons-material/Label";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/navigation";

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

const closebuttonStyles = {
  background: "#f1f1f1",
  display: "flex",
  //justifyContent: "flex-end",
  alignItems: "center",
  paddingLeft: 3,
};

type menuOption = {
  id: number;
  name: string;
  navigator: () => void;
  icon: any;
};

const IterateOptions: React.FC<menuOption> = ({
  id,
  name,
  navigator,
  icon,
}) => {
  return (
    <ListItem key={id}>
      <ListItemButton onClick={navigator}>
        <ListItemIcon>{icon}</ListItemIcon>
        <Typography fontSize={16}>{name}</Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default function DrawerLeftNew() {
  const router = useRouter();
  const handleNavigate = (route: string) => {
    router.replace(route);
  };
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const userOptions: menuOption[] = [
    {
      id: 0,
      name: "Listar usuarios",
      navigator: () => handleNavigate("/dashboard/userList"),
      icon: <PersonIcon />,
    },
    {
      id: 1,
      name: "Crear usuario",
      navigator: () => handleNavigate("/dashboard/userRegister"),
      icon: <PersonIcon />,
    },
  ];
  const productOptions = [
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

  return (
    <div>
      <Box sx={buttonStyles}>
        <IconButton onClick={toggleDrawer(true)}>
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </Box>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={closebuttonStyles}>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem>
            <Typography fontSize={16}><b>Usuarios</b></Typography>
          </ListItem>
          {userOptions.map((e) => (
            <IterateOptions
              key={e.id}
              id={e.id}
              name={e.name}
              navigator={e.navigator}
              icon={e.icon}
            />
          ))}
        </List>
        <Divider />
        {/* {userEndpointsList} */}
      </Drawer>
    </div>
  );
}
