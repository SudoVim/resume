import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Resume } from "components/resume";

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
      <Resume />
    </Box>
  );
}

export default App;
