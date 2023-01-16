import React from "react";
import { Grid } from "@mui/material";
import { IBMFlashSystems } from "./ibm_flashsystems";

export function Experience() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <IBMFlashSystems />
      </Grid>
    </Grid>
  );
}
