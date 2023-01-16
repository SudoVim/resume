import React from "react";
import { useSelector } from "react-redux";
import { Subpage } from "components/utils/subpage";
import { useParams } from "react-router-dom";
import { selectors } from "features";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export function Skill() {
  const params = useParams();
  const skillsByKey = useSelector(selectors.skills.skillsByKey);

  const { skillKey } = params;
  if (!skillKey) {
    return null;
  }

  const skill = skillsByKey[skillKey];
  return (
    <Subpage
      title={skill.name}
      breadcrumbs={[
        {
          name: "Resume",
          to: "/",
        },
        {
          name: "Skills",
          to: "/skills",
        },
        {
          name: skill.name,
        },
      ]}
    >
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
    </Subpage>
  );
}
