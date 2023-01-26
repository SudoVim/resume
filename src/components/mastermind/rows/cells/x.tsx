import React from "react";
import { Box, Typography } from "@mui/material";
import { BorderedCell } from "../cells";

export function XCell() {
  return (
    <BorderedCell>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" sx={{ fontSize: 30 }}>
          ✖
        </Typography>
      </Box>
    </BorderedCell>
  );
}
