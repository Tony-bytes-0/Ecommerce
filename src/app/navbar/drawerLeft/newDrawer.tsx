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
  alignItems: "center",
  paddingLeft: 3,
};

type menuOption = {
  name: string;
  navigator: () => void;
  icon: any;
};

const IterateOptions: React.FC<menuOption> = ({
  name,
  navigator,
  icon,
}) => {
  return (
    <ListItem >
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
      name: "Listar usuarios",
      navigator: () => handleNavigate("/dashboard/user/userList"),
      icon: <PersonIcon />,
    },
    {
      name: "Crear usuario",
      navigator: () => handleNavigate("/dashboard/user/userRegister"),
      icon: <PersonIcon />,
    },
  ];
  const categoryOptions = [
    {
      name: "Ver categorias",
      navigator: () => handleNavigate("/dashboard/category/categoryList"),
      icon: <LabelIcon />,
    },
    {
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
            <Typography fontSize={16}>
              <b>Usuarios</b>
            </Typography>
          </ListItem>
          <Divider />
          {userOptions.map((e,index) => (
            <IterateOptions
              key={index}
              name={e.name}
              navigator={e.navigator}
              icon={e.icon}
            />
          ))}
          <Divider />
          <ListItem>
            <Typography fontSize={16}>
              <b>Categorias</b>
            </Typography>
          </ListItem>
          {categoryOptions.map((e, index) => (
            <IterateOptions 
            key={index}
            name={e.name}
            icon={e.icon}
            navigator={e.navigator}
            />
          ))}
          <Divider />
        </List>
        {/* {userEndpointsList} */}
      </Drawer>
    </div>
  );
}
