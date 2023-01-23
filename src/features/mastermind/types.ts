export type MastermindTile = number;

export type MastermindLine = MastermindTile[];

export type MastermindTry = {
  line: MastermindLine;
  numCorrect: number;
  numClose: number;
};

export type MastermindBoard = {
  answer: MastermindLine;
  board: MastermindTry[];
};

export type MastermindState = {
  numTileTypes: number;
  lineWidth: number;
  numTries: number;
  board?: MastermindBoard;
  currentPlay: MastermindLine;
  finished: boolean;
  success: boolean;
};
