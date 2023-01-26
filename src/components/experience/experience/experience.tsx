import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Link, Column, EventTitle } from "components/utils";
import { Role } from "./role";
import { selectors } from "features";

type Props = {
  experienceKey: string;
};

export function Experience({ experienceKey }: Props) {
  const experience = useSelector(selectors.experience.experienceByKey)[
    experienceKey
  ];
  if (!experience) {
    throw new Error(`experience ${experienceKey} not found`);
  }

  const { key, company, tenure, description, roles } = experience;
  return (
    <Column>
      <Link to={`/experience/${key}`}>
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
