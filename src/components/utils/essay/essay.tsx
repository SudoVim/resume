import React from "react";
import { Typography } from "@mui/material";
import { Column } from "../column";

type Props = {
  children: string;
};

export function Essay({ children }: Props) {
  return (
    <Column>
      {children.split("\n\n").map((paragraph, i) => (
        <Typography
          key={i}
          variant="body1"
          sx={{
            fontFamily: "monospace",
          }}
        >
          {paragraph}
        </Typography>
      ))}
    </Column>
  );
}
