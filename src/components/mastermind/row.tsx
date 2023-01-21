import React from "react";
import { useSelector } from "react-redux";
import { Box, useTheme } from "@mui/material";
import { selectors } from "features";
import { MastermindTry } from "features/mastermind/types";

type Props = {
  index: number;
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
    </Box>
  );
}
