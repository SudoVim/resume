import React from "react";
import { Grid } from "@mui/material";
import { Item } from "./item";
import { Summary } from "components/summary";
import { Skills } from "components/skills";
import { ExperienceList } from "components/experience";
import { Education } from "components/education";
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
        <ExperienceList />
      </Item>

      <Divider />

      <Item title="Education" href="/education">
        <Education />
      </Item>
    </Grid>
  );
}
