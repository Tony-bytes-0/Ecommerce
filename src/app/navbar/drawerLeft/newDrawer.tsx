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
import CategoryIcon from "@mui/icons-material/Category";
import LabelIcon from "@mui/icons-material/Label";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/navigation";
import TitleDivider from "./TitleDivider";
import OpenSidebarButton from "./OpenSidebarButton";
import CloseSidebarButton from "./CloseSidebarButton";
import {OptionList} from "./optionList"

type menuOption = {
  name: string;
  navigator: () => void;
  icon: any;
};
interface optionList {
  user: 
}

const IterateOptions: React.FC<menuOption> = ({ name, navigator, icon }) => {
  return (
    <ListItem>
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
      <OpenSidebarButton handler={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
      <CloseSidebarButton handler={toggleDrawer(false)} />
        <List>
          <TitleDivider title={"Usuarios"} fontSize={16} />
          {userOptions.map((e, index) => (
            <IterateOptions
              key={index}
              name={e.name}
              navigator={e.navigator}
              icon={e.icon}
            />
          ))}
          <TitleDivider title={"Categorias"} fontSize={16} />
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
      </Drawer>
    </div>
  );
}
