import React from "react";
import { Grid, Typography, Link } from "@mui/material";
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
        <Link
          href="mailto:michaelrenken@protonmail.com?subject=Job opportunity"
          sx={{
            textDecoration: "none",
          }}
        >
          michaelrenken@protonmail.com
        </Link>
      </Item>
      <Item>
        <Link
          href="https://www.linkedin.com/in/michael-renken-71184015/"
          sx={{
            textDecoration: "none",
          }}
        >
          https://www.linkedin.com/in/michael-renken-71184015/
        </Link>
      </Item>
    </Grid>
  );
}
