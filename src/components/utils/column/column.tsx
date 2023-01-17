import React from "react";
import { Grid } from "@mui/material";

type Props = {
  children: React.ReactNode[];
};

export function Column({ children }: Props) {
  return (
    <Grid container spacing={2}>
      {children?.map((child) => (
        <Grid item xs={12}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
}
