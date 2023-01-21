import React from "react";
import { useSelector } from "react-redux";
import { Box, useTheme, Grid } from "@mui/material";
import { selectors } from "features";
import { MastermindTry } from "features/mastermind/types";
import { HC } from "components/utils";

type Props = {
  index: number;
};

const COLORS = {
  correct: "#d32f2f",
  close: "#fff",
  tiles: [
    "#f44336",
    "#ff9800",
    "#2196f3",
    "#4caf50",
    "rgba(0, 0, 0, 0.54)",
    "rgb(95, 95, 96)",
  ],
};

export function Cell({
  userTry,
  index,
}: {
  userTry: MastermindTry | undefined;
  index: number;
}) {
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

export function ResultCell({ type }: { type: "empty" | "correct" | "close" }) {
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

export function ResultsCell({
  userTry,
}: {
  userTry: MastermindTry | undefined;
}) {
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
