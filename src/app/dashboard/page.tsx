"use client";
import { Box } from "@mui/material";
import React from "react";
import { baseDashboardContainer } from "../types/common";

const baseContainer = baseDashboardContainer;

const Dashboard: React.FC = ({}) => {

  return (
<Box sx={baseContainer}>dashboard</Box>
  );
};

export default Dashboard;
