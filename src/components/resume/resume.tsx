import React from "react";
import Grid from "@mui/material/Grid";
import { Divider } from "./divider";
import { Heading } from "./heading";
import { Body } from "./body";

export function Resume() {
  return (
    <Grid container spacing={2}>
      {/* Heading should be on a line of its own with some padding on either side */}
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Heading />
      </Grid>
      <Grid item xs={2} />

      <Divider />

      {/* The body will take up the full width */}
      <Grid item xs={12}>
        <Body />
      </Grid>
    </Grid>
  );
}
