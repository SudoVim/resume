import React from "react";
import { Grid, Divider as MUIDivider, Typography } from "@mui/material";
import { Link } from "components/utils";

export type Props = {
  title: string;
  href: string;
};

export function Divider({ title, href }: Props) {
  return (
    <Grid item xs={12}>
      <MUIDivider textAlign="left" sx={{ pt: 2 }}>
        <Link to={href}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "monospace",
              fontWeight: "bold",
              fontSize: 24,
            }}
          >
            {`< ${title} >`}
          </Typography>
        </Link>
      </MUIDivider>
    </Grid>
  );
}
