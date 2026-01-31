import React from "react";
import { Grid } from "@mui/material";

type Props = {
  children: React.ReactNode[];
  spacing?: any;
};

export function Column({ children, spacing }: Props) {
  return (
    <Grid container spacing={spacing !== undefined ? spacing : 2}>
      {children
        ?.filter((child) => Boolean(child))
        .map((child, i) => (
          <Grid key={i} size={12}>
            {child}
          </Grid>
        ))}
    </Grid>
  );
}
