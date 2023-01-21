import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, useTheme } from "@mui/material";
import { Column } from "components/utils";
import { Role } from "./role";
import { selectors } from "features";

type Props = {
  experienceKey: string;
};

export function Experience({ experienceKey }: Props) {
  const theme = useTheme();
  const experience = useSelector(selectors.experience.experienceByKey)[
    experienceKey
  ];
  if (!experience) {
    return null;
  }

  const { company, tenure, description, roles } = experience;
  return (
    <Column>
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
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          {company}
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
      {description ? (
        <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
          {description}
        </Typography>
      ) : null}
      {roles?.map((role, i) => (
        <Role key={i} role={role} />
      ))}
    </Column>
  );
}
