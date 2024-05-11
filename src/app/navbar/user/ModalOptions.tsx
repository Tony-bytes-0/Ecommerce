import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import { Box, Grid, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
const options = [
  { id: 1, href: "/", label: "Panel de usuario", icon: <PersonIcon /> },

  { id: 2, href: "/", label: "Desconectar", icon: <LogoutIcon /> },
  //{id: 2 , href: '', label:''},
  //{id: 2 , href: '', label:''},
];

type ChildComponentProps = {
    handleLoggout: () => void;
    handleLogin: () => void;
    user: any;
    logged: boolean;
   };

const ModalOptions: React.FC<ChildComponentProps> = ({handleLoggout, user, logged, handleLogin}) => {
    const execute = (id: number) => {
        if(id == 2){
            handleLoggout()
        }
    }
  return (
    <>
      {logged ? (
        <Accordion>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <Typography
              fontSize={15}
              textAlign={"center"}
              style={{ overflowWrap: "break-word" }}
            >
              {user}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {options.map((e) => (
              <Link key={e.id} href={e.href}>
                <IconButton onClick={() => execute(e.id)}>
                  {e.icon}
                  <Typography fontSize={12}>{e.label}</Typography>
                </IconButton>
              </Link>
            ))}
          </AccordionDetails>
        </Accordion>
      ) : (
        <Grid container alignContent={'center'} alignItems={'center'}>
        <IconButton onClick={handleLogin}>
            <Typography>
                Ingresar
            </Typography>
        </IconButton>
        </Grid>
      )}
    </>
  );
}

export default ModalOptions;