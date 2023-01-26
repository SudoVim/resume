import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { selectors } from "features";
import { ResultsCell } from "./results";
import { TileCell } from "./tile_cell";
import { RowButton } from "./row_buttons";

type Props = {
  index: number;
};

export function Row({ index }: Props) {
  const mastermind = useSelector(selectors.mastermind.mastermind);

  if (!mastermind.board) {
    throw new Error("mastermind not initialized");
  }

  // Determine if there's a user's "try" on the specific line, if this is the
  // current line in play, or if the line should be completely blank. If the
  // line is blank, then "userTry" will be "undefined".
  const userTry = mastermind.board.board[index];
  const line =
    index === mastermind.board.board.length
      ? mastermind.currentPlay
      : userTry?.line;
  const cells: React.ReactNode[] = [];
  for (let i = 0; i < mastermind.lineWidth; i++) {
    cells.push(<TileCell key={i} line={line} index={i} />);
  }

  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
      }}
    >
      <Box sx={{ pr: 2 }}>
        <RowButton index={index} />
      </Box>
      {cells}
      <ResultsCell userTry={userTry} />
    </Box>
  );
}
