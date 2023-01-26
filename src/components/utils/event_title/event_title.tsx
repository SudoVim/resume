import React from "react";
import { useTheme, Box, Typography } from "@mui/material";

type Props = {
  event: string;
  tenure?: string;
  bold?: boolean;
};

export function EventTitle({ event, tenure, bold }: Props) {
  const theme = useTheme();
  const fontWeight = bold ? "bold" : undefined;
  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
        borderBottom: `1px dashed ${theme.palette.text.secondary}`,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight,
          fontFamily: "monospace",
        }}
      >
        {event}
      </Typography>
      {tenure ? (
        <Typography
          variant="body1"
          sx={{
            ml: 1,
            fontFamily: "monospace",
          }}
        >
          ({tenure})
        </Typography>
      ) : null}
    </Box>
  );
}
