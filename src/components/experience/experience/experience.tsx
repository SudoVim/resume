import React from "react";
import { useSelector } from "react-redux";
import { Typography, useTheme } from "@mui/material";
import { Column, EventTitle } from "components/utils";
import { Role } from "./role";
import { selectors } from "features";
import { Link } from "react-router-dom";

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

  const { key, company, tenure, description, roles } = experience;
  return (
    <Column>
      <Link
        to={`/experience/${key}`}
        style={{
          textDecoration: "none",
          color: theme.palette.text.primary,
        }}
      >
        <EventTitle event={company} tenure={tenure} bold />
      </Link>
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
