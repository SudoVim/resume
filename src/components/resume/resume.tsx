import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Heading } from "./heading";

export function Resume() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.palette.background.paper,
        margin: 2,
        padding: 2,
        border: `1px solid ${theme.palette.text.secondary}`,
        borderRadius: 2,
        fontFamily: "monospace",
      }}
    >
      <Heading />
    </Box>
  );
}
