import { Button, ButtonGroup, Grid } from "@mui/material";


const AddCategory: React.FC<{handleOpen: () => void;}> = ({handleOpen}) => {
    return(
        <Grid item xs={12}>
            <ButtonGroup variant="contained" sx={{flexDirection:'row', padding: 5}} fullWidth >
                <Button onClick={() => handleOpen()} sx={{padding:2}}  color="success">Añadir una categoria</Button>
                <Button onClick={() => console.log('añadir')} sx={{padding:2}}>Refrescar lista</Button>
            </ButtonGroup>
        </Grid>
    )
}

export default AddCategory;