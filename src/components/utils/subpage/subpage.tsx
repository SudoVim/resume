import React from "react";
import { Link } from "react-router-dom";
import { useTheme, Typography, Breadcrumbs, Box } from "@mui/material";

export type Breadcrumb = {
  name: string;
  to?: string;
};

export type Props = {
  title: string;
  breadcrumbs: Breadcrumb[];
  children: React.ReactNode;
};

export function Subpage({ title, breadcrumbs, children }: Props) {
  const theme = useTheme();
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
              style={{
                color: theme.palette.text.primary,
                cursor: "pointer",
                paddingLeft: 2,
                fontFamily: "monospace",
              }}
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
