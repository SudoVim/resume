import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { selectors } from "features";
import { ResultsCell } from "./results";
import { Cell } from "./cell";

type Props = {
  index: number;
};

export function Row({ index }: Props) {
  const mastermind = useSelector(selectors.mastermind.mastermind);
  const userTry = useSelector((state) =>
    selectors.mastermind.userTry(state, index)
  );

  const cells: React.ReactNode[] = [];
  for (let i = 0; i < mastermind.lineWidth; i++) {
    cells.push(<Cell key={i} userTry={userTry} index={i} />);
  }

  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
      }}
    >
      {cells}
      <ResultsCell userTry={userTry} />
    </Box>
  );
}
