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
      <Divider title="Summary" href="/summary" />

      <Item>
        <Summary />
      </Item>

      <Divider title="Skills" href="/skills" />

      <Item>
        <Skills />
      </Item>

      <Divider title="Experience" href="/experience" />

      <Item>
        <ExperienceList />
      </Item>

      <Divider title="Education" href="/education" />

      <Item>
        <Education />
      </Item>
    </Grid>
  );
}
