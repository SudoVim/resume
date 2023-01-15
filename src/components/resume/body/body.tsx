import React from "react";
import Grid from "@mui/material/Grid";
import { Item } from "./item";
import { Summary } from "./summary";
import { Skills } from "./skills";
import Divider from "@mui/material/Divider";

export function Body() {
  return (
    <Grid container spacing={2}>
      <Item title="Summary" href="/summary">
        <Summary />
      </Item>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Item title="Skills" href="/skills">
        <Skills />
      </Item>
    </Grid>
  );
}
