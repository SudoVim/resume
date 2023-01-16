import React from "react";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  href: string;
  children: React.ReactNode;
};

export function Item({ title, href, children }: Props) {
  const theme = useTheme();
  return (
    <>
      <Grid item xs={2}>
        <Link
          to={href}
          style={{
            textDecoration: "none",
            color: theme.palette.text.primary,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "monospace",
            }}
          >
            {title}
          </Typography>
        </Link>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {children}
      </Grid>
    </>
  );
}
