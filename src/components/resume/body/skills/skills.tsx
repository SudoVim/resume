import React from "react";
import { skills } from "features/skills";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export function Skills() {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      {skills.map((skill) => (
        <Grid item key={skill.key} xs={4}>
          <ul>
            <li>
              <Link
                to={`/skills/${skill.key}`}
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                }}
              >
                <Typography variant="body1">{skill.name}</Typography>
              </Link>
            </li>
          </ul>
        </Grid>
      ))}
    </Grid>
  );
}
