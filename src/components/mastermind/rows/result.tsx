import React from "react";
import { useTheme, Grid } from "@mui/material";
import { COLORS } from "./utils";

type Props = {
  type: "empty" | "correct" | "close";
};

export function ResultCell({ type }: Props) {
  const theme = useTheme();
  const backgroundColor =
    type === "empty"
      ? undefined
      : type === "correct"
      ? COLORS.correct
      : COLORS.close;
  return (
    <Grid
      item
      xs={6}
      sx={{
        border: `2px solid ${theme.palette.text.secondary}`,
        borderRadius: "5px",
        backgroundColor,
        width: "25px",
        height: "25px",
      }}
    />
  );
}
