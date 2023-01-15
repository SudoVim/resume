import React from "react";
import { Skill as SkillType } from "features/skills/skill";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

type Props = {
  skill: SkillType;
};

export function Skill({ skill }: Props) {
  return (
    <Grid item xs={4}>
      <ul>
        <li>
          <Typography variant="body1">{skill.name}</Typography>
        </li>
      </ul>
    </Grid>
  );
}
