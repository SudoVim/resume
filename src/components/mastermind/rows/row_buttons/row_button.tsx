import React from "react";
import { useSelector } from "react-redux";
import { BlankCell } from "../cells";
import { TileButton } from "./tile";
import { BackButton } from "./back";
import { PlayButton } from "./play";
import { selectors } from "features";

type Props = {
  index: number;
};

export function RowButton({ index }: Props) {
  const mastermind = useSelector(selectors.mastermind.mastermind);

  const { numTries, numTileTypes } = mastermind;
  const diffFromEnd = numTries - index - 1;
  if (diffFromEnd < numTileTypes) {
    return <TileButton index={diffFromEnd} />;
  }

  if (diffFromEnd === numTileTypes) {
    return <BackButton />;
  }

  if (diffFromEnd === numTileTypes + 1) {
    return <PlayButton />;
  }

  return <BlankCell />;
}
