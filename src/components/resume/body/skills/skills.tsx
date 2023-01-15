import React from "react";
import { skills } from "features/skills";
import Grid from "@mui/material/Grid";
import { Skill } from "./skill";

export function Skills() {
  return (
    <Grid container spacing={2}>
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </Grid>
  );
}
