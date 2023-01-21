import React from "react";
import { Box } from "@mui/material";

type Props = {
  width: any;
  children: React.ReactNode;
};

export function HorizontalWidth({ width, children }: Props) {
  return <Box sx={{ width }}>{children}</Box>;
}
