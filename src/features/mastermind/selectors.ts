import { MastermindState, MastermindBoard, MastermindTry } from "./types";

function selectMastermind(state: any): MastermindState {
  return state.mastermind;
}

function selectBoard(state: any): MastermindBoard | undefined {
  const mastermind = selectMastermind(state);
  return mastermind.board;
}

function selectUserTry(state: any, index: number): MastermindTry | undefined {
  const board = selectBoard(state);
  if (!board) {
    return undefined;
  }

  return board.board[index];
}

export const selectors = {
  mastermind: selectMastermind,
  board: selectBoard,
  userTry: selectUserTry,
};
