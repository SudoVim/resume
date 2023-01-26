import React from "react";
import { Grid, Typography } from "@mui/material";
import { ExternalLink } from "components/utils";
import { Item } from "./item";

export function Heading() {
  return (
    <Grid container spacing={1}>
      <Item>
        <Typography variant="h4" fontFamily="monospace">
          Michael Renken
        </Typography>
      </Item>
      <Item>
        <ExternalLink href="mailto:michaelrenken@protonmail.com?subject=Job opportunity">
          michaelrenken@protonmail.com
        </ExternalLink>
      </Item>
      <Item>
        <ExternalLink href="https://www.linkedin.com/in/michael-renken-71184015/">
          https://www.linkedin.com/in/michael-renken-71184015/
        </ExternalLink>
      </Item>
    </Grid>
  );
}
