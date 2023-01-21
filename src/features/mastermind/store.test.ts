import { initialState, store, mastermindSlice, generateTry } from "./store";
import random from "random";

jest.mock("random", () => {
  return {
    int: jest.fn(),
  };
});

describe("exercise the store mechanism", () => {
  const initialized = {
    board: {
      answer: [0, 1, 2, 3],
      board: [],
    },
    finished: false,
    lineWidth: 4,
    numTileTypes: 4,
    numTries: 12,
    success: false,
  };
  it("initializes the board from the empty state", () => {
    const state = initialState;
    random.int
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3);
    expect(store(state, mastermindSlice.actions.initialize())).toEqual(
      initialized
    );
  });
  it("initializes the board from a non-initialized state", () => {
    const state = {
      ...initialized,
      board: {
        ...initialized.board,
        board: [[3, 2, 1, 0]],
      },
    };
    random.int
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3);
    expect(store(state, mastermindSlice.actions.initialize())).toEqual(
      initialized
    );
  });
  it("ignores a line if the game board is not initialized", () => {
    const state = initialState;
    const line = [3, 2, 1, 0];
    expect(store(state, mastermindSlice.actions.playLine(line))).toEqual(state);
  });
  it("ignores a line if the correct number of tiles is not given", () => {
    const state = initialized;
    const line = [3, 2, 1];
    expect(store(state, mastermindSlice.actions.playLine(line))).toEqual(state);
  });
  it("ignores a line if an invalid tile is given", () => {
    const state = initialized;
    const line = [3, 2, 1, 8];
    expect(store(state, mastermindSlice.actions.playLine(line))).toEqual(state);
  });
  it("plays a line that does not end the game", () => {
    const state = initialized;
    const line = [3, 2, 1, 0];
    expect(store(state, mastermindSlice.actions.playLine(line))).toEqual({
      ...state,
      board: {
        ...state.board,
        board: [
          {
            line,
            numClose: 4,
            numCorrect: 0,
          },
        ],
      },
    });
  });
  it("plays a line that ends the game unsuccessfully", () => {
    const state = {
      ...initialized,
      numTries: 1,
    };
    const line = [3, 2, 1, 0];
    expect(store(state, mastermindSlice.actions.playLine(line))).toEqual({
      ...state,
      board: {
        ...state.board,
        board: [
          {
            line,
            numClose: 4,
            numCorrect: 0,
          },
        ],
      },
      finished: true,
    });
  });
  it("plays a line that ends the game successfully", () => {
    const state = initialized;
    const line = [0, 1, 2, 3];
    expect(store(state, mastermindSlice.actions.playLine(line))).toEqual({
      ...state,
      board: {
        ...state.board,
        board: [
          {
            line,
            numClose: 0,
            numCorrect: 4,
          },
        ],
      },
      finished: true,
      success: true,
    });
  });
});

describe("exercise the generateTry function", () => {
  it("matches no tiles", () => {
    const board = {
      answer: [0, 0, 0, 0],
      board: [],
    };
    const line = [1, 1, 1, 1];
    expect(generateTry(board, line)).toEqual({
      line,
      numClose: 0,
      numCorrect: 0,
    });
  });
  it("matches one tile but no close", () => {
    const board = {
      answer: [0, 1, 2, 3],
      board: [],
    };
    const line = [1, 1, 1, 1];
    expect(generateTry(board, line)).toEqual({
      line,
      numClose: 0,
      numCorrect: 1,
    });
  });
  it("has one tile that is close but no matches", () => {
    const board = {
      answer: [0, 1, 2, 2],
      board: [],
    };
    const line = [1, 3, 1, 1];
    expect(generateTry(board, line)).toEqual({
      line,
      numClose: 1,
      numCorrect: 0,
    });
  });
  it("matches all tiles", () => {
    const board = {
      answer: [0, 1, 2, 2],
      board: [],
    };
    const line = [0, 1, 2, 2];
    expect(generateTry(board, line)).toEqual({
      line,
      numClose: 0,
      numCorrect: 4,
    });
  });
  it('marks all tiles as "close"', () => {
    const board = {
      answer: [0, 1, 2, 2],
      board: [],
    };
    const line = [2, 2, 1, 0];
    expect(generateTry(board, line)).toEqual({
      line,
      numClose: 4,
      numCorrect: 0,
    });
  });
  it("mixes and matches", () => {
    const board = {
      answer: [0, 1, 2, 2],
      board: [],
    };
    const line = [3, 1, 2, 0];
    expect(generateTry(board, line)).toEqual({
      line,
      numClose: 1,
      numCorrect: 2,
    });
  });
});
