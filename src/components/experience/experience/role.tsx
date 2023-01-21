import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { Responsibilities } from "./responsibilities";
import { Role as RoleType } from "features/experience/types";

type Props = {
  role: RoleType;
};

export function Role({ role }: Props) {
  const { name, tenure, description, responsibilities } = role;
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          direction: "row",
          borderBottom: `1px dashed ${theme.palette.text.secondary}`,
        }}
      >
        <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
          {name}
        </Typography>
        {tenure ? (
          <Typography variant="body1" sx={{ ml: 1, fontFamily: "monospace" }}>
            ({tenure})
          </Typography>
        ) : null}
      </Box>
      {description ? (
        <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
          {description}
        </Typography>
      ) : null}
      {responsibilities ? (
        <Responsibilities responsibilities={responsibilities} />
      ) : null}
    </>
  );
}
