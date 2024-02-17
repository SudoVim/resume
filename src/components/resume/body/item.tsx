import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Link } from "components/utils";

type Props = {
  children: React.ReactNode;
};

export function Item({ children }: Props) {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ p: 1.5, width: "100%" }}>{children}</Box>
    </Grid>
  );
}
