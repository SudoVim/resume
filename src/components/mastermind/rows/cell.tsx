import React from "react";
import { Box, useTheme } from "@mui/material";
import { MastermindTry } from "features/mastermind/types";

type Props = {
  userTry?: MastermindTry;
  index: number;
};

export function Cell({ userTry, index }: Props) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "50px",
        height: "50px",
        borderRadius: "5px",
        m: "5px",
        border: `2px solid ${theme.palette.text.secondary}`,
      }}
    >
      {/* TODO: Determine which tile to display (or not) */}
    </Box>
  );
}
