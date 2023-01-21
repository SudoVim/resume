import React from "react";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export function HorizontalCenter({ children }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
}

export const HC = HorizontalCenter;
