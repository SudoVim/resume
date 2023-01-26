import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { selectors } from "features";
import { TileCell } from "./tile_cell";
import { QuestionCell, BlankCell, XCell, CheckCell, ResetCell } from "./cells";

export function AnswerRow() {
  const mastermind = useSelector(selectors.mastermind.mastermind);

  if (!mastermind.board) {
    throw new Error("mastermind not initialized");
  }

  const { finished } = mastermind;
  const line = mastermind.board.answer;
  const cells: React.ReactNode[] = [];
  for (let i = 0; i < mastermind.lineWidth; i++) {
    if (!finished) {
      cells.push(<QuestionCell key={i} />);
    } else {
      cells.push(<TileCell key={i} line={line} index={i} />);
    }
  }

  const { success } = mastermind;
  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
      }}
    >
      <Box sx={{ pr: 2 }}>
        <ResetCell />
      </Box>
      {cells}
      {!finished ? <BlankCell /> : success ? <CheckCell /> : <XCell />}
    </Box>
  );
}
