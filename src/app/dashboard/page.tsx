"use client";
import { useAppSelector } from "@/lib/hooks";
import { Box, Button, Grid, IconButton, Slide } from "@mui/material";
import DrawerLeft from "../navbar/drawerLeft/DrawerComponent";
import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { baseDashboardContainer } from "../types/common";

const baseContainer = baseDashboardContainer;

const Dashboard: React.FC = ({}) => {
  const token = useAppSelector((state) => state.sesionToken);

  return (
<Box sx={baseContainer}>dashboards</Box>
  );
};

export default Dashboard;
