import React from "react";
import { BorderedCell } from "./cells";
import { COLORS } from "../common";
import { MastermindLine } from "features/mastermind/types";

type Props = {
  line?: MastermindLine;
  index: number;
};

export function TileCell({ line, index }: Props) {
  const tilesIndex = line && line[index];
  const backgroundColor =
    tilesIndex !== undefined ? COLORS.tiles[tilesIndex] : undefined;
  return <BorderedCell sx={{ backgroundColor }} />;
}
