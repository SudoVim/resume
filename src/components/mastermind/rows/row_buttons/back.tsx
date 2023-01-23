import React from "react";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { BorderedCell } from "../cells";
import { actions } from "features";

export function BackButton() {
  const dispatch = useDispatch();

  return (
    <BorderedCell
      sx={{
        cursor: "pointer",
      }}
      onClick={() => {
        dispatch(actions.mastermind.backPlayTile());
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: 30,
            pb: "10px",
          }}
        >
          ←
        </Typography>
      </Box>
    </BorderedCell>
  );
}
