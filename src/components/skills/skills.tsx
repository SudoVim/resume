import React from "react";
import { skills } from "features/skills";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "components/utils";
import { useTheme } from "@mui/material/styles";

export function Skills() {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      {skills.map((skill) => (
        <Grid item key={skill.key} xs={4}>
          <Box
            sx={{
              borderBottom: `1px dashed ${theme.palette.text.secondary}`,
            }}
          >
            <Link to={`/skills/${skill.key}`}>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "monospace",
                }}
              >
                {skill.name}
              </Typography>
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
