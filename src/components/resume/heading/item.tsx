import React from "react";
import { Grid, useTheme } from "@mui/material";

export function Item({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <>
      <Grid size={1} />
      <Grid
        size={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          borderBottom: `1px dashed ${theme.palette.text.secondary}`,
          paddingTop: 1,
          paddingBottom: 1,
        }}
      >
        {children}
      </Grid>
      <Grid size={1} />
    </>
  );
}
