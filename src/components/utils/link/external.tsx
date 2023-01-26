import React from "react";
import { Link } from "@mui/material";

export function ExternalLink(props: any) {
  return (
    <Link
      sx={{
        ...(props?.sx || {}),
        textDecoration: "none",
      }}
      {...props}
    />
  );
}
