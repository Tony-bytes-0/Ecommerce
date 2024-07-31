import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {  Typography, List, Divider, ListItem, Drawer } from "@mui/material";
import { useRouter } from "next/navigation";
import TitleDivider from "./TitleDivider";
import OpenSidebarButton from "./OpenSidebarButton";
import CloseSidebarButton from "./CloseSidebarButton";
import { optionList } from "./optionList";
import { menuOption, MenuOptionList } from "./types";

export default function DrawerLeftNew() {
  const router = useRouter();
  const handleNavigate = (route: string) => {
    router.replace(route);
  };
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const menuOptionList: MenuOptionList = optionList;
  const IterateOptions: React.FC<menuOption> = ({ name, navigator, icon }) => {
    return (
      <ListItem>
        <ListItemButton onClick={() => handleNavigate(navigator)}>
          <ListItemIcon>{icon}</ListItemIcon>
          <Typography fontSize={16}>{name}</Typography>
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <div>
      <OpenSidebarButton handler={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <CloseSidebarButton handler={toggleDrawer(false)} />
        <List>
          <TitleDivider title={"Usuarios"} fontSize={16} />
          {menuOptionList.user.map((e, index) => (
            <IterateOptions
              key={index}
              name={e.name}
              navigator={e.navigator}
              icon={e.icon}
            />
          ))}
          <TitleDivider title={"Categorias"} fontSize={16} />
          
          {menuOptionList.category.map((e, index) => (
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
