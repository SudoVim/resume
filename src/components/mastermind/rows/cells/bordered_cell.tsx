import React from "react";
import { useTheme } from "@mui/material";
import { Cell, Props } from "./cell";

export function BorderedCell(props: Props) {
  const theme = useTheme();
  return (
    <Cell
      {...props}
      sx={{
        ...props.sx,
        borderRadius: "5px",
        border: `2px solid ${theme.palette.text.secondary}`,
      }}
    />
  );
}
