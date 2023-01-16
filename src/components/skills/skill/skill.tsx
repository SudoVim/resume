import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { selectors } from "features";

type Prop = {
  skillKey: string;
};

export function Skill({ skillKey }: Prop) {
  const skillsByKey = useSelector(selectors.skills.skillsByKey);
  const skill = skillsByKey[skillKey];
  if (!skill) {
    return null;
  }

  return (
    <Grid container spacing={2} sx={{ width: "600px" }}>
      {skill.description.split("\n\n").map((paragraph, i) => (
        <Grid item key={i}>
          {i !== 0 ? <br /> : null}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "monospace",
            }}
          >
            {paragraph}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
