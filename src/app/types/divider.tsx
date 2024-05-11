import { Grid } from "@mui/material";

const styles = {
  borderColor: "rgb(59, 53, 64)",
  borderStyle: "solid",
  borderWidth: 3,
  borderLeft: 0,
  borderRight: 0,
  borderTop: 0,
  //height:'10%',
};

const Divider = (props: { /* opacity: boolean; */ xs: number }) => {
  return <Grid item xs={props.xs} sx={styles}></Grid>;
};

export default Divider;
