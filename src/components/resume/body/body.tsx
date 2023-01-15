import React from "react";
import Grid from "@mui/material/Grid";
import { Item } from "./item";
import { Summary } from "./summary";

export function Body() {
  return (
    <Grid container spacing={1}>
      <Item title="Summary">
        <Summary />
      </Item>
    </Grid>
  );
}
