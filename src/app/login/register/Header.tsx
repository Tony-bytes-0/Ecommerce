import { globalStyle } from "@/app/types/common"
import { Grid, Typography } from "@mui/material"
import { FC } from "react";


const Header: FC = () => {
    return (<Grid item xs = {12}>
              <Typography
        style={globalStyle}
        textAlign={"center"}
        sx={{ color: "#FFFFFF" }}
        fontSize={35}
        padding={5}
      >
        {" "}
        <b>Crea una cuenta nueva para comenzar</b>
      </Typography>
    </Grid>)
}

export default Header;