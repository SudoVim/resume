import React from "react";
import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import { selectors } from "features";
import { MastermindTry } from "features/mastermind/types";
import { HC } from "components/utils";
import { ResultCell } from "./result";

type Props = {
  userTry?: MastermindTry;
};

export function ResultsCell({ userTry }: Props) {
  const mastermind = useSelector(selectors.mastermind.mastermind);

  const correctCells: React.ReactNode[] = [];
  const closeCells: React.ReactNode[] = [];
  const emptyCells: React.ReactNode[] = [];

  if (userTry) {
    for (let i = 0; i < userTry.numCorrect; i++) {
      correctCells.push(<ResultCell key={`correct-${i}`} type="correct" />);
    }

    for (let i = 0; i < userTry.numClose; i++) {
      closeCells.push(<ResultCell key={`close-${i}`} type="close" />);
    }
  }

  const numEmpty = userTry
    ? mastermind.lineWidth - userTry.numCorrect - userTry.numClose
    : mastermind.lineWidth;
  for (let i = 0; i < numEmpty; i++) {
    emptyCells.push(<ResultCell key={`empty-${i}`} type="empty" />);
  }

  return (
    <Box
      sx={{
        width: "50px",
        height: "50px",
        m: "5px",
      }}
    >
      <HC>
        <Grid container>
          {correctCells}
          {closeCells}
          {emptyCells}
        </Grid>
      </HC>
    </Box>
  );
}
