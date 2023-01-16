import React from "react";
import { Grid, Divider } from "@mui/material";
import { Item } from "./item";
import { Summary } from "components/summary";
import { Skills } from "components/skills";

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
