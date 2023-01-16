import React from "react";
import { Grid, Box, Typography, useTheme } from "@mui/material";

type Props = {
  role: string;
  tenure: string;
  children: React.ReactNode;
};

export function SubItem({ role, tenure, children }: Props) {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            borderBottom: `1px dashed ${theme.palette.text.secondary}`,
          }}
        >
          <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
            {role}
          </Typography>
          <Typography variant="body1" sx={{ ml: 1, fontFamily: "monospace" }}>
            ({tenure})
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}
