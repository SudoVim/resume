import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "components/utils";

type Props = {
  title: string;
  href: string;
  children: React.ReactNode;
};

export function Item({ title, href, children }: Props) {
  return (
    <>
      <Grid item xs={2}>
        <Link to={href}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "monospace",
              fontSize: 18,
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
