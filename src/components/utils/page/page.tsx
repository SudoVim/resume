import React from "react";
import { Box, useTheme } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export function Page({ children }: Props) {
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
        {children}
      </Box>
    </Box>
  );
}
