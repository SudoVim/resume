import React from "react";
import { useSelector } from "react-redux";
import { TileButton } from "./tile";
import { BlankButton } from "./blank";
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

  return <BlankButton />;
}
