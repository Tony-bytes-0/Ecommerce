import { Button, ButtonGroup, Grid } from "@mui/material";


const AddProduct: React.FC<{handleOpen: () => void; updateFetchFunction: () => void;}> = ({handleOpen, updateFetchFunction}) => {
    return(
        <Grid item xs={12}>
            <ButtonGroup variant="contained" sx={{flexDirection:'row', padding: 5}} fullWidth >
                <Button onClick={() => handleOpen()} sx={{padding:2}}  color="success">Añadir un producto</Button>
                <Button onClick={() => updateFetchFunction()} sx={{padding:2}}>Refrescar lista</Button>
            </ButtonGroup>
        </Grid>
    )
}

export default AddProduct;