import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export function Summary() {
  const theme = useTheme();
  return (
    <Typography
      variant="body1"
      fontFamily="monospace"
      sx={{
        borderBottom: `1px dashed ${theme.palette.text.secondary}`,
      }}
    >
      In my twelve-year career as a software engineer, I have consistently taken
      requirements, no matter how vague, and turned them into well-designed,
      well-implemented, and well-maintained results. I have taken on all
      possible roles during my tenure - as an individual contributor in quality
      assurance, devops, and good old-fashioned programming to a technical lead
      that not only understands the responsibility of those on my team but can
      take over for them at a moment's notice.
    </Typography>
  );
}
