import React from "react";
import { Box, BoxProps } from "@mui/material";

export type Props = BoxProps;

export function Cell(props: Props) {
  return (
    <Box
      {...props}
      sx={{
        ...props.sx,
        width: "50px",
        height: "50px",
        m: "5px",
      }}
    />
  );
}
