import React from "react";
import { Grid } from "@mui/material";
import { Heading } from "./heading";
import { Body } from "./body";

export function Resume() {
  return (
    <Grid container spacing={2}>
      {/* Heading should be on a line of its own with some padding on either side */}
      <Grid size={2} />
      <Grid size={8}>
        <Heading />
      </Grid>
      <Grid size={2} />

      {/* The body will take up the full width */}
      <Grid size={12}>
        <Body />
      </Grid>
    </Grid>
  );
}
