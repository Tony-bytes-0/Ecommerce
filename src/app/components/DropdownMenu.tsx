"use client"
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Grid, IconButton, Menu, MenuList, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

type Option = {
  id: number; label: string; function: () => void;
}

type DropdownOption = {
  options: Option[]
}

const DropdownMenuComponent: React.FC<DropdownOption> = ({ options }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (<Grid container xs={12} alignItems={'center'} justifyContent={'center'}>
      <IconButton onClick={handleClick}>
        <PersonIcon />
      </IconButton>
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >

      <MenuList id="navbarMenu">
        {options.map((option) => (
          <MenuItem key={option.id} onClick={option.function}>
            {/* <ListItemText primary={option.label} /> */}
            <Typography >{option.label}</Typography>
          </MenuItem>
        ))}
      </MenuList>

    </Menu>
  </Grid>
  );
}

export default DropdownMenuComponent;
