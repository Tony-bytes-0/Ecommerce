

import { Grid, Slide } from "@mui/material";

const ListUsersDashboard: React.FC<{open: boolean}> = ({open}) => {
    return (
        <Slide
        in={open}
        container={null}
        direction="left"
        mountOnEnter
        unmountOnExit
      >
        <Grid item xs = {12}>
añlsjdlkasdlñajsdñljalksdjlaksjdlkajsdlkñajsdlkjs
        </Grid>
        </Slide>
    )
}

export default ListUsersDashboard;