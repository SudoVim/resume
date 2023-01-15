import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";

export type Breadcrumb = {
  name: string;
  to?: string;
};

type Props = {
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
              <Typography variant="body1" key={name}>
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
              }}
            >
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
      <Typography variant="h4" sx={{ pt: 1 }}>
        {title}
      </Typography>
      <Box sx={{ pt: 2 }}>{children}</Box>
    </Box>
  );
}
