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
