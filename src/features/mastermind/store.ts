import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  MastermindBoard,
  MastermindLine,
  MastermindTry,
  MastermindTile,
  MastermindState,
} from "./types";
import random from "random";

const DEFAULT_NUM_TILE_TYPES = 4;

const DEFAULT_LINE_WIDTH = 4;

const DEFAULT_NUM_TRIES = 12;

export const initialState: MastermindState = {
  numTileTypes: DEFAULT_NUM_TILE_TYPES,
  lineWidth: DEFAULT_LINE_WIDTH,
  numTries: DEFAULT_NUM_TRIES,
  currentPlay: [],
  finished: false,
  success: false,
};

export function generateTry(
  board: MastermindBoard,
  line: MastermindLine
): MastermindTry {
  const { answer } = board;
  let numCorrect = 0;
  let numClose = 0;

  // Determine which tiles are "correct" before determining which tiles are
  // "close". If an "answer" is already determined to be "correct" or "close",
  // it can not be determined to be the same for another tile.
  const assignedTile: Record<number, boolean> = {};
  const assignedAnswer: Record<number, boolean> = {};
  for (const i in line) {
    if (line[i] === answer[i]) {
      assignedTile[i] = true;
      assignedAnswer[i] = true;
      numCorrect++;
      continue;
    }
  }

  for (const i in line) {
    if (assignedTile[i]) {
      continue;
    }

    for (const j in answer) {
      if (i === j || assignedAnswer[j]) {
        continue;
      }

      if (line[i] === answer[j]) {
        assignedTile[i] = true;
        assignedAnswer[j] = true;
        numClose++;
        continue;
      }
    }
  }

  return { line, numCorrect, numClose };
}

export const mastermindSlice = createSlice({
  name: "mastermind",
  initialState,
  reducers: {
    initialize: (state) => {
      const answer: MastermindLine = [];
      for (let i = 0; i < state.lineWidth; i++) {
        answer.push(random.int(0, state.numTileTypes - 1));
      }

      state.board = {
        answer,
        board: [],
      };
      state.finished = false;
      state.success = false;
      state.currentPlay = [];
    },
    playTile: (state, action: PayloadAction<MastermindTile>) => {
      const tile = action.payload;
      const { board, currentPlay, lineWidth } = state;
      if (!board || currentPlay.length >= lineWidth) {
        return;
      }

      currentPlay.push(tile);
    },
    backPlayTile: (state) => {
      const { board, currentPlay } = state;
      if (!board || currentPlay.length === 0) {
        return;
      }

      currentPlay.pop();
    },
    playLine: (state) => {
      const line = state.currentPlay;
      if (!state.board || line.length !== state.lineWidth) {
        return;
      }

      for (const tile of line) {
        if (tile < 0 || tile >= state.numTileTypes) {
          return;
        }
      }

      const userTry = generateTry(state.board, line);
      state.board.board.push(userTry);
      state.currentPlay = [];
      if (userTry.numCorrect === state.lineWidth) {
        state.finished = true;
        state.success = true;
        return;
      }

      if (state.board.board.length >= state.numTries) {
        state.finished = true;
        state.success = false;
      }
    },
  },
});

export const store = mastermindSlice.reducer;
