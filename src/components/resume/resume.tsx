import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import { Heading } from "./heading";
import { Body } from "./body";

export function Resume() {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.palette.background.paper,
        margin: 2,
        padding: 2,
        border: `1px solid ${theme.palette.text.secondary}`,
        borderRadius: 2,
        fontFamily: "monospace",
        maxWidth: "1200px",
      }}
    >
      {/* Heading should be on a line of its own with some padding on either side */}
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Heading />
      </Grid>
      <Grid item xs={2} />

      <Grid item xs={12}>
        <Divider />
      </Grid>

      {/* The body will take up the full width */}
      <Grid item xs={12}>
        <Body />
      </Grid>
    </Grid>
  );
}
