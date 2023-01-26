import React from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import { useTheme } from "@mui/material";

export function Link(props: LinkProps) {
  const theme = useTheme();
  return (
    <RouterLink
      {...props}
      style={{
        textDecoration: "none",
        fontFamily: "monospace",
        color: theme.palette.text.primary,
        ...props.style,
      }}
    />
  );
}
