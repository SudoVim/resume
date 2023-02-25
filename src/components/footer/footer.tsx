import React from "react";
import { Box } from "@mui/material";
import { ExternalLink } from "components/utils";

export function Footer() {
  return (
    <Box>
      <ExternalLink
        target="_blank"
        href="https://icons8.com/icon/11256/services"
      >
        Services
      </ExternalLink>
      &nbsp;icon by&nbsp;
      <ExternalLink target="_blank" href="https://icons8.com">
        Icons8
      </ExternalLink>
    </Box>
  );
}
