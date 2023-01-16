import React from "react";
import { Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export function Responsibility({ children }: Props) {
  return (
    <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
      {children}
    </Typography>
  );
}
