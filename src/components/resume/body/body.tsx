import React from "react";
import { Grid } from "@mui/material";
import { Item } from "./item";
import { Summary } from "components/summary";
import { Skills } from "components/skills";
import { Experience } from "components/experience";
import { Divider } from "./divider";

export function Body() {
  return (
    <Grid container spacing={2}>
      <Item title="Summary" href="/summary">
        <Summary />
      </Item>

      <Divider />

      <Item title="Skills" href="/skills">
        <Skills />
      </Item>

      <Divider />

      <Item title="Experience" href="/experience">
        <Experience />
      </Item>
    </Grid>
  );
}
