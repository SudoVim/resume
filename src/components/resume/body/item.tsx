import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Item({ title, children }: Props) {
  const theme = useTheme();
  return (
    <>
      <Grid item xs={2}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: `1px dashed ${theme.palette.text.secondary}`,
        }}
      >
        {children}
      </Grid>
    </>
  );
}
