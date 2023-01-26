import React from "react";
import { Link } from "../link";
import { Typography, Breadcrumbs, Box } from "@mui/material";

export type Breadcrumb = {
  name: string;
  to?: string;
};

export type Props = {
  title: React.ReactNode;
  breadcrumbs: Breadcrumb[];
  children: React.ReactNode;
};

export function Subpage({ title, breadcrumbs, children }: Props) {
  return (
    <Box>
      <Breadcrumbs>
        {breadcrumbs.map(({ name, to }) => {
          if (!to) {
            return (
              <Typography
                variant="body1"
                key={name}
                sx={{
                  fontFamily: "monospace",
                }}
              >
                {name}
              </Typography>
            );
          }

          return (
            <Link
              to={to}
              key={name}
              style={{ paddingLeft: 2, textDecoration: "underline" }}
            >
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
      <Typography variant="h4" sx={{ pt: 1, fontFamily: "monospace" }}>
        {title}
      </Typography>
      <Box sx={{ pt: 2 }}>{children}</Box>
    </Box>
  );
}
