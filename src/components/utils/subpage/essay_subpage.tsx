import React from "react";
import { Box } from "@mui/material";
import { Subpage } from "components/utils/subpage";
import { Props } from "./subpage";

export function EssaySubpage(props: Props) {
  const children = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "600px" }}>{props.children}</Box>
    </Box>
  );
  return <Subpage {...props}>{children}</Subpage>;
}
