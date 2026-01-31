import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "components/utils";

type Props = {
  children: React.ReactNode;
};

export function Item({ children }: Props) {
  return (
    <Grid
      size={12}
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {children}
    </Grid>
  );
}
