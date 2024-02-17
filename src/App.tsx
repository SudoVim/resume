import React from "react";
import { Box, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { HC } from "components/utils";

export function App() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: theme.palette.background.default,
      }}
    >
      <HC>
        <Box
          sx={{
            background: theme.palette.background.paper,
            margin: 2,
            padding: 2,
            border: `1px solid ${theme.palette.text.secondary}`,
            borderRadius: 2,
            fontFamily: "monospace",
            width: "1200px",
          }}
        >
          <Outlet />
        </Box>
      </HC>
    </Box>
  );
}
