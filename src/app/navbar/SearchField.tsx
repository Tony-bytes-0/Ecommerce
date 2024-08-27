import { Box, Grid, Modal, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchField(props: {size: number, windowSize: {width: number, height: number}}) {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };
  const modalClases =
    "fixed flex w-full h-8 p-10 transition transform  delay-150 bg-slate-200 items-center justify-center";
  const fatherContainer = "flex items-center  p-2";
  const [search, setSearch] = useState("");
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setSearch(target.value);
  };
  return (
    <Grid item xs = {props.size}>
      {props.windowSize.width <= 800 ? (
        <Box className={fatherContainer}>
          <SearchIcon fontSize="large" onClick={handleShow} />
          <Modal open={show} onClose={handleClose}>
            <Box className={modalClases} >
              <TextField
              fullWidth
                type="text"
                value={search}
                onChange={handleSearch}
                variant="filled"
                className="min-w-full"
                //label="Busqueda"
              ></TextField>
            </Box>
          </Modal>
        </Box>
      ) : (
        <Box className={fatherContainer} display={'flex'} >
          <SearchIcon fontSize="medium" />
          <TextField
          sx={{ flexGrow: 0.9 }}
            type="text"
            value={search}
            onChange={handleSearch}
            variant="outlined"
            size="small"
            //label="Busqueda"
          />
        </Box>
      )}
    </Grid>
  );
}

export default SearchField;
