import React from "react";
import { Grid } from "@mui/material";

type Props = {
  children: React.ReactNode[];
  spacing?: any;
};

export function Column({ children, spacing }: Props) {
  return (
    <Grid container spacing={spacing !== undefined ? spacing : 2}>
      {children?.map((child) => (
        <Grid item xs={12}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
}
