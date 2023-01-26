import React from "react";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { BorderedCell } from "../cells";
import { actions } from "features";

export function ResetCell() {
  const dispatch = useDispatch();
  return (
    <BorderedCell
      sx={{ cursor: "pointer" }}
      onClick={() => {
        dispatch(actions.mastermind.initialize());
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
            pr: "1px",
          }}
        >
          ⟲
        </Typography>
      </Box>
    </BorderedCell>
  );
}
