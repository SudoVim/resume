import React from "react";
import { skills as defaultSkills } from "features/skills";
import { Skill } from "features/skills/types";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "components/utils";
import { useTheme } from "@mui/material/styles";

type Props = {
  skills?: Skill[];
};

export function Skills({ skills }: Props) {
  const theme = useTheme();
  const skillsToUse = skills ?? defaultSkills;
  return (
    <Grid container spacing={2} sx={{ width: "100%" }}>
      {skillsToUse.map((skill) => (
        <Grid key={skill.key} size={4}>
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
