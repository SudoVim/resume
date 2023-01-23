import React from "react";
import { useDispatch } from "react-redux";
import { COLORS } from "../../common";
import { BorderedCell } from "../cells";
import { actions } from "features";

type Props = {
  index: number;
};

export function TileButton({ index }: Props) {
  const dispatch = useDispatch();

  return (
    <BorderedCell
      sx={{
        backgroundColor: COLORS.tiles[index],
        cursor: "pointer",
      }}
      onClick={() => {
        dispatch(actions.mastermind.playTile(index));
      }}
    />
  );
}
