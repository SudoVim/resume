import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "800px",
          background: theme.palette.background.paper,
          margin: 2,
          padding: 2,
          border: `1px solid ${theme.palette.text.secondary}`,
          borderRadius: 2,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4">Michael Renken</Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body1">
              michaelrenken@protonmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Link href="https://www.linkedin.com/in/michael-renken-71184015/">
              https://www.linkedin.com/in/michael-renken-71184015/
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
