import React from "react";
import { Grid, Typography, Box } from "@mui/material";
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
        <ExternalLink href="mailto:michaelarenken@gmail.com?subject=Job opportunity">
          michaelarenken@gmail.com
        </ExternalLink>
      </Item>
      <Item>
        <ExternalLink href="https://www.linkedin.com/in/michael-renken-71184015/">
          https://www.linkedin.com/in/michael-renken-71184015/
        </ExternalLink>
      </Item>
      <Item>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            columnGap: 1,
          }}
        >
          <Typography variant="body2" fontFamily="monospace">
            Source:
          </Typography>
          <ExternalLink href="https://github.com/SudoVim/resume">
            https://github.com/SudoVim/resume
          </ExternalLink>
        </Box>
      </Item>
    </Grid>
  );
}
